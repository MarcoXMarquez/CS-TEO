# CS-TEO: Calidad de Software y Vigilancia Epidemiológica IRA Perú

Repositorio oficial para el curso de **Calidad de Software**, que comprende la plataforma interactiva de vigilancia epidemiológica para Infecciones Respiratorias Agudas (IRA / Neumonías) en el Perú (2000–2023) desarrollada bajo normas **ISO 9241** e **ISO/IEC 25010**, así como el ecosistema de **Skills de Diseño y Frontend Moderno** configuradas para el agente.

---

## 1. Semana 1: Plataforma de Vigilancia Epidemiológica (IRA Perú)

Sistema interactivo desarrollado a partir de un proyecto analítico legado mediante **ingeniería inversa**, enfocado en dos grupos vulnerables:
* **Población Pediátrica:** Menores de 5 años (`men5`)
* **Población Geriátrica:** Adultos de 60 años a más (`60mas`)

### Cumplimiento de Estándares de Calidad ISO 9241
* **ISO 9241-11 (Medición de Usabilidad):** Eficacia diagnóstica, eficiencia operativa (<0.2s mediante caché en memoria) y satisfacción del usuario en un entorno libre de ruido visual.
* **ISO 9241-210 (Diseño Centrado en el Humano - HCD):** Flujo jerárquico adaptado al contexto operativo de epidemiólogos y autoridades de salud pública.
* **ISO 9241-110 (Principios de Diálogo Ergonómico):** Adecuación a la tarea (tasas por 100,000 hab.), autodescripción con notas metodológicas, control del usuario y tolerancia a fallos.
* **ISO 9241-12 (Representación Visual de la Información):** Cuadrícula espacial normalizada (8pt grid), semáforo de alerta médica institucional y accesibilidad de contrastes (WCAG AA >= 4.5:1).
* **ISO/IEC 25010 (Calidad del Producto Software):** Mantenibilidad en arquitectura de servicios, modularidad y fiabilidad verificada mediante pruebas unitarias.

### Instrucciones de Ejecución
1. **Con archivo ejecutable (Recomendado en Windows):**
   Hacer doble clic en:
   ```cmd
   SEMANA 1\ejecutar_aplicativo.bat
   ```
2. **Por consola con `uv`:**
   ```bash
   cd "SEMANA 1/ISPySA-Pneumonia-main/ISPySA-Pneumonia-main"
   uv run --with streamlit --with pandas --with plotly --with numpy --with openpyxl python -m streamlit run app.py
   ```
   Abre automáticamente el navegador en `http://localhost:8501`.

---

## 2. Ecosistema de Skills de Diseño y Frontend Moderno (`.agents/skills/`)

Este repositorio incluye un conjunto estructurado de habilidades para el diseño de interfaces modernas y accesibles:

1. **[shadcn-ui](.agents/skills/shadcn-ui/SKILL.md):** Componentes accesibles construidos con Tailwind CSS y Radix UI, sin sobrecarga visual y con control total del código fuente.
2. **[magicui](.agents/skills/magicui/SKILL.md):** Componentes para interfaces de alto impacto: haz de luz perimétrico (`border-beam`), partículas, cintillos informativos (`marquee`) y cuadrículas asimétricas (`bento grid`).
3. **[aceternity-ui](.agents/skills/aceternity-ui/SKILL.md):** Animaciones avanzadas con Framer Motion: perspectiva 3D interactiva, mallas de gradiente ambiental y transiciones cinemáticas.
4. **[vaul](.agents/skills/vaul/SKILL.md):** Paneles inferiores deslizables (`drawers`) con físicas táctiles de inercia y arrastre idénticas a iOS.
5. **[lenis](.agents/skills/lenis/SKILL.md):** Desplazamiento inercial suave de alto rendimiento que preserva la accesibilidad (`prefers-reduced-motion`).
6. **[motion-primitives](.agents/skills/motion-primitives/SKILL.md):** Primitivas de animación para transiciones morfológicas (`layoutId`), contadores numéricos y microinteracciones de estado.
7. **[design-tokens](.agents/skills/design-tokens/SKILL.md):** Sistema de tokens para escalas de espaciado en rejilla de 8pt, tipografía fluida con `clamp()`, sombras difusas y armonía cromática.

---

## 3. Información del Proyecto
* **Curso:** Calidad de Software
* **Modalidad:** Equipo de 05 Integrantes
* **Fecha Oficial:** Martes 01 de noviembre
