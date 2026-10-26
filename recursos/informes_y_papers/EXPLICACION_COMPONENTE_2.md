# Guía Práctica y Directa: ¿Qué diablos se hace en el Componente 2?

**Curso:** Calidad de Software (Teoría - `TEO-CS`)  
**Evaluación:** Trabajo Parcial 2  
**Objetivo del Documento:** Explicar sin rodeos ni relleno qué exige exactamente el profesor en el **Componente 2** (Documento Académico), qué se escribe en cada punto y cómo se estructurará posteriormente en **GitHub Projects**.

---

## 1. El Panorama General (En cristiano)

El profesor te dio 3 enlaces o referencias:
1. La norma **ISO 9000:2015** (Fundamentos y vocabulario de calidad).
2. El repositorio **`agile-tutorial`** de IBM (SCRUM, Git Flow, CI/CD).
3. Tu proyecto de salud pública (**`ISPySA-Pneumonia-main`**, vigilancia de IRA en Perú 2000-2023).

El **Componente 2** es redactar la **memoria técnica / informe de entrega** que justifique que tu equipo no programó al azar, sino que aplicó las normas internacionales de calidad de proceso (ISO 9000) y las prácticas de desarrollo de software ágil sobre la plataforma de salud pública.

---

## 2. Desglose Punto por Punto de lo que se Hace

### Punto 1: Revisar, seleccionar y adoptar características de la norma ISO 9000:2015 y de agile-tutorial en el proyecto
* **¿Qué te pide el profesor?** Que demuestres cómo encajan la norma ISO 9000 y el tutorial ágil en tu código de neumonía.
* **¿Qué se escribe exactamente aquí?**
  1. **Selección de Principios ISO 9000:2015 aplicados al código:**
     * *Enfoque al Cliente:* El usuario final es el epidemiólogo del MINSA. El sistema no le da tablas en bruto; le da un semáforo clínico de alerta y divide en niños (`men5`) y ancianos (`60mas`).
     * *Enfoque a Procesos:* El software sigue una cadena de valor estricta: `Ingesta -> Interpolación Censal -> Cálculo de Tasas x 100k -> Métricas Clínicas (HR/CFR) -> Modelos ML (XGBoost) -> Dashboard`.
     * *Toma de Decisiones Basada en la Evidencia:* El modelo predictivo no se eligió a ciegas; se eligió XGBoost porque la evidencia matemática demostró $R^2 = 0.935$ con 5 años de backtesting e intervalos de confianza al 95%.
     * *Control de Salidas No Conformes:* Funciones defensivas (`safe_rate`) que evitan divisiones entre cero y datos nulos.
  2. **Adopción de características de `agile-tutorial` de IBM:**
     * Arquitectura por capas de servicios desacoplados (`data_service.py` y `model_service.py`).
     * Flujo de trabajo colaborativo **GitHub Flow** (ramas y Pull Requests obligatorios).
     * Integración Continua (CI) con pruebas unitarias automáticas como filtro de calidad (Quality Gate).

---

### Punto 2: Describir el proceso de metodologías ágiles que podría utilizar
* **¿Qué te pide el profesor?** Que expliques cómo trabajaría el equipo de 5 personas día a día usando metodologías ágiles.
* **¿Qué se escribe exactamente aquí?**
  * **Marco de trabajo:** Se define un marco **Scrum adaptado con prácticas de ingeniería ágil (DevOps / GitHub Flow)**.
  * **Ciclos de trabajo (Sprints de 2 semanas):**
    1. *Sprint Planning:* El equipo toma historias de usuario del Product Backlog (ej. "Como epidemiólogo quiero ver la tasa de letalidad CFR"), las estima en Story Points (1, 2, 3, 5, 8) y se compromete a una meta.
    2. *Daily Scrum:* Reunión de 15 minutos de sincronización para detectar si alguien está bloqueado.
    3. *Desarrollo en ramas (GitHub Flow):* Nadie toca `main` directamente. Se crea una rama `feature/nombre-tarea`, se programa, se pasa la prueba local y se abre un Pull Request (PR).
    4. *Verificación Continua (CI Quality Gate):* Al abrir el PR, GitHub Actions corre automáticamente la auditoría de código (`flake8`) y las pruebas unitarias exigiendo **mínimo 80% de cobertura**. Si falla, el código no entra.
    5. *Sprint Review y Retrospectiva:* Demostración de la interfaz en Streamlit y análisis de qué mejorar en el proceso para el siguiente sprint (alineado a la Mejora Continua de ISO 9000).

---

### Punto 3: Indicar herramientas y roles a considerar en el proceso mencionado
* **¿Qué te pide el profesor?** Qué roles asume cada uno de los 5 integrantes del grupo y con qué herramientas de software trabajarán.
* **¿Qué se escribe exactamente aquí?**
  * **Distribución de Roles (5 integrantes):**
    1. *Product Owner:* Representa al sector salud/MINSA; prioriza qué gráficos y modelos se necesitan primero.
    2. *Scrum Master:* Modera reuniones, elimina bloqueos del equipo y audita que se cumplan las normas de calidad.
    3. *Ingeniero de Datos / Backend:* Encargado de la ingesta de CSVs, censos, interpolación y `data_service.py`.
    4. *Ingeniero de Machine Learning:* Calibra modelos (XGBoost, LSTM), calcula $R^2$, RMSE y proyecciones a 52 semanas.
    5. *Ingeniero de Calidad y Pruebas (QA / DevOps):* Escribe las pruebas unitarias, asegura el 80% de cobertura y mantiene el pipeline de GitHub Actions.
  * **Ecosistema de Herramientas:**
    * *Gestión y Tableros:* **GitHub Projects** (Backlog, Sprint Planning, seguimiento de tareas Kanban).
    * *Control de Versiones:* **GitHub** (Ramas, Pull Requests, Code Reviews).
    * *Automatización y Calidad:* **GitHub Actions** (CI: linter y runner de pruebas con coverage $\ge 80\%$).
    * *Stack Tecnológico:* Python 3.12, Streamlit, Pandas, NumPy, Scikit-learn, XGBoost, Plotly, `unittest` + `coverage`.

---

## 3. ¿Cómo conectaremos todo esto a GitHub Projects? (Siguiente Fase)

Cuando el profesor o el equipo revise tu repositorio en GitHub, no verá un repositorio vacío o con código suelto. En **GitHub Projects** crearemos un tablero con 3 **Épicas** que mapean 1-to-1 las 3 preguntas del profesor:

| Épica en GitHub Projects | Historias de Usuario / Tareas Asociadas | Responsable |
| :--- | :--- | :--- |
| **Épica 1: Cumplimiento Normativo ISO 9000** | • US-01: Estandarización de tasas x 100k hab.<br>• US-02: Manejo defensivo de salidas no conformes (`safe_rate`).<br>• US-03: Evidencia matemática en selección de XGBoost. | Product Owner / Data Eng |
| **Épica 2: Proceso Ágil y DevOps** | • US-04: Definición de branches en GitHub Flow.<br>• US-05: Configuración de GitHub Actions con 2 jobs (Audit y Tests).<br>• US-06: Umbral mínimo de 80% de coverage obligatorio. | QA / DevOps |
| **Épica 3: Interfaz y Usabilidad (ISO 9241)** | • US-07: Rediseño sobrio institucional de `app.py`.<br>• US-08: Panel de resumen epidemiológico de 3 columnas.<br>• US-09: Ficha técnica y glosario normado MINSA. | ML Eng / Scrum Master |

---

## 4. Resumen Ejecutivo de la Tarea

1. Ya limpiaste y versionaste el código fuente (Componente 1).
2. Ya instalaste las skills comunitarias de auditoría y rediseño de alta reputación (Componente 1).
3. Ya refactorizaste la interfaz eliminando los clichés de IA y dándole aspecto ministerial sobrio (Componente 1).
4. Ya separaste el CI en dos jobs (`auditoria-codigo` y `pruebas-unitarias` con **88% de cobertura**) (Componente 1).
5. **Lo que sigue:** Cuando subas el repositorio a GitHub, plasmaremos las historias en GitHub Projects y compilaremos el documento formal final listo para presentar al docente.
