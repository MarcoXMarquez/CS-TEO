# Protocolo de Compatibilidad con `html-slide-viewer` y Exportación PDF 16:9

Todo archivo HTML generado por `html-slides-builder` debe incluir estas reglas CSS y el motor JavaScript bidireccional para funcionar tanto dentro de `html-slide-viewer` (por HTTP, `file:///` o Drag & Drop `srcdoc`) como de forma independiente en el navegador.

---

## 1. Cabecera `<head>` Obligatoria (Fuentes, Tailwind y Reglas `@media print`)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la Presentación</title>

  <!-- Typography: Epilogue (Headings) + Plus Jakarta Sans (Body) + JetBrains Mono (Code/Metrics) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700;800;900&family=JetBrains+Mono:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Epilogue', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            brand: {
              teal: '#167287',
              crimson: '#BA0034',
              amber: '#D97706',
              emerald: '#059669',
              slate: '#1E293B',
              bg: '#F4F5F7'
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Fixed 16:9 1920x1080 Native Canvas Rules */
    html, body {
      width: 1920px;
      height: 1080px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #F4F5F7;
      color: #1E293B;
      user-select: none;
    }

    .slide-viewport {
      width: 1920px;
      height: 1080px;
      position: relative;
      overflow: hidden;
      background-color: #F4F5F7;
    }

    .slide-item {
      width: 1920px;
      height: 1080px;
      position: absolute;
      inset: 0;
      box-sizing: border-box;
    }

    /* Hide internal HUD when embedded inside html-slide-viewer */
    body.is-embedded #hud-controls {
      display: none !important;
    }

    /* Print & PDF Export Rules (Exact 16:9 Preservation) */
    @media print {
      @page {
        size: 1920px 1080px;
        margin: 0;
      }
      body, html {
        width: 1920px !important;
        height: auto !important;
        overflow: visible !important;
        background-color: #F4F5F7 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .slide-viewport {
        width: 1920px !important;
        height: auto !important;
        overflow: visible !important;
      }
      .slide-item {
        position: relative !important;
        width: 1920px !important;
        height: 1080px !important;
        opacity: 1 !important;
        display: block !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        break-after: page !important;
      }
      #hud-controls {
        display: none !important;
      }
    }
  </style>
</head>
```

---

## 2. Estructura de Láminas y Motor Bidireccional `postMessage`

La primera lámina (`#slide-0`) inicia con `opacity-100 z-10`, y las demás (`#slide-1` a `#slide-N`) con `opacity-0 pointer-events-none z-0`. Al final del `<body>`, incluye el HUD autónomo y el script de comunicación:

```html
  <!-- Minimal HUD Navigation Overlay (Active only when opened standalone) -->
  <div id="hud-controls" class="fixed bottom-4 right-6 flex items-center space-x-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#CBD0D8] z-50">
    <button id="btn-prev" class="p-1.5 rounded-lg hover:bg-slate-100 text-[#475569] hover:text-[#1E293B] transition-colors" title="Anterior">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <div class="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#1E293B]">
      <span id="slide-num" class="text-[#BA0034]">01</span>
      <span class="text-[#64748B]">/</span>
      <span id="slide-total-hud" class="text-[#64748B]">14</span>
    </div>
    <button id="btn-next" class="p-1.5 rounded-lg hover:bg-slate-100 text-[#475569] hover:text-[#1E293B] transition-colors" title="Siguiente">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
    </button>
    <div class="h-4 w-px bg-slate-200"></div>
    <button id="btn-pdf" class="px-2.5 py-1 rounded-lg bg-[#BA0034] text-white text-xs font-mono font-bold hover:bg-[#99002B] transition-colors flex items-center space-x-1.5" title="Exportar a PDF 16:9">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      <span>PDF</span>
    </button>
  </div>

  <script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide-item');
    const totalSlides = slides.length;
    const slideNum = document.getElementById('slide-num');
    const slideTotalHud = document.getElementById('slide-total-hud');
    if (slideTotalHud) slideTotalHud.textContent = String(totalSlides).padStart(2, '0');

    if (window.parent && window.parent !== window) {
      document.body.classList.add('is-embedded');
    }

    function goToSlide(n) {
      if (n < 0 || n >= totalSlides) return;
      slides[currentSlide].classList.remove('opacity-100', 'z-10');
      slides[currentSlide].classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      currentSlide = n;
      slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      slides[currentSlide].classList.add('opacity-100', 'z-10');
      
      if (slideNum) {
        slideNum.textContent = String(currentSlide + 1).padStart(2, '0');
      }

      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'slide-changed',
          slideIndex: currentSlide,
          totalSlides: totalSlides
        }, '*');
      }
    }

    window.goToSlide = goToSlide;
    window.currentSlide = currentSlide;
    window.totalSlides = totalSlides;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnPdf = document.getElementById('btn-pdf');
    if (btnPrev) btnPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (btnNext) btnNext.addEventListener('click', () => goToSlide(currentSlide + 1));
    if (btnPdf) btnPdf.addEventListener('click', () => window.print());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key === 'f' || e.key === 'F' || e.key === 'o' || e.key === 'O' || e.key === 'p' || e.key === 'P') {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'slide-keydown', key: e.key }, '*');
        }
      }
    });

    window.addEventListener('message', (e) => {
      if (!e.data) return;
      if (e.data.type === 'go-to-slide') {
        goToSlide(e.data.slideIndex);
      } else if (e.data.type === 'next-slide') {
        goToSlide(currentSlide + 1);
      } else if (e.data.type === 'prev-slide') {
        goToSlide(currentSlide - 1);
      } else if (e.data.type === 'get-info') {
        sendInitInfo();
      }
    });

    function sendInitInfo() {
      if (window.parent && window.parent !== window) {
        const titles = Array.from(slides).map((s, idx) => {
          const h = s.querySelector('h1, h2, h3');
          return (h && h.innerText.trim()) ? h.innerText.trim().replace(/\s+/g, ' ') : `Diapositiva ${idx + 1}`;
        });
        window.parent.postMessage({
          type: 'slide-init',
          totalSlides: totalSlides,
          currentSlide: currentSlide,
          slideTitles: titles
        }, '*');
      }
    }

    window.addEventListener('DOMContentLoaded', sendInitInfo);
    window.addEventListener('load', sendInitInfo);
    setTimeout(sendInitInfo, 250);
  </script>
```
