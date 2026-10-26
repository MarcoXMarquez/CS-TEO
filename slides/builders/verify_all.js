const fs = require('fs');
const path = require('path');

function verifyFile(filename, expectedSlides) {
  const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  console.log(`Checking ${filename}...`);
  
  if (expectedSlides) {
    for (let i = 0; i < expectedSlides; i++) {
      if (!content.includes(`id="slide-${i}"`)) {
        console.error(`❌ Missing slide-${i} in ${filename}`);
        return false;
      }
    }
    console.log(`✓ All ${expectedSlides} slide elements present in ${filename}`);
  }
  
  // Check image src
  const imgMatches = content.match(/src="([^"]+)"/g) || [];
  for (const match of imgMatches) {
    const src = match.replace('src="', '').replace('"', '');
    if (!src.startsWith('http')) {
      const fullPath = path.join(__dirname, src);
      if (!fs.existsSync(fullPath)) {
        console.error(`❌ Image not found: ${src} in ${filename}`);
        return false;
      }
    }
  }
  console.log(`✓ All local images exist for ${filename}`);
  return true;
}

const v1 = verifyFile('diapositivas_equipo.html', 12);
const v2 = verifyFile('enunciado_solucion.html', 14);
const v3 = verifyFile('index.html', null);

if (v1 && v2 && v3) {
  console.log('\n🎉 ALL FILES VERIFIED SUCCESSFULLY! Everything is in place.');
} else {
  console.error('\n⚠️ Verification failed.');
  process.exit(1);
}
