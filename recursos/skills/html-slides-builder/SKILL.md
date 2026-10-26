---
name: html-slides-builder
description: >-
  Generador de presentaciones HTML nativas 16:9 (1920x1080) de alta densidad visual,
  compatibles con html-slide-viewer y exportación exacta a PDF. Soporta ingestión
  multi-fuente con referencias @ (teoría, enunciados, código, figuras, PDFs, PPTX, DOCX),
  tipografía técnica legible (Epilogue, Plus Jakarta Sans, JetBrains Mono), iconos SVG
  monocromáticos (cero emojis), gráficos/imágenes reales incrustados en Base64 y auditoría
  visual obligatoria con Playwright antes de entregar.
---

# HTML Slides Builder (Nativo 1920×1080 · 16:9)

Esta skill define el estándar de ingeniería y diseño visual para construir presentaciones técnicas y académicas en HTML nativo para **`html-slide-viewer`** (`1920×1080`, relación de aspecto `16:9`).

Cuando el usuario solicite crear, diseñar o actualizar diapositivas HTML —especialmente cuando adjunte archivos o carpetas con `@` (ej. `@[teoria]`, `@[codigo]`, `@[recursos]`, documentos `.pdf`, `.pptx`, `.docx`, `.xlsx` o scripts)— debes seguir **todas las reglas y fases de esta skill sin excepción**.

---

## 1. Reglas Inquebrantables de Diseño y Contenido

### 1.1 Lienzo Nativo 16:9 (`1920×1080`) y Compatibilidad con `html-slide-viewer`
- **Resolución exacta**: `html, body`, `.slide-viewport` y cada `.slide-item` deben tener `width: 1920px; height: 1080px; overflow: hidden;`.
- **Padding del lienzo**: Usa `px-14 py-7` a `py-9` en el contenedor interno de cada diapositiva (`w-full h-full px-14 py-8 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]`).
- **Protocolo Bidireccional del Visor**:
  - Incluye siempre el bloque `<script>` de sincronización con `window.parent.postMessage` (`slide-init`, `slide-changed`, `slide-keydown`, `go-to-slide`, `next-slide`, `prev-slide`, `get-info`) y expón `window.goToSlide`.
  - Cuando la presentación se carga dentro de `html-slide-viewer` (`window.parent !== window`), añade la clase `body.is-embedded` para ocultar automáticamente los controles flotantes propios (`#hud-controls`), evitando duplicar barras de navegación.
  - Consulta [references/viewer_protocol.md](./references/viewer_protocol.md) para el código exacto de sincronización y exportación `@media print`.

### 1.2 Tipografía Visible, No Genérica y de Alto Contraste
- **Fuentes obligatorias** (cargar desde Google Fonts):
  - **Encabezados (`font-heading`)**: `Epilogue` (pesos `600, 700, 800, 900`).
  - **Cuerpo (`font-sans`)**: `Plus Jakarta Sans` (pesos `400, 500, 600, 700, 800`).
  - **Código, Métricas y Badges (`font-mono`)**: `JetBrains Mono` (pesos `500, 700, 800`).
- **Tamaños mínimos obligatorios** (prohibida la letra diminuta o ilegible):
  - Título de portada (`h1`): `text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]`.
  - Título de lámina (`h2`): `text-3xl lg:text-4xl font-black tracking-tight`.
  - Título de columna o tarjeta principal (`h3`): `text-xl` a `text-2xl font-bold`.
  - Contenido descriptivo y viñetas en tarjetas: **`text-sm` (14px)** con `leading-relaxed` (usa `text-xs font-semibold` únicamente en cabeceras técnicas `font-mono uppercase` o metadatos de pie).
  - KPIs y métricas destacadas: `text-2xl` a `text-4xl font-black font-mono`.

### 1.3 Aprovechamiento del Espacio (Cero Espacios Muertos)
- **Prohibido dejar huecos blancos vacíos** arriba, abajo o en el interior de los `div`s/tarjetas.
- **Anti-patrón `justify-between` en contenedores vacíos**: Nunca uses `flex-col justify-between` en una columna alta si solo contiene 2 o 3 cajas pequeñas, ya que genera huecos blancos artificiales de 80–150px entre tarjetas.
- **Cómo llenar las columnas con elegancia**:
  - Estructura cada columna vertical con **`space-y-2.5` o `space-y-3`** y **4 sub-tarjetas detalladas** (`p-3.5` o `p-4 rounded-xl bg-[#F8FAFC] border border-slate-200`).
  - Ancla el bloque de resumen, entregable o metadato final al fondo de la columna usando **`mt-auto`**.
  - Si una columna tiene una imagen o gráfico (`<img>`), acompáñala debajo con una grilla de 3 tarjetas de indicadores (`grid-cols-3 gap-3`) o una tabla de especificaciones técnicas para que la tarjeta aproveche el 100% de la altura.

### 1.4 Cero Emojis e Iconografía Monocromática SVG
- **Cero Emojis**: Está **terminantemente prohibido** incluir emojis Unicode en títulos, botones, listas, código o tablas.
- **Iconos Monocromáticos SVG**: Usa exclusivamente iconos vectoriales `<svg>` inline con `fill="none" stroke="currentColor" stroke-width="2"`. Revisa el catálogo listo para usar en [references/design_system_16_9.md](./references/design_system_16_9.md).

### 1.5 Imágenes y Gráficos Reales Incrustados en Base64 (Cero IA Decorativa, Cero 404)
- **Prohibido usar imágenes generadas por IA** o ilustraciones genéricas de relleno.
- **Gráficos útiles y auténticos**:
  - Extrae diagramas de arquitectura, diagramas UML, gráficos de series temporales/telemetría, capturas de pruebas (`pytest`, consola, dashboards reales) desde las carpetas `@` proporcionadas (ej. `@[recursos]`, `@[codigo]`) o genéralos determinísticamente con scripts de graficación (`matplotlib`/`seaborn`) a partir de datos reales del proyecto.
- **Incrustación 100% Base64 obligatoria**:
  - **Nunca** dejes rutas relativas `<img src="assets/...">` en el HTML final, porque fallan con error `404` cuando el usuario arrastra el archivo HTML a `html-slide-viewer` (`srcdoc`).
  - Convierte siempre cada imagen a `data:image/png;base64,...` dentro del script generador de Python antes de escribir el archivo `.html`.

### 1.6 Identidad del Equipo y Sobriedad Académica
- **Identidad por defecto**: **Grupo 02** (*Yoel Condori, Marco Márquez, Jeremy Pérez, Rafael Nina, Leonardo Arce* · Curso Calidad de Software · UNSA 2026), salvo que el usuario indique otro grupo o curso en su prompt.
- **Prohibición absoluta de autocalificaciones**:
  - **Jamás** incluyas frases como *"Nota 20/20"*, *"Nota Esperada: 20 / 20"*, *"Evaluación: 5/5 Pts"*, *"100% Satisfecho"* ni *"DEFENSA TÉCNICA FINALIZADA"*.
  - En los pies de columna y banners de cierre, muestra únicamente metadatos técnicos objetivos (`Estándar: ISO/...`, `Telemetría: ...`, `Orquestación: CI/CD`, `GRUPO 02`).

---

## 2. Flujo de Ejecución Paso a Paso (Cuando el Usuario Pasa `@`)

### Fase 1: Ingestión Profunda de Referencias `@`
1. Examina todos los archivos y carpetas referenciados con `@`:
   - Si hay documentos `.pdf`, `.docx`, `.xlsx` o `.pptx`, utiliza las skills de conversión correspondientes (`convert-pdf-to-md`, `convert-word-to-md`, `convert-excel-to-md`, `pptx`) o scripts de lectura para extraer el enunciado completo, las preguntas, la teoría y los criterios de evaluación.
   - Si hay código fuente (`@[codigo]`), analiza los módulos reales, clases, servicios, consultas SQL, pruebas unitarias y métricas para respaldar cada diapositiva con evidencia técnica real del repositorio.
   - Si hay carpetas de activos (`@[recursos]`), inventaría todas las figuras `.png`/`.jpg`/`.svg` disponibles para incorporarlas en las láminas pertinentes.

### Fase 2: Planificación de la Secuencia de Diapositivas
Diseña la estructura de láminas asegurando cobertura exhaustiva del tema o enunciado:
- **Lámina 1 (Portada Académica)**: Badge superior del curso + `Grupo 02`, título principal de alto impacto, bloque de metodología en 3 pasos, 3 tarjetas de métricas clave, grilla con los 5 integrantes del `Grupo 02` a la izquierda, y tarjeta derecha con los pilares/requerimientos del trabajo.
- **Láminas de Desarrollo Técnico**: Alterna diseños Bento de 2, 3, 4 o 5 columnas, tablas matemáticas con fórmulas en bloques oscuros (`bg-[#0F172A] text-white font-mono`), y vistas divididas (columna izquierda con desglose técnico + columna derecha con diagrama/gráfico real en Base64 y ficha técnica).
- **Lámina Final (Síntesis y Conclusiones)**: 4 columnas resumiendo el cumplimiento técnico de cada pilar + banner sobrio del **Grupo 02** con los nombres de los integrantes.

### Fase 3: Construcción Mediante Script Generador en Python
En lugar de escribir un archivo HTML gigante a mano propenso a errores de cierre de etiquetas, crea o adapta un script en Python basado en [scripts/base_slide_generator.py](./scripts/base_slide_generator.py) que:
1. Codifique todas las imágenes requeridas en Base64.
2. Ensamble las láminas usando los componentes de [references/design_system_16_9.md](./references/design_system_16_9.md).
3. Inyecte el protocolo de sincronización con `html-slide-viewer` de [references/viewer_protocol.md](./references/viewer_protocol.md).
4. Escriba el archivo `.html` final en la ruta solicitada (y opcionalmente copie los `.png` a `html-slide-viewer/assets/` por redundancia).

### Fase 4: Auditoría Visual Obligatoria (Pre-Entrega)
**NUNCA entregues el HTML al usuario sin antes auditar visualmente todas las diapositivas renderizadas:**
1. Ejecuta el script de auditoría:
   ```powershell
   python "<ruta_skill>/scripts/audit_slides_playwright.py" "<ruta_al_html_generado>" "<directorio_capturas>"
   ```
2. Inspecciona las capturas generadas (`slide_01.png` ... `slide_N.png`) utilizando la herramienta `view_file`.
3. Verifica en cada captura:
   - ¿Hay espacios blancos vacíos dentro de algún `div` o columna? -> *Si los hay, agranda la fuente a `text-sm`, aumenta el padding a `p-4` o agrega un bloque técnico adicional.*
   - ¿Alguna tarjeta inferior se corta o choca con el borde inferior / HUD? -> *Si ocurre, ajusta el padding vertical de la lámina a `py-7` y reduce ligeramente el espacio entre tarjetas a `space-y-2`.*
   - ¿Todas las imágenes y gráficos se ven nítidos y sin iconos de imagen rota?
   - ¿Se eliminó cualquier rastro de emojis o notas `20/20` / `5/5`?
4. Si detectas cualquier imperfección visual en una lámina, corrige el script generador, regenera el HTML, vuelve a capturar y verifica con `view_file` hasta alcanzar **100% de perfección visual**.
