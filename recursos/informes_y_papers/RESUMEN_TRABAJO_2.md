# Análisis Integral y Resumen del Directorio `TRABAJO 2`

**Curso:** Calidad de Software (Teoría - `TEO-CS`)  
**Directorio Analizado:** `c:\Users\marco\Desktop\TEO-CS\TRABAJO 2`  
**Fecha de Elaboración:** Septiembre 2026  

---

## 1. Estructura General del Directorio

El directorio **`TRABAJO 2`** comprende un entorno académico y técnico estructurado en torno a cuatro componentes fundamentales:

```text
TRABAJO 2/
├── ISO-9000-2015-s.pdf          # Norma oficial ISO 9000:2015 en español (60 páginas, 5.67 MB)
├── agile-tutorial/              # Repositorio de referencia metodológica ágil (IBM Agile Tutorial)
│   ├── docs/                    # Guías paso a paso: Instalación, Prácticas Ágiles, Exploración y Desarrollo
│   ├── src/                     # Servicio API de demostración en Python / Flask
│   ├── test/                    # Pruebas unitarias de la API
│   ├── main.py                  # Punto de entrada de la API Flask
│   ├── requirements.txt         # Dependencias Python
│   └── ... (Procfile, manifest.yml, .travis.yml)
├── Código/                      # Plataforma de software en desarrollo y evaluación
│   ├── ejecutar_aplicativo.bat  # Script de despliegue local automático (soporte para 'uv' y 'python')
│   └── ISPySA-Pneumonia-main/   # Proyecto completo de vigilancia epidemiológica IRA (Perú 2000-2023)
│       └── ISPySA-Pneumonia-main/
│           ├── app.py           # Dashboard interactivo Streamlit bajo normas ISO 9241 e ISO/IEC 25010
│           ├── src/             # Servicios desacoplados (data_service, model_service, eda, modeling)
│           ├── tests/           # Suite de pruebas unitarias (test_services.py)
│           ├── data/            # Datasets crudos y procesados (casos IRA, censos, interpolaciones)
│           ├── outputs/         # Resultados, figuras, tablas y proyecciones de modelos ML/DL
│           ├── scripts/         # Generador de memoria técnica Word y utilidades
│           └── README.md        # Documentación técnica y orden de ejecución
├── RESUMEN_TRABAJO_2.md         # Documento de síntesis y trazabilidad académica
└── codigo.zip                   # Paquete comprimido (44.3 MB) de la carpeta 'Código' para entrega/distribución
```

---

## 2. Descripción Detallada de los Componentes

### 2.1. Norma Internacional `ISO-9000-2015-s.pdf`
* **Naturaleza del Documento:** Traducción oficial íntegra de la norma internacional **ISO 9000:2015** (*Sistemas de gestión de la calidad — Fundamentos y vocabulario*), 4.ª edición, 60 páginas.
* **Contenido Fundamental:**
  * **Los 7 Principios de Gestión de la Calidad (QMS):**
    1. *Enfoque al cliente*
    2. *Liderazgo*
    3. *Compromiso de las personas*
    4. *Enfoque a procesos*
    5. *Mejora continua*
    6. *Toma de decisiones basada en la evidencia*
    7. *Gestión de las relaciones*
  * **Marco Conceptual y Vocabulario Formal:** Estandarización de conceptos clave para auditorías y sistemas de calidad (*conformidad*, *no conformidad*, *verificación*, *validación*, *trazabilidad*, *eficacia*, *eficiencia* y *enfoque basado en riesgos*).
* **Rol en el Trabajo:** Constituye el marco normativo y teórico formal que rige la evaluación de procesos y sistemas de calidad en el ciclo de vida del software.

---

### 2.2. Repositorio Metodológico `agile-tutorial/`
* **Origen:** Proyecto de capacitación y laboratorio de desarrollo ágil en la nube publicado por **IBM** (`https://github.com/IBM/agile-tutorial.git`).
* **Módulos y Flujos de Trabajo (`docs/`):**
  * **`1-INSTALL.md` (Entorno y Herramientas):** Configuración del stack colaborativo con GitHub, Travis CI, ZenHub y Visual Studio Code.
  * **`2-UNDERSTAND.md` (Metodología y Frameworks):**
    * *Marco SCRUM:* Definición de roles (Product Owner, Scrum Master, Development Team), ceremonias ágiles (Sprint Planning, Daily Scrum, Sprint Review, Retrospectiva) y gestión de tableros Kanban.
    * *Modelo de Ramificación GitHub Flow:* Ramas de funcionalidad derivadas de `external`, commits descriptivos, creación y revisión por pares de *Pull Requests* y validación de status checks.
    * *Automatización DevOps:* Conceptos prácticos de Integración Continua (CI), Entrega Continua (CD) y Despliegue Continuo.
  * **`3-EXPLORE.md` (Exploración de la Aplicación):** Estudio de una API REST basada en Python/Flask y ejecución de pruebas unitarias automatizadas con `unittest`.
  * **`4-DEVELOP.md` (Desarrollo Colaborativo):** Ejecución práctica del ciclo completo de un sprint: asignación de issues, codificación en ramas, integración continua automatizada y despliegue a la nube.
* **Rol en el Trabajo:** Proporciona las guías de ingeniería de software para gestionar el desarrollo en equipo con agilidad, control de versiones, revisión de código y aseguramiento continuo de la calidad.

---

### 2.3. Aplicativo y Código Fuente `Código/` (`ISPySA-Pneumonia-main`)
* **Sistema:** **Plataforma de Vigilancia y Monitoreo Epidemiológico de Infecciones Respiratorias Agudas (IRA) en el Perú (2000–2023)**.
* **Arquitectura de Software y Capas:**
  * **Capa de Presentación (`app.py`):** Dashboard interactivo desarrollado en **Streamlit** bajo estrictos criterios de las normas **ISO 9241** (11, 210, 110 y 12) e **ISO/IEC 25010**. Incluye semáforo epidemiológico dinámico, tarjetas de KPIs, cuadrantes de severidad y visualización interactiva con Plotly.
  * **Capa de Servicios (`src/services/`):**
    * `EpidemiologyDataService`: Limpieza de datos, agregación nacional/departamental, cómputo estandarizado de tasas por 100,000 habitantes e indicadores de severidad clínica:
      * *Tasa de Hospitalización (HR):* $\text{HR} = (\text{Hospitalizaciones} / \text{Casos}) \times 100$
      * *Tasa de Letalidad (CFR):* $\text{CFR} = (\text{Defunciones} / \text{Casos}) \times 100$
    * `EpidemiologyModelService`: Carga de métricas de desempeño ($R^2$, MAE, RMSE), proyecciones a 52 semanas con intervalos de confianza del 95% y análisis de importancia de características.
  * **Capa Analítica y Modelado Predictivo (`src/modeling/`):**
    * Modelos predictivos comparados: **XGBoost** ($R^2 = 0.935$ en pediatría y $0.890$ en geriatría), **Random Forest**, redes recurrentes **LSTM** y modelos basales estadísticos con esquema de validación rodante (*Rolling Window Backtesting*).
  * **Aseguramiento de la Calidad y Pruebas (`tests/test_services.py`):** Suite formal de pruebas unitarias con 6 casos de prueba que validan la integridad temporal, matemática y algorítmica al 100% (Aprobado).
  * **Despliegue Local Automatizado (`ejecutar_aplicativo.bat`):** Script por lotes que detecta la presencia del motor ultrarrápido `uv` o del intérprete estándar `python`, resuelve dependencias e inicia el aplicativo en `http://localhost:8501`.
  * **Generación de Documentación (`scripts/generar_informe_word.py`):** Script en Python (`python-docx`) que genera automáticamente la memoria técnica completa del proyecto en formato Word (.docx).

---

### 2.4. Archivo Comprimido `codigo.zip`
* Paquete comprimido en formato `.zip` (44.3 MB) que encapsula la versión íntegra y distribuible del directorio `Código/`, preparado para entrega o migración de entorno.

---

## 3. Inferencias Clave de lo Incluido

Del análisis integral de los archivos, dependencias y estructura se infieren las siguientes conclusiones:

1. **Contexto Académico Integrado:**
   * El espacio de trabajo corresponde a la asignatura universitaria **Calidad de Software** (`TEO-CS` = Teoría - Calidad de Software) desarrollada por un equipo de 05 integrantes.
   * El trabajo previo (*Trabajo 1 / Semana 1*) se enfocó en la **ingeniería inversa** del código analítico de neumonía y en el diseño de una interfaz ergonómica orientada al usuario conforme a **ISO 9241** y calidad de producto **ISO/IEC 25010**.

2. **Propósito Central de `TRABAJO 2` (Convergencia ISO 9000 + Desarrollo Ágil):**
   * La presencia simultánea de la norma **ISO 9000:2015** y del repositorio **`agile-tutorial`** demuestra que el objetivo de este segundo trabajo es **articular la Gestión de la Calidad (QMS) con las Metodologías Ágiles (SCRUM / CI-CD)** sobre un producto de software real (`ISPySA-Pneumonia-main`):
     * **Calidad del Proceso:** Se apoya en ISO 9000:2015 (enfoque a procesos, gestión de riesgos, toma de decisiones basada en evidencia) y se instrumentaliza a través del marco ágil SCRUM, GitHub Flow, revisión colaborativa de PRs y validación continua en CI.
     * **Calidad del Producto:** Se evidencia en el aplicativo con pruebas unitarias exhaustivas (`tests/`), mantenibilidad de código y diseño de interfaz bajo estándares ergonómicos internacionales.

3. **Matriz de Trazabilidad de Calidad:**
   * **Proceso y Gestión:** ISO 9000:2015 + Metodología Ágil SCRUM (Sprint Planning, ZenHub, CI/CD).
   * **Ingeniería e Interacción Humano-Sistema:** ISO 9241-11 (Eficacia, Eficiencia, Satisfacción), ISO 9241-210 (Diseño centrado en el humano), ISO 9241-110 (Principios de diálogo) e ISO 9241-12 (Presentación visual).
   * **Producto Software:** ISO/IEC 25010 (Modularidad, fiabilidad, adecuación funcional y portabilidad).
