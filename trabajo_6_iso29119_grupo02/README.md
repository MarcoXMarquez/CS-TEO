# TRABAJO PARCIAL 06: AUTOMATIZACIÓN DE PRUEBAS DE SOFTWARE E2E
## Norma Internacional ISO/IEC/IEEE 29119 (Partes 1, 2, 3, 4 y 5)

**Universidad Nacional de San Agustín de Arequipa (UNSA)**  
**Facultad de Ingeniería de Producción y Servicios**  
**Escuela Profesional de Ingeniería de Sistemas**  
**Curso:** Teoría de la Construcción de Software / Calidad y Pruebas de Software (2026)  
**Equipo de Desarrollo y Calidad:** **Grupo 02**

### Integrantes:
- Condori Choque, Yoel
- Márquez Delgado, Marco
- Pérez Valdivia, Jeremy
- Nina Choque, Rafael
- Arce Quispe, Leonardo

---

## 1. Visión General del Proyecto

El presente proyecto implementa un marco integral de **Automatización de Pruebas de Extremo a Extremo (E2E)** con **Playwright**, estructurado rigurosamente bajo el estándar internacional **ISO/IEC/IEEE 29119** (Software Testing).

Para garantizar una evaluación exhaustiva y multidisciplinaria, la suite de pruebas abarca un **Alcance Dual (Dual Scope)**:
1. **Sistema A — Salud Pública y Epidemiología Clínica (`ISPySA-Pneumonia`)**: Aplicativo web de vigilancia epidemiológica y analítica predictiva de neumonía infantil y adulta en el Perú. Incorpora modelos bioclimáticos regionales, canal endémico según la metodología Bortman (OPS/MINSA) y monitoreo de recursos hospitalarios críticos bajo el protocolo Manchester.
2. **Sistema B — E-Commerce y Transacciones Comerciales (`SauceDemo`)**: Plataforma estándar de comercio electrónico para la verificación de flujos transaccionales deterministas, integridad de carritos de compras, cálculo matemático de impuestos y gestión de sesiones seguras.

---

## 2. Estructura de Entregables del Trabajo 6

El repositorio se organiza de la siguiente manera:

```text
TEO-CS/
├── codigo/
│   ├── ISPySA-Pneumonia/              # Aplicativo de Salud Pública modernizado
│   │   ├── app.py                     # Dashboard interactivo con data-testid e indicadores
│   │   ├── src/
│   │   │   ├── epidemiology_analytics.py # Módulo analítico: Bortman, Manchester y Vulnerabilidad
│   │   │   └── ...                    # Módulos de datos y modelos predictivos (XGBoost)
│   │   └── tests/                     # 22 Pruebas unitarias de epidemiología y servicios
│   └── tests_playwright/              # Suite de Pruebas Automatizadas E2E
│       ├── tests_ispysa/
│       │   └── ispysa.spec.js         # 12 Casos de prueba E2E de Salud Pública (T01 - T12)
│       ├── tests_saucedemo/
│       │   └── saucedemo.spec.js      # 12 Casos de prueba E2E de E-Commerce (T01 - T12)
│       ├── capture_evidence.js        # Script de captura de evidencia visual automatizada
│       ├── run_consecutive_tests.js   # Protocolo de 3 corridas consecutivas (Tasa de Flakiness)
│       ├── execution_summary_3runs.json # Registro auditado del protocolo de 3 corridas
│       ├── package.json               # Dependencias de Playwright y scripts npm
│       └── playwright.config.js       # Configuración Chromium headless (workers: 1, retries: 0)
├── informes/
│   ├── generate_reporte_docx.py       # Generador del reporte formal con python-docx
│   └── trabajo_6_iso29119_reporte.docx # Reporte técnico formal según ISO/IEC/IEEE 29119-3
├── slides/
│   ├── trabajo_6_iso29119/
│   │   ├── diapositivas_iso29119.html # Presentación 16:9 nativa con imágenes Base64 embebidas
│   │   ├── generate_slides_tp6.py     # Compilador HTML de las diapositivas con Tailwind CSS
│   │   ├── audit_slides_node.js       # Script de auditoría Playwright para render 1920x1080
│   │   └── assets/                    # Evidencias en alta resolución capturadas en vivo
├── html-slide-viewer/                 # Visor interactivo local de diapositivas HTML
├── trabajo_6_iso29119_grupo02.zip     # Paquete comprimido completo para entrega académica
└── README.md                          # Este documento de arquitectura y guía técnica
```

---

## 3. Conformidad con la Norma ISO/IEC/IEEE 29119

El ciclo de calidad se apega formalmente a las partes del estándar:

| Parte de la Norma | Componente Implementado | Evidencia en el Repositorio |
| :--- | :--- | :--- |
| **ISO/IEC/IEEE 29119-1** | Conceptos y Enfoque Basado en Riesgo | Matriz de Criticidad de Módulos (Sección 3 del Reporte Word). |
| **ISO/IEC/IEEE 29119-2** | Procesos de Prueba y Determinismo | Protocolo de 3 corridas consecutivas con 0.00% de flakiness (`run_consecutive_tests.js`). |
| **ISO/IEC/IEEE 29119-3** | Documentación de Pruebas Formal | Documento `.docx` con Plan, Especificación de Diseño, Logs e Incidentes. |
| **ISO/IEC/IEEE 29119-4** | Técnicas de Diseño de Pruebas | Partición de Equivalencia (EP), Análisis de Valores Límite (BVA) y Pruebas de Transición de Estados. |
| **ISO/IEC/IEEE 29119-5** | Automatización Orientada a Palabras Clave | Implementación en Playwright con selectores semánticos (`data-testid`, `getByRole`, `getByText`). |

---

## 4. Matriz de Casos de Prueba Automatizados (24 Casos)

### 4.1. Sistema A: ISPySA-Pneumonia (12 Casos E2E)
- **T01**: Validación de selección de cohorte vulnerable (menores de 5 años y mayores de 60 años).
- **T02**: Verificación del Canal Endémico Bortman (zonas de Éxito, Seguridad, Alarma y Epidemia).
- **T03**: Presencia y renderizado del gráfico dinámico de 4 zonas y cálculo de cuartiles Q1, Q2, Q3.
- **T04**: Monitor de Triaje Manchester y dimensionamiento de camas UCI y oxígeno medicinal ($m^3$/día).
- **T05**: Matriz de Vulnerabilidad Bioclimática Regional con factores de heladas (1.35x) y friaje (1.25x).
- **T06**: Consistencia matemática de correlación de Pearson y tolerancia $|HR - \text{calc}| \le 0.05\%$.
- **T07**: Monitoreo de latencia y tiempo de respuesta en carga de datos geoespaciales ($< 3500$ ms).
- **T08**: Estabilidad ante inyección de parámetros límite en tasas de incidencia regional.
- **T09**: Validación de exportación y renderizado de tablas de contingencia médica.
- **T10**: Precisión de métricas del modelo predictivo XGBoost ($R^2 \ge 0.900$, verificado en $0.935$).
- **T11**: Evaluación de contraste y accesibilidad visual en dashboard clínico bajo ISO 9241-171.
- **T12**: Manejo de errores y recuperación graciosa ante filtros sin datos observados.

### 4.2. Sistema B: SauceDemo (12 Casos E2E)
- **T01**: Autenticación exitosa con usuario estándar (`standard_user`).
- **T02**: Bloqueo y validación de mensaje de error para usuario bloqueado (`locked_out_user`).
- **T03**: Verificación de carga e integridad del catálogo de 6 productos en el inventario.
- **T04**: Ordenamiento por precio ascendente verificando la invariante matemática $P[i] \le P[i+1]$.
- **T05**: Ordenamiento por precio descendente verificando la invariante $P[i] \ge P[i+1]$.
- **T06**: Ordenamiento alfabético A-Z y Z-A en el catálogo de productos.
- **T07**: Reactividad del badge del carrito al agregar y remover productos en tiempo real.
- **T08**: Persistencia de productos en la vista del carrito (`cart.html`).
- **T09**: Validación de campos obligatorios en el formulario de Checkout Paso 1 (`checkout-step-one.html`).
- **T10**: Consistencia contable en Checkout Paso 2: $\text{Item Total} + \text{Tax (8\%)} = \text{Total}$.
- **T11**: Finalización de compra, confirmación de orden (`THANK YOU FOR YOUR ORDER`) y botón de retorno.
- **T12**: Cierre de sesión (Logout), destrucción de sesión y bloqueo de navegación hacia atrás.

---

## 5. Protocolo de Verificación Empírica (0.00% Flakiness)

Para cumplir con el principio de repetibilidad determinista de **ISO/IEC/IEEE 29119-2**, se ejecutó el protocolo de 3 corridas consecutivas sin reintentos automáticos (`retries: 0`, `workers: 1`, Chromium headless):

```text
========================================================================================
           PROTOCOLO DE CERTIFICACIÓN DE PRUEBAS ISO/IEC/IEEE 29119-2
                     3 CORRIDAS CONSECUTIVAS - PLAYWRIGHT E2E
========================================================================================
Corrida 1: 24 / 24 aprobadas (100.0%) | Tiempo: 69.51 s | Fallos: 0 | Flaky: 0
Corrida 2: 24 / 24 aprobadas (100.0%) | Tiempo: 64.89 s | Fallos: 0 | Flaky: 0
Corrida 3: 24 / 24 aprobadas (100.0%) | Tiempo: 73.77 s | Fallos: 0 | Flaky: 0
----------------------------------------------------------------------------------------
TOTAL ACUMULADO: 72 / 72 PRUEBAS APROBADAS (100.0% DE ÉXITO)
TASA DE FLAKINESS AUDITADA: 0.00% (CERO PRUEBAS INTERMITENTES)
TIEMPO TOTAL DE PRUEBA: 208.17 s (3 min 28 s)
========================================================================================
```

---

## 6. Instrucciones de Instalación y Ejecución

### 6.1. Requisitos Previos
- **Node.js**: Versión 18.0.0 o superior.
- **Python**: Versión 3.10 o superior.
- **Navegadores Playwright**: Chromium (`npx playwright install chromium`).

### 6.2. Configuración y Despliegue de ISPySA-Pneumonia
En una terminal:
```bash
cd codigo/ISPySA-Pneumonia
# Activar entorno virtual
.venv\Scripts\activate   # En Windows
# Iniciar servidor Streamlit
streamlit run app.py --server.port 8501 --server.headless true
```
El aplicativo estará disponible en `http://localhost:8501`.

### 6.3. Ejecución de la Suite de Automatización Playwright
En otra terminal:
```bash
cd codigo/tests_playwright
npm install

# 1. Ejecutar las 24 pruebas en una sola pasada:
npx playwright test

# 2. Ejecutar únicamente pruebas de Salud Pública (ISPySA):
npx playwright test tests_ispysa/

# 3. Ejecutar únicamente pruebas de E-Commerce (SauceDemo):
npx playwright test tests_saucedemo/

# 4. Ejecutar el protocolo formal de 3 corridas consecutivas (Verificación de Flakiness):
node run_consecutive_tests.js

# 5. Ver el reporte interactivo HTML oficial de Playwright:
npx playwright show-report
```

### 6.4. Visualización de Diapositivas HTML
Las diapositivas fueron diseñadas en proporción 16:9 (1920×1080) con Tailwind CSS, tipografía técnica de alta densidad visual y cero imágenes rotas (recursos Base64 incrustados al 100%).

Para visualizarlas en el visor integrado:
```bash
# Abrir directamente en el navegador:
start html-slide-viewer/index.html
# O abrir el archivo standalone compilado:
start slides/trabajo_6_iso29119/diapositivas_iso29119.html
```

---

## 7. Conformidad Académica
- **Grupo 02** — Universidad Nacional de San Agustín de Arequipa (UNSA), 2026.
- Todos los entregables han sido generados sin emojis Unicode ni calificaciones autoevaluativas, respetando la sobriedad técnica del formato de auditoría internacional.
