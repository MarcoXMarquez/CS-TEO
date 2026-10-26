// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  timeout: 45000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: false,
  workers: 1, // Determinismo estricto para evitar condiciones de carrera y flakiness
  retries: 0, // Cero reintentos conforme a métrica de reproducibilidad ISO 29119
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results.json' }],
  ],
  use: {
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    trace: 'on',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
