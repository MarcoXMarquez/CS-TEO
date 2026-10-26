# HTML Slide Viewer Pro (16:9 Presentation & PDF Engine)

Un visor web moderno de diapositivas diseñado para presentar en **pantalla completa**, mantener una relación de aspecto fija **16:9** y **exportar a PDF con fidelidad pixel-perfect (sin que se muevan elementos, tarjetas ni textos)**.

---

## 🚀 Inicio Rápido (1-Click)

1. Haz doble clic en **`iniciar_visor.bat`** (o ejecuta `python -m http.server 8000` en la raíz del proyecto).
2. Se abrirá automáticamente tu navegador en:
   ```
   http://localhost:8000/html-slide-viewer/
   ```

*Nota: También puedes hacer doble clic directamente en `index.html`, donde podrás arrastrar y soltar cualquier archivo `.html` de diapositivas.*

---

## 🎯 Solución al problema de exportación a PDF

Hasta ahora, al presionar `Ctrl + P` o exportar directamente desde el navegador, la configuración de papel por defecto (A4 o Carta) encogía la presentación a proporciones no panorámicas, provocando que los textos se partieran en múltiples líneas, las tarjetas se alargaran verticalmente y los componentes inferiores se desfasaran o se cortaran entre páginas.

**Slide Viewer Pro resuelve esto mediante dos motores:**

1. **Exportación Nativa 16:9 con html2canvas + jsPDF (Botón "Exportar PDF" o Tecla `P`):**
   * Captura cada lámina en un lienzo virtual fijo de **1920 × 1080 píxeles** a resolución retina (escala 1.5x).
   * Genera un documento PDF con páginas exactamente panorámicas de 16:9 (1920 × 1080 puntos) sin márgenes.
   * **El resultado es 100% idéntico a lo que ves en pantalla y a la captura de referencia.**

2. **Hoja de Estilos de Impresión Optimizada (`@media print`):**
   * Configura `@page { size: 1920px 1080px; margin: 0; }` y anula los desbordamientos para que la impresión del navegador tampoco rompa el layout.

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
| :--- | :--- |
| **`→`** / **`Espacio`** / **`AvPág`** | Siguiente diapositiva |
| **`←`** / **`RePág`** | Diapositiva anterior |
| **`Inicio`** / **`Fin`** | Primera / Última diapositiva |
| **`F`** | Alternar **Pantalla Completa** |
| **`O`** | Abrir / Cerrar **Mosaico de Diapositivas (Overview Grid)** |
| **`P`** | **Exportar a PDF** de alta fidelidad 16:9 |
| **`Esc`** | Cerrar modales o salir de pantalla completa |

---

## 📂 Compatibilidad con Nuevas Diapositivas

Para visualizar cualquier nueva presentación que crees en el futuro:
* **Método 1 (Arrastrar y Soltar):** Arrastra el archivo `.html` directamente a la ventana del visor.
* **Método 2 (Selector):** Elige *"Cargar archivo HTML local..."* en el menú superior.
* **Método 3 (Menú predeterminado):** Agrega tu archivo en el desplegable `<select id="deck-selector">` dentro de `index.html`.
