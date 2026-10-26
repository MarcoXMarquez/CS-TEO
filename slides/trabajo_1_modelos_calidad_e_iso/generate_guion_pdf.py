"""
Script de generacion del Guion de Exposicion en PDF
Plataforma de Vigilancia Epidemiologica IRA Peru - Normas ISO 9241 e ISO/IEC 25010
Estructura perfecta: 1 pagina por integrante (Jeremy, Joel, Marco, Rafael, Leo)
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, letter[1] - 32, "CS-TEO: Calidad de Software | Guion de Exposicion - ISO 9241 e ISO/IEC 25010")
            self.drawRightString(letter[0] - 54, letter[1] - 32, "Vigilancia Epidemiologica IRA Peru")
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.5)
            self.line(54, letter[1] - 38, letter[0] - 54, letter[1] - 38)

        # Footer (all pages)
        page_text = f"Pagina {self._pageNumber} de {page_count}"
        self.drawRightString(letter[0] - 54, 28, page_text)
        self.drawString(54, 28, "Equipo 05: Jeremy Perez | Joel Condori | Marco Marquez | Rafael Nina | Leonardo Arce")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(54, 38, letter[0] - 54, 38)
        
        self.restoreState()


def build_pdf(filename="GUION_EXPOSICION_CALIDAD_ISO.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=50,
        rightMargin=50,
        topMargin=46,
        bottomMargin=46
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_navy = colors.HexColor("#0f172a")
    c_blue = colors.HexColor("#1e3a8a")
    c_accent = colors.HexColor("#0284c7")
    c_body = colors.HexColor("#334155")
    c_slate = colors.HexColor("#475569")
    c_bg_light = colors.HexColor("#f8fafc")
    c_border = colors.HexColor("#cbd5e1")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=c_navy,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=c_slate,
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=c_blue,
        spaceBefore=0,
        spaceAfter=3,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=c_navy,
        spaceBefore=5,
        spaceAfter=2,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=c_body,
        spaceAfter=2
    )

    dialogue_style = ParagraphStyle(
        'Dialogue_Custom',
        fontName='Helvetica-Oblique',
        fontSize=8.2,
        leading=11.8,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=2,
        spaceAfter=4
    )

    badge_style = ParagraphStyle(
        'Badge',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9,
        textColor=colors.HexColor("#1e3a8a")
    )

    table_cell = ParagraphStyle(
        'TableCell',
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=c_body
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=10.5,
        textColor=c_navy
    )

    story = []

    # ==========================================
    # PAGINA 1: PORTADA Y MATRIZ GENERAL
    # ==========================================
    story.append(Paragraph("SISTEMA DE VIGILANCIA EPIDEMIOLOGICA IRA PERU (2000-2023)", badge_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Guion Tecnico de Exposicion para 5 Integrantes", title_style))
    story.append(Paragraph(
        "<b>Curso:</b> Calidad de Software &nbsp;|&nbsp; "
        "<b>Normas:</b> ISO 9241 (11, 210, 110, 12) e ISO/IEC 25010 &nbsp;|&nbsp; "
        "<b>Duracion Total:</b> 13 a 15 minutos<br/>"
        "<b>Integrantes:</b> Jeremy Joshua Perez Huamani &bull; Joel Isaias Condori Leon &bull; "
        "Marco Antonio Marquez Herrera &bull; Rafael Diego Nina Calizaya &bull; Leonardo Ruben Arce Mayhua",
        subtitle_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_blue, spaceBefore=0, spaceAfter=10))

    story.append(Paragraph("1. Matriz de Asignacion de Roles, Ejes Normativos y Tiempos", h1_style))
    story.append(Spacer(1, 4))
    
    headers = [
        Paragraph("<b>Integrante</b>", table_cell_bold),
        Paragraph("<b>Rol Asignado</b>", table_cell_bold),
        Paragraph("<b>Normas / Ejes Clave</b>", table_cell_bold),
        Paragraph("<b>Accion en Pantalla</b>", table_cell_bold),
        Paragraph("<b>Tiempo</b>", table_cell_bold)
    ]
    
    table_data = [headers,
        [
            Paragraph("<b>1. Jeremy</b>", table_cell),
            Paragraph("Apertura, Contexto y Dataset", table_cell),
            Paragraph("Calidad de Datos CDC/MINSA, Normalizacion censal 100k", table_cell),
            Paragraph("Sidebar: filtros de cohortes (men5 / 60mas), tabla retrospectiva", table_cell),
            Paragraph("2:30 min", table_cell_bold)
        ],
        [
            Paragraph("<b>2. Joel</b>", table_cell),
            Paragraph("Arquitectura e Ingenieria Inversa", table_cell),
            Paragraph("<b>ISO/IEC 25010</b><br/>(Mantenibilidad, Eficiencia, Fiabilidad)", table_cell),
            Paragraph("Capa Anticorrupcion, tests unitarios (6/6 OK), launcher .bat", table_cell),
            Paragraph("3:00 min", table_cell_bold)
        ],
        [
            Paragraph("<b>3. Marco</b>", table_cell),
            Paragraph("Usabilidad y HCD en el Dashboard", table_cell),
            Paragraph("<b>ISO 9241-11</b> (Usabilidad)<br/><b>ISO 9241-210</b> (HCD)", table_cell),
            Paragraph("Hero Banner, Ticker Magic UI, Semaforo clinico y 4 KPIs", table_cell),
            Paragraph("2:30 min", table_cell_bold)
        ],
        [
            Paragraph("<b>4. Rafael</b>", table_cell),
            Paragraph("Dialogo Ergonomico y Ergonomia Visual", table_cell),
            Paragraph("<b>ISO 9241-110</b> (Dialogo)<br/><b>ISO 9241-12</b> (Visual)", table_cell),
            Paragraph("Slider 2000-2023, Grid 8pt, panel de formulas Vaul, cero emojis", table_cell),
            Paragraph("2:30 min", table_cell_bold)
        ],
        [
            Paragraph("<b>5. Leo</b>", table_cell),
            Paragraph("Analitica Avanzada, Modelos ML y Cierre", table_cell),
            Paragraph("Validacion Predictiva y Trazabilidad Normativa", table_cell),
            Paragraph("Pestanas II, III, IV (XGBoost R2=0.935) y Pestana V Auditoria", table_cell),
            Paragraph("3:00 min", table_cell_bold)
        ]
    ]

    summary_table = Table(table_data, colWidths=[1.1*inch, 1.4*inch, 1.6*inch, 2.3*inch, 0.7*inch])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
        ('GRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ALIGN', (4, 0), (4, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 14))

    story.append(Paragraph("2. Recomendaciones Clave para la Defensa de Calidad de Software", h1_style))
    tips = [
        "<b>Coordinacion Fluida:</b> Cada integrante cuenta con una frase exacta de pase de palabra para evitar silencios incomodos.",
        "<b>Interaccion en Vivo:</b> No limitarse a leer diapositivas; mientras se habla, se debe manipular el aplicativo en tiempo real.",
        "<b>Terminologia Tecnica Obligatoria:</b> Usar terminos exactos de calidad: <i>Capa Anticorrupcion, Tolerancia a Fallos, WCAG AA, Coeficiente R2, Mantenibilidad, Diseno Centrado en el Humano</i>.",
        "<b>Defensa ante Preguntas:</b> Cada pagina incluye la pregunta trampa mas probable del jurado con la respuesta tecnica sugerida."
    ]
    for tip in tips:
        story.append(Paragraph(f"&bull; {tip}", body_style))
    
    story.append(Spacer(1, 14))
    story.append(Paragraph(
        "<i>Estructura del documento: Cada una de las siguientes 5 paginas corresponde exactamente a 1 integrante del equipo, "
        "con sus acciones en pantalla, su guion hablado textual, su frase de relevo y su pregunta de defensa individual.</i>",
        ParagraphStyle('Note', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8, textColor=c_slate)
    ))

    # Helper function for speaker pages
    def create_speaker_page(speaker_num, speaker_name, role_title, iso_tags, duration_str, actions, speech_paragraphs, handoff_text, qa_q, qa_a):
        page_elements = [PageBreak()]
        
        # Header banner
        page_elements.append(Paragraph(f"PARTE {speaker_num} DE LA EXPOSICION &bull; TIEMPO SUGERIDO: {duration_str}", badge_style))
        page_elements.append(Spacer(1, 2))
        page_elements.append(Paragraph(f"{speaker_name}: {role_title}", h1_style))
        page_elements.append(Paragraph(f"<b>Ejes Normativos:</b> {iso_tags}", ParagraphStyle('sub', fontName='Helvetica', fontSize=8.5, textColor=c_slate)))
        page_elements.append(HRFlowable(width="100%", thickness=1, color=c_blue, spaceBefore=4, spaceAfter=8))
        
        # Actions Box
        page_elements.append(Paragraph("<b>Que mostrar en pantalla (Accion visual en vivo):</b>", h2_style))
        for act in actions:
            page_elements.append(Paragraph(f"&bull; {act}", body_style))
        page_elements.append(Spacer(1, 5))
        
        # Speech
        page_elements.append(Paragraph("<b>Guion hablado (Texto exacto en primera persona):</b>", h2_style))
        for p in speech_paragraphs:
            page_elements.append(Paragraph(f'"{p}"', dialogue_style))
        
        # Handoff
        page_elements.append(Spacer(1, 3))
        page_elements.append(Paragraph(f"<b>Pase de palabra al siguiente companero:</b>", h2_style))
        page_elements.append(Paragraph(f'<i>"{handoff_text}"</i>', dialogue_style))
        page_elements.append(Spacer(1, 5))
        
        # QA Box
        page_elements.append(Paragraph("<b>Pregunta de defensa prevista (Jurado / Docente):</b>", h2_style))
        qa_data = [
            [Paragraph(f"<b>Pregunta del profesor:</b> {qa_q}", table_cell_bold)],
            [Paragraph(f"<b>Respuesta tecnica sugerida:</b> {qa_a}", table_cell)]
        ]
        qa_t = Table(qa_data, colWidths=[7.1*inch])
        qa_t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#fef2f2")),
            ('BACKGROUND', (0, 1), (-1, 1), colors.HexColor("#f8fafc")),
            ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor("#fecaca")),
            ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ]))
        page_elements.append(qa_t)
        
        return page_elements

    # ==========================================
    # PAGINA 2: JEREMY
    # ==========================================
    story.extend(create_speaker_page(
        speaker_num="1",
        speaker_name="JEREMY",
        role_title="Apertura, Planteamiento del Problema y Explicacion del Dataset",
        iso_tags="Salud Publica &bull; Calidad y Normalizacion de Datos Censales INEI &bull; CDC / MINSA",
        duration_str="2:30 min",
        actions=[
            "Iniciar con la plataforma abierta en el navegador (http://localhost:8501).",
            "Mostrar la barra lateral izquierda enfocando los selectores de cohortes (men5 / 60mas) y el slider de anos (2000-2023).",
            "En la Pestana I, abrir el expander 'Tabla de Datos Retrospectivos y Exportacion' mostrando los campos de casos, poblacion y tasas calculadas."
        ],
        speech_paragraphs=[
            "Buenos dias profesor y companeros. Hoy nuestro equipo presenta la Plataforma de Vigilancia y Monitoreo Epidemiologico de Infecciones Respiratorias Agudas (IRA y Neumonias) en el Peru, desarrollada y modernizada bajo los estandares de calidad de software ISO/IEC 25010 y ergonomia de interaccion ISO 9241.",
            "Para comprender el valor del sistema, debemos partir del dataset. La informacion proviene de las series oficiales del Centro Nacional de Epidemiologia, Prevencion y Control de Enfermedades (CDC – MINSA), abarcando un periodo ininterrumpido de 24 anos (2000 al 2023) y cubriendo los 25 departamentos del pais.",
            "Desde el enfoque epidemiologico, evaluar la poblacion de forma agregada oculta los focos de mortalidad. Por ello, estructuramos los datos dividiendolos en sus dos cohortes biologicamente mas vulnerables: la poblacion pediatrica menores de 5 anos (men5) y la poblacion geriatrica adultos mayores de 60 anos (60mas). Ademas, no nos limitamos a casos brutos, lo que generaria un sesgo hacia Lima; incorporamos la poblacion censal interpolada del INEI para calcular la Tasa de Incidencia estandarizada por cada 100,000 habitantes, junto a la Tasa de Hospitalizacion (HR) y la Letalidad (CFR)."
        ],
        handoff_text="A continuacion, mi companero Joel explicara la arquitectura en 5 capas del sistema y como aplicamos la norma ISO/IEC 25010.",
        qa_q="Por que es indispensable normalizar por 100,000 habitantes y no evaluar casos absolutos?",
        qa_a="Porque evaluar numeros absolutos incurre en una falacia demografica: departamentos altamente poblados como Lima siempre liderarian el conteo, invisibilizando crisis agudas en departamentos de menor volumen como Loreto o Ucayali donde la tasa por habitante es critica."
    ))

    # ==========================================
    # PAGINA 3: JOEL
    # ==========================================
    story.extend(create_speaker_page(
        speaker_num="2",
        speaker_name="JOEL",
        role_title="Arquitectura del Sistema, Ingenieria Inversa y Calidad ISO/IEC 25010",
        iso_tags="ISO/IEC 25010 (Mantenibilidad, Eficiencia de Desempeno, Fiabilidad, Portabilidad)",
        duration_str="3:00 min",
        actions=[
            "Mostrar brevemente la estructura modular (src/services/data_service.py y model_service.py).",
            "Mostrar la terminal ejecutando la suite de pruebas unitarias ('uv run python -m unittest tests/test_services.py') con 6 tests en OK en ~0.05s.",
            "Cambiar de departamento en la interfaz para evidenciar la respuesta inmediata (<0.2s) gracias al cache en memoria RAM."
        ],
        speech_paragraphs=[
            "Gracias, Jeremy. El proyecto legado original consistia en scripts dispersos de Jupyter Notebooks con logica acoplada y calculos redundantes. Mediante ingenieria inversa, transformamos esa base en una Arquitectura en 5 Capas con Capa Anticorrupcion (Anti-Corruption Layer).",
            "El sistema se organiza en: Capa 0 (Datos Crudos CDC/MINSA), Capa 1 (Pipeline de Limpieza y Feature Engineering), Capa 2 (Capa de Servicios con EpidemiologyDataService y EpidemiologyModelService), Capa 3 (Modelos Predictivos ML/DL) y Capa 4 (Capa de Presentacion en Streamlit).",
            "Como se refleja la norma ISO/IEC 25010? En cuatro pilares: primero, Mantenibilidad y Modularidad, aislando la logica de negocio del frontend; segundo, Eficiencia de Desempeno, mediante @st.cache_resource que mantiene los datos en RAM logrando tiempos de respuesta inferiores a 0.2 segundos; tercero, Fiabilidad, comprobada con una suite automatizada de pruebas unitarias que valida la integridad matematica de cada tasa con 100% de exito; y cuarto, Portabilidad, permitiendo el despliegue inmediato con un doble clic en nuestro ejecutable .bat gestionado con 'uv'."
        ],
        handoff_text="Doy el pase a mi companero Marco, quien explicara como llevamos estos datos al usuario bajo las normas ISO 9241-11 e ISO 9241-210.",
        qa_q="Que garantiza la Capa Anticorrupcion frente a cambios en la fuente de datos?",
        qa_a="Garantiza que si el Ministerio de Salud migra sus datos de archivos planos a un API REST hospitalario o estandar FHIR, solo se reescribe el conector en EpidemiologyDataService; la capa de presentacion y los modelos predictivos no requieren una sola linea de cambio."
    ))

    # ==========================================
    # PAGINA 4: MARCO
    # ==========================================
    story.extend(create_speaker_page(
        speaker_num="3",
        speaker_name="MARCO",
        role_title="Ergonomia de Interaccion y Diseno Centrado en el Humano: ISO 9241-11 e ISO 9241-210",
        iso_tags="ISO 9241-11 (Medicion de Usabilidad) &bull; ISO 9241-210 (Human-Centered Design - HCD)",
        duration_str="2:30 min",
        actions=[
            "Enfocar el Banner Institucional Superior ('institutional-hero') y el cintillo de boletin epidemiologico (Magic UI Marquee).",
            "Destacar el Semaforo de Alerta Sanitaria (Alerta Critica / Preventiva / Bajo Control).",
            "Explicar las 4 Tarjetas de KPIs (Casos, Tasa x 100k, Hospitalizaciones HR%, Letalidad CFR%) y sus deltas comparativos."
        ],
        speech_paragraphs=[
            "Gracias, Joel. En un sistema de salud publica, la interfaz no puede ser un ejercicio decorativo; debe adaptarse al modelo mental del profesional. Aplicamos dos normas esenciales:",
            "1. ISO 9241-210 (Diseno Centrado en el Humano): Nuestro usuario meta es el epidemiologo y director regional de salud que necesita tomar decisiones en situaciones de contingencia. Por ello, establecimos un flujo cognitivo en 4 niveles: primero, Contexto Inmediato en el encabezado y cintillo de boletin; segundo, Evaluacion de Riesgo con el Semaforo de Alerta que clasifica automaticamente el estado segun umbrales epidemiologicos; tercero, Indicadores Clave (KPIs) estilo shadcn/ui con deltas anuales; y cuarto, Desglose Analitico en pestanas ejecutivas.",
            "2. ISO 9241-11 (Medicion de Usabilidad): Evaluada en sus tres dimensiones: Eficacia, porque el usuario obtiene el diagnostico de cualquier departamento con solo 2 selecciones directas; Eficiencia, porque la interaccion ocurre en tiempo real sin latencia; y Satisfaccion, al brindar un entorno visual limpio que reduce el agotamiento cognitivo."
        ],
        handoff_text="Ahora mi companero Rafael detallara los principios de dialogo ergonomico y la representacion visual de la informacion.",
        qa_q="Como responde el Semaforo de Alerta a la norma ISO 9241-210?",
        qa_a="Adapta la salida de datos complejos a la necesidad cognitiva inmediata de una autoridad: antes de obligarlo a interpretar series numericas, le comunica de forma instantanea si el territorio evaluado esta en condicion Critica, Preventiva o Estable."
    ))

    # ==========================================
    # PAGINA 5: RAFAEL
    # ==========================================
    story.extend(create_speaker_page(
        speaker_num="4",
        speaker_name="RAFAEL",
        role_title="Principios Ergonomicos de Dialogo y Presentacion Visual: ISO 9241-110 e ISO 9241-12",
        iso_tags="ISO 9241-110 (Dialogo Ergonomico) &bull; ISO 9241-12 (Representacion Visual, Tokens, WCAG AA)",
        duration_str="2:30 min",
        actions=[
            "Manipular el slider de anos (ej. cambiar a 2015-2023) y alternar la metrica en la grafica de la Pestana I.",
            "Deslizar hacia la parte inferior y mostrar el Panel Metodologico estilo Vaul Drawer con las formulas matematicas.",
            "Senalar la consistencia tipografica, los bordes limpios, la ausencia total de emojis y el contraste de colores."
        ],
        speech_paragraphs=[
            "Gracias, Marco. Continuamos con los estandares que garantizan una comunicacion clara y libre de errores:",
            "1. ISO 9241-110 (Principios de Dialogo Ergonomico): Implementamos: Adecuacion a la tarea, suministrando tasas normalizadas; Autodescripcion, visible en el panel inferior desplegable (estilo Vaul Drawer) donde se exponen con claridad matematica las formulas de incidencia, hospitalizacion y letalidad; Control del usuario, permitiendo filtrar periodos temporales con un slider continuo y descargar las tablas en CSV; y Tolerancia a fallos, mediante programacion defensiva en backend con numpy para manejar divisiones entre cero cuando se registran casos nulos.",
            "2. ISO 9241-12 (Representacion Visual de la Informacion): Implementamos un sistema de Design Tokens con una cuadricula espacial de 8 puntos que asegura proporciones estables. Ademas, eliminamos el uso informal de emojis para dotar a la herramienta del rigor biomedico requerido. Los colores del semaforo y graficas cumplen estrictamente con las pautas WCAG AA con contrastes superiores a 4.5:1, garantizando accesibilidad plena para personas con daltonismo."
        ],
        handoff_text="Doy el pase a mi companero Leo para exponer la analitica avanzada, los modelos predictivos y el cierre de la auditoria.",
        qa_q="Por que la ausencia de emojis esta ligada a la ISO 9241-12?",
        qa_a="La norma ISO 9241-12 prohibe el ruido visual y la ambiguedad en la representacion de datos criticos. Los emojis introducen inconsistencia visual entre navegadores y restan sobriedad institucional en un software de decisiones de salud publica."
    ))

    # ==========================================
    # PAGINA 6: LEO
    # ==========================================
    story.extend(create_speaker_page(
        speaker_num="5",
        speaker_name="LEO",
        role_title="Analitica Avanzada, Modelos Predictivos y Auditoria de Calidad",
        iso_tags="Machine Learning &bull; Validacion Predictiva 95% CI &bull; Matriz de Trazabilidad ISO",
        duration_str="3:00 min",
        actions=[
            "Hacer clic en la Pestana II (Severidad Clinica) y mostrar las curvas cruzadas de Hospitalizacion vs Letalidad.",
            "Hacer clic en la Pestana III (Estratificacion Departamental) y mostrar los datos de Loreto/Ucayali vs Arequipa/Cusco.",
            "Hacer clic en la Pestana IV (Modelos Predictivos): senalar XGBoost con R2=0.935, el pronostico a 52 semanas y el Feature Importance.",
            "Hacer clic en la Pestana V (Auditoria de Calidad) mostrando la tabla interactiva de cumplimiento normativo en vivo."
        ],
        speech_paragraphs=[
            "Gracias, Rafael. En el cierre funcional de la plataforma, presentamos las herramientas analiticas avanzadas:",
            "En la Pestana II analizamos la Severidad Clinica: el sistema permite discernir si un incremento de casos representa una ola leve o una saturacion de camas UCI (HR) y muertes directas (CFR). En la Pestana III, la Estratificacion Departamental revela que en ninos, regiones selvaticas como Loreto y Ucayali superan el 91.7% de permanencia en maximo riesgo; mientras que en adultos mayores, zonas andinas como Arequipa (88.9%) y Cusco (61.1%) son las mas afectadas por heladas y bajas temperaturas.",
            "En la Pestana IV integramos Modelos de Aprendizaje Automatico: comparamos Random Forest, XGBoost y redes LSTM sobre series semanales. El algoritmo XGBoost logro el mejor desempeno con un R2 de 0.935 y un MAE de 0.184 en poblacion infantil. Generamos proyecciones a 52 semanas con bandas de incertidumbre al 95% e identificamos las variables predictoras clave como la semana epidemiologica anterior (lag_1) y la memoria estacional anual (lag_52). Finalmente, en la Pestana V, la plataforma incluye su propia Matriz de Trazabilidad y Cumplimiento Normativo en vivo. Concluimos que el aseguramiento de la calidad de software es el pilar que transforma datos brutos en decisiones sanitarias confiables."
        ],
        handoff_text="Muchas gracias por su atencion. Con esto concluimos y abrimos la ronda de preguntas.",
        qa_q="Como se determinaron las bandas de incertidumbre en el pronostico a 52 semanas?",
        qa_a="Se calcularon de forma empirica y estandarizada sumando y restando 1.96 veces el error cuadratico medio (RMSE) de prueba del modelo sobre el valor proyectado (y_hat +/- 1.96 * RMSE), proporcionando al tomador de decisiones el intervalo de confianza al 95%."
    ))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF generado exitosamente: {os.path.abspath(filename)}")

if __name__ == "__main__":
    build_pdf()
