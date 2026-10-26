# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codigo\tests_playwright\tests_ispysa\ispysa.spec.js >> ISPySA-Pneumonia - Especificación ISO 29119 >> T04 [R2] - Pestaña I renderiza el Corredor Endémico de Bortman y tarjetas de cuartiles
- Location: codigo\tests_playwright\tests_ispysa\ispysa.spec.js:63:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[role="tab"]').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
    - /url: "#stMain"
  - region "Sidebar" [ref=e4]:
    - generic [ref=e9]:
      - heading "Parámetros de Vigilancia" [level=3] [ref=e14]
      - paragraph [ref=e19]: Configuración del contexto de análisis epidemiológico (ISO 9241-210)
      - generic [ref=e21]:
        - generic [ref=e22]:
          - paragraph [ref=e25]: "Grupo Poblacional Objetivo:"
          - button "Help for Grupo Poblacional Objetivo:" [ref=e29] [cursor=pointer]
        - radiogroup "Grupo Poblacional Objetivo:" [ref=e33]:
          - generic [ref=e35] [cursor=pointer]:
            - 'radio "Población Pediátrica: Menores de 5 años (men5)" [checked] [ref=e37]'
            - paragraph [ref=e42]: "Población Pediátrica: Menores de 5 años (men5)"
          - generic [ref=e44] [cursor=pointer]:
            - 'radio "Población Geriátrica: Adultos de 60 años a más (60mas)" [ref=e46]'
            - paragraph [ref=e50]: "Población Geriátrica: Adultos de 60 años a más (60mas)"
      - generic [ref=e52]:
        - generic [ref=e53]:
          - paragraph [ref=e56]: "Ámbito Territorial:"
          - button "Help for Ámbito Territorial:" [ref=e60] [cursor=pointer]
        - group [ref=e65]:
          - combobox "Ámbito Territorial:" [ref=e66]: Nacional (Consolidado)
          - button "Open" [ref=e67] [cursor=pointer]
      - generic [ref=e73]:
        - generic [ref=e74]:
          - paragraph [ref=e77]: "Período de Análisis (Años):"
          - button "Help for Período de Análisis (Años):" [ref=e81] [cursor=pointer]
        - group "Período de Análisis (Años):" [ref=e85]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - 'slider "Período de Análisis (Años): — start Período de Análisis (Años):" [ref=e89]': "2000"
              - generic:
                - generic:
                  - paragraph: "2000"
            - generic [ref=e90]:
              - 'slider "Período de Análisis (Años): — end Período de Análisis (Años):" [ref=e92]': "2023"
              - generic:
                - generic:
                  - paragraph: "2023"
            - generic:
              - generic:
                - paragraph: "2000"
              - generic:
                - paragraph: "2023"
      - separator [ref=e97]
      - heading "Marco de Calidad del Software" [level=4] [ref=e102]
      - paragraph [ref=e107]: "• ISO 9241-11: Medición de Usabilidad"
      - paragraph [ref=e112]: "• ISO 9241-210: Diseño Centrado en el Humano"
      - paragraph [ref=e117]: "• ISO 9241-110: Principios de Diálogo"
      - paragraph [ref=e122]: "• ISO 9241-12: Representación Visual de Información"
      - paragraph [ref=e127]: "• ISO/IEC 25010: Calidad del Producto Software"
      - separator [ref=e132]
      - paragraph [ref=e137]: "Curso: Calidad de Software"
      - paragraph [ref=e142]: "Modalidad: Equipo de 05 Integrantes"
      - paragraph [ref=e147]: "Fecha Oficial: Martes 01 de noviembre"
  - generic [ref=e150]:
    - banner [ref=e151]:
      - generic [ref=e154]:
        - button "Deploy" [ref=e156] [cursor=pointer]
        - button "Main menu" [ref=e160] [cursor=pointer]
    - main [ref=e164]:
      - generic [ref=e166]:
        - generic [ref=e171]:
          - generic [ref=e172]: SISTEMA DE VIGILANCIA SANITARIA • NORMATIVA ISO 9241 COMPLIANT
          - generic [ref=e173]: Plataforma de Monitoreo y Vigilancia Epidemiológica de Infecciones Respiratorias Agudas
          - generic [ref=e174]:
            - text: "Ámbito:"
            - strong [ref=e175]: Nivel Nacional (Consolidado República del Perú)
            - text: "| Población:"
            - strong [ref=e176]: Menores de 5 años (men5)
            - text: "| Período Evaluado:"
            - strong [ref=e177]: 2000 - 2023
        - generic [ref=e182]:
          - generic [ref=e183]:
            - generic [ref=e184]: Consulta seleccionada
            - strong [ref=e185]: Nivel Nacional (Consolidado República del Perú)
            - text: Menores de 5 años (men5)
          - generic [ref=e186]:
            - generic [ref=e187]: Período histórico
            - text: Series de
            - strong [ref=e188]: 2000 a 2023
            - text: ". Las tarjetas muestran el último año disponible:"
            - strong [ref=e189]: "2023"
            - text: .
          - generic [ref=e190]:
            - generic [ref=e191]: Modelos nacionales
            - text: Evaluación a
            - strong [ref=e192]: 4 semanas
            - text: y proyección a
            - strong [ref=e193]: 52 semanas
            - text: . Resultados precalculados, independientes del filtro territorial y temporal.
        - generic [ref=e198]:
          - generic [ref=e199]: "[CANAL BORTMAN OPS: ZONA DE SEGURIDAD / COMPORTAMIENTO ESPERADO]"
          - generic [ref=e200]:
            - text: "Tasa actual:"
            - strong [ref=e201]: 94.4 por 100k hab.
            - text: "(Umbral Epidémico Q3:"
            - strong [ref=e202]: "173.8"
            - text: "| Mediana Q2:"
            - strong [ref=e203]: "108.8"
            - text: "| Cuartil Éxito Q1:"
            - strong [ref=e204]: "85.1"
            - text: ).
            - emphasis [ref=e205]: "Directiva OPS/MINSA:"
            - text: Incidencia dentro del rango normal esperado para la serie temporal. Mantener vigilancia centinela de rutina.
        - generic [ref=e207]:
          - generic [ref=e214]:
            - generic [ref=e215]: Casos Diagnosticados (2023)
            - generic [ref=e216]: 31,846
            - generic [ref=e217]: +46.0% vs. 2022
            - generic [ref=e218]: Total anual registrado
          - generic [ref=e225]:
            - generic [ref=e226]: Tasa Incidencia x 100k hab.
            - generic [ref=e227]: "94.4"
            - generic [ref=e228]: +29.1 puntos vs. 2022
            - generic [ref=e229]: (Casos / Población) × 100,000
          - generic [ref=e236]:
            - generic [ref=e237]: Tasa de Hospitalización (HR)
            - generic [ref=e238]: 31.25%
            - generic [ref=e239]: 9,952 internamientos
            - generic [ref=e240]: (Hospitalizados / Casos) × 100
          - generic [ref=e247]:
            - generic [ref=e248]: Tasa de Letalidad (CFR)
            - generic [ref=e249]: 0.78%
            - generic [ref=e250]: 247 defunciones
            - generic [ref=e251]: (Defunciones / Casos) × 100
        - paragraph [ref=e258]: Las variaciones usan el año anterior del mismo ámbito y grupo, aunque esté fuera del intervalo visible. Sin datos previos no se calcula la variación; con cero casos previos no se calcula el porcentaje.
        - generic [ref=e259]:
          - generic [ref=e260]:
            - tablist [ref=e261]:
              - tab [selected] [ref=e262] [cursor=pointer]:
                - paragraph [ref=e264]: I. Vigilancia Temporal y Tendencias
              - tab [ref=e266] [cursor=pointer]:
                - paragraph [ref=e268]: II. Severidad Clínica y Letalidad (HR / CFR)
              - tab [ref=e269] [cursor=pointer]:
                - paragraph [ref=e271]: III. Estratificación Departamental y Carga Regional
              - tab [ref=e272] [cursor=pointer]:
                - paragraph [ref=e274]: IV. Modelos Predictivos y Proyecciones (ML / DL)
              - tab [ref=e275] [cursor=pointer]:
                - paragraph [ref=e277]: V. Auditoría de Calidad y Estándares ISO 9241
            - tabpanel "I. Vigilancia Temporal y Tendencias" [ref=e278]:
              - generic [ref=e279]:
                - heading "Tendencia Histórica Anual — Nivel Nacional (Consolidado República del Perú)" [level=4] [ref=e285]:
                  - text: Tendencia Histórica Anual — Nivel Nacional (Consolidado República del Perú)
                  - generic [ref=e286]:
                    - link "Link to heading":
                      - /url: "#tendencia-historica-anual-nivel-nacional-consolidado-republica-del-peru"
                - generic [ref=e294]:
                  - paragraph [ref=e298]: "Seleccionar Indicador:"
                  - group [ref=e300]:
                    - combobox "Seleccionar Indicador:" [ref=e301]: Tasa de Incidencia x 100k hab.
                    - button "Open" [ref=e302] [cursor=pointer]
                - generic [ref=e311]:
                  - img:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "2000"
                          - generic: "2002"
                          - generic: "2004"
                          - generic: "2006"
                          - generic: "2008"
                          - generic: "2010"
                          - generic: "2012"
                          - generic: "2014"
                          - generic: "2016"
                          - generic: "2018"
                          - generic: "2020"
                          - generic: "2022"
                          - generic: "2024"
                        - generic:
                          - generic: "50"
                          - generic: "100"
                          - generic: "150"
                          - generic: "200"
                          - generic: "250"
                          - generic: "300"
                  - img:
                    - generic:
                      - generic: "Serie Temporal Retrospectiva: Tasa de Incidencia x 100k hab. (2000 - 2023)"
                      - generic: Año Epidemiológico
                      - generic: Tasa de Incidencia x 100k hab.
                  - toolbar [ref=e325]:
                    - button "Download plot as a PNG" [ref=e327] [cursor=pointer]
                    - generic [ref=e330]:
                      - button "Zoom" [ref=e331] [cursor=pointer]
                      - button "Pan" [ref=e334] [cursor=pointer]
                    - generic [ref=e337]:
                      - button "Zoom in" [ref=e338] [cursor=pointer]
                      - button "Zoom out" [ref=e341] [cursor=pointer]
                      - button "Autoscale" [ref=e344] [cursor=pointer]
                      - button "Reset axes" [ref=e347] [cursor=pointer]
                    - button "Fullscreen" [ref=e351] [cursor=pointer]
                - group [ref=e356]:
                  - generic [ref=e358] [cursor=pointer]:
                    - generic [aria-hidden] [ref=e360]: keyboard_arrow_right
                    - paragraph [ref=e363]: Tabla de Datos Retrospectivos y Exportación
                - separator [ref=e368]
                - heading "Canal Endémico de Bortman (Normativa Técnica OPS/MINSA) — Nivel Nacional (Consolidado República del Perú)" [level=4] [ref=e374]:
                  - text: Canal Endémico de Bortman (Normativa Técnica OPS/MINSA) — Nivel Nacional (Consolidado República del Perú)
                  - generic [ref=e375]:
                    - link "Link to heading":
                      - /url: "#canal-endemico-de-bortman-normativa-tecnica-ops-minsa-nivel-nacional-consolidado-republica-del-peru"
                - paragraph [ref=e380]: "Herramienta canónica de epidemiología para delimitar zonas de comportamiento: Éxito (<Q1), Seguridad (Q1-Q2), Alarma (Q2-Q3) y Epidemia (>=Q3)."
                - generic [ref=e386]:
                  - img:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "2000"
                          - generic: "2005"
                          - generic: "2010"
                          - generic: "2015"
                          - generic: "2020"
                        - generic:
                          - generic: "0"
                          - generic: "50"
                          - generic: "100"
                          - generic: "150"
                          - generic: "200"
                          - generic: "250"
                          - generic: "300"
                          - generic: "350"
                  - img:
                    - generic:
                      - generic [ref=e403]:
                        - generic [ref=e404]:
                          - generic [ref=e405]: Q3 Umbral Epidémico (173.8)
                          - generic [ref=e406] [cursor=pointer]
                        - generic [ref=e407]:
                          - generic [ref=e408]: Q2 Mediana Histórica (108.8)
                          - generic [ref=e409] [cursor=pointer]
                        - generic [ref=e410]:
                          - generic [ref=e411]: Q1 Límite de Éxito (85.1)
                          - generic [ref=e412] [cursor=pointer]
                        - generic [ref=e413]:
                          - generic [ref=e414]: Incidencia Observada
                          - generic [ref=e419] [cursor=pointer]
                      - generic: "Corredor Endémico de Bortman: Zonas Epidemiológicas y Desempeño Histórico"
                      - generic: Año Epidemiológico
                      - generic: Tasa de Incidencia x 100k hab.
                  - toolbar [ref=e420]:
                    - button "Download plot as a PNG" [ref=e422] [cursor=pointer]
                    - generic [ref=e425]:
                      - button "Zoom" [ref=e426] [cursor=pointer]
                      - button "Pan" [ref=e429] [cursor=pointer]
                    - generic [ref=e432]:
                      - button "Zoom in" [ref=e433] [cursor=pointer]
                      - button "Zoom out" [ref=e436] [cursor=pointer]
                      - button "Autoscale" [ref=e439] [cursor=pointer]
                      - button "Reset axes" [ref=e442] [cursor=pointer]
                    - button "Fullscreen" [ref=e446] [cursor=pointer]
                - generic [ref=e450]:
                  - generic [ref=e457]:
                    - generic [ref=e458]: Cuartil 1 (Éxito)
                    - generic [ref=e459]: "85.1"
                    - generic [ref=e460]: Incidencia mínima esperada
                  - generic [ref=e467]:
                    - generic [ref=e468]: Cuartil 2 (Mediana)
                    - generic [ref=e469]: "108.8"
                    - generic [ref=e470]: Límite zona seguridad
                  - generic [ref=e477]:
                    - generic [ref=e478]: Cuartil 3 (Alarma)
                    - generic [ref=e479]: "173.8"
                    - generic [ref=e480]: Umbral epidémico superior
                  - generic [ref=e487]:
                    - generic [ref=e488]: Estado Actual (2023)
                    - generic [ref=e489]: Zona de Seguridad
                    - generic [ref=e490]: 94.4 x 100k hab.
          - button "Scroll tabs right" [ref=e491] [cursor=pointer]
        - generic [ref=e499]:
          - generic [ref=e500]: Ficha Técnica Epidemiológica y Metodología Normada (MINSA / OMS)
          - generic [ref=e501]:
            - text: •
            - strong [ref=e502]: "Tasa de Incidencia Estandarizada:"
            - code [ref=e503]: (Casos / Población) × 100,000 hab.
            - text: (Ajustada por interpolación exponencial censal anual 2000–2023). •
            - strong [ref=e504]: "Tasa de Hospitalización (HR):"
            - code [ref=e505]: (Hospitalizaciones / Casos) × 100
            - text: (Índice de demanda y presión hospitalaria). •
            - strong [ref=e506]: "Tasa de Letalidad (CFR):"
            - code [ref=e507]: (Defunciones / Casos) × 100
            - text: (Proporción de mortalidad en casos diagnosticados). •
            - strong [ref=e508]: "Bandas Aproximadas de Incertidumbre:"
            - code [ref=e509]: Pronóstico ± 1.96 × RMSE
            - text: (Límite inferior en cero; cobertura a 52 semanas no verificada).
        - paragraph [ref=e519]: Plataforma de Vigilancia Epidemiológica de Salud Pública © 2026 — Diseñada bajo Estándares ISO 9241 e ISO/IEC 25010
```

# Test source

```ts
  1   | // @ts-check
  2   | const { test, expect } = require('@playwright/test');
  3   | 
  4   | /**
  5   |  * Suite de Pruebas E2E: ISPySA-Pneumonia (Sistema de Vigilancia Sanitaria)
  6   |  * Conforme a Norma ISO/IEC/IEEE 29119 (Partes 2, 3, 4 y 5)
  7   |  * Grupo 02 - Calidad de Software UNSA 2026
  8   |  */
  9   | 
  10  | const BASE_URL = 'http://localhost:8501';
  11  | 
  12  | test.describe('ISPySA-Pneumonia - Especificación ISO 29119', () => {
  13  | 
  14  |   test.beforeEach(async ({ page }) => {
  15  |     await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 35000 });
  16  |     // Esperar a que el título institucional y los tabs estén en el DOM
  17  |     await expect(page.locator('text=Plataforma de Monitoreo y Vigilancia Epidemiológica')).toBeVisible({ timeout: 15000 });
  18  |   });
  19  | 
  20  |   // ============================================================================
  21  |   // REQUISITO R1: PARÁMETROS DE VIGILANCIA Y SEGMENTACIÓN DEMOGRÁFICA
  22  |   // ============================================================================
  23  | 
  24  |   test('T01 [R1] - Carga institucional y contexto por defecto en cohorte pediátrica (men5)', async ({ page }) => {
  25  |     const hero = page.locator('[data-testid="hero-banner"]');
  26  |     await expect(hero).toBeVisible();
  27  |     await expect(hero).toContainText('Menores de 5 años (men5)');
  28  |     await expect(hero).toContainText('Nivel Nacional (Consolidado República del Perú)');
  29  | 
  30  |     // Verificar que existan las 4 tarjetas KPI
  31  |     await expect(page.locator('[data-testid="kpi-card-cases"]')).toBeVisible();
  32  |     await expect(page.locator('[data-testid="kpi-card-rate"]')).toBeVisible();
  33  |     await expect(page.locator('[data-testid="kpi-card-hr"]')).toBeVisible();
  34  |     await expect(page.locator('[data-testid="kpi-card-cfr"]')).toBeVisible();
  35  |   });
  36  | 
  37  |   test('T02 [R1] - Transición interactiva a cohorte geriátrica (60mas) actualiza contexto', async ({ page }) => {
  38  |     // Seleccionar radio button de adultos mayores en la barra lateral
  39  |     const geriatricRadio = page.locator('label:has-text("Población Geriátrica: Adultos de 60 años a más (60mas)")');
  40  |     await geriatricRadio.click();
  41  | 
  42  |     // Esperar a que Streamlit actualice la vista
  43  |     const hero = page.locator('[data-testid="hero-banner"]');
  44  |     await expect(hero).toContainText('Adultos 60 años a más (60mas)', { timeout: 10000 });
  45  | 
  46  |     // Verificar que la tasa de letalidad CFR de adultos mayores sea visible
  47  |     const cfrCard = page.locator('[data-testid="kpi-card-cfr"]');
  48  |     await expect(cfrCard).toBeVisible();
  49  |   });
  50  | 
  51  |   // ============================================================================
  52  |   // REQUISITO R2: SEMÁFORO DE ALERTA SANITARIA Y CANAL BORTMAN (OPS/MINSA)
  53  |   // ============================================================================
  54  | 
  55  |   test('T03 [R2] - Banner de alerta sanitaria canaliza estado según normativa Bortman OPS', async ({ page }) => {
  56  |     const alertBox = page.locator('[data-testid="bortman-alert"]');
  57  |     await expect(alertBox).toBeVisible();
  58  |     await expect(alertBox).toContainText('CANAL BORTMAN OPS:');
  59  |     await expect(alertBox).toContainText('Directiva OPS/MINSA:');
  60  |     await expect(alertBox).toContainText('Umbral Epidémico Q3:');
  61  |   });
  62  | 
  63  |   test('T04 [R2] - Pestaña I renderiza el Corredor Endémico de Bortman y tarjetas de cuartiles', async ({ page }) => {
  64  |     // Clic en Tab I
> 65  |     await page.locator('button[role="tab"]').nth(0).click();
      |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  66  | 
  67  |     // Verificar subtítulo del Canal de Bortman
  68  |     const bortmanTitle = page.locator('text=Canal Endémico de Bortman (Normativa Técnica OPS/MINSA)');
  69  |     await expect(bortmanTitle).toBeVisible();
  70  | 
  71  |     // Verificar las 4 tarjetas de cuartiles
  72  |     await expect(page.locator('text=Cuartil 1 (Éxito)')).toBeVisible();
  73  |     await expect(page.locator('text=Cuartil 2 (Mediana)')).toBeVisible();
  74  |     await expect(page.locator('text=Cuartil 3 (Alarma)')).toBeVisible();
  75  |     await expect(page.locator('text=Estado Actual (2023)')).toBeVisible();
  76  |   });
  77  | 
  78  |   // ============================================================================
  79  |   // REQUISITO R3: SEVERIDAD CLÍNICA Y MONITOR DE TRIAJE MANCHESTER
  80  |   // ============================================================================
  81  | 
  82  |   test('T05 [R3] - Pestaña II despliega evolución de tasas de hospitalización y letalidad', async ({ page }) => {
  83  |     await page.locator('button[role="tab"]').nth(1).click();
  84  | 
  85  |     const titleSev = page.locator('text=Dinámica de Severidad Clínica: Demanda Hospitalaria y Tasa de Letalidad');
  86  |     await expect(titleSev).toBeVisible();
  87  | 
  88  |     const plotDesc = page.locator('text=Cuadrante de Correlación: Presión Hospitalaria (HR) vs Letalidad (CFR)');
  89  |     await expect(plotDesc).toBeVisible();
  90  |   });
  91  | 
  92  |   test('T06 [R3] - Monitor de Triaje Manchester calcula recursos críticos (UCI y Oxígeno)', async ({ page }) => {
  93  |     await page.locator('button[role="tab"]').nth(1).click();
  94  | 
  95  |     const manchesterHeader = page.locator('text=Monitor de Triaje de Emergencias Manchester y Demanda Crítica (UCI / Oxígeno)');
  96  |     await expect(manchesterHeader).toBeVisible();
  97  | 
  98  |     await expect(page.locator('text=Demanda Proyectada Camas UCI')).toBeVisible();
  99  |     await expect(page.locator('text=Consumo Diario Oxígeno Medicinal')).toBeVisible();
  100 |     await expect(page.locator('text=Oxigenoterapia en Hospitalización')).toBeVisible();
  101 |     await expect(page.locator('text=Prioridades de Atención Clínica')).toBeVisible();
  102 |   });
  103 | 
  104 |   // ============================================================================
  105 |   // REQUISITO R4: ESTRATIFICACIÓN DEPARTAMENTAL Y MATRIZ BIOCLIMÁTICA
  106 |   // ============================================================================
  107 | 
  108 |   test('T07 [R4] - Pestaña III despliega persistencia departamental en el Top 3', async ({ page }) => {
  109 |     await page.locator('button[role="tab"]').nth(2).click();
  110 | 
  111 |     const top3Title = page.locator('text=Persistencia en el Top 3 por tasa de incidencia');
  112 |     await expect(top3Title).toBeVisible();
  113 | 
  114 |     const freqHeader = page.locator('text=Departamentos con mayor frecuencia');
  115 |     await expect(freqHeader).toBeVisible();
  116 |   });
  117 | 
  118 |   test('T08 [R4] - Matriz Bioclimática estratifica departamentos por Heladas y Friaje', async ({ page }) => {
  119 |     await page.locator('button[role="tab"]').nth(2).click();
  120 | 
  121 |     const bioTitle = page.locator('text=Matriz de Vulnerabilidad Bioclimática Regional (Heladas Altoandinas y Friaje Amazónico)');
  122 |     await expect(bioTitle).toBeVisible();
  123 | 
  124 |     await expect(page.locator('text=Top 5 Departamentos en Riesgo Bioclimático Crítico')).toBeVisible();
  125 |     await expect(page.locator('text=Heladas Altoandinas (Factor 1.35x)')).toBeVisible();
  126 |     await expect(page.locator('text=Friaje Amazónico (Factor 1.25x)')).toBeVisible();
  127 |   });
  128 | 
  129 |   // ============================================================================
  130 |   // REQUISITO R5: CONSISTENCIA ARITMÉTICA DEFENSIVA Y TOLERANCIAS
  131 |   // ============================================================================
  132 | 
  133 |   test('T09 [R5] - Consistencia aritmética en la Tasa de Hospitalización (HR)', async ({ page }) => {
  134 |     const hrCard = page.locator('[data-testid="kpi-card-hr"]');
  135 |     const hrValueText = await hrCard.locator('.kpi-value').textContent();
  136 |     const hrSubtext = await hrCard.locator('div:has-text("internamientos")').textContent();
  137 | 
  138 |     const hrReported = parseFloat(hrValueText?.replace('%', '') || '0');
  139 |     const hospCount = parseInt(hrSubtext?.replace(/[^0-9]/g, '') || '0', 10);
  140 | 
  141 |     const casesCard = page.locator('[data-testid="kpi-card-cases"]');
  142 |     const casesText = await casesCard.locator('.kpi-value').textContent();
  143 |     const casesCount = parseInt(casesText?.replace(/[^0-9]/g, '') || '1', 10);
  144 | 
  145 |     const hrCalculated = (hospCount / casesCount) * 100;
  146 |     expect(Math.abs(hrReported - hrCalculated)).toBeLessThanOrEqual(0.05);
  147 |   });
  148 | 
  149 |   test('T10 [R5] - Consistencia aritmética en la Tasa de Letalidad (CFR)', async ({ page }) => {
  150 |     const cfrCard = page.locator('[data-testid="kpi-card-cfr"]');
  151 |     const cfrValueText = await cfrCard.locator('.kpi-value').textContent();
  152 |     const cfrSubtext = await cfrCard.locator('div:has-text("defunciones")').textContent();
  153 | 
  154 |     const cfrReported = parseFloat(cfrValueText?.replace('%', '') || '0');
  155 |     const deathCount = parseInt(cfrSubtext?.replace(/[^0-9]/g, '') || '0', 10);
  156 | 
  157 |     const casesCard = page.locator('[data-testid="kpi-card-cases"]');
  158 |     const casesText = await casesCard.locator('.kpi-value').textContent();
  159 |     const casesCount = parseInt(casesText?.replace(/[^0-9]/g, '') || '1', 10);
  160 | 
  161 |     const cfrCalculated = (deathCount / casesCount) * 100;
  162 |     expect(Math.abs(cfrReported - cfrCalculated)).toBeLessThanOrEqual(0.05);
  163 |   });
  164 | 
  165 |   // ============================================================================
```