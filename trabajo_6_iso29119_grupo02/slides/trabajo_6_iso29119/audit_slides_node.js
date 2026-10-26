const { chromium } = require('../../codigo/tests_playwright/node_modules/@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  const htmlFile = path.join(__dirname, 'diapositivas_iso29119.html');
  const outDir = path.join(__dirname, 'audit_captures');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(String(err)));

  const fileUrl = 'file:///' + htmlFile.replace(/\\/g, '/');
  console.log(`Cargando presentación: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const totalSlides = await page.locator('.slide-item').count();
  console.log(`Auditando ${totalSlides} diapositivas a 1920x1080 nativo...`);

  const brokenImages = [];

  for (let idx = 0; idx < totalSlides; idx++) {
    await page.evaluate(`goToSlide(${idx})`);
    await page.waitForTimeout(400);

    const brokenInSlide = await page.evaluate(i => {
      const slide = document.querySelectorAll('.slide-item')[i];
      if (!slide) return [];
      const imgs = Array.from(slide.querySelectorAll('img'));
      return imgs
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.getAttribute('src')?.substring(0, 50) || 'sin-src');
    }, idx);

    if (brokenInSlide.length > 0) {
      brokenImages.push({ slide: idx + 1, broken: brokenInSlide });
    }

    const slideNum = String(idx + 1).padStart(2, '0');
    const outPath = path.join(outDir, `slide_${slideNum}.png`);
    await page.screenshot({ path: outPath });
    console.log(`  [OK] Capturada slide_${slideNum}.png`);
  }

  await browser.close();

  if (pageErrors.length > 0) {
    console.warn('[ADVERTENCIA] Errores JS:', pageErrors);
  }

  if (brokenImages.length > 0) {
    console.error('[ERROR] Imágenes rotas encontradas:', brokenImages);
    process.exit(1);
  }

  console.log(`\nAuditoría visual exitosa: ${totalSlides} diapositivas capturadas sin errores ni imágenes rotas en:\n${outDir}`);
})();
