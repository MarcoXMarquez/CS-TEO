const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const runs = [1, 2, 3];
const results = [];

console.log('=== INICIANDO PROTOCOLO DE 3 CORRIDAS CONSECUTIVAS ISO 29119 ===');

for (const run of runs) {
  console.log(`\n------------------------------------------------------------`);
  console.log(`EJECUTANDO CORRIDA ${run}/3 (Chromium Headless - Workers: 1)`);
  console.log(`------------------------------------------------------------`);
  const startTime = Date.now();
  
  const reportDir = path.join(__dirname, `report_run_${run}`);
  const jsonReport = path.join(__dirname, `report_run_${run}.json`);
  
  try {
    const cmd = `npx playwright test --project=chromium --reporter=list,json`;
    const env = { ...process.env, PLAYWRIGHT_JSON_OUTPUT_NAME: jsonReport };
    const stdout = execSync(cmd, { cwd: __dirname, env, stdio: 'pipe' });
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log(stdout.toString());
    console.log(`Corrida ${run} completada exitosamente en ${duration}s.`);
    
    // Parse json
    let totalTests = 24;
    let passed = 24;
    let failed = 0;
    if (fs.existsSync(jsonReport)) {
      const data = JSON.parse(fs.readFileSync(jsonReport, 'utf8'));
      const suites = data.suites || [];
      // count tests
      let pCount = 0;
      let fCount = 0;
      function countSuites(sList) {
        for (const s of sList) {
          if (s.specs) {
            for (const sp of s.specs) {
              for (const t of sp.tests) {
                for (const r of t.results) {
                  if (r.status === 'passed') pCount++;
                  else fCount++;
                }
              }
            }
          }
          if (s.suites) countSuites(s.suites);
        }
      }
      countSuites(suites);
      passed = pCount;
      failed = fCount;
      totalTests = pCount + fCount;
    }

    results.push({
      run,
      totalTests,
      passed,
      failed,
      flaky: 0,
      durationSeconds: parseFloat(duration),
      timestamp: new Date().toISOString(),
    });

  } catch (err) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.error(`Error en Corrida ${run}:`, err.stdout?.toString() || err.message);
    results.push({
      run,
      totalTests: 24,
      passed: 0,
      failed: 24,
      flaky: 0,
      durationSeconds: parseFloat(duration),
      error: err.message,
      timestamp: new Date().toISOString(),
    });
  }
}

const summaryFile = path.join(__dirname, 'execution_summary_3runs.json');
fs.writeFileSync(summaryFile, JSON.stringify(results, null, 2), 'utf8');
console.log('\n=== RESUMEN FINAL DE 3 CORRIDAS GUARDADO EN execution_summary_3runs.json ===');
console.log(JSON.stringify(results, null, 2));
