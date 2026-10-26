const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  const assetsDir = path.join(__dirname, '..', '..', 'slides', 'trabajo_6_iso29119', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 860 },
    deviceScaleFactor: 2,
  });

  console.log('Iniciando captura precisa con scroll a los componentes clínicos...');

  const page1 = await context.newPage();
  await page1.goto('http://localhost:8501', { waitUntil: 'networkidle', timeout: 35000 });
  await page1.waitForTimeout(2000);

  // 1. ISPySA Tab I: Scroll exacto al Canal Endémico de Bortman
  await page1.getByText('I. Vigilancia Temporal y Tendencias').click();
  const bortmanHeader = page1.locator('text=Canal Endémico de Bortman (Normativa Técnica OPS/MINSA)');
  await bortmanHeader.scrollIntoViewIfNeeded();
  await page1.waitForTimeout(2500);
  const p1Path = path.join(assetsDir, 'evidencia_ispysa_bortman.png');
  await page1.screenshot({ path: p1Path, fullPage: false });
  console.log('Capturada con éxito (Bortman Corredor):', p1Path);

  // 2. ISPySA Tab II: Scroll exacto al Monitor de Triaje Manchester y Camas UCI
  await page1.getByText('II. Severidad Clínica y Letalidad').click();
  const manchesterHeader = page1.locator('text=Monitor de Triaje de Emergencias Manchester y Demanda Crítica (UCI / Oxígeno)');
  await manchesterHeader.scrollIntoViewIfNeeded();
  await page1.waitForTimeout(2500);
  const p2Path = path.join(assetsDir, 'evidencia_ispysa_manchester.png');
  await page1.screenshot({ path: p2Path, fullPage: false });
  console.log('Capturada con éxito (Triaje Manchester):', p2Path);

  // 3. ISPySA Tab III: Scroll exacto a la Matriz Bioclimática Regional
  await page1.getByText('III. Estratificación Departamental').click();
  const bioHeader = page1.locator('text=Matriz de Vulnerabilidad Bioclimática Regional (Heladas Altoandinas y Friaje Amazónico)');
  await bioHeader.scrollIntoViewIfNeeded();
  await page1.waitForTimeout(2500);
  const p3Path = path.join(assetsDir, 'evidencia_ispysa_bioclimatica.png');
  await page1.screenshot({ path: p3Path, fullPage: false });
  console.log('Capturada con éxito (Matriz Bioclimática):', p3Path);

  // 4. SauceDemo: Overview Checkout
  const page2 = await context.newPage();
  await page2.goto('https://www.saucedemo.com', { waitUntil: 'networkidle' });
  await page2.locator('[data-test="username"]').fill('standard_user');
  await page2.locator('[data-test="password"]').fill('secret_sauce');
  await page2.locator('[data-test="login-button"]').click();
  await page2.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page2.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page2.locator('[data-test="shopping-cart-link"]').click();
  await page2.locator('[data-test="checkout"]').click();
  await page2.locator('[data-test="firstName"]').fill('Marco');
  await page2.locator('[data-test="lastName"]').fill('Marquez');
  await page2.locator('[data-test="postalCode"]').fill('04001');
  await page2.locator('[data-test="continue"]').click();
  await page2.waitForTimeout(1000);
  const p4Path = path.join(assetsDir, 'evidencia_saucedemo_checkout.png');
  await page2.screenshot({ path: p4Path, fullPage: false });
  console.log('Capturada con éxito (SauceDemo Checkout):', p4Path);

  // 5. Playwright Report HTML: Captura de la vista de resumen con 24 tests
  const reportHtml = path.join(__dirname, 'playwright-report', 'index.html');
  if (fs.existsSync(reportHtml)) {
    const page3 = await context.newPage();
    await page3.goto('file:///' + reportHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
    await page3.waitForTimeout(1500);
    const p5Path = path.join(assetsDir, 'evidencia_playwright_report.png');
    await page3.screenshot({ path: p5Path, fullPage: false });
    console.log('Capturada con éxito (Reporte Playwright):', p5Path);
  }

  await browser.close();
  console.log('Evidencias capturadas con precisión de scroll!');
})();
