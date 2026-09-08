# CS-TEO: Calidad de Software & Vigilancia Epidemiológica IRA Perú

Repositorio oficial para el curso de **Calidad de Software**, que incluye la plataforma interactiva de vigilancia epidemiológica para Infecciones Respiratorias Agudas (IRA / Neumonías) en el Perú (2000–2023) desarrollada bajo normas **ISO 9241**, así como el ecosistema de **Skills de Diseño y Frontend Moderno** instaladas para el agente.

---

## 🏥 Semana 1: Plataforma de Vigilancia Epidemiológica (IRA Perú)

Sistema interactivo desarrollado a partir de un proyecto legado mediante **ingeniería inversa**, enfocado en dos grupos vulnerables:
* **Niños menores de 5 años (`men5`)**
* **Adultos mayores de 60 años (`60mas`)**

### Cumplimiento de Estándares ISO 9241
* **ISO 9241-11 (Usabilidad):** Medición de eficacia, eficiencia (<0.2s con caché en memoria) y satisfacción del usuario.
* **ISO 9241-210 (Diseño Centrado en el Humano - HCD):** Flujo jerárquico adaptado al contexto operativo de epidemiólogos y directores de salud pública.
* **ISO 9241-110 (Principios de Diálogo):** Adecuación a la tarea (tasas por 100k hab.), autodescripción con tooltips, control del usuario y tolerancia a fallos.
* **ISO 9241-12 (Presentación Visual de la Información):** Cuadrícula espacial de KPIs, semáforo de alerta médica (Verde, Amarillo, Rojo) y accesibilidad visual.

### Cómo Ejecutar el Aplicativo
1. **Con el archivo ejecutable (Recomendado en Windows):**
   Hacer doble clic en:
   ```cmd
   SEMANA 1\ejecutar_aplicativo.bat
   ```
2. **Por consola con `uv`:**
   ```bash
   cd "SEMANA 1/ISPySA-Pneumonia-main/ISPySA-Pneumonia-main"
   uv run --with streamlit --with pandas --with plotly --with numpy --with openpyxl python -m streamlit run app.py
   ```
   Abre automáticamente en `http://localhost:8501`.

---

## 🎨 Skills de Diseño y Componentes Modernos Instaladas (`.agents/skills/`)

Este repositorio incluye un conjunto de habilidades estructuradas para el desarrollo de interfaces modernas de alta fidelidad:

1. **[shadcn-ui](.agents/skills/shadcn-ui/SKILL.md):** Componentes accesibles construidos con Tailwind CSS y Radix UI, sin sobrecarga visual y con control total del código fuente.
2. **[magicui](.agents/skills/magicui/SKILL.md):** Componentes para landing pages y SaaS con efectos de borde luminosos (`border-beam`), partículas, marquees infinitos y bento grids.
3. **[aceternity-ui](.agents/skills/aceternity-ui/SKILL.md):** Animaciones avanzadas con Framer Motion: tarjetas con perspectiva 3D, fondos aurora, efectos lámpara y transiciones cinemáticas.
4. **[vaul](.agents/skills/vaul/SKILL.md):** Drawers y modales inferiores con físicas de inercia y arrastre nativas idénticas a iOS.
5. **[lenis](.agents/skills/lenis/SKILL.md):** Scroll suave de alto rendimiento que preserva la accesibilidad y sincroniza animaciones de desplazamiento (GSAP / Framer Motion).
6. **[motion-primitives](.agents/skills/motion-primitives/SKILL.md):** Primitivas de animación para transiciones morfológicas de layouts (`layoutId`), contadores animados y microinteracciones fluidas.
7. **[design-tokens](.agents/skills/design-tokens/SKILL.md):** Sistema de tokens para escalas de espaciado (rejilla de 8pt), tipografía fluida con `clamp()`, sombras difusas y armonía cromática.

---

## 👥 Equipo de Desarrollo
* **Curso:** Calidad de Software
* **Equipo:** 05 Integrantes
* **Fecha de Entrega:** Martes 01 de noviembre
