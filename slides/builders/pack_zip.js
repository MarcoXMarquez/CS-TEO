const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const staging = path.join(root, 'temp_zip_staging');
const zipOut = path.join(root, 'Entrega_Dashboard_y_Scripts_ISPySA.zip');

console.log('1. Cleaning staging...');
if (fs.existsSync(staging)) {
  fs.rmSync(staging, { recursive: true, force: true });
}
fs.mkdirSync(staging, { recursive: true });

console.log('2. Copying dashboard, bats, and guides...');
const rootFiles = [
  'dashboard_iso_salud.html',
  'DASHBOARD_EXPLANATION.md',
  'INSTRUCCIONES_PROFESOR.txt',
  '1_ABRIR_DASHBOARD_ISO.bat',
  '2_EJECUTAR_APP_STREAMLIT.bat',
  '3_EJECUTAR_PRUEBAS_UNITARIAS.bat'
];

for (const f of rootFiles) {
  const src = path.join(root, f);
  const dst = path.join(staging, f);
  fs.copyFileSync(src, dst);
}

console.log('3. Copying ISPySA-Pneumonia-main contents...');
const ispysaDir = path.join(root, 'ISPySA-Pneumonia-main');
fs.cpSync(ispysaDir, staging, { recursive: true });

console.log('4. Compressing archive with PowerShell...');
if (fs.existsSync(zipOut)) {
  fs.unlinkSync(zipOut);
}

const psCmd = `powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipOut}' -Force"`;
execSync(psCmd, { stdio: 'inherit' });

console.log('5. Checking ZIP file...');
const stat = fs.statSync(zipOut);
console.log(`SUCCESS! Archive created: ${zipOut}`);
console.log(`Archive Size: ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);

console.log('6. Cleaning up staging directory...');
fs.rmSync(staging, { recursive: true, force: true });
console.log('Done!');
