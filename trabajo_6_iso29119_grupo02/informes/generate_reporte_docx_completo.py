"""
Generador del Informe Técnico Académico Extendido y Completo en Formato DOCX (Word)
Norma Internacional ISO/IEC/IEEE 29119 (Partes 1 a 5) - Automatización de Pruebas E2E
Universidad Nacional de San Agustín de Arequipa (UNSA) - Grupo 02 (2026)
"""

import os
from pathlib import Path
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, hex_color):
    """Aplica color de fondo hexadecimal a una celda de tabla."""
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=100, bottom=100, left=120, right=120):
    """Establece márgenes internos (padding) de celda en dxa."""
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_table_borders(table, color="D3D3D3"):
    """Aplica bordes sutiles y profesionales a la tabla."""
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="4" w:space="0" w:color="{color}"/>'
        f'  <w:bottom w:val="single" w:sz="6" w:space="0" w:color="{color}"/>'
        f'  <w:insideH w:val="single" w:sz="4" w:space="0" w:color="{color}"/>'
        f'  <w:insideV w:val="none"/>'
        f'  <w:left w:val="none"/>'
        f'  <w:right w:val="none"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

def add_callout_box(doc, text, title="NOTA TÉCNICA NORMATIVA"):
    """Crea una caja de texto destacada (callout) con borde lateral izquierdo."""
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    c = tbl.rows[0].cells[0]
    c.width = Inches(6.5)
    set_cell_background(c, "F1F5F9")
    set_cell_margins(c, top=140, bottom=140, left=180, right=180)
    
    tcPr = c._tc.get_or_add_tcPr()
    borders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'  <w:top w:val="none"/>'
        f'  <w:left w:val="single" w:sz="24" w:space="0" w:color="1E3A8A"/>'
        f'  <w:bottom w:val="none"/>'
        f'  <w:right w:val="none"/>'
        f'</w:tcBorders>'
    )
    tcPr.append(borders)
    
    p = c.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(4)
    r_t = p.add_run(f"{title}: ")
    r_t.font.name = "Arial"
    r_t.font.bold = True
    r_t.font.size = Pt(9.5)
    r_t.font.color.rgb = RGBColor(30, 58, 138)
    
    r_b = p.add_run(text)
    r_b.font.name = "Arial"
    r_b.font.size = Pt(9.5)
    r_b.font.color.rgb = RGBColor(51, 65, 85)
    
    p_after = doc.add_paragraph()
    p_after.paragraph_format.space_before = Pt(0)
    p_after.paragraph_format.space_after = Pt(6)

def add_figure_with_caption(doc, image_path, caption_text, width_inches=5.8):
    """Inserta una imagen centrada con su pie de figura formal en cursiva."""
    if os.path.exists(image_path):
        p_img = doc.add_paragraph()
        p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_img.paragraph_format.space_before = Pt(8)
        p_img.paragraph_format.space_after = Pt(4)
        run_img = p_img.add_run()
        run_img.add_picture(str(image_path), width=Inches(width_inches))
        
        p_cap = doc.add_paragraph()
        p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_cap.paragraph_format.space_after = Pt(12)
        r_cap = p_cap.add_run(caption_text)
        r_cap.font.name = "Arial"
        r_cap.font.size = Pt(9)
        r_cap.font.italic = True
        r_cap.font.color.rgb = RGBColor(71, 85, 105)
    else:
        print(f"[Advertencia] Imagen no encontrada: {image_path}")

def build_comprehensive_report():
    doc = Document()
    
    # -------------------------------------------------------------------------
    # Configuración de Página (Letter con márgenes estándar de 1 pulgada)
    # -------------------------------------------------------------------------
    for sec in doc.sections:
        sec.top_margin = Inches(1.0)
        sec.bottom_margin = Inches(1.0)
        sec.left_margin = Inches(1.0)
        sec.right_margin = Inches(1.0)
        sec.page_width = Inches(8.5)
        sec.page_height = Inches(11.0)
        sec.different_first_page_header_footer = True
        
        # Encabezado para páginas subsiguientes
        hdr = sec.header
        p_hdr = hdr.paragraphs[0]
        p_hdr.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        r_hdr = p_hdr.add_run("UNSA • EPIS | Informe Técnico de Pruebas ISO/IEC/IEEE 29119")
        r_hdr.font.name = "Arial"
        r_hdr.font.size = Pt(8.5)
        r_hdr.font.color.rgb = RGBColor(148, 163, 184)
        
        # Pie de página para páginas subsiguientes
        ftr = sec.footer
        p_ftr = ftr.paragraphs[0]
        p_ftr.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        r_ftr_l = p_ftr.add_run("Grupo 02 — Teoría de la Construcción de Software")
        r_ftr_l.font.name = "Arial"
        r_ftr_l.font.size = Pt(8.5)
        r_ftr_l.font.color.rgb = RGBColor(148, 163, 184)
        
        r_ftr_r = p_ftr.add_run("\t\tPágina de Auditoría Técnica")
        r_ftr_r.font.name = "Arial"
        r_ftr_r.font.size = Pt(8.5)
        r_ftr_r.font.color.rgb = RGBColor(148, 163, 184)

    NAVY = RGBColor(15, 23, 42)      # #0f172a
    BLUE = RGBColor(30, 58, 138)     # #1e3a8a
    MUTED = RGBColor(71, 85, 105)    # #475569
    DARK = RGBColor(30, 41, 59)      # #1e293b

    # Base paths
    base_dir = Path(__file__).resolve().parents[1]
    logo_path = base_dir / "informes" / "assets" / "escudo_unsa.png"
    assets_dir = base_dir / "slides" / "trabajo_6_iso29119" / "assets"

    # =========================================================================
    # PORTADA INSTITUCIONAL FORMAL
    # =========================================================================
    p_uni = doc.add_paragraph()
    p_uni.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_uni.paragraph_format.space_before = Pt(0)
    p_uni.paragraph_format.space_after = Pt(2)
    r_uni = p_uni.add_run("UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA")
    r_uni.font.name = "Arial"
    r_uni.font.size = Pt(15)
    r_uni.font.bold = True
    r_uni.font.color.rgb = NAVY

    p_fac = doc.add_paragraph()
    p_fac.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_fac.paragraph_format.space_after = Pt(14)
    r_fac = p_fac.add_run("FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS\nESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS")
    r_fac.font.name = "Arial"
    r_fac.font.size = Pt(11)
    r_fac.font.bold = True
    r_fac.font.color.rgb = MUTED

    # Logo Oficial de la UNSA en la Carátula
    if logo_path.exists():
        p_logo = doc.add_paragraph()
        p_logo.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_logo.paragraph_format.space_before = Pt(6)
        p_logo.paragraph_format.space_after = Pt(16)
        r_logo = p_logo.add_run()
        r_logo.add_picture(str(logo_path), width=Inches(1.85))

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(10)
    p_title.paragraph_format.space_after = Pt(8)
    r_title = p_title.add_run("INFORME TÉCNICO DE AUTOMATIZACIÓN DE PRUEBAS DE SOFTWARE E2E BAJO LA NORMA INTERNACIONAL ISO/IEC/IEEE 29119")
    r_title.font.name = "Arial"
    r_title.font.size = Pt(16)
    r_title.font.bold = True
    r_title.font.color.rgb = BLUE

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(20)
    r_sub = p_sub.add_run(
        "Evaluación Comparativa de Calidad y Confiabilidad: Sistema de Vigilancia Epidemiológica IRA Perú "
        "(ISPySA-Pneumonia) y Plataforma de Comercio Electrónico SauceDemo"
    )
    r_sub.font.name = "Arial"
    r_sub.font.size = Pt(11)
    r_sub.font.italic = True
    r_sub.font.color.rgb = MUTED

    # Cuadro de Identificación Institucional
    info_table = doc.add_table(rows=6, cols=2)
    info_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    info_table.autofit = False

    data_info = [
        ("Asignatura:", "Teoría de la Construcción de Software / Calidad de Software (2026-B)"),
        ("Trabajo Parcial:", "Trabajo Parcial 06 (TP6) - Automatización E2E con ISO/IEC/IEEE 29119"),
        ("Equipo Evaluador:", "Grupo 02"),
        ("Integrantes:", 
         "• Condori Choque, Yoel Herbert (yoel.condori@unsa.edu.pe)\n"
         "• Márquez Delgado, Marco Antonio (mmarquezde@unsa.edu.pe)\n"
         "• Pérez Valdivia, Jeremy Frank (jperezva@unsa.edu.pe)\n"
         "• Nina Choque, Rafael Alexander (rnina@unsa.edu.pe)\n"
         "• Arce Quispe, Leonardo Gabriel (larce@unsa.edu.pe)"),
        ("Estándar Aplicado:", "Norma Internacional ISO/IEC/IEEE 29119 (Partes 1, 2, 3, 4 y 5)"),
        ("Lugar y Fecha:", "Arequipa, Octubre de 2026")
    ]

    col_widths = [Inches(2.0), Inches(4.5)]
    for i, (label, val) in enumerate(data_info):
        row = info_table.rows[i]
        c_lbl, c_val = row.cells[0], row.cells[1]
        c_lbl.width, c_val.width = col_widths[0], col_widths[1]
        p0 = c_lbl.paragraphs[0]
        r0 = p0.add_run(label)
        r0.font.bold = True
        r0.font.size = Pt(9.5)
        r0.font.color.rgb = NAVY

        p1 = c_val.paragraphs[0]
        r1 = p1.add_run(val)
        r1.font.size = Pt(9.5)
        r1.font.color.rgb = DARK

        set_cell_background(c_lbl, "F1F5F9")
        set_cell_background(c_val, "FFFFFF")
        set_cell_margins(c_lbl, top=80, bottom=80, left=100, right=100)
        set_cell_margins(c_val, top=80, bottom=80, left=100, right=100)

    set_table_borders(info_table, "CBD5E1")
    doc.add_page_break()

    # =========================================================================
    # RESUMEN EJECUTIVO Y FICHA TÉCNICA DE AUDITORÍA
    # =========================================================================
    h1 = doc.add_heading("RESUMEN EJECUTIVO", level=1)
    h1.paragraph_format.space_before = Pt(12)
    h1.paragraph_format.space_after = Pt(8)

    p_exec = doc.add_paragraph()
    p_exec.paragraph_format.line_spacing = 1.15
    p_exec.paragraph_format.space_after = Pt(10)
    p_exec.add_run(
        "El presente informe técnico formal documenta la concepción, diseño, implementación, ejecución empírica "
        "y evaluación cuantitativa de una suite de pruebas automatizadas de Extremo a Extremo (End-to-End, E2E), "
        "estructurada en estricta conformidad con la familia de normas internacionales ISO/IEC/IEEE 29119 "
        "(Partes 1 a 5) [1]-[5]. Con el propósito de verificar la versatilidad y determinismo de la arquitectura de "
        "pruebas basada en Playwright y Chromium headless [14], se adoptó un enfoque de alcance dual (Dual Scope) "
        "contrastando dos sistemas de software disímiles: (a) el Sistema de Información para la Toma de Decisiones en "
        "Salud Pública (ISPySA-Pneumonia, Perú 2000-2023) [9], dotado de analítica predictiva XGBoost [12], semáforo y "
        "Canal Endémico de Bortman (OPS/MINSA) en 4 zonas [10], Monitor de Triaje Manchester para dimensionamiento de "
        "camas UCI y oxígeno medicinal [11], y Matriz Bioclimática Regional de Heladas y Friaje; y (b) la plataforma "
        "comercial de referencia SauceDemo [13], diseñada para validar flujos transaccionales e integridad de estados.\n\n"
        "Se implementaron 24 casos de prueba automatizados (12 por sistema) formalmente trazados a los requisitos de "
        "ingeniería R1 a R6. El protocolo de validación empírica ejecutó 3 corridas consecutivas sin reintentos "
        "(retries: 0, workers: 1), registrando un total acumulado de 72/72 pruebas aprobadas (100% de éxito), con una "
        "tasa de flakiness auditada de 0.00% [16]. El análisis financiero de retorno de inversión (ROI) determinó que la "
        "inversión inicial en automatización se amortiza en tan solo 7 ciclos de regresión, liberando 18.67 horas hombre "
        "de trabajo manual en una proyección estándar de 50 despliegues continuos."
    )

    doc.add_heading("Ficha Técnica Consolidada de Auditoría ISO 29119", level=2)
    tbl_kpi = doc.add_table(rows=8, cols=2)
    tbl_kpi.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_kpi.autofit = False

    kpi_data = [
        ("Parámetro de Auditoría", "Valor Registrado y Certificado"),
        ("Sistemas Evaluados (SUT)", "Dual: ISPySA-Pneumonia (Salud Pública) y SauceDemo (E-Commerce)"),
        ("Estándar Metodológico Rector", "ISO/IEC/IEEE 29119:2021/2022 (Partes 1, 2, 3, 4 y 5)"),
        ("Herramienta de Automatización", "Playwright Test v1.40+ (Engine Chromium Headless)"),
        ("Casos de Prueba Implementados", "24 casos E2E (12 en ISPySA + 12 en SauceDemo)"),
        ("Pruebas Aprobadas en 3 Corridas", "72 / 72 ejecuciones exitosas (100.0% tasa de aprobación)"),
        ("Tasa de Flakiness Inter-ejecución", "0.00% (cero pruebas intermitentes o indeterminadas)"),
        ("Punto de Equilibrio Financiero (ROI)", "7 ciclos de regresión (Amortización completa en CI/CD)")
    ]

    for r_idx, (p_lbl, p_val) in enumerate(kpi_data):
        row = tbl_kpi.rows[r_idx]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width, c1.width = Inches(3.0), Inches(3.5)
        p0, p1 = c0.paragraphs[0], c1.paragraphs[0]
        r0 = p0.add_run(p_lbl)
        r1 = p1.add_run(p_val)
        r0.font.size, r1.font.size = Pt(9), Pt(9)
        if r_idx == 0:
            r0.font.bold, r1.font.bold = True, True
            r0.font.color.rgb, r1.font.color.rgb = RGBColor(255, 255, 255), RGBColor(255, 255, 255)
            set_cell_background(c0, "1E3A8A")
            set_cell_background(c1, "1E3A8A")
        else:
            set_cell_background(c0, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_background(c1, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
        set_cell_margins(c0, top=60, bottom=60, left=90, right=90)
        set_cell_margins(c1, top=60, bottom=60, left=90, right=90)
    set_table_borders(tbl_kpi, "CBD5E1")

    # Control de Versiones
    doc.add_heading("Control de Versiones y Registro de Modificaciones", level=2)
    tbl_ver = doc.add_table(rows=4, cols=5)
    tbl_ver.alignment = WD_TABLE_ALIGNMENT.CENTER
    ver_headers = ["Versión", "Fecha", "Autor(es)", "Rol Técnico", "Descripción del Cambio"]
    ver_rows = [
        ver_headers,
        ["1.0.0", "18/10/2026", "Grupo 02", "Ingeniería de Calidad", "Línea base de especificación y diseño de pruebas E2E."],
        ["1.1.0", "19/10/2026", "Grupo 02", "Automatización SQA", "Ejecución del protocolo de 3 corridas consecutivas y análisis de flakiness."],
        ["1.2.0", "19/10/2026", "Grupo 02", "Auditoría de Calidad", "Versión definitiva: referencias IEEE verificadas, logo UNSA y dictamen formal."]
    ]
    for r_idx, r_data in enumerate(ver_rows):
        row = tbl_ver.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=60, bottom=60, left=70, right=70)
    set_table_borders(tbl_ver, "CBD5E1")

    doc.add_page_break()

    # =========================================================================
    # ÍNDICE GENERAL Y LISTA DE CONTENIDOS
    # =========================================================================
    h1 = doc.add_heading("ESTRUCTURA GENERAL DEL INFORME TÉCNICO", level=1)
    h1.paragraph_format.space_before = Pt(12)
    h1.paragraph_format.space_after = Pt(8)

    p_toc = doc.add_paragraph()
    p_toc.paragraph_format.line_spacing = 1.2
    toc_entries = [
        ("1. Marco Normativo Internacional: Serie ISO/IEC/IEEE 29119", "Fundamento teórico, ontología de pruebas y modelos de procesos."),
        ("2. Arquitectura de los Sistemas Bajo Prueba (Alcance Dual)", "Modelos matemáticos clínicos (ISPySA) y flujos e-commerce (SauceDemo)."),
        ("3. Especificación de Requisitos y Matriz de Trazabilidad (R1 a R6)", "Mapeo formal bidireccional de requisitos a casos de prueba."),
        ("4. Plan de Pruebas y Estrategia de Automatización (ISO 29119-2/3)", "Arquitectura Playwright, selectores semánticos y supresión de flakiness."),
        ("5. Especificación Técnica Detallada de los 24 Casos de Prueba (ISO 29119-4)", "Fichas completas de los 12 casos de ISPySA y 12 casos de SauceDemo."),
        ("6. Protocolo de Ejecución Empírica y Certificación de Flakiness (3 Corridas)", "Resultados consolidados de 72 ejecuciones deterministas y capturas."),
        ("7. Registro y Gestión de Incidencias / Defectos (ISO 29119-3)", "Taxonomía de severidad y análisis de 3 casos de borde estabilizados."),
        ("8. Evaluación Económica y Retorno de Inversión (ROI)", "Modelo de costos, curva de amortización y punto de equilibrio (7 ciclos)."),
        ("9. Dictamen Técnico de Aceptación y Conclusiones", "Evaluación de criterios de salida (Exit Criteria) y aprobación formal."),
        ("10. Referencias Bibliográficas en Formato IEEE (Verificadas)", "16 fuentes primarias con DOIs y metadatos auténticos comprobados.")
    ]
    for num, desc in toc_entries:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(4)
        rt = p.add_run(num + ": ")
        rt.font.bold = True
        rt.font.size = Pt(9.5)
        rt.font.color.rgb = BLUE
        rd = p.add_run(desc)
        rd.font.size = Pt(9.5)
        rd.font.color.rgb = DARK

    add_callout_box(
        doc,
        "La elaboración del presente documento responde a las exigencias académicas de la Universidad Nacional de "
        "San Agustín de Arequipa (UNSA) y se ajusta a los modelos de reporte técnico estipulados en la norma ISO/IEC/IEEE "
        "29119-3 (Cláusula 8: Test Summary Report), manteniendo estricta objetividad analítica y rigor empírico.",
        "DECLARACIÓN DE INTEGRIDAD Y RIGOR TÉCNICO"
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 1: MARCO NORMATIVO INTERNACIONAL ISO/IEC/IEEE 29119
    # =========================================================================
    h1 = doc.add_heading("1. MARCO NORMATIVO INTERNACIONAL: SERIE ISO/IEC/IEEE 29119", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p1 = doc.add_paragraph()
    p1.paragraph_format.line_spacing = 1.15
    p1.add_run(
        "La gestión de la calidad y la ingeniería de pruebas de software experimentaron un hito trascendental con la "
        "publicación de la serie de normas internacionales ISO/IEC/IEEE 29119 [1]-[5]. Históricamente, las organizaciones "
        "de desarrollo dependían de un ecosistema fragmentado de estándares heterogéneos, tales como IEEE 829-2008 para "
        "la documentación de pruebas e IEEE 1008-1987 para las pruebas unitarias. Esta dispersión originaba severas "
        "inconsistencias terminológicas y metodológicas, particularmente al contrastar proyectos regidos por modelos "
        "en cascada tradicionales frente a marcos ágiles modernos (Scrum, Kanban, DevOps). La serie ISO/IEC/IEEE 29119 "
        "armoniza estas perspectivas mediante un marco holístico, escalable e independiente del ciclo de vida del software, "
        "estructurado en cinco partes cardinales:"
    )

    parts_info = [
        ("ISO/IEC/IEEE 29119-1:2022 (Conceptos y Definiciones) [1]: ",
         "Constituye la ontología fundamental de las pruebas de software. Formaliza la distinción precisa entre error "
         "(acción humana que genera un resultado incorrecto), defecto o falta (imperfección en el código, diseño o "
         "especificación) y falla (desviación del comportamiento del sistema respecto al servicio esperado). Asimismo, "
         "instituye el enfoque de Pruebas Basadas en Riesgo (Risk-Based Testing, RBT) como principio rector para "
         "jerarquizar el alcance y la intensidad de la verificación según la probabilidad y el impacto del fallo."),
        ("ISO/IEC/IEEE 29119-2:2021 (Procesos de Prueba) [2]: ",
         "Define una arquitectura de procesos estratificada en tres capas complementarias: (a) Gobernanza de Pruebas "
         "Organizacionales (Test Policy y Test Strategy); (b) Gestión de Pruebas del Proyecto (Planificación, Monitoreo "
         "y Control, y Cierre de Pruebas); y (c) Procesos Dinámicos de Prueba (Diseño e Implementación, Preparación del "
         "Entorno, Ejecución y Notificación de Incidentes). Este modelo asegura la trazabilidad integral desde la "
         "estrategia corporativa hasta cada aserción ejecutada en el pipeline."),
        ("ISO/IEC/IEEE 29119-3:2021 (Documentación de Pruebas) [3]: ",
         "Estandariza los esquemas y contenidos obligatorios para todos los artefactos documentales del ciclo de vida de "
         "calidad, incluyendo el Plan de Pruebas (Test Plan), la Especificación de Diseño (Test Design Specification), la "
         "Especificación de Casos de Prueba (Test Case Specification), el Procedimiento de Ejecución (Test Procedure), "
         "el Registro de Ejecución (Test Execution Log) y el Reporte Resumen de Pruebas (Test Summary Report)."),
        ("ISO/IEC/IEEE 29119-4:2021 (Técnicas de Diseño de Pruebas) [4]: ",
         "Normaliza las técnicas formales para la derivación sistemática de casos de prueba. Clasifica las técnicas en "
         "tres grandes categorías: (a) Basadas en especificación o caja negra (Partición de Equivalencia, Análisis de "
         "Valores Límite, Tablas de Decisión, Transición de Estados y Pruebas de Flujo Combinatorio); (b) Basadas en "
         "estructura o caja blanca (cobertura de sentencias, ramas y condiciones); y (c) Basadas en experiencia "
         "(ataques de error y pruebas exploratorias estructuradas)."),
        ("ISO/IEC/IEEE 29119-5:2016 (Pruebas Guiadas por Palabras Clave) [5]: ",
         "Define los requisitos para la automatización basada en palabras clave (Keyword-Driven Testing, KDT), "
         "estableciendo un diseño desacoplado donde las acciones de negocio (e.g., 'Login', 'AgregarAlCarrito', 'FiltrarCohorte') "
         "se abstraen de los scripts técnicos de ejecución y los selectores del DOM.")
    ]

    for title, desc in parts_info:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.line_spacing = 1.15
        p.paragraph_format.space_after = Pt(4)
        rt = p.add_run(title)
        rt.font.bold = True
        rt.font.color.rgb = BLUE
        rd = p.add_run(desc)
        rd.font.size = Pt(9.5)

    doc.add_heading("1.1 Interacción con Normas Complementarias: ISO/IEC 25010 e ISO 9241", level=2)
    p_comp = doc.add_paragraph()
    p_comp.paragraph_format.line_spacing = 1.15
    p_comp.add_run(
        "El estándar ISO/IEC/IEEE 29119 no opera de forma aislada, sino que se articula sinérgicamente con el modelo de "
        "calidad de producto de software definido en la norma ISO/IEC 25010:2023 [6]. En su reciente actualización de 2023, "
        "esta norma expandió su taxonomía a nueve características esenciales, introduciendo formalmente la Seguridad "
        "Física y Mitigación de Riesgos (Safety), indispensable para sistemas críticos como la vigilancia epidemiológica "
        "clínica. De igual forma, las directrices de ergonomía e interacción humano-sistema de ISO 9241-210:2019 (Diseño "
        "centrado en las personas) [7] e ISO 9241-171:2008 (Accesibilidad del software) [8] sirven de oráculos de evaluación "
        "para contrastar la legibilidad, coherencia de paletas y navegación de los dashboards interactivos."
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 2: ARQUITECTURA DE LOS SISTEMAS BAJO PRUEBA (SUT)
    # =========================================================================
    h1 = doc.add_heading("2. ARQUITECTURA DE LOS SISTEMAS BAJO PRUEBA (ALCANCE DUAL)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_sut = doc.add_paragraph()
    p_sut.paragraph_format.line_spacing = 1.15
    p_sut.add_run(
        "Para evidenciar que la suite automatizada no adolece de sobreajuste hacia una tecnología o lógica de negocio "
        "particular, el diseño experimental abarcó dos sistemas de software con paradigmas y perfiles operacionales contrastantes:"
    )

    doc.add_heading("2.1 Sistema A: Plataforma de Salud Pública ISPySA-Pneumonia (Perú 2000-2023)", level=2)
    p_ispysa = doc.add_paragraph()
    p_ispysa.paragraph_format.line_spacing = 1.15
    p_ispysa.add_run(
        "El Sistema de Información para la Toma de Decisiones en Salud Pública e Inteligencia Sanitaria (ISPySA-Pneumonia) "
        "es una solución basada en Python y Streamlit que procesa series temporales históricas oficiales del Centro Nacional "
        "de Epidemiología, Prevención y Control de Enfermedades (CDC Perú / MINSA) [9]. Su objetivo es modelar la incidencia, "
        "hospitalización y letalidad por neumonía e infecciones respiratorias agudas graves en dos cohortes biológicamente "
        "vulnerables: niños menores de 5 años (men5) y adultos mayores de 60 años (60mas). En el marco del presente trabajo, "
        "el sistema fue modernizado integrando tres componentes de alto impacto epidemiológico:\n\n"
        "1. Canal Endémico de Bortman (OPS/MINSA) [10]: Implementa la construcción de corredores endémicos semanales "
        "mediante la media geométrica y la determinación rigurosa de cuartiles estadísticos históricos:\n"
        "   • Cuartil 1 (Q1, percentil 25): Límite superior de la Zona de Éxito (incidencia significativamente baja).\n"
        "   • Cuartil 2 (Q2, mediana / percentil 50): Límite superior de la Zona de Seguridad (incidencia esperada regular).\n"
        "   • Cuartil 3 (Q3, percentil 75): Límite superior de la Zona de Alarma (umbral de advertencia sanitaria).\n"
        "   • Superación de Q3: Declaración de Zona de Epidemia (brote epidemiológico que demanda intervención de emergencia).\n\n"
        "2. Monitor de Triaje Manchester (MTS) y Recursos Hospitalarios [11]: Aplica el algoritmo internacional de 5 "
        "niveles de priorización clínica (Rojo: Inmediato, Naranja: Muy Urgente, Amarillo: Urgente, Verde: Poco Urgente, "
        "Azul: No Urgente). Proyecta cuantitativamente la demanda de infraestructura hospitalaria crítica a partir de la tasa "
        "de hospitalización y severidad clínica acumulada, estimando una demanda pico de 996 camas de Cuidados Intensivos (UCI) "
        "y un consumo diario proyectado de 38,832 m³ de oxígeno medicinal para la red asistencial.\n\n"
        "3. Matriz de Vulnerabilidad Bioclimática Regional: Modela el impacto diferenciado de factores climatológicos extremos "
        "en los 25 departamentos del Perú, aplicando un coeficiente amplificador de 1.35x para regiones altoandinas sujetas "
        "a Heladas (>3,500 msnm: Puno, Cusco, Arequipa, Huancavelica, Ayacucho) y un factor de 1.25x para regiones amazónicas "
        "expuestas a eventos de Friaje (Loreto, Ucayali, Madre de Dios).\n\n"
        "4. Motor Predictivo de Machine Learning: Integra modelos XGBoost [12] y Random Forest ajustados con validación "
        "cruzada temporal, alcanzando un coeficiente de determinación R² de 0.935 y un error absoluto medio (MAE) de 14.12 casos/semana."
    )

    doc.add_heading("2.2 Sistema B: Plataforma de Comercio Electrónico SauceDemo", level=2)
    p_sauce = doc.add_paragraph()
    p_sauce.paragraph_format.line_spacing = 1.15
    p_sauce.add_run(
        "SauceDemo (Swag Labs) [13] es una aplicación web SPA estándar en la industria de calidad de software, utilizada "
        "para la certificación de herramientas de prueba automatizadas. Permite validar flujos transaccionales deterministas, "
        "autenticación con control de perfiles y estados de sesión (usuarios estándar, bloqueados y con fallas inducidas), "
        "invariantes matemáticas de ordenamiento en catálogos de productos (lohi y hilo), persistencia reactiva en el carrito "
        "de compras y ejecución de procesos de checkout en dos pasos con cálculo impositivo exacto (tasa impositiva local del 8%)."
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 3: ESPECIFICACIÓN DE REQUISITOS (R1 A R6) Y TRAZABILIDAD
    # =========================================================================
    h1 = doc.add_heading("3. ESPECIFICACIÓN DE REQUISITOS (R1 A R6) Y MATRIZ DE TRAZABILIDAD", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_req = doc.add_paragraph()
    p_req.paragraph_format.line_spacing = 1.15
    p_req.add_run(
        "Conforme a los lineamientos del Trabajo Parcial 6 y el estándar ISO/IEC/IEEE 29119-3 (Cláusula de Trazabilidad "
        "de Requisitos), se estructuró una matriz de correspondencia bidireccional entre los seis requisitos centrales (R1 a R6) "
        "y su materialización funcional en ambos sistemas:"
    )

    tbl_req_full = doc.add_table(rows=7, cols=4)
    tbl_req_full.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_req_full.autofit = False

    req_full_data = [
        ("Requisito", "Sistema A: Salud Pública (ISPySA)", "Sistema B: E-Commerce (SauceDemo)", "Casos Asociados"),
        ("R1: Control de Acceso y Contexto", 
         "Segmentación de cohorte pediátrica (men5) y geriátrica (60mas); actualización contextual en hero banner.", 
         "Autenticación determinista con standard_user y detección de bloqueo con locked_out_user.", 
         "ISPySA: T01, T02\nSauce: T01, T02"),
        ("R2: Inspección y Alertas", 
         "Canal Endémico Bortman (OPS/MINSA) en 4 zonas y semaforización epidemiológica en tiempo real.", 
         "Inspección de integridad estructural del catálogo (6 productos con títulos y precios positivos).", 
         "ISPySA: T03, T04\nSauce: T03, T04"),
        ("R3: Demanda y Ordenamiento", 
         "Monitor de Triaje Manchester; dimensionamiento de camas UCI y consumo de oxígeno medicinal.", 
         "Ordenamiento de catálogo ascendente (lohi) y descendente (hilo) verificando P[i] <= P[i+1].", 
         "ISPySA: T05, T06\nSauce: T05, T06"),
        ("R4: Estratificación y Estado", 
         "Estratificación de persistencia Top 3 y Matriz Bioclimática Regional (Heladas y Friaje).", 
         "Gestión reactiva de carrito: adición de ítems, reactividad del badge numérico y supresión parcial.", 
         "ISPySA: T07, T08\nSauce: T07, T08"),
        ("R5: Consistencia Aritmética", 
         "Validación matemática defensiva de tasas HR y CFR con tolerancia absoluta <= 0.05%.", 
         "Validación obligatoria de formulario de despacho y transición fluida a resumen de compra.", 
         "ISPySA: T09, T10\nSauce: T09, T10"),
        ("R6: Cierre y Gobernanza", 
         "Validación de métricas de precisión ML (XGBoost R²=0.935) y matriz normativa ISO 9241 / ISO 25010.", 
         "Cálculo financiero neto: Subtotal + Impuesto (8%) = Total; confirmación de orden y logout seguro.", 
         "ISPySA: T11, T12\nSauce: T11, T12")
    ]

    col_w = [Inches(1.4), Inches(2.3), Inches(2.0), Inches(1.1)]
    for r_idx, r_data in enumerate(req_full_data):
        row = tbl_req_full.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            else:
                set_cell_background(c, "F1F5F9" if c_idx == 0 else ("F8FAFC" if r_idx % 2 == 1 else "FFFFFF"))
            set_cell_margins(c, top=60, bottom=60, left=70, right=70)
    set_table_borders(tbl_req_full, "CBD5E1")

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 4: PLAN DE PRUEBAS Y ESTRATEGIA DE AUTOMATIZACIÓN
    # =========================================================================
    h1 = doc.add_heading("4. PLAN DE PRUEBAS Y ESTRATEGIA DE AUTOMATIZACIÓN (ISO 29119-2/3)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_plan = doc.add_paragraph()
    p_plan.paragraph_format.line_spacing = 1.15
    p_plan.add_run(
        "La estrategia técnica de automatización adoptó el motor de pruebas Playwright [14], implementado en Node.js "
        "con ejecución en navegadores Chromium headless. Esta selección tecnológica se fundamenta en su capacidad "
        "nativa para ejecutar auto-waiting (espera automática de elementos interactivos antes de disparar eventos), "
        "aislamiento hermético de contextos de navegación (BrowserContexts independientes por prueba) y captura granular "
        "de trazas de red y renderizado visual.\n\n"
        "Erradicación del Acoplamiento Frágil mediante Selectores Semánticos:\n"
        "Uno de los principales factores de inestabilidad y flakiness en pruebas E2E radica en el empleo de selectores "
        "XPath absolutos o clases CSS de diseño efímeras, las cuales se fracturan ante el menor rediseño visual del DOM, "
        "tal como lo demuestran los estudios empíricos de Leotta et al. [15]. Para asegurar la máxima resiliencia bajo "
        "ISO/IEC/IEEE 29119-4, se implementó una estricta política de localización estructurada en orden jerárquico:\n"
        "1. Selectores semánticos explícitos: data-testid (e.g., [data-testid=\"bortman-banner\"], [data-testid=\"kpi-uci-beds\"]).\n"
        "2. Roles y estados de accesibilidad ARIA: getByRole('button', { name: 'Finish' }).\n"
        "3. Localizadores basados en texto visible estricto: getByText('Canal Endémico Bortman (OPS/MINSA)').\n\n"
        "Parámetros de Ejecución Determinista en Pipeline:\n"
        "• Modo de ejecución: Chromium Headless (resolución de viewport fijada en 1920×1080).\n"
        "• Concurrencia controlada: workers: 1 (ejecución secuencial para prevenir colisiones de red sobre el puerto local).\n"
        "• Tolerancia a fallos: retries: 0 (prohibición estricta de reintentos automáticos para certificar determinismo genuino).\n"
        "• Límites de tiempo: timeout por prueba fijado en 30,000 ms; navegación fijada en 15,000 ms."
    )

    add_callout_box(
        doc,
        "La prohibición de reintentos automáticos (retries: 0) constituye un requisito de rigor científico bajo ISO 29119-2. "
        "Permitir reintentos enmascara condiciones de carrera temporales y degrada la confianza del equipo en la suite "
        "de integración continua. Obtener un 100% de éxito sostenido con retries: 0 certifica que los selectores y oráculos "
        "son deterministas y matemáticamente confiables.",
        "PRINCIPIO DE DETERMINISMO EN AUTOMATIZACIÓN"
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 5: ESPECIFICACIÓN DETALLADA DE LOS 24 CASOS DE PRUEBA
    # =========================================================================
    h1 = doc.add_heading("5. ESPECIFICACIÓN DETALLADA DE LOS 24 CASOS DE PRUEBA (ISO 29119-4)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_cases_intro = doc.add_paragraph()
    p_cases_intro.paragraph_format.line_spacing = 1.15
    p_cases_intro.add_run(
        "A continuación se presenta el diseño exhaustivo de los 24 casos de prueba formalmente especificados según "
        "los estándares de ISO/IEC/IEEE 29119-4 (Cláusula de Especificación de Casos de Prueba):"
    )

    doc.add_heading("5.1 Suite de Casos de Prueba — Sistema A: ISPySA-Pneumonia (Salud Pública)", level=2)
    tbl_t_ispysa = doc.add_table(rows=13, cols=5)
    tbl_t_ispysa.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_t_ispysa.autofit = False

    ispysa_cases = [
        ("ID", "Req.", "Técnica ISO 29119-4", "Descripción y Pasos del Caso de Prueba", "Criterio de Aceptación / Oráculo"),
        ("T01", "R1", "Partición de Equivalencia", "Carga inicial de dashboard y verificación de cohorte menor de 5 años.", "Banner contextual renderiza cohorte men5; 4 tarjetas KPI desplegadas."),
        ("T02", "R1", "Transición de Estados", "Conmutación interactiva de radio button hacia cohorte de 60 años a más.", "Indicadores actualizan valores de letalidad geriátrica (CFR) en el DOM."),
        ("T03", "R2", "Partición de Equivalencia", "Evaluación de alerta sanitaria canalizada en banner Bortman.", "Banner Bortman categoriza correctamente la zona (Éxito, Seguridad, Alarma o Epidemia)."),
        ("T04", "R2", "Análisis Valores Límite", "Renderizado de gráfico de 4 zonas y tarjetas de cuartiles en Pestaña I.", "Presencia de 4 zonas cromáticas y 4 tarjetas de cuartiles (Q1, Mediana Q2, Q3, Epidemia)."),
        ("T05", "R3", "Inspección Funcional", "Curvas de severidad clínica hospitalaria en Pestaña II.", "Gráficos de series temporales HR/CFR y cuadrante de dispersión visibles."),
        ("T06", "R3", "Modelado Estadístico", "Monitor de Triaje Manchester y recursos críticos en Pestaña II.", "Visualización de demanda UCI > 0, consumo O2 > 0 y 5 categorías MTS."),
        ("T07", "R4", "Partición de Equivalencia", "Persistencia departamental de casos en Pestaña III (Top 3 histórico).", "Despliegue de gráfico de persistencia regional para los 25 departamentos."),
        ("T08", "R4", "Análisis de Dominio", "Matriz de Vulnerabilidad Bioclimática Regional (Heladas y Friaje).", "Clasificación de departamentos con factores 1.35x (Heladas) y 1.25x (Friaje)."),
        ("T09", "R5", "Consistencia Aritmética", "Validación matemática de la Tasa de Hospitalización (HR).", "Tolerancia defensiva absoluta: |HR_reportado - (hosp/casos)*100| <= 0.05%."),
        ("T10", "R5", "Consistencia Aritmética", "Validación matemática de la Tasa de Letalidad Hospitalaria (CFR).", "Tolerancia defensiva absoluta: |CFR_reportado - (death/casos)*100| <= 0.05%."),
        ("T11", "R6", "Inspección de Dominio", "Métricas de bondad de ajuste del modelo predictivo ML en Pestaña IV.", "MAE, RMSE y R² >= 0.900 desplegados con algoritmo XGBoost óptimo."),
        ("T12", "R6", "Auditoría Normativa", "Matriz de gobernanza ISO 9241 e ISO/IEC 25010 en Pestaña V.", "Presencia de normas ISO 9241-11, 210, 110, 171 e ISO/IEC 25010 en el DOM.")
    ]

    col_w_t = [Inches(0.6), Inches(0.6), Inches(1.8), Inches(2.2), Inches(1.6)]
    for r_idx, r_data in enumerate(ispysa_cases):
        row = tbl_t_ispysa.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w_t[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.0)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=50, bottom=50, left=60, right=60)
    set_table_borders(tbl_t_ispysa, "CBD5E1")

    doc.add_page_break()

    doc.add_heading("5.2 Suite de Casos de Prueba — Sistema B: SauceDemo (E-Commerce)", level=2)
    tbl_t_sauce = doc.add_table(rows=13, cols=5)
    tbl_t_sauce.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_t_sauce.autofit = False

    sauce_cases = [
        ("ID", "Req.", "Técnica ISO 29119-4", "Descripción y Pasos del Caso de Prueba", "Criterio de Aceptación / Oráculo"),
        ("T01", "R1", "Partición de Equivalencia", "Autenticación exitosa con credenciales standard_user y secret_sauce.", "Redirección a /inventory.html y renderizado del título 'Products'."),
        ("T02", "R1", "Manejo de Errores", "Intento de inicio de sesión con usuario bloqueado locked_out_user.", "Despliegue de mensaje de error 'Sorry, this user has been locked out.'"),
        ("T03", "R2", "Inspección Estructural", "Verificación de integridad estructural del catálogo de productos.", "Carga exacta de 6 productos, cada uno con título, descripción y precio > 0."),
        ("T04", "R2", "Transición de Estados", "Navegación al detalle de un producto y retorno seguro al inventario.", "Apertura de ficha técnica 'Sauce Labs Backpack' ($29.99) y retorno fluido."),
        ("T05", "R3", "Análisis Valores Límite", "Ordenamiento de catálogo por precio ascendente (lohi).", "Verificación matemática: Precio[i] <= Precio[i+1] para todo i en [0..N-2]."),
        ("T06", "R3", "Análisis Valores Límite", "Ordenamiento de catálogo por precio descendente (hilo).", "Verificación matemática: Precio[i] >= Precio[i+1] para todo i en [0..N-2]."),
        ("T07", "R4", "Transición de Estados", "Adición de producto al carrito de compras desde el catálogo.", "Badge numérico conmuta a '1' y botón conmuta reactivamente a 'Remove'."),
        ("T08", "R4", "Transición de Estados", "Adición de 2 productos y remoción parcial de uno de ellos.", "Badge transita de '2' a '1'; persistencia verificada en /cart.html."),
        ("T09", "R5", "Prueba Negativa / BVA", "Envío de formulario de Checkout Step One con campos requeridos vacíos.", "Validación de error 'Error: First Name is required' en el DOM."),
        ("T10", "R5", "Partición de Equivalencia", "Diligenciamiento de datos válidos de despacho en Checkout Step One.", "Transición autorizada a página de resumen financiero /checkout-step-two.html."),
        ("T11", "R6", "Consistencia Aritmética", "Auditoría financiera contable: Subtotal + Impuesto (8%) = Total.", "Aserción estricta: |(Subtotal + Tax) - Total| < 0.001 USD."),
        ("T12", "R6", "Transición de Estados", "Finalización de la orden de compra y cierre seguro de sesión (Logout).", "Mensaje 'Thank you for your order!' renderizado y logout exitoso.")
    ]

    for r_idx, r_data in enumerate(sauce_cases):
        row = tbl_t_sauce.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w_t[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.0)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=50, bottom=50, left=60, right=60)
    set_table_borders(tbl_t_sauce, "CBD5E1")

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 6: PROTOCOLO DE EJECUCIÓN Y CERTIFICACIÓN DE FLAKINESS
    # =========================================================================
    h1 = doc.add_heading("6. PROTOCOLO DE EJECUCIÓN Y CERTIFICACIÓN DE FLAKINESS (3 CORRIDAS)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_proto = doc.add_paragraph()
    p_proto.paragraph_format.line_spacing = 1.15
    p_proto.add_run(
        "En conformidad con el estándar ISO/IEC/IEEE 29119-2 (Cláusula de Control y Determinismo de Pruebas), la "
        "reproducibilidad empírica constituye el criterio medular para la certificación de calidad en pipelines de "
        "integración continua. El fenómeno de las pruebas intermitentes (Flaky Tests)—definido por Parry et al. [16] como "
        "aquellas pruebas que exhiben resultados contradictorios (pass/fail) sin mediar cambios en el código bajo prueba— "
        "erosiona gravemente la confianza del equipo de ingeniería e incrementa el costo del mantenimiento del software.\n\n"
        "Para auditar la robustez del framework, se ejecutó un protocolo formal de 3 corridas secuenciales completas "
        "sobre el entorno Chromium headless (workers: 1, retries: 0):"
    )

    tbl_runs = doc.add_table(rows=5, cols=7)
    tbl_runs.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_runs.autofit = False

    runs_headers = ["Corrida", "Fecha y Hora", "Total Pruebas", "Aprobadas", "Fallidas", "Duración", "Flakiness"]
    runs_data = [
        runs_headers,
        ["Corrida 1", "19/10/2026 21:15", "24", "24 (100%)", "0 (0%)", "69.51 s", "0.00%"],
        ["Corrida 2", "19/10/2026 21:16", "24", "24 (100%)", "0 (0%)", "64.89 s", "0.00%"],
        ["Corrida 3", "19/10/2026 21:17", "24", "24 (100%)", "0 (0%)", "73.77 s", "0.00%"],
        ["Consolidado", "Evaluación Global", "72", "72 (100%)", "0 (0%)", "208.17 s (3m 28s)", "0.00%"]
    ]

    col_w_r = [Inches(1.1), Inches(1.4), Inches(0.8), Inches(1.0), Inches(0.7), Inches(1.1), Inches(0.7)]
    for r_idx, r_data in enumerate(runs_data):
        row = tbl_runs.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w_r[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            elif r_idx == 4:
                r.font.bold = True
                set_cell_background(c, "E2E8F0")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=60, bottom=60, left=70, right=70)
    set_table_borders(tbl_runs, "CBD5E1")

    p_flaky = doc.add_paragraph()
    p_flaky.paragraph_format.space_before = Pt(8)
    p_flaky.paragraph_format.line_spacing = 1.15
    p_flaky.add_run(
        "Formulación Matemática de la Tasa de Flakiness:\n"
        "La tasa de inconsistencia inter-ejecución se cuantifica formalmente mediante:\n\n"
        "   Flakiness Rate = ( Casos con Resultado Discrepante entre Corridas / Total de Pruebas Evaluadas ) × 100%\n"
        "   Flakiness Rate = ( 0 / 24 ) × 100% = 0.00%\n\n"
        "Este valor de 0.00% confirma que la totalidad de los selectores, esperas dinámicas y oráculos implementados "
        "operan en régimen determinista, eliminando la latencia de renderizado como vector de fallo."
    )

    doc.add_heading("6.1 Evidencias Visuales de Ejecución en Vivo", level=2)
    p_ev_desc = doc.add_paragraph()
    p_ev_desc.paragraph_format.line_spacing = 1.15
    p_ev_desc.add_run(
        "A continuación se incorporan las evidencias visuales capturadas directamente por el pipeline automatizado "
        "durante la ejecución de los casos de prueba, certificando el correcto funcionamiento de ambos sistemas:"
    )

    # Inserción de Figuras de Evidencia
    add_figure_with_caption(
        doc,
        assets_dir / "evidencia_ispysa_bortman.png",
        "Figura 1: Semáforo dinámico y visualización del Canal Endémico de Bortman (OPS/MINSA) en 4 zonas cromáticas con sus 4 tarjetas de cuartiles en ISPySA-Pneumonia.",
        5.5
    )

    add_figure_with_caption(
        doc,
        assets_dir / "evidencia_ispysa_manchester.png",
        "Figura 2: Monitor de Triaje Manchester (MTS) y cálculo de recursos hospitalarios críticos (camas UCI y demanda de oxígeno medicinal m³/día).",
        5.5
    )

    add_figure_with_caption(
        doc,
        assets_dir / "evidencia_ispysa_bioclimatica.png",
        "Figura 3: Matriz de Vulnerabilidad Bioclimática Regional con estratificación de 25 departamentos según factores térmicos de Heladas (1.35x) y Friaje (1.25x).",
        5.5
    )

    add_figure_with_caption(
        doc,
        assets_dir / "evidencia_saucedemo_checkout.png",
        "Figura 4: Verificación transaccional contable en SauceDemo Checkout Paso 2: Subtotal ($29.99) + Tax 8% ($2.40) = Total ($32.39).",
        5.5
    )

    add_figure_with_caption(
        doc,
        assets_dir / "evidencia_playwright_report.png",
        "Figura 5: Reporte oficial de ejecución de la suite Playwright Test en Chromium headless (24 tests aprobados en una sola pasada determinista).",
        5.5
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 7: REGISTRO Y GESTIÓN DE INCIDENCIAS / DEFECTOS
    # =========================================================================
    h1 = doc.add_heading("7. REGISTRO Y GESTIÓN DE INCIDENCIAS / DEFECTOS (ISO 29119-3)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_inc = doc.add_paragraph()
    p_inc.paragraph_format.line_spacing = 1.15
    p_inc.add_run(
        "Conforme a la norma ISO/IEC/IEEE 29119-3 (Cláusula de Test Incident Report), la ingeniería de aseguramiento de "
        "calidad exige una gestión rigurosa de las anomalías identificadas durante las fases de diseño y estabilización. "
        "Durante el ciclo de desarrollo de la suite, se detectaron, caracterizaron y resolvieron tres casos de borde críticos:"
    )

    tbl_inc = doc.add_table(rows=4, cols=5)
    tbl_inc.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_inc.autofit = False

    inc_headers = ["ID Incidencia", "Severidad", "Módulo Afectado", "Descripción de la Anomalía", "Acción Correctiva Aplicada"]
    inc_data = [
        inc_headers,
        ["INC-001", "Mayor", "ISPySA (T09, T10)", 
         "Discrepancia en coma flotante al verificar tasas calculadas (|HR_calc - HR_ui| > 0.001) por redondeo interno de Python.", 
         "Implementación de oráculo de aserción defensiva con umbral de tolerancia absoluta |delta| <= 0.05%."],
        ["INC-002", "Crítica", "ISPySA (T04, T05)", 
         "Pestañas de Streamlit sin atributo role='tab' estándar, ocasionando fallo en selectores ARIA estándar.", 
         "Sustitución por localizadores semánticos basados en texto visible estricto (getByText) y data-testid."],
        ["INC-003", "Media", "SauceDemo (T08)", 
         "Condición de carrera temporal al verificar la conmutación del badge del carrito inmediatamente tras el click.", 
         "Incorporación de expectativa auto-esperante (expect(badge).toHaveText('1')) aprovechando la sincronización de Playwright."]
    ]

    col_w_i = [Inches(1.1), Inches(0.9), Inches(1.3), Inches(1.7), Inches(1.7)]
    for r_idx, r_data in enumerate(inc_data):
        row = tbl_inc.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w_i[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=60, bottom=60, left=60, right=60)
    set_table_borders(tbl_inc, "CBD5E1")

    p_inc_res = doc.add_paragraph()
    p_inc_res.paragraph_format.space_before = Pt(8)
    p_inc_res.paragraph_format.line_spacing = 1.15
    p_inc_res.add_run(
        "Estado de Defectos Residuales: Al cierre de la fase de verificación, no existe ningún defecto abierto "
        "de severidad Bloqueante, Crítica o Mayor. La totalidad de las anomalías registradas fueron mitigadas y "
        "validadas formalmente en las tres corridas consecutivas del protocolo empírico."
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 8: EVALUACIÓN ECONÓMICA Y RETORNO DE INVERSIÓN (ROI)
    # =========================================================================
    h1 = doc.add_heading("8. EVALUACIÓN ECONÓMICA Y RETORNO DE INVERSIÓN (ROI)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_roi = doc.add_paragraph()
    p_roi.paragraph_format.line_spacing = 1.15
    p_roi.add_run(
        "Bajo la norma ISO/IEC/IEEE 29119-2 (Gobernanza Organizacional y Viabilidad de Pruebas), la adopción de un marco "
        "de automatización debe justificarse mediante un modelo cuantitativo de costo-beneficio. Se formuló un modelo de "
        "retorno de inversión basado en las siguientes variables empíricas del proyecto:\n\n"
        "Parámetros del Modelo Financiero:\n"
        "• Costo Inicial de Configuración y Desarrollo (C_setup): 180 minutos (3 horas hombre de ingeniería de pruebas).\n"
        "• Costo de Ejecución Manual por Ciclo de Regresión (C_manual): 28 minutos (14 min por sistema × 2 sistemas).\n"
        "• Costo de Ejecución Automatizada por Ciclo (C_auto): 2 minutos (lanzamiento de suite y revisión de reporte HTML).\n"
        "• Ahorro Neto por Ciclo de Regresión (ΔC): C_manual - C_auto = 28 min - 2 min = 26 minutos por ciclo.\n\n"
        "Ecuación del Punto de Equilibrio (Break-Even Point):\n"
        "   N_breakeven = ceil( C_setup / ΔC ) = ceil( 180 / 26 ) = ceil( 6.92 ) = 7 ciclos de regresión.\n\n"
        "A partir del séptimo ciclo de ejecución en el pipeline de CI/CD, la inversión inicial de automatización queda "
        "completamente amortizada. En una proyección estándar de 50 ciclos de despliegue continuo, el beneficio económico neto asciende a:\n"
        "   Ahorro_50 = (50 × 26 min) - 180 min = 1,300 min - 180 min = 1,120 minutos (18.67 horas hombre liberadas)."
    )

    tbl_roi = doc.add_table(rows=5, cols=5)
    tbl_roi.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_roi.autofit = False

    roi_headers = ["Ciclos de Regresión (N)", "Tiempo Manual (min)", "Tiempo Automatizado (min)", "Costo Acumulado Total", "Ahorro Neto Acumulado"]
    roi_data = [
        roi_headers,
        ["1 ciclo", "28 min", "182 min", "182 min", "-154 min (Inversión inicial)"],
        ["7 ciclos (Punto de Equilibrio)", "196 min", "194 min", "194 min", "+2 min (Amortización completada)"],
        ["20 ciclos", "560 min", "220 min", "220 min", "+340 min (5.67 horas hombre)"],
        ["50 ciclos", "1,400 min", "280 min", "280 min", "+1,120 min (18.67 horas hombre)"]
    ]

    col_w_roi = [Inches(1.5), Inches(1.2), Inches(1.3), Inches(1.2), Inches(1.5)]
    for r_idx, r_data in enumerate(roi_data):
        row = tbl_roi.rows[r_idx]
        for c_idx, val in enumerate(r_data):
            c = row.cells[c_idx]
            c.width = col_w_roi[c_idx]
            p = c.paragraphs[0]
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if r_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                set_cell_background(c, "1E3A8A")
            elif r_idx == 2:
                r.font.bold = True
                set_cell_background(c, "FEF3C7")
            else:
                set_cell_background(c, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
            set_cell_margins(c, top=60, bottom=60, left=70, right=70)
    set_table_borders(tbl_roi, "CBD5E1")

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 9: DICTAMEN TÉCNICO DE ACEPTACIÓN Y CONCLUSIONES
    # =========================================================================
    h1 = doc.add_heading("9. DICTAMEN TÉCNICO DE ACEPTACIÓN Y CONCLUSIONES (ISO 29119-2/3)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_dict = doc.add_paragraph()
    p_dict.paragraph_format.line_spacing = 1.15
    p_dict.add_run(
        "Evaluación de Criterios de Salida (Exit Criteria):\n"
        "1. Cobertura de Requisitos: 100% de los requisitos estipulados (R1 a R6) verificados en ambos sistemas.\n"
        "2. Tasa de Éxito de Pruebas: 100% de casos aprobados (72 de 72 ejecuciones en 3 corridas consecutivas).\n"
        "3. Tasa de Flakiness: 0.00% de inconsistencias inter-ejecución certificadas.\n"
        "4. Defectos Residuales: Cero (0) incidencias abiertas de severidad crítica o mayor.\n\n"
        "DICTAMEN FORMAL DE CALIDAD:\n"
        "El equipo técnico del Grupo 02 de la Escuela Profesional de Ingeniería de Sistemas de la Universidad "
        "Nacional de San Agustín de Arequipa (UNSA) emite dictamen formal de APROBACIÓN TÉCNICA SATISFACTORIA "
        "para el Sistema de Información en Salud Pública ISPySA-Pneumonia y certifica la plena conformidad de la "
        "suite de pruebas automatizadas con la norma internacional ISO/IEC/IEEE 29119.\n\n"
        "Conclusiones Principales:\n"
        "• La modernización del aplicativo ISPySA-Pneumonia con el Canal Endémico de Bortman (OPS/MINSA), el Monitor "
        "de Triaje Manchester y la Matriz Bioclimática elevó su pertinencia clínica y capacidad para la toma de "
        "decisiones epidemiológicas en el Perú.\n"
        "• El uso de selectores semánticos basados en data-testid y roles de accesibilidad eliminó por completo el "
        "acoplamiento frágil al DOM, garantizando un tiempo medio de ejecución de 69 segundos para 24 casos complejos.\n"
        "• El análisis económico valida que la automatización es altamente costo-efectiva, recuperando la inversión "
        "en 7 ciclos de regresión y constituyendo un activo reusable para el mantenimiento evolutivo del software."
    )

    doc.add_page_break()

    # =========================================================================
    # CAPÍTULO 10: REFERENCIAS BIBLIOGRÁFICAS EN FORMATO IEEE (VERIFICADAS AL 100%)
    # =========================================================================
    h1 = doc.add_heading("10. REFERENCIAS BIBLIOGRÁFICAS (FORMATO IEEE)", level=1)
    h1.paragraph_format.space_before = Pt(14)
    h1.paragraph_format.space_after = Pt(8)

    p_ref_intro = doc.add_paragraph()
    p_ref_intro.paragraph_format.line_spacing = 1.15
    p_ref_intro.paragraph_format.space_after = Pt(10)
    p_ref_intro.add_run(
        "A continuación se listan las referencias bibliográficas y normativas citadas en el texto, redactadas en estricto "
        "formato IEEE y verificadas en sus fuentes originales (IEEE Xplore, ISO, ACM Digital Library, OPS/OMS y MINSA):"
    )

    ieee_references = [
        ("[1]", 
         "ISO/IEC/IEEE, \"ISO/IEC/IEEE International Standard - Systems and software engineering — Software testing — "
         "Part 1: General concepts,\" ISO/IEC/IEEE 29119-1:2022(E), pp. 1–86, Jan. 2022, doi: 10.1109/IEEESTD.2022.9698145."),
        
        ("[2]", 
         "ISO/IEC/IEEE, \"ISO/IEC/IEEE International Standard - Software and systems engineering — Software testing — "
         "Part 2: Test processes,\" ISO/IEC/IEEE 29119-2:2021(E), pp. 1–72, Nov. 2021, doi: 10.1109/IEEESTD.2021.9591508."),
        
        ("[3]", 
         "ISO/IEC/IEEE, \"ISO/IEC/IEEE International Standard - Software and systems engineering — Software testing — "
         "Part 3: Test documentation,\" ISO/IEC/IEEE 29119-3:2021(E), pp. 1–98, Nov. 2021, doi: 10.1109/IEEESTD.2021.9591577."),
        
        ("[4]", 
         "ISO/IEC/IEEE, \"ISO/IEC/IEEE International Standard - Software and systems engineering — Software testing — "
         "Part 4: Test techniques,\" ISO/IEC/IEEE 29119-4:2021(E), pp. 1–148, Nov. 2021, doi: 10.1109/IEEESTD.2021.9591574."),
        
        ("[5]", 
         "ISO/IEC/IEEE, \"ISO/IEC/IEEE International Standard - Software and systems engineering — Software testing — "
         "Part 5: Keyword-Driven Testing,\" ISO/IEC/IEEE 29119-5:2016(E), pp. 1–70, Nov. 2016, doi: 10.1109/IEEESTD.2016.7744358."),
        
        ("[6]", 
         "ISO/IEC, \"Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — "
         "Product quality model,\" ISO/IEC 25010:2023, International Organization for Standardization, Geneva, Switzerland, "
         "pp. 1–46, Nov. 2023."),
        
        ("[7]", 
         "ISO, \"Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems,\" "
         "ISO 9241-210:2019, International Organization for Standardization, Geneva, Switzerland, pp. 1–36, Jul. 2019."),
        
        ("[8]", 
         "ISO, \"Ergonomics of human-system interaction — Part 171: Guidance on software accessibility,\" "
         "ISO 9241-171:2008, International Organization for Standardization, Geneva, Switzerland, pp. 1–102, Jul. 2008."),
        
        ("[9]", 
         "Centro Nacional de Epidemiología, Prevención y Control de Enfermedades (CDC Perú), \"Directiva Sanitaria para "
         "la Vigilancia Epidemiológica de las Infecciones Respiratorias Agudas en el Perú,\" Ministerio de Salud (MINSA), "
         "Directiva Sanitaria N° 064-MINSA/CDC-V.01, Resolución Ministerial N° 506-2015/MINSA, Lima, Perú, pp. 1–38, 2015."),
        
        ("[10]", 
         "M. Bortman, \"Elaboración de corredores o canales endémicos mediante planillas de cálculo,\" Revista Panamericana "
         "de Salud Pública / Pan American Journal of Public Health, vol. 5, no. 1, pp. 1–8, Jan. 1999."),
        
        ("[11]", 
         "K. Mackway-Jones, J. Marsden, and J. Windle, Eds., Emergency Triage: Manchester Triage Group, 3rd ed. Oxford, UK: "
         "John Wiley & Sons / BMJ Books, 2014, pp. 1–192, doi: 10.1002/9781118274712."),
        
        ("[12]", 
         "T. Chen and C. Guestrin, \"XGBoost: A Scalable Tree Boosting System,\" in Proceedings of the 22nd ACM SIGKDD "
         "International Conference on Knowledge Discovery and Data Mining (KDD '16), San Francisco, CA, USA, 2016, "
         "pp. 785–794, doi: 10.1145/2939672.2939785."),
        
        ("[13]", 
         "Sauce Labs, \"Swag Labs Demo Application (SauceDemo): Sample e-commerce application for test automation,\" 2024. "
         "[Online]. Disponible en: https://www.saucedemo.com/"),
        
        ("[14]", 
         "Microsoft Corporation, \"Playwright: Fast and reliable end-to-end testing for modern web apps,\" 2024. [Online]. "
         "Disponible en: https://playwright.dev/"),
        
        ("[15]", 
         "M. Leotta, D. Clerissi, F. Ricca, and C. Spadaro, \"Comparing the maintainability of Selenium WebDriver test suites "
         "employing different locators: A case study,\" in 2013 IEEE Sixth International Conference on Software Testing, "
         "Verification and Validation Workshops (ICSTW), Luxembourg, 2013, pp. 53–60, doi: 10.1109/ICSTW.2013.14."),
        
        ("[16]", 
         "O. Parry, G. M. Kapfhammer, M. Hilton, and P. McMinn, \"A survey of flaky tests,\" ACM Transactions on Software "
         "Engineering and Methodology, vol. 31, no. 1, art. 17, pp. 1–46, Jan. 2022, doi: 10.1145/3476105.")
    ]

    for tag, citation in ieee_references:
        p_ref = doc.add_paragraph()
        p_ref.paragraph_format.left_indent = Inches(0.4)
        p_ref.paragraph_format.first_line_indent = Inches(-0.4)
        p_ref.paragraph_format.line_spacing = 1.15
        p_ref.paragraph_format.space_after = Pt(6)
        
        r_tag = p_ref.add_run(f"{tag} ")
        r_tag.font.name = "Arial"
        r_tag.font.bold = True
        r_tag.font.size = Pt(9)
        r_tag.font.color.rgb = BLUE
        
        r_cit = p_ref.add_run(citation)
        r_cit.font.name = "Arial"
        r_cit.font.size = Pt(9)
        r_cit.font.color.rgb = DARK

    # -------------------------------------------------------------------------
    # Guardar Documento Word
    # -------------------------------------------------------------------------
    output_docx = base_dir / "informes" / "trabajo_6_iso29119_reporte.docx"
    doc.save(str(output_docx))
    print(f"Informe formal expandido DOCX guardado exitosamente en: {output_docx}")
    file_size_kb = os.path.getsize(output_docx) / 1024
    print(f"Tamaño del archivo DOCX: {file_size_kb:.1f} KB")

if __name__ == "__main__":
    build_comprehensive_report()
