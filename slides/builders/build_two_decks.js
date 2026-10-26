const fs = require('fs');
const path = require('path');

// ==========================================
// COMMON TEMPLATE VISUAL COMPONENTS
// (Exact Slidesgo Multimedia Pitch Deck style)
// ==========================================

function getCommonHead(title) {
  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  
  <!-- Google Fonts: Epilogue & Lato & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800;900&family=Lato:wght@300;400;700&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Epilogue', 'sans-serif'],
            sans: ['Lato', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            theme: {
              bg: '#F4F5F7',
              blob: '#DDE1E6',
              textPrimary: '#2F3136',
              textSecondary: '#5E626E',
              blue: '#55C0ED',
              teal: '#34909D',
              amber: '#F8B85E',
              crimson: '#BA0034',
              cardHeader: '#D9DDE3',
              dark: '#35363B'
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Lato', sans-serif;
      background-color: #E2E5E9;
      color: #2F3136;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .slide-viewport {
      aspect-ratio: 16 / 9;
      background-color: #F4F5F7;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    /* Print styling: Render all slides consecutively in landscape 16:9 */
    @media print {
      body {
        background-color: white !important;
        overflow: visible !important;
      }
      .no-print {
        display: none !important;
      }
      main {
        padding: 0 !important;
        margin: 0 !important;
        display: block !important;
      }
      .slide-viewport {
        box-shadow: none !important;
        border-radius: 0 !important;
        max-width: none !important;
        max-height: none !important;
        width: 100% !important;
        height: auto !important;
        display: block !important;
      }
      .slide-item {
        position: relative !important;
        display: block !important;
        page-break-after: always !important;
        break-after: page !important;
        width: 100vw !important;
        height: 100vh !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        margin: 0 !important;
        box-shadow: none !important;
      }
      @page {
        size: 16in 9in;
        margin: 0;
      }
    }
  </style>
  `;
}

function getCornerBlobs() {
  return `
    <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
    </svg>
    <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
    </svg>
  `;
}

function getBrowserGadget() {
  return `
    <div class="absolute top-8 right-10 w-24 h-18 rounded-xl bg-[#D9DDE3] shadow-sm border border-[#CBD0D8] p-2 flex flex-col justify-between hidden md:flex z-10">
      <div class="flex justify-end space-x-1.5 mb-1">
        <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
        <span class="w-2 h-2 rounded-full bg-[#F8B85E]"></span>
        <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
      </div>
      <div class="flex items-center justify-between px-1">
        <svg class="w-6 h-6 text-[#6F7082]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
        <div class="flex flex-col space-y-0.5">
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

function getCloudGadget() {
  return `
    <div class="absolute top-8 right-10 hidden md:flex items-center justify-center z-10">
      <div class="relative">
        <svg class="w-26 h-15 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
          <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5 relative">
            <span class="absolute right-0.5 top-0.5 w-1 h-1 rounded-full bg-[#55C0ED]"></span>
          </span>
          <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5"></span>
          <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

function getFolderGadget() {
  return `
    <div class="absolute bottom-8 left-8 hidden md:flex flex-col items-center z-10">
      <div class="w-8 h-10 rounded bg-[#D9DDE3] border border-[#CBD0D8] p-1 mb-1 flex flex-col justify-between">
        <span class="w-full h-0.5 bg-[#8E95A5]"></span>
        <span class="w-3/4 h-0.5 bg-[#8E95A5]"></span>
        <span class="w-full h-0.5 bg-[#8E95A5]"></span>
      </div>
      <div class="w-0.5 h-3 border-l-2 border-dashed border-[#8E95A5] mb-1"></div>
      <div class="flex items-end space-x-1">
        <div class="w-3.5 h-14 rounded-t bg-[#34909D]"></div>
        <div class="w-3.5 h-16 rounded-t bg-[#35363B]"></div>
        <div class="w-3.5 h-12 rounded-t bg-[#6F7082]"></div>
      </div>
    </div>
  `;
}

function getNavigationFooter(deckName, totalSlides) {
  return `
  <!-- Bottom Navigation Bar -->
  <footer class="no-print bg-white/95 backdrop-blur-md border-t border-[#D1D5DB] px-6 py-2.5 flex items-center justify-between text-[#2F3136] z-50">
    <!-- Left: Deck Title & Link to hub -->
    <div class="flex items-center space-x-3">
      <a href="index.html" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors flex items-center space-x-1 text-xs font-bold" title="Volver al Portal Principal">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="hidden md:inline">Inicio</span>
      </a>
      <div class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
      <span id="currentSlideTitle" class="text-xs font-bold text-[#2F3136] hidden sm:inline font-heading truncate max-w-sm">01. Portada</span>
    </div>

    <!-- Center: Prev / Next / Counter -->
    <div class="flex items-center space-x-2">
      <button onclick="prevSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Diapositiva Anterior (←)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div class="px-3 py-1 rounded-md bg-[#F4F5F7] border border-[#CBD0D8] text-xs font-bold font-mono text-[#2F3136]">
        <span id="slideCounterCurrent">01</span> / <span id="slideCounterTotal">${totalSlides.toString().padStart(2, '0')}</span>
      </div>

      <button onclick="nextSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Siguiente Diapositiva (→ o Espacio)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Right: Controls (Índice, Fullscreen, PDF) -->
    <div class="flex items-center space-x-2">
      <button onclick="toggleOverview()" class="px-2.5 py-1 rounded-md hover:bg-[#E5E7EB] text-xs font-bold text-[#4B505E] border border-[#D1D5DB] flex items-center space-x-1" title="Vista General (O)">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
        </svg>
        <span class="hidden md:inline">Índice</span>
      </button>

      <button onclick="toggleFullscreen()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#4B505E] transition-colors" title="Pantalla Completa (F)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
        </svg>
      </button>

      <button onclick="window.print()" class="px-2.5 py-1 rounded-md bg-[#35363B] hover:bg-[#202124] text-white text-xs font-bold flex items-center space-x-1 shadow-xs" title="Exportar a PDF o Imprimir (P)">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
        </svg>
        <span>PDF</span>
      </button>
    </div>
  </footer>
  `;
}

function getOverviewModal(slides) {
  return `
  <!-- Modal Overview Grid -->
  <div id="overviewModal" class="no-print fixed inset-0 bg-[#2F3136]/85 backdrop-blur-sm z-50 hidden flex flex-col p-6 sm:p-10 justify-between">
    <div class="flex items-center justify-between text-white border-b border-white/20 pb-3">
      <h3 class="text-xl font-bold font-heading">Índice General de Diapositivas (${slides.length})</h3>
      <button onclick="toggleOverview()" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm">✕ Cerrar (Esc)</button>
    </div>
    
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 overflow-y-auto my-4 py-2">
      ${slides.map((s, idx) => `
        <div onclick="goToSlide(${idx}); toggleOverview();" class="bg-[#F4F5F7] p-3 rounded-lg border-2 hover:border-[#34909D] cursor-pointer transition-all hover:scale-105 shadow-md flex flex-col justify-between h-28">
          <div class="flex items-center justify-between text-[#2F3136]">
            <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#D9DDE3]">${(idx+1).toString().padStart(2, '0')}</span>
            <span class="text-[10px] text-[#5E626E] font-semibold truncate max-w-[120px]">${s.subtitle || ''}</span>
          </div>
          <div class="text-xs font-bold text-[#2F3136] font-heading line-clamp-2">${s.title}</div>
          <div class="w-full bg-[#DDE1E6] h-1 rounded-full overflow-hidden">
            <div class="bg-[#34909D] h-full" style="width: ${((idx+1)/slides.length)*100}%"></div>
          </div>
        </div>
      `).join('\n')}
    </div>

    <div class="text-center text-xs text-white/70">
      Usa las teclas de flecha para navegar, o haz clic en cualquier diapositiva.
    </div>
  </div>
  `;
}

function getScriptBlock(slides) {
  return `
  <script>
    let currentSlide = 0;
    const totalSlides = ${slides.length};
    const slideTitles = [
      ${slides.map(s => `"${s.number}. ${s.title}"`).join(', ')}
    ];

    function showSlide(index) {
      if (index < 0) index = 0;
      if (index >= totalSlides) index = totalSlides - 1;

      for (let i = 0; i < totalSlides; i++) {
        const el = document.getElementById('slide-' + i);
        if (el) {
          if (i === index) {
            el.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
            el.classList.add('opacity-100', 'z-10');
          } else {
            el.classList.remove('opacity-100', 'z-10');
            el.classList.add('opacity-0', 'pointer-events-none', 'z-0');
          }
        }
      }

      currentSlide = index;

      document.getElementById('slideCounterCurrent').innerText = (currentSlide + 1).toString().padStart(2, '0');
      document.getElementById('progressBar').style.width = (((currentSlide + 1) / totalSlides) * 100) + '%';
      document.getElementById('currentSlideTitle').innerText = slideTitles[currentSlide];
    }

    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
      }
    }

    function prevSlide() {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      }
    }

    function goToSlide(idx) {
      showSlide(idx);
    }

    function toggleOverview() {
      const modal = document.getElementById('overviewModal');
      modal.classList.toggle('hidden');
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {});
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'o' || e.key === 'O') {
        toggleOverview();
      } else if (e.key === 'p' || e.key === 'P') {
        window.print();
      } else if (e.key === 'Escape') {
        const modal = document.getElementById('overviewModal');
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
      } else if (e.key === 'Home') {
        showSlide(0);
      } else if (e.key === 'End') {
        showSlide(totalSlides - 1);
      }
    });

    showSlide(0);
  </script>
  `;
}

console.log('Common components ready.');
