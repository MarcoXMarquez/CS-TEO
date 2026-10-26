// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Suite de Pruebas E2E: ISPySA-Pneumonia (Sistema de Vigilancia Sanitaria)
 * Conforme a Norma ISO/IEC/IEEE 29119 (Partes 2, 3, 4 y 5)
 * Grupo 02 - Calidad de Software UNSA 2026
 */

const BASE_URL = 'http://localhost:8501';

test.describe('ISPySA-Pneumonia - Especificación ISO 29119', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 35000 });
    // Esperar a que el banner institucional esté renderizado en el DOM
    await expect(page.locator('[data-testid="hero-banner"]')).toBeVisible({ timeout: 15000 });
  });

  // ============================================================================
  // REQUISITO R1: PARÁMETROS DE VIGILANCIA Y SEGMENTACIÓN DEMOGRÁFICA
  // ============================================================================

  test('T01 [R1] - Carga institucional y contexto por defecto en cohorte pediátrica (men5)', async ({ page }) => {
    const hero = page.locator('[data-testid="hero-banner"]');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Menores de 5 años (men5)');
    await expect(hero).toContainText('Nivel Nacional (Consolidado República del Perú)');

    // Verificar que existan las 4 tarjetas KPI
    await expect(page.locator('[data-testid="kpi-card-cases"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-card-rate"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-card-hr"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-card-cfr"]')).toBeVisible();
  });

  test('T02 [R1] - Transición interactiva a cohorte geriátrica (60mas) actualiza contexto', async ({ page }) => {
    const geriatricRadio = page.locator('label:has-text("Población Geriátrica: Adultos de 60 años a más (60mas)")');
    await geriatricRadio.click();

    const hero = page.locator('[data-testid="hero-banner"]');
    await expect(hero).toContainText('Adultos 60 años a más (60mas)', { timeout: 10000 });

    const cfrCard = page.locator('[data-testid="kpi-card-cfr"]');
    await expect(cfrCard).toBeVisible();
  });

  // ============================================================================
  // REQUISITO R2: SEMÁFORO DE ALERTA SANITARIA Y CANAL BORTMAN (OPS/MINSA)
  // ============================================================================

  test('T03 [R2] - Banner de alerta sanitaria canaliza estado según normativa Bortman OPS', async ({ page }) => {
    const alertBox = page.locator('[data-testid="bortman-alert"]');
    await expect(alertBox).toBeVisible();
    await expect(alertBox).toContainText('CANAL BORTMAN OPS:');
    await expect(alertBox).toContainText('Directiva OPS/MINSA:');
    await expect(alertBox).toContainText('Umbral Epidémico Q3:');
  });

  test('T04 [R2] - Pestaña I renderiza el Corredor Endémico de Bortman y tarjetas de cuartiles', async ({ page }) => {
    await page.getByText('I. Vigilancia Temporal y Tendencias').click();

    const bortmanTitle = page.locator('text=Canal Endémico de Bortman (Normativa Técnica OPS/MINSA)');
    await expect(bortmanTitle).toBeVisible();

    await expect(page.locator('text=Cuartil 1 (Éxito)')).toBeVisible();
    await expect(page.locator('text=Cuartil 2 (Mediana)')).toBeVisible();
    await expect(page.locator('text=Cuartil 3 (Alarma)')).toBeVisible();
    await expect(page.locator('text=Estado Actual')).toBeVisible();
  });

  // ============================================================================
  // REQUISITO R3: SEVERIDAD CLÍNICA Y MONITOR DE TRIAJE MANCHESTER
  // ============================================================================

  test('T05 [R3] - Pestaña II despliega evolución de tasas de hospitalización y letalidad', async ({ page }) => {
    await page.getByText('II. Severidad Clínica y Letalidad').click();

    const titleSev = page.locator('text=Dinámica de Severidad Clínica: Demanda Hospitalaria y Tasa de Letalidad');
    await expect(titleSev).toBeVisible();

    const plotDesc = page.locator('text=Cuadrante de Correlación: Presión Hospitalaria (HR) vs Letalidad (CFR)');
    await expect(plotDesc).toBeVisible();
  });

  test('T06 [R3] - Monitor de Triaje Manchester calcula recursos críticos (UCI y Oxígeno)', async ({ page }) => {
    await page.getByText('II. Severidad Clínica y Letalidad').click();

    const manchesterHeader = page.locator('text=Monitor de Triaje de Emergencias Manchester y Demanda Crítica (UCI / Oxígeno)');
    await expect(manchesterHeader).toBeVisible();

    await expect(page.locator('text=Demanda Proyectada Camas UCI')).toBeVisible();
    await expect(page.locator('text=Consumo Diario Oxígeno Medicinal')).toBeVisible();
    await expect(page.locator('text=Oxigenoterapia en Hospitalización')).toBeVisible();
    await expect(page.locator('text=Prioridades de Atención Clínica')).toBeVisible();
  });

  // ============================================================================
  // REQUISITO R4: ESTRATIFICACIÓN DEPARTAMENTAL Y MATRIZ BIOCLIMÁTICA
  // ============================================================================

  test('T07 [R4] - Pestaña III despliega persistencia departamental en el Top 3', async ({ page }) => {
    await page.getByText('III. Estratificación Departamental').click();

    const top3Title = page.locator('text=Persistencia en el Top 3 por tasa de incidencia');
    await expect(top3Title).toBeVisible();

    const freqHeader = page.locator('text=Departamentos con mayor frecuencia');
    await expect(freqHeader).toBeVisible();
  });

  test('T08 [R4] - Matriz Bioclimática estratifica departamentos por Heladas y Friaje', async ({ page }) => {
    await page.getByText('III. Estratificación Departamental').click();

    const bioTitle = page.locator('text=Matriz de Vulnerabilidad Bioclimática Regional (Heladas Altoandinas y Friaje Amazónico)');
    await expect(bioTitle).toBeVisible();

    await expect(page.locator('text=Top 5 Departamentos en Riesgo Bioclimático Crítico')).toBeVisible();
    await expect(page.locator('text=Heladas Altoandinas (Factor 1.35x)')).toBeVisible();
    await expect(page.locator('text=Friaje Amazónico (Factor 1.25x)')).toBeVisible();
  });

  // ============================================================================
  // REQUISITO R5: CONSISTENCIA ARITMÉTICA DEFENSIVA Y TOLERANCIAS
  // ============================================================================

  test('T09 [R5] - Consistencia aritmética en la Tasa de Hospitalización (HR)', async ({ page }) => {
    const hrCard = page.locator('[data-testid="kpi-card-hr"]');
    const hrValueText = await hrCard.locator('.kpi-value').textContent();
    const hrSubtext = await hrCard.locator('div:has-text("internamientos")').first().textContent();

    const hrReported = parseFloat(hrValueText?.replace('%', '') || '0');
    const hospCount = parseInt(hrSubtext?.replace(/[^0-9]/g, '') || '0', 10);

    const casesCard = page.locator('[data-testid="kpi-card-cases"]');
    const casesText = await casesCard.locator('.kpi-value').textContent();
    const casesCount = parseInt(casesText?.replace(/[^0-9]/g, '') || '1', 10);

    const hrCalculated = (hospCount / casesCount) * 100;
    expect(Math.abs(hrReported - hrCalculated)).toBeLessThanOrEqual(0.05);
  });

  test('T10 [R5] - Consistencia aritmética en la Tasa de Letalidad (CFR)', async ({ page }) => {
    const cfrCard = page.locator('[data-testid="kpi-card-cfr"]');
    const cfrValueText = await cfrCard.locator('.kpi-value').textContent();
    const cfrSubtext = await cfrCard.locator('div:has-text("defunciones")').first().textContent();

    const cfrReported = parseFloat(cfrValueText?.replace('%', '') || '0');
    const deathCount = parseInt(cfrSubtext?.replace(/[^0-9]/g, '') || '0', 10);

    const casesCard = page.locator('[data-testid="kpi-card-cases"]');
    const casesText = await casesCard.locator('.kpi-value').textContent();
    const casesCount = parseInt(casesText?.replace(/[^0-9]/g, '') || '1', 10);

    const cfrCalculated = (deathCount / casesCount) * 100;
    expect(Math.abs(cfrReported - cfrCalculated)).toBeLessThanOrEqual(0.05);
  });

  // ============================================================================
  // REQUISITO R6: MODELOS PREDICTIVOS Y CUMPLIMIENTO ISO 9241
  // ============================================================================

  test('T11 [R6] - Pestaña IV despliega métricas de precisión ML y modelo óptimo', async ({ page }) => {
    await page.getByText('IV. Modelos Predictivos').click();

    const bestModelBox = page.locator('text=Modelo con Desempeño Óptimo');
    await expect(bestModelBox).toBeVisible();
    await expect(page.locator('text=XGBoost').first()).toBeVisible();
    await expect(page.locator('text=Evaluación histórica: horizonte de 4 semanas')).toBeVisible();
  });

  test('T12 [R6] - Pestaña V contiene matriz de cumplimiento ISO 9241 e ISO/IEC 25010', async ({ page }) => {
    await page.getByText('V. Auditoría de Calidad').click();

    const qualityTitle = page.locator('text=Matriz de Trazabilidad y Cumplimiento Normativo ISO 9241 e ISO/IEC 25010');
    await expect(qualityTitle).toBeVisible();

    await expect(page.locator('text=ISO 9241-11').first()).toBeVisible();
    await expect(page.locator('text=ISO 9241-210').first()).toBeVisible();
    await expect(page.locator('text=ISO 9241-110').first()).toBeVisible();
    await expect(page.locator('text=ISO 9241-12').first()).toBeVisible();
    await expect(page.locator('text=ISO/IEC 25010').first()).toBeVisible();
  });

});
