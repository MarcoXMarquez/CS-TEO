import os
import sys
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn

from build_docx_helpers import set_cell_background, set_cell_margins, add_placeholder, add_heading_ieee, format_paragraph

def build_ieee_docx(output_path):
    doc = Document()

    # Configuración de márgenes estándar IEEE (2.54 cm = 1 pulgada)
    for section in doc.sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)

    # Colores corporativos e institucionales
    COLOR_TITLE = RGBColor(15, 23, 42)      # Slate 900
    COLOR_PRIMARY = RGBColor(30, 64, 175)   # Blue 800
    COLOR_TEXT = RGBColor(51, 65, 85)       # Slate 700
    COLOR_MUTED = RGBColor(100, 116, 139)   # Slate 500

    # =========================================================================
    # ENCABEZADO INSTITUCIONAL Y TÍTULO (IEEE STYLE)
    # =========================================================================
    p_inst = doc.add_paragraph()
    p_inst.alignment = WD_ALIGN_PARAGRAPH.CENTER
    format_paragraph(p_inst, space_before=0, space_after=2)
    r_inst = p_inst.add_run("UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA\nFACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS\nESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS")
    r_inst.bold = True
    r_inst.font.name = "Arial"
    r_inst.font.size = Pt(10)
    r_inst.font.color.rgb = COLOR_PRIMARY

    p_course = doc.add_paragraph()
    p_course.alignment = WD_ALIGN_PARAGRAPH.CENTER
    format_paragraph(p_course, space_before=4, space_after=14)
    r_course = p_course.add_run("CURSO: CALIDAD DE SOFTWARE (TEORÍA - TEO-CS) — TRABAJO PARCIAL 2\nDOCENTE: MG. JESUS MARTÍN SILVA FERNÁNDEZ")
    r_course.font.name = "Arial"
    r_course.font.size = Pt(9)
    r_course.bold = True
    r_course.font.color.rgb = COLOR_MUTED

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    format_paragraph(p_title, space_before=6, space_after=14)
    r_title = p_title.add_run("Adopción de la Norma ISO 9000:2015 y el Marco Ágil IBM en una Plataforma de Vigilancia Epidemiológica de Salud Pública")
    r_title.bold = True
    r_title.font.name = "Arial"
    r_title.font.size = Pt(16)
    r_title.font.color.rgb = COLOR_TITLE

    # Bloque de Autores en Formato IEEE (Tabla sin bordes de 5 columnas o celdas compactas)
    authors_data = [
        ("Leonardo Ruben Arce Mayhua", "larcem@unsa.edu.pe", "Data Engineer"),
        ("Joel Isaias Condori Leon", "jcondorile@unsa.edu.pe", "Product Owner"),
        ("Marco Antonio Marquez Herrera", "mmarquezhe@unsa.edu.pe", "Scrum Master & QA Lead"),
        ("Rafael Diego Nina Calizaya", "rninacal@unsa.edu.pe", "Frontend & UX Engineer"),
        ("Jeremy Joshua Perez Huamani", "jperezhua@unsa.edu.pe", "ML Engineer")
    ]

    p_auth = doc.add_paragraph()
    p_auth.alignment = WD_ALIGN_PARAGRAPH.CENTER
    format_paragraph(p_auth, space_before=4, space_after=14)
    for name, email, role in authors_data:
        r_name = p_auth.add_run(f"{name}\n")
        r_name.bold = True
        r_name.font.name = "Arial"
        r_name.font.size = Pt(9)
        r_aff = p_auth.add_run(f"Universidad Nacional de San Agustín — Arequipa, Perú\nRol: {role} | Correo: {email}\n\n")
        r_aff.font.name = "Arial"
        r_aff.font.size = Pt(8.5)
        r_aff.font.color.rgb = COLOR_TEXT

    # =========================================================================
    # RESUMEN Y ABSTRACT
    # =========================================================================
    p_abs = doc.add_paragraph()
    format_paragraph(p_abs, space_before=6, space_after=6)
    r_absh = p_abs.add_run("Resumen— ")
    r_absh.bold = True
    r_absh.font.name = "Arial"
    r_absh.font.size = Pt(9.5)
    r_abst = p_abs.add_run(
        "El presente informe técnico expone la convergencia metodológica entre el marco normativo internacional de "
        "gestión de la calidad ISO 9000:2015 [1], las directrices de ergonomía visual ISO 9241 [3], el modelo de calidad "
        "de producto software ISO/IEC 25010 [2], y las prácticas de ingeniería ágil promovidas por el repositorio referencial "
        "agile-tutorial de IBM [7]. Esta integración se materializó sobre la plataforma de analítica y vigilancia epidemiológica "
        "ISPySA-Pneumonia, orientada al monitoreo de Infecciones Respiratorias Agudas (IRA) en el Perú durante la serie temporal "
        "2000–2023 [8]. Se adoptaron principios esenciales como el enfoque a procesos, la toma de decisiones basada en la evidencia "
        "(demostrada mediante validación matemática de algoritmos predictivos XGBoost con R2 = 0.935 [9]) y el control de salidas "
        "no conformes mediante funciones defensivas (safe_rate). Asimismo, se estructuró un proceso ágil Scrum quincenal "
        "gobernado bajo el modelo de ramificación GitHub Flow, con un pipeline de Integración Continua (CI) en GitHub Actions "
        "que desacopla la auditoría estática (flake8) de la ejecución de pruebas unitarias, estableciendo un Quality Gate "
        "riguroso del 80% que alcanzó un 88% de cobertura real [5], [6]. La gestión del proyecto se orquestó sinérgicamente "
        "mediante GitHub Projects v2 y ZenHub [10], asegurando la trazabilidad de 3 Épicas y 9 Historias de Usuario bajo una matriz "
        "RACI de cinco integrantes, culminando con el despliegue automatizado continuo en la infraestructura cloud de Render."
    )
    r_abst.font.name = "Arial"
    r_abst.font.size = Pt(9.5)
    r_abst.font.color.rgb = COLOR_TEXT

    p_kw = doc.add_paragraph()
    format_paragraph(p_kw, space_before=2, space_after=12)
    r_kwh = p_kw.add_run("Palabras Clave— ")
    r_kwh.bold = True
    r_kwh.font.name = "Arial"
    r_kwh.font.size = Pt(9.5)
    r_kwt = p_kw.add_run("ISO 9000:2015, Scrum, agile-tutorial IBM, GitHub Flow, CI/CD Quality Gate, ZenHub, Vigilancia Epidemiológica, IRA Perú, Cobertura de Código.")
    r_kwt.italic = True
    r_kwt.font.name = "Arial"
    r_kwt.font.size = Pt(9)

    # =========================================================================
    # SECCIÓN I: INTRODUCCIÓN Y CONTEXTO
    # =========================================================================
    add_heading_ieee(doc, "I. INTRODUCCIÓN Y CONTEXTO DEL SISTEMA", 1)
    
    p_i1 = doc.add_paragraph()
    format_paragraph(p_i1)
    p_i1.add_run(
        "Las Infecciones Respiratorias Agudas (IRA) y la neumonía constituyen la principal causa de morbimortalidad "
        "infantil (menores de 5 años) y geriátrica (adultos de 60 años a más) en el sistema de salud pública del Perú [8]. "
        "La toma de decisiones de asignación de camas UCI, oxígeno medicinal y vacunación estacional por parte de las "
        "Direcciones Regionales de Salud (DIRESA) y el Ministerio de Salud (MINSA) requiere plataformas computacionales "
        "que garanticen absoluta integridad matemática, trazabilidad histórica y alta disponibilidad.\n\n"
        "Bajo este escenario, el Trabajo Parcial 2 del curso de Calidad de Software exige la evolución de la plataforma "
        "analítica ISPySA-Pneumonia, transitando desde un aplicativo funcional local hacia un sistema certificado bajo "
        "estándares internacionales de calidad de proceso y producto. Para ello, se articuló de manera formal la norma "
        "ISO 9000:2015 [1] con las prácticas de desarrollo colaborativo del repositorio agile-tutorial de IBM [7], "
        "desplegando la solución en el entorno cloud Render (disponible en: https://ispysa-vigilancia-ira-peru.onrender.com/)."
    )

    # =========================================================================
    # SECCIÓN II: REVISIÓN, SELECCIÓN Y ADOPCIÓN (PUNTO 1 DE LA RÚBRICA)
    # =========================================================================
    add_heading_ieee(doc, "II. REVISIÓN, SELECCIÓN Y ADOPCIÓN DE CARACTERÍSTICAS DE LA NORMA ISO 9000:2015 Y AGILE-TUTORIAL (PUNTO 1)", 1)
    
    add_heading_ieee(doc, "A. Fundamentos y Principios de la Norma ISO 9000:2015 Adoptados en el Proyecto", 2)
    p_ii1 = doc.add_paragraph()
    format_paragraph(p_ii1)
    p_ii1.add_run(
        "La norma internacional ISO 9000:2015 define los fundamentos y vocabulario de los sistemas de gestión de la calidad [1]. "
        "En lugar de una adopción meramente burocrática, el equipo seleccionó e instrumentó cuatro principios esenciales directamente en la arquitectura y código de la plataforma:"
    )

    # Tabla de Principios ISO 9000
    t_iso = doc.add_table(rows=5, cols=3)
    t_iso.alignment = WD_TABLE_ALIGNMENT.CENTER
    col_widths = [Inches(1.8), Inches(1.8), Inches(2.9)]
    
    headers_iso = ["Principio / Cláusula ISO", "Definición Formal ISO 9000:2015", "Materialización en ISPySA-Pneumonia"]
    for j, h in enumerate(headers_iso):
        cell = t_iso.rows[0].cells[j]
        cell.width = col_widths[j]
        set_cell_background(cell, "1E293B") # Slate 800
        set_cell_margins(cell, 80, 80, 100, 100)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.bold = True
        r.font.name = "Arial"
        r.font.size = Pt(8.5)
        r.font.color.rgb = RGBColor(255, 255, 255)

    data_iso = [
        ("Enfoque al Cliente\n(Cláusula 2.3.1)", "El éxito sostenido se alcanza atrayendo y reteniendo la confianza de los clientes.", 
         "El usuario objetivo es el epidemiólogo de campo. La interfaz sustituye tablas crudas por un semáforo clínico de alerta temprana (Éxito, Seguridad, Alarma, Epidemia) y segmentación por cohortes vulnerables (<5 y 60+)."),
        ("Enfoque a Procesos\n(Cláusula 2.3.4)", "Resultados coherentes y previsibles se alcanzan cuando las actividades se entienden y gestionan como procesos interrelacionados.",
         "Cadena de valor de datos determinista: Ingesta de CSVs históricos (2000–2023) -> Interpolación censal INEI -> Normalización de tasas x 100k hab. -> Inferencia predictiva ML -> Renderizado en Dashboard."),
        ("Toma de Decisiones Basada en Evidencia\n(Cláusula 2.3.6)", "Las decisiones basadas en el análisis y la evaluación de datos tienen mayor probabilidad de producir los resultados deseados.",
         "La selección del modelo predictivo oficial no fue heurística: se evaluaron empíricamente Random Forest, LSTM y XGBoost, seleccionando este último por evidencia matemática comprobable (R2 = 0.935, RMSE mínimo con backtesting de 5 años) [9]."),
        ("Control de Salidas No Conformes\n(Cláusula 3.10.1)", "Identificación y control de elementos que no cumplen con los requisitos para prevenir su uso o entrega no intencional.",
         "Implementación de funciones defensivas como safe_rate(), que previenen caídas del sistema, infinitos o divisiones por cero ante regiones sin censo o valores faltantes, retornando 0.0 de forma controlada.")
    ]

    for i, row in enumerate(data_iso):
        for j, val in enumerate(row):
            cell = t_iso.rows[i+1].cells[j]
            cell.width = col_widths[j]
            set_cell_background(cell, "FFFFFF" if i%2==0 else "F8FAFC")
            set_cell_margins(cell, 60, 60, 80, 80)
            p = cell.paragraphs[0]
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            r.font.color.rgb = COLOR_TEXT

    p_spacer1 = doc.add_paragraph()
    format_paragraph(p_spacer1, space_before=4, space_after=4)

    add_heading_ieee(doc, "B. Ergonomía Visual (ISO 9241) y Calidad del Producto Software (ISO/IEC 25010)", 2)
    p_ii2 = doc.add_paragraph()
    format_paragraph(p_ii2)
    p_ii2.add_run(
        "Complementando a la ISO 9000, la interfaz se rediseñó bajo la norma ISO 9241-11 (Eficacia, Eficiencia y Satisfacción del usuario) [3] "
        "y la ISO 9241-210 (Diseño centrado en el operador humano) [4]. Se erradicaron los clichés propios de interfaces genéricas generadas "
        "por inteligencia artificial (AI-Slop), tales como marquesinas deslizantes (tickers) con animaciones innecesarias y controles flotantes invasivos. "
        "En su reemplazo, se implementó una estructura sobria de tres columnas ejecutivas, tipografía sans-serif con alto contraste "
        "y una Ficha Técnica formal con fórmulas epidemiológicas normalizadas por el MINSA [8].\n\n"
        "Desde la perspectiva de ISO/IEC 25010 [2], se aseguraron las características de Adecuación Funcional, Fiabilidad (tolerancia a fallos), "
        "Usabilidad (reconocibilidad) y Mantenibilidad (modularidad y comprobabilidad analítica mediante tests)."
    )

    add_placeholder(
        doc, "1", 
        "INTERFAZ INSTITUCIONAL Y SEMÁFORO EPIDEMIOLÓGICO EN RENDER",
        "Tomar captura de pantalla completa de la aplicación en producción en Render (https://ispysa-vigilancia-ira-peru.onrender.com/) "
        "en modo claro. La captura debe mostrar el encabezado ministerial, el resumen ejecutivo de 3 columnas (Casos Acumulados, Incidencia x 100k hab., "
        "y Letalidad CFR) y el mapa o gráfico epidemiológico departamental sin animaciones infantiles."
    )

    add_heading_ieee(doc, "C. Deconstrucción y Adopción del Repositorio agile-tutorial de IBM", 2)
    p_ii3 = doc.add_paragraph()
    format_paragraph(p_ii3)
    p_ii3.add_run(
        "El repositorio agile-tutorial de IBM [7] fue concebido para instruir a ingenieros en el desarrollo cloud nativo en Python. "
        "Nuestro equipo analizó su estructura técnica y adoptó los siguientes patrones arquitecturales:\n\n"
        "1) Desacoplamiento en Capa de Servicios: Replicando el patrón de IBM (src/default_services.py), se aisló la lógica analítica "
        "de la capa de presentación Streamlit, encapsulándola en data_service.py (procesamiento de datos y censo) y model_service.py (calibración e inferencia de ML).\n"
        "2) Testing Unitario como Quality Gate: Adopción del framework unittest (similar a test/default_test.py de IBM) y su automatización estricta.\n"
        "3) Modernización del Tooling: IBM utilizó Travis CI y ZenHub en 2018; nuestro equipo modernizó la infraestructura migrando a GitHub Actions "
        "con runners Ubuntu y orquestando la gestión con la suite combinada de GitHub Projects v2 y ZenHub SaaS [10]."
    )

    # =========================================================================
    # SECCIÓN III: DESCRIPCIÓN DEL PROCESO ÁGIL (PUNTO 2 DE LA RÚBRICA)
    # =========================================================================
    add_heading_ieee(doc, "III. DESCRIPCIÓN DEL PROCESO DE METODOLOGÍAS ÁGILES UTILIZADO (PUNTO 2)", 1)
    
    add_heading_ieee(doc, "A. Marco Metodológico: Scrum Híbrido con Prácticas DevOps y Extreme Programming (XP)", 2)
    p_iii1 = doc.add_paragraph()
    format_paragraph(p_iii1)
    p_iii1.add_run(
        "El equipo implementó un marco de trabajo Scrum adaptado [10], enriquecido con prácticas de ingeniería de software de Extreme Programming (XP) "
        "—específicamente Desarrollo Guiado por Pruebas (TDD), Integración Continua y Revisiones de Código por Pares (Peer Reviews) [5]— "
        "y principios DevOps de entrega automatizada.\n\n"
        "1) Justificación de la Cadencia de Sprints: Se definieron Sprints de dos semanas de duración (quincenales), dado que es el estándar universal "
        "de Scrum adoptado en agile-tutorial. Este ciclo proporciona el balance perfecto entre la rapidez de entrega funcional y el tiempo necesario "
        "para ejecutar procesos complejos de calibración matemática y validación de backtesting epidemiológico:\n"
        "   • Sprint 1 (Semanas 1 y 2 - Cimientos y Calidad Base): Ingesta de series temporales, demografía censal INEI, algoritmos defensivos safe_rate() "
        "y configuración de la infraestructura de CI en GitHub Actions.\n"
        "   • Sprint 2 (Semanas 3 y 4 - Analítica Avanzada, UX y Quality Gate): Calibración del modelo XGBoost (R2 = 0.935), rediseño institucional sobrio, "
        "suite de 12 pruebas unitarias con enforzamiento de cobertura al 88% y despliegue continuo en Render.\n\n"
        "2) Ceremonias Scrum Implementadas:\n"
        "   • Sprint Planning: Al inicio de cada iteración, el equipo estima la complejidad de las historias de usuario mediante la escala Fibonacci "
        "(Story Points: 1, 2, 3, 5, 8) y se compromete formalmente con el Sprint Backlog.\n"
        "   • Daily Scrum: Sincronizaciones de 15 minutos para transparentar avances, planificar las próximas 24 horas y remover impedimentos técnicos.\n"
        "   • Sprint Review: Demostración técnica del incremento funcional en la plataforma web frente a los requerimientos de vigilancia del MINSA.\n"
        "   • Sprint Retrospective: Análisis de métricas del proceso (velocidad, cobertura de tests, deuda técnica de flake8) y acuerdos de mejora continua conforme a ISO 9000 Cláusula 2.3.5."
    )

    add_heading_ieee(doc, "B. Modelo de Ramificación GitHub Flow y Gobernanza de Pull Requests", 2)
    p_iii2 = doc.add_paragraph()
    format_paragraph(p_iii2)
    p_iii2.add_run(
        "Conforme a las directrices de IBM agile-tutorial [7], se adoptó el modelo de ramas GitHub Flow:\n"
        "• Rama main Protegida: La rama principal representa el estado en producción y está estrictamente protegida. Ningún desarrollador puede hacer push directo a main.\n"
        "• Ramas de Funcionalidad: Para cada requerimiento se crea una rama aislada con la nomenclatura feature/issue-X-descripcion (ej. feature/issue-5-tasas-censales).\n"
        "• Commits Atómicos: Mensajes explicativos estructurados bajo la especificación Conventional Commits (feat, fix, test, docs).\n"
        "• Pull Requests (PR) y Vinculación Semántica: Cada PR debe describir técnicamente el cambio y vincular el issue respectivo mediante directivas como 'Fixes #5'.\n"
        "• Status Checks Obligatorios: El merge a main queda condicionado a la aprobación unánime de los dos jobs del pipeline CI y a la revisión por pares (Peer Review)."
    )

    add_placeholder(
        doc, "2",
        "PULL REQUEST Y REVISIÓN DE CÓDIGO CON STATUS CHECKS VERDES",
        "Tomar captura de pantalla de un Pull Request en GitHub (ej. vinculación de tests o rediseño) en modo claro. "
        "La captura debe mostrar la rama de origen (feature/...), la rama destino (main), el mensaje 'All checks have passed' "
        "con los dos checks verdes del pipeline (auditoria-codigo y pruebas-unitarias), y la aprobación de revisión."
    )

    add_heading_ieee(doc, "C. Arquitectura del Pipeline de Integración y Despliegue Continuo (CI/CD Quality Gate)", 2)
    p_iii3 = doc.add_paragraph()
    format_paragraph(p_iii3)
    p_iii3.add_run(
        "En el archivo .github/workflows/ci.yml se construyó un pipeline de CI/CD desacoplado en dos jobs paralelos que se ejecutan "
        "en runners virtuales Ubuntu bajo Python 3.11:\n\n"
        "• Job 1 (auditoria-codigo): Ejecuta el linter Flake8 inspeccionando errores de sintaxis, complejidad ciclomática y estilo PEP 8.\n"
        "• Job 2 (pruebas-unitarias): Ejecuta la suite de 12 pruebas unitarias implementadas en tests/test_services.py, auditando exhaustivamente "
        "la consistencia temporal de los años (2000–2023), el manejo defensivo ante divisiones por cero, la normalización demográfica y las métricas de ML.\n\n"
        "Enforzamiento del Quality Gate: Conforme a los estándares IEEE 730 [5] e IEEE 829 [6], se implementó la bandera restrictiva:\n"
        "    python -m coverage report --fail-under=80\n"
        "Si la cobertura acumulada desciende del 80%, el pipeline aborta la ejecución con código de error 1, bloqueando irreversiblemente el Pull Request. "
        "En la auditoría real, el equipo alcanzó un 88% de cobertura de código, superando con creces la cota exigida."
    )

    add_placeholder(
        doc, "3",
        "EJECUCIÓN DEL PIPELINE CI EN GITHUB ACTIONS CON 88% DE COBERTURA",
        "Tomar captura de pantalla de la pestaña 'Actions' en el repositorio de GitHub (https://github.com/MarcoXMarquez/ispysa-vigilancia-ira-peru/actions) "
        "en modo claro. La imagen debe evidenciar los dos jobs ejecutados ('auditoria-codigo' y 'pruebas-unitarias') con check verde, "
        "y el despliegue del log de consola donde se lea 'TOTAL ... 88%' y el éxito del test runner."
    )

    # =========================================================================
    # SECCIÓN IV: HERRAMIENTAS Y ROLES (PUNTO 3 DE LA RÚBRICA)
    # =========================================================================
    add_heading_ieee(doc, "IV. HERRAMIENTAS Y ROLES A CONSIDERAR EN EL PROCESO (PUNTO 3)", 1)
    
    add_heading_ieee(doc, "A. Ecosistema de Herramientas Tecnológicas y su Función", 2)
    p_iv1 = doc.add_paragraph()
    format_paragraph(p_iv1)
    p_iv1.add_run(
        "El ciclo de vida del desarrollo se fundamenta en un ecosistema tecnológico integrado, combinando herramientas de gobernanza ágil, "
        "aseguramiento de la calidad y computación en la nube:"
    )

    # Tabla de Herramientas
    t_tools = doc.add_table(rows=6, cols=3)
    t_tools.alignment = WD_TABLE_ALIGNMENT.CENTER
    col_w_tools = [Inches(1.8), Inches(1.8), Inches(2.9)]
    
    headers_tools = ["Herramienta", "Categoría / Propósito", "Función en el Flujo de Trabajo"]
    for j, h in enumerate(headers_tools):
        cell = t_tools.rows[0].cells[j]
        cell.width = col_w_tools[j]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, 80, 80, 100, 100)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.bold = True
        r.font.name = "Arial"
        r.font.size = Pt(8.5)
        r.font.color.rgb = RGBColor(255, 255, 255)

    data_tools = [
        ("GitHub Projects (v2)", "Gestión Ágil y CI/CD Integrado", "Tablero visual kanban/scrum nativo. Sincronizado automáticamente con los Pull Requests y ramas del repositorio."),
        ("ZenHub SaaS", "Métricas Avanzadas de Scrum", "Herramienta oficial de IBM agile-tutorial. Proporciona Burndown Charts en tiempo real, velocidad de Sprints y agregación multinivel de Épicas."),
        ("GitHub Actions", "Pipeline DevOps y Quality Gate", "Servidor de integración continua. Ejecuta auditorías estáticas con Flake8 y runners de pruebas unitarias en Ubuntu con Python 3.11."),
        ("Render Cloud Platform", "Hosting Cloud y Despliegue (CD)", "Infraestructura cloud que hospeda el aplicativo en vivo (https://ispysa-vigilancia-ira-peru.onrender.com/) mediante webhooks automáticos al fusionar en main."),
        ("Python 3.11 / Streamlit / Coverage / Flake8", "Stack Analítico y Testing", "Motor analítico de datos (Pandas, Plotly, Scikit-learn, XGBoost) y suite de pruebas unitarias con enforzamiento de cobertura mínima.")
    ]

    for i, row in enumerate(data_tools):
        for j, val in enumerate(row):
            cell = t_tools.rows[i+1].cells[j]
            cell.width = col_w_tools[j]
            set_cell_background(cell, "FFFFFF" if i%2==0 else "F8FAFC")
            set_cell_margins(cell, 60, 60, 80, 80)
            p = cell.paragraphs[0]
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            r.font.color.rgb = COLOR_TEXT

    p_spacer2 = doc.add_paragraph()
    format_paragraph(p_spacer2, space_before=4, space_after=4)

    add_heading_ieee(doc, "B. Deconstrucción de Artefactos Ágiles: Épicas, Historias de Usuario, Sprints y Custom Fields", 2)
    p_iv2 = doc.add_paragraph()
    format_paragraph(p_iv2)
    p_iv2.add_run(
        "Para dotar al proyecto de verdadero rigor ingenieril, se diseñó una taxonomía formal de artefactos ágiles en GitHub Projects y ZenHub:\n\n"
        "1) ¿Qué es una Épica y por qué se definieron así? Una Épica es un contenedor macro que agrupa múltiples historias de usuario orientadas "
        "a un objetivo estratégico de largo plazo. En el proyecto se definieron exactamente 3 Épicas, mapeando 1-to-1 las 3 preguntas de la rúbrica del docente:\n"
        "   • [EPIC-01]: Implementación y Cumplimiento Normativo ISO 9000:2015 en Pipeline Epidemiológico.\n"
        "   • [EPIC-02]: Pipeline DevOps, Flujo Git Flow y Quality Gate de Cobertura (88%).\n"
        "   • [EPIC-03]: Gobernanza del Equipo, Ceremonias Scrum y Ergonomía Institucional (ISO 9241).\n\n"
        "2) ¿Por qué Historias de Usuario? Son la unidad fundamental de entrega de valor al usuario clínico. Se redactaron bajo la sintaxis Scrum estándar: "
        "'Como [rol clínico/técnico], Quiero [capacidad del sistema], Para [beneficio epidemiológico]', acompañadas de Criterios de Aceptación verificables "
        "(Definition of Done - DoD: cobertura >= 80%, linter limpio y peer review) y su respectiva cláusula de trazabilidad ISO 9000.\n\n"
        "3) ¿Qué significan los Custom Fields configurados en GitHub Projects?\n"
        "   • Sprint (Iteration): Campo temporal de 2 semanas de duración que enmarca las tareas comprometidas.\n"
        "   • Estimate (Number): Esfuerzo relativo ponderado en la escala Fibonacci de Story Points (1, 2, 3, 5, 8).\n"
        "   • Epic (Single select): Clasificación estratégica de la tarea dentro de los 3 paquetes de trabajo del docente.\n"
        "   • Priority (Single select): Criticidad operativa (P0-Crítica, P1-Alta, P2-Media).\n"
        "   • Status (Single select): Estado Kanban del flujo de valor (Todo, In Progress, Review/QA, Done)."
    )

    add_placeholder(
        doc, "4",
        "TABLERO SCRUM EN ZENHUB CON LAS 3 ÉPICAS Y STORY POINTS ASIGNADOS",
        "Tomar captura de pantalla de la vista 'Work Tracker' en ZenHub (app.zenhub.com) en modo claro. "
        "La captura debe evidenciar la columna 'New Issues' o 'Product Backlog' con las tarjetas de las 3 Épicas (#1, #3, #4) "
        "y las Historias de Usuario con sus etiquetas de colores (epic, user-story, iso-9000, devops), sus Story Points visibles (badge numérico) "
        "y los avatares asignados a cada integrante."
    )

    add_placeholder(
        doc, "5",
        "GRÁFICO DE QUEMADO (BURNDOWN CHART) EN ZENHUB",
        "Tomar captura de pantalla de la sección 'Reports' -> 'Burndown' en ZenHub en modo claro. "
        "La imagen debe mostrar la curva de progreso del Sprint con el quemado de Story Points hacia la fecha de entrega, "
        "demostrando la velocidad del equipo y el cumplimiento del trabajo planificado."
    )

    add_placeholder(
        doc, "6",
        "VISTA DE TABLA PRODUCT BACKLOG EN GITHUB PROJECTS",
        "Tomar captura de pantalla de la pestaña 'Product Backlog' en GitHub Projects (https://github.com/users/MarcoXMarquez/projects/...) "
        "en modo claro. La tabla debe mostrar claramente las columnas Title, Assignee (con avatares), Status, Epic, Sprint, Estimate (puntos) y Priority."
    )

    add_heading_ieee(doc, "C. Asignación de Roles del Equipo y Matriz RACI", 2)
    p_iv3 = doc.add_paragraph()
    format_paragraph(p_iv3)
    p_iv3.add_run(
        "El equipo de 5 estudiantes de la Escuela Profesional de Ingeniería de Sistemas de la UNSA asumió roles "
        "especializados conforme a las mejores prácticas de Scrum y la matriz de responsabilidades RACI "
        "(Responsible, Accountable, Consulted, Informed):\n\n"
        "• Marco Antonio Marquez Herrera: Scrum Master & QA/DevOps Lead. Custodio del proceso ágil, modelado de ramas en GitHub Flow, "
        "configuración de GitHub Actions y enforzamiento del Quality Gate al 88% de cobertura.\n"
        "• Joel Isaias Condori Leon: Product Owner & Experto de Dominio Clínico. Representante de los requerimientos del MINSA, priorización "
        "del Product Backlog y definición de los umbrales de los semáforos de alerta epidemiológica.\n"
        "• Leonardo Ruben Arce Mayhua: Data Engineer / Backend Lead. Ingesta de series temporales crudas, interpolación censal INEI y diseño de "
        "algoritmos defensivos de tasa segura (safe_rate) en data_service.py.\n"
        "• Jeremy Joshua Perez Huamani: Machine Learning Engineer. Calibración, evaluación empírica y selección del algoritmo predictivo "
        "XGBoost (R2 = 0.935) en model_service.py [9].\n"
        "• Rafael Diego Nina Calizaya: Frontend & UX Engineer. Rediseño visual ministerial sobrio bajo normas ISO 9241, erradicación de AI-Slop "
        "y confección de la Ficha Técnica oficial en app.py."
    )

    # Tabla Matriz RACI
    t_raci = doc.add_table(rows=10, cols=6)
    t_raci.alignment = WD_TABLE_ALIGNMENT.CENTER
    col_w_raci = [Inches(2.5), Inches(0.8), Inches(0.8), Inches(0.8), Inches(0.8), Inches(0.8)]
    
    headers_raci = ["Historia de Usuario (US)", "PO (Joel)", "SM (Marco)", "Data (Leo)", "ML (Jeremy)", "UX (Rafael)"]
    for j, h in enumerate(headers_raci):
        cell = t_raci.rows[0].cells[j]
        cell.width = col_w_raci[j]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, 80, 80, 80, 80)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.bold = True
        r.font.name = "Arial"
        r.font.size = Pt(8)
        r.font.color.rgb = RGBColor(255, 255, 255)

    data_raci = [
        ("US-01: Tasas epidemiológicas y censo", "A", "C", "R", "C", "I"),
        ("US-02: Control de salidas safe_rate()", "I", "A", "R", "C", "I"),
        ("US-03: Modelos predictivos XGBoost", "C", "A", "C", "R", "I"),
        ("US-04: GitHub Flow y .gitignore", "I", "R / A", "C", "C", "C"),
        ("US-05: Pipeline CI en GitHub Actions", "I", "R / A", "C", "C", "C"),
        ("US-06: Quality Gate cobertura >= 80%", "C", "R / A", "C", "C", "C"),
        ("US-07: Matriz RACI y ceremonias Scrum", "R / A", "C", "I", "I", "I"),
        ("US-08: Rediseño visual anti-AI slop", "A", "C", "I", "I", "R"),
        ("US-09: Ficha técnica y glosario MINSA", "A", "C", "C", "C", "R")
    ]

    for i, row in enumerate(data_raci):
        for j, val in enumerate(row):
            cell = t_raci.rows[i+1].cells[j]
            cell.width = col_w_raci[j]
            set_cell_background(cell, "FFFFFF" if i%2==0 else "F8FAFC")
            set_cell_margins(cell, 50, 50, 60, 60)
            p = cell.paragraphs[0]
            if j > 0:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            r.font.color.rgb = COLOR_TITLE if "R" in val or "A" in val else COLOR_MUTED
            if "R" in val or "A" in val:
                r.bold = True

    p_spacer3 = doc.add_paragraph()
    format_paragraph(p_spacer3, space_before=4, space_after=4)

    add_placeholder(
        doc, "7",
        "PLANTILLA DE HISTORIA DE USUARIO EN GITHUB ISSUES",
        "Tomar captura de pantalla de la creación de un nuevo Issue en GitHub (https://github.com/MarcoXMarquez/ispysa-vigilancia-ira-peru/issues/new/choose) "
        "en modo claro. La imagen debe mostrar las dos plantillas disponibles ('Historia de Usuario (Scrum)' y 'Épica de Proyecto') "
        "y el formulario prediseñado con los campos de 'Como/Quiero/Para', Criterios de Aceptación y Cláusula ISO 9000."
    )

    # =========================================================================
    # SECCIÓN V: EVIDENCIAS EMPÍRICAS Y RESULTADOS DE AUDITORÍA
    # =========================================================================
    add_heading_ieee(doc, "V. EVIDENCIAS EMPÍRICAS Y RESULTADOS DE AUDITORÍA", 1)
    p_v1 = doc.add_paragraph()
    format_paragraph(p_v1)
    p_v1.add_run(
        "Para garantizar total transparencia frente al evaluador, la siguiente tabla sintetiza los resultados técnicos "
        "y de calidad alcanzados en la plataforma analítica tras la ejecución de los dos Sprints:"
    )

    # Tabla de Resultados
    t_res = doc.add_table(rows=6, cols=3)
    t_res.alignment = WD_TABLE_ALIGNMENT.CENTER
    col_w_res = [Inches(2.0), Inches(2.0), Inches(2.5)]
    
    headers_res = ["Métrica de Calidad", "Estándar / Umbral Exigido", "Resultado Empírico Obtenido"]
    for j, h in enumerate(headers_res):
        cell = t_res.rows[0].cells[j]
        cell.width = col_w_res[j]
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, 80, 80, 100, 100)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.bold = True
        r.font.name = "Arial"
        r.font.size = Pt(8.5)
        r.font.color.rgb = RGBColor(255, 255, 255)

    data_res = [
        ("Cobertura de Pruebas Unitarias", "Mínimo 80% (--fail-under=80)", "88% de cobertura real (12 pruebas unitarias automatizadas en pytest/unittest)."),
        ("Auditoría Estática de Código", "Cero errores críticos de sintaxis PEP 8", "Aprobado al 100% con Flake8 en pipeline de CI de GitHub Actions."),
        ("Ajuste del Modelo Predictivo", "Capacidad de generalización superior", "XGBoost con R2 = 0.935 en pediatría y 0.890 en geriatría con backtesting de 5 años."),
        ("Tolerancia a Fallos Matemáticos", "Cero caídas por división entre cero", "safe_rate() retorna 0.0 determinista ante denominadores nulos o censos faltantes."),
        ("Disponibilidad en Producción", "Despliegue cloud continuo verificado", "Operativo 24/7 en Render Cloud (https://ispysa-vigilancia-ira-peru.onrender.com/).")
    ]

    for i, row in enumerate(data_res):
        for j, val in enumerate(row):
            cell = t_res.rows[i+1].cells[j]
            cell.width = col_w_res[j]
            set_cell_background(cell, "FFFFFF" if i%2==0 else "F8FAFC")
            set_cell_margins(cell, 60, 60, 80, 80)
            p = cell.paragraphs[0]
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(8)
            r.font.color.rgb = COLOR_TEXT

    p_spacer4 = doc.add_paragraph()
    format_paragraph(p_spacer4, space_before=4, space_after=4)

    # =========================================================================
    # SECCIÓN VI: CONCLUSIONES
    # =========================================================================
    add_heading_ieee(doc, "VI. CONCLUSIONES", 1)
    p_vi1 = doc.add_paragraph()
    format_paragraph(p_vi1)
    p_vi1.add_run(
        "1. La articulación de la norma ISO 9000:2015 con metodologías ágiles demuestra que la agilidad y el rigor normativo "
        "no son mutuamente excluyentes. Los principios de enfoque a procesos y toma de decisiones basada en evidencia encontraron en Scrum "
        "y en el Quality Gate automatizado su vehículo natural de aseguramiento continuo.\n\n"
        "2. La adopción de los patrones de IBM agile-tutorial (desacoplamiento en capa de servicios y GitHub Flow) permitió una transición "
        "limpia desde un prototipo local hacia un microservicio escalable con una suite de 12 pruebas unitarias y 88% de cobertura.\n\n"
        "3. La gobernanza coordinada mediante GitHub Projects v2 y ZenHub garantizó la visibilidad operativa del equipo de 5 integrantes, "
        "permitiendo monitorear el quemado de Story Points (Burndown Chart) y automatizar el flujo de trabajo mediante eventos de Pull Requests.\n\n"
        "4. El rediseño de la interfaz bajo ISO 9241 e ISO/IEC 25010 erradicó distracciones cognitivas de AI-Slop, dotando a los tomadores "
        "de decisiones de salud pública de una herramienta institucional, robusta y clínicamente relevante."
    )

    # =========================================================================
    # SECCIÓN VII: REFERENCIAS (IEEE FORMAT)
    # =========================================================================
    add_heading_ieee(doc, "REFERENCIAS", 1)
    
    references_data = [
        ("[1]", "International Organization for Standardization, ISO 9000:2015: Quality management systems — Fundamentals and vocabulary, Ginebra, Suiza: ISO, 2015."),
        ("[2]", "International Organization for Standardization, ISO/IEC 25010:2011: Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models, Ginebra, Suiza: ISO/IEC, 2011."),
        ("[3]", "International Organization for Standardization, ISO 9241-11:2018: Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts, Ginebra, Suiza: ISO, 2018."),
        ("[4]", "International Organization for Standardization, ISO 9241-210:2019: Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems, Ginebra, Suiza: ISO, 2019."),
        ("[5]", "IEEE Computer Society, IEEE Standard for Software Quality Assurance Processes, IEEE Std 730-2014, pp. 1–138, 2014. doi: 10.1109/IEEESTD.2014.6835311."),
        ("[6]", "IEEE Computer Society, IEEE Standard for Software and System Test Documentation, IEEE Std 829-2008, pp. 1–150, 2008. doi: 10.1109/IEEESTD.2008.4578383."),
        ("[7]", "IBM Corporation, Agile Tutorial: Cloud Native Agile Development with Python and Flask, GitHub Repository, 2018. [En línea]. Disponible: https://github.com/IBM/agile-tutorial."),
        ("[8]", "Centro Nacional de Epidemiología, Prevención y Control de Enfermedades (CDC Perú), Vigilancia Epidemiológica de las Infecciones Respiratorias Agudas (IRA), Ministerio de Salud (MINSA), Lima, Perú, Bol. Epidemiol., vol. 32, no. 52, 2023."),
        ("[9]", "T. Chen and C. Guestrin, \"XGBoost: A Scalable Tree Boosting System,\" en Proc. 22nd ACM SIGKDD Int. Conf. Knowl. Discovery Data Mining (KDD), San Francisco, CA, 2016, pp. 785–794. doi: 10.1145/2939672.2939785."),
        ("[10]", "K. Schwaber and J. Sutherland, The Scrum Guide: The Definitive Guide to Scrum: The Rules of the Game, Scrum.org, 2020. [En línea]. Disponible: https://scrumguides.org.")
    ]

    for ref_num, ref_text in references_data:
        p_ref = doc.add_paragraph()
        format_paragraph(p_ref, space_before=2, space_after=3)
        r_num = p_ref.add_run(f"{ref_num} ")
        r_num.bold = True
        r_num.font.name = "Arial"
        r_num.font.size = Pt(8.5)
        r_txt = p_ref.add_run(ref_text)
        r_txt.font.name = "Arial"
        r_txt.font.size = Pt(8.5)
        r_txt.font.color.rgb = COLOR_TEXT

    # Guardar documento
    doc.save(output_path)
    print(f"Documento IEEE Word (.docx) guardado exitosamente en: {output_path}")

if __name__ == "__main__":
    out_file = sys.argv[1] if len(sys.argv) > 1 else "INFORME_TECNICO_TRABAJO_PARCIAL_2.docx"
    build_ieee_docx(out_file)
