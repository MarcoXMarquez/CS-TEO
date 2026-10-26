/**
 * HTML Slide Viewer Pro - Core Controller
 * 16:9 Fixed Canvas Scaling & High-Fidelity PDF Engine
 * Multi-Channel Resilient Architecture (DOM + postMessage + Fallbacks)
 */

(function () {
  'use strict';

  // DOM Elements
  const stageWrapper = document.getElementById('stage-wrapper');
  const slideStage = document.getElementById('slide-stage');
  const slideFrame = document.getElementById('slide-frame');
  const deckSelector = document.getElementById('deck-selector');
  const fileInput = document.getElementById('file-input');

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const overlayPrev = document.getElementById('overlay-prev');
  const overlayNext = document.getElementById('overlay-next');

  const slideCurrentEl = document.getElementById('slide-current');
  const slideTotalEl = document.getElementById('slide-total');
  const deckProgressBar = document.getElementById('deck-progress-bar');
  const floatingTitle = document.getElementById('floating-title');

  const btnOverview = document.getElementById('btn-overview');
  const overviewModal = document.getElementById('overview-modal');
  const overviewClose = document.getElementById('overview-close');
  const overviewGrid = document.getElementById('overview-grid');
  const overviewBadge = document.getElementById('overview-badge');

  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnExportPdf = document.getElementById('btn-export-pdf');
  const btnPrintNative = document.getElementById('btn-print-native');

  const exportModal = document.getElementById('export-modal');
  const exportStatus = document.getElementById('export-status');
  const exportProgress = document.getElementById('export-progress');
  const exportPercent = document.getElementById('export-percent');

  const dropzoneOverlay = document.getElementById('dropzone-overlay');
  const timerDisplay = document.getElementById('timer-display');
  const timerContainer = document.getElementById('presentation-timer');

  // Presentation State
  let currentSlideIndex = 0;
  let totalSlides = 14; // Default standard count
  let slideNodes = [];
  let slideTitles = [];
  let isExporting = false;

  // Timer State
  let timerInterval = null;
  let timerSeconds = 0;
  let isTimerRunning = false;

  // Fixed Reference Canvas (16:9 Standard)
  const STAGE_WIDTH = 1920;
  const STAGE_HEIGHT = 1080;

  /* ==========================================================================
     1. SCALING ENGINE (Proportional 16:9 Transform Scale)
     ========================================================================== */
  function updateScale() {
    if (!stageWrapper || !slideStage) return;

    const wrapperRect = stageWrapper.getBoundingClientRect();
    const isFullscreen = !!document.fullscreenElement;

    // Use full area in fullscreen, slight padding in windowed mode
    const padding = isFullscreen ? 0 : 32;
    const availWidth = Math.max(100, wrapperRect.width - padding);
    const availHeight = Math.max(100, wrapperRect.height - padding);

    const scaleX = availWidth / STAGE_WIDTH;
    const scaleY = availHeight / STAGE_HEIGHT;
    const scale = Math.min(scaleX, scaleY);

    slideStage.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener('resize', updateScale);
  document.addEventListener('fullscreenchange', updateScale);

  /* ==========================================================================
     2. MULTI-CHANNEL BIDIRECTIONAL PROTOCOL (postMessage + DOM)
     ========================================================================== */
  window.addEventListener('message', (e) => {
    if (!e.data) return;

    // A. Slide Deck Announcement
    if (e.data.type === 'slide-init') {
      if (typeof e.data.totalSlides === 'number' && e.data.totalSlides > 0) {
        totalSlides = e.data.totalSlides;
        slideTotalEl.innerText = totalSlides.toString().padStart(2, '0');
        overviewBadge.innerText = `${totalSlides} láminas`;
      }
      if (Array.isArray(e.data.slideTitles) && e.data.slideTitles.length > 0) {
        slideTitles = e.data.slideTitles;
      }
      if (typeof e.data.currentSlide === 'number') {
        currentSlideIndex = e.data.currentSlide;
      }
      syncSlideView(currentSlideIndex);
    }

    // B. Slide Changed from within iframe
    else if (e.data.type === 'slide-changed') {
      if (typeof e.data.slideIndex === 'number') {
        currentSlideIndex = e.data.slideIndex;
        if (typeof e.data.totalSlides === 'number' && e.data.totalSlides > 0) {
          totalSlides = e.data.totalSlides;
          slideTotalEl.innerText = totalSlides.toString().padStart(2, '0');
          overviewBadge.innerText = `${totalSlides} láminas`;
        }
        syncSlideView(currentSlideIndex);
      }
    }

    // C. Forwarded Keyboard Action from iframe
    else if (e.data.type === 'slide-keydown') {
      handleKey(e.data.key);
    }
  });

  /* ==========================================================================
     3. SLIDE DECK INSPECTION & INJECTION
     ========================================================================== */
  function onFrameLoad() {
    // 1. Send postMessage query to iframe for instant handshake
    try {
      if (slideFrame.contentWindow) {
        slideFrame.contentWindow.postMessage({ type: 'get-info' }, '*');
      }
    } catch (e) {
      // Cross-origin safe
    }

    // 2. Direct DOM Inspection & Style Injection (if same-origin permits)
    try {
      const doc = slideFrame.contentDocument || slideFrame.contentWindow.document;
      if (doc) {
        injectNormalizingStyles(doc);

        let slides = doc.querySelectorAll('.slide-item');
        if (slides.length === 0) slides = doc.querySelectorAll('.slide-pane');
        if (slides.length === 0) slides = doc.querySelectorAll('section');

        if (slides.length > 0) {
          slideNodes = Array.from(slides);
          totalSlides = slideNodes.length;
          slideTotalEl.innerText = totalSlides.toString().padStart(2, '0');
          overviewBadge.innerText = `${totalSlides} láminas`;

          slideTitles = slideNodes.map((s, idx) => {
            const h = s.querySelector('h1, h2, h3');
            return (h && h.innerText.trim()) ? h.innerText.trim().replace(/\s+/g, ' ') : `Diapositiva ${idx + 1}`;
          });
        }

        if (typeof slideFrame.contentWindow.currentSlide === 'number') {
          currentSlideIndex = slideFrame.contentWindow.currentSlide;
        }
      }
    } catch (err) {
      console.warn("Direct DOM introspection restricted (cross-origin or file://). Using postMessage channel.");
    }

    syncSlideView(currentSlideIndex);
    updateScale();
  }

  function injectNormalizingStyles(doc) {
    if (doc.getElementById('viewer-injected-styles')) return;

    const style = doc.createElement('style');
    style.id = 'viewer-injected-styles';
    style.textContent = `
      /* Normalization by Slide Viewer Pro */
      html, body {
        width: 1920px !important;
        height: 1080px !important;
        max-width: 1920px !important;
        max-height: 1080px !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        background-color: transparent !important;
      }

      /* Hide embedded controls in iframe */
      #hud-controls,
      header.no-print,
      #app-header,
      #app-controls,
      #nav-prev,
      #nav-next,
      .no-print {
        display: none !important;
      }

      /* Force 16:9 canvas to fill the 1920x1080 stage exactly */
      main {
        width: 1920px !important;
        height: 1080px !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
      }

      .slide-viewport,
      .slide-canvas {
        width: 1920px !important;
        height: 1080px !important;
        max-width: none !important;
        max-height: none !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
        position: relative !important;
        overflow: hidden !important;
        aspect-ratio: 16 / 9 !important;
      }

      .slide-viewport > div,
      .slide-canvas > div {
        width: 1920px !important;
        height: 1080px !important;
        position: relative !important;
      }

      .slide-item,
      .slide-pane {
        width: 1920px !important;
        height: 1080px !important;
        position: absolute !important;
        inset: 0 !important;
      }
    `;
    doc.head.appendChild(style);
  }

  slideFrame.addEventListener('load', onFrameLoad);

  /* ==========================================================================
     4. NAVIGATION CONTROLLER (Multi-Channel Dispatch)
     ========================================================================== */
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlideIndex = index;

    // Channel 1: postMessage (100% reliable across all origins, file://, and srcdoc)
    try {
      if (slideFrame.contentWindow) {
        slideFrame.contentWindow.postMessage({ type: 'go-to-slide', slideIndex: index }, '*');
      }
    } catch (e) {
      console.warn("postMessage dispatch failed:", e);
    }

    // Channel 2: Direct Window functions (if accessible)
    try {
      const win = slideFrame.contentWindow;
      if (win) {
        if (typeof win.goToSlide === 'function') {
          win.goToSlide(index);
        } else if (typeof win.showSlide === 'function') {
          win.showSlide(index);
        }
      }
    } catch (e) {
      // Ignored
    }

    // Channel 3: Direct DOM manipulation (if slideNodes available)
    if (slideNodes && slideNodes.length > 0) {
      slideNodes.forEach((node, i) => {
        if (i === index) {
          node.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
          node.classList.add('opacity-100', 'z-10');
          node.style.display = 'block';
          node.style.opacity = '1';
        } else {
          node.classList.remove('opacity-100', 'z-10');
          node.classList.add('opacity-0', 'pointer-events-none');
          node.style.display = 'none';
          node.style.opacity = '0';
        }
      });
    }

    syncSlideView(currentSlideIndex);
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  function syncSlideView(index) {
    slideCurrentEl.innerText = (index + 1).toString().padStart(2, '0');
    slideTotalEl.innerText = totalSlides.toString().padStart(2, '0');
    const pct = ((index + 1) / totalSlides) * 100;
    deckProgressBar.style.width = `${pct}%`;

    const title = slideTitles[index] || `Diapositiva ${index + 1}`;
    floatingTitle.innerText = `${(index + 1).toString().padStart(2, '0')}. ${title}`;

    // Highlight in overview grid if open
    const cards = overviewGrid.querySelectorAll('.overview-card');
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  overlayNext.addEventListener('click', nextSlide);
  overlayPrev.addEventListener('click', prevSlide);

  /* ==========================================================================
     5. OVERVIEW GRID (Mosaico de Diapositivas)
     ========================================================================== */
  function openOverview() {
    overviewGrid.innerHTML = '';

    for (let idx = 0; idx < totalSlides; idx++) {
      const title = slideTitles[idx] || `Diapositiva ${idx + 1}`;
      const card = document.createElement('div');
      card.className = `overview-card p-3 flex flex-col justify-between ${idx === currentSlideIndex ? 'active' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between text-xs mb-2">
          <span class="font-mono font-bold text-[#34909D] px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
            ${(idx + 1).toString().padStart(2, '0')}
          </span>
          <span class="text-[10px] text-slate-400 font-mono">16:9</span>
        </div>
        <p class="text-xs font-semibold text-slate-200 line-clamp-3 leading-snug">
          ${title}
        </p>
        <div class="mt-3 pt-2 border-t border-slate-700/60 text-[10px] font-mono text-slate-400 flex justify-between items-center">
          <span>Click para ver</span>
          <span class="text-[#55C0ED]">→</span>
        </div>
      `;

      card.addEventListener('click', () => {
        goToSlide(idx);
        closeOverview();
      });

      overviewGrid.appendChild(card);
    }

    overviewModal.classList.remove('hidden');
  }

  function closeOverview() {
    overviewModal.classList.add('hidden');
  }

  btnOverview.addEventListener('click', openOverview);
  overviewClose.addEventListener('click', closeOverview);

  /* ==========================================================================
     6. FULLSCREEN CONTROLLER
     ========================================================================== */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  btnFullscreen.addEventListener('click', toggleFullscreen);

  /* ==========================================================================
     7. HIGH-FIDELITY PDF EXPORT ENGINE (Exact 16:9 Pixel-Perfect)
     ========================================================================== */
  async function exportToPdf() {
    if (isExporting) return;
    if (typeof window.jspdf === 'undefined' || typeof html2canvas === 'undefined') {
      alert("Bibliotecas de exportación PDF no disponibles. Se abrirá la impresión nativa.");
      window.print();
      return;
    }

    isExporting = true;
    exportModal.classList.remove('hidden');
    exportProgress.style.width = '0%';
    exportPercent.innerText = '0%';

    const originalIndex = currentSlideIndex;
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [STAGE_WIDTH, STAGE_HEIGHT]
    });

    try {
      const doc = slideFrame.contentDocument || slideFrame.contentWindow.document;
      const targetViewport = doc.querySelector('.slide-viewport') || doc.querySelector('.slide-canvas') || doc.body;

      for (let i = 0; i < totalSlides; i++) {
        const pct = Math.round(((i + 1) / totalSlides) * 100);
        exportStatus.innerText = `Renderizando lámina ${i + 1} de ${totalSlides} (${slideTitles[i] || ''})...`;
        exportProgress.style.width = `${pct}%`;
        exportPercent.innerText = `${pct}%`;

        goToSlide(i);
        await new Promise(resolve => setTimeout(resolve, 300));

        let slideElement = doc.getElementById(`slide-${i}`);
        if (!slideElement && slideNodes[i]) {
          slideElement = slideNodes[i];
        }
        if (!slideElement) {
          slideElement = targetViewport;
        }

        const canvas = await html2canvas(slideElement, {
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#F4F5F7'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.96);

        if (i > 0) {
          pdf.addPage([STAGE_WIDTH, STAGE_HEIGHT], 'landscape');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, STAGE_WIDTH, STAGE_HEIGHT, undefined, 'FAST');
      }

      exportStatus.innerText = "Finalizando archivo PDF...";
      await new Promise(resolve => setTimeout(resolve, 300));

      const deckName = (deckSelector.value || 'presentacion').split('/').pop().replace('.html', '') || 'slides_16_9';
      pdf.save(`${deckName}_16_9.pdf`);
    } catch (err) {
      console.error("PDF Export error:", err);
      alert("Ocurrió un error al exportar PDF con html2canvas: " + err.message + "\nSe abrirá el diálogo de impresión como alternativa.");
      try {
        slideFrame.contentWindow.print();
      } catch (pe) {
        window.print();
      }
    } finally {
      goToSlide(originalIndex);
      exportModal.classList.add('hidden');
      isExporting = false;
    }
  }

  btnExportPdf.addEventListener('click', exportToPdf);
  btnPrintNative.addEventListener('click', () => {
    try {
      slideFrame.contentWindow.print();
    } catch (e) {
      window.print();
    }
  });

  /* ==========================================================================
     8. DECK SELECTOR & LOCAL FILE LOADER (Drag & Drop)
     ========================================================================== */
  deckSelector.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'custom') {
      fileInput.click();
    } else {
      loadDeckUrl(val);
    }
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      loadLocalHtmlFile(file);
    }
  });

  function loadDeckUrl(url) {
    slideFrame.removeAttribute('srcdoc');
    slideFrame.src = url;
    currentSlideIndex = 0;
  }

  function loadLocalHtmlFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;

      // Immediately inspect with DOMParser to populate slide count & titles upfront
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        let slides = doc.querySelectorAll('.slide-item');
        if (slides.length === 0) slides = doc.querySelectorAll('.slide-pane');
        if (slides.length === 0) slides = doc.querySelectorAll('section');

        if (slides.length > 0) {
          totalSlides = slides.length;
          slideTotalEl.innerText = totalSlides.toString().padStart(2, '0');
          overviewBadge.innerText = `${totalSlides} láminas`;

          slideTitles = Array.from(slides).map((s, idx) => {
            const h = s.querySelector('h1, h2, h3');
            return (h && h.innerText.trim()) ? h.innerText.trim().replace(/\s+/g, ' ') : `Diapositiva ${idx + 1}`;
          });
        }
      } catch (err) {
        console.warn("DOMParser inspection error:", err);
      }

      currentSlideIndex = 0;
      slideFrame.srcdoc = content;

      let customOption = deckSelector.querySelector('option[data-custom="true"]');
      if (!customOption) {
        customOption = document.createElement('option');
        customOption.setAttribute('data-custom', 'true');
        deckSelector.appendChild(customOption);
      }
      customOption.value = 'loaded-file';
      customOption.text = `📄 ${file.name}`;
      deckSelector.value = 'loaded-file';

      syncSlideView(0);
    };
    reader.readAsText(file);
  }

  // Drag and drop handlers
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzoneOverlay.classList.remove('hidden');
  });

  dropzoneOverlay.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropzoneOverlay.classList.add('hidden');
  });

  dropzoneOverlay.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzoneOverlay.classList.add('hidden');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.html') || file.name.endsWith('.htm')) {
        loadLocalHtmlFile(file);
      } else {
        alert("Por favor arrastra un archivo .html con tus diapositivas.");
      }
    }
  });

  /* ==========================================================================
     9. PRESENTATION TIMER
     ========================================================================== */
  function updateTimer() {
    timerSeconds++;
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = (timerSeconds % 60).toString().padStart(2, '0');
    timerDisplay.innerText = `${m}:${s}`;
  }

  timerContainer.addEventListener('click', () => {
    if (!isTimerRunning) {
      timerInterval = setInterval(updateTimer, 1000);
      isTimerRunning = true;
      timerContainer.querySelector('span:first-child').className = "text-emerald-400 text-[10px] animate-ping";
    } else {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerContainer.querySelector('span:first-child').className = "text-amber-400 text-[10px]";
    }
  });

  timerContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 0;
    timerDisplay.innerText = "00:00";
    timerContainer.querySelector('span:first-child').className = "text-emerald-400 text-[10px]";
  });

  /* ==========================================================================
     10. UNIFIED KEYBOARD CONTROLLER (Parent & Iframe)
     ========================================================================== */
  function handleKey(key) {
    if (key === 'ArrowRight' || key === ' ' || key === 'PageDown' || key === 'Enter') {
      nextSlide();
    } else if (key === 'ArrowLeft' || key === 'PageUp' || key === 'Backspace') {
      prevSlide();
    } else if (key === 'Home') {
      goToSlide(0);
    } else if (key === 'End') {
      goToSlide(totalSlides - 1);
    } else if (key === 'f' || key === 'F') {
      toggleFullscreen();
    } else if (key === 'o' || key === 'O') {
      if (overviewModal.classList.contains('hidden')) {
        openOverview();
      } else {
        closeOverview();
      }
    } else if (key === 'p' || key === 'P') {
      exportToPdf();
    } else if (key === 'Escape') {
      if (!overviewModal.classList.contains('hidden')) {
        closeOverview();
      }
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter' ||
        e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace' ||
        e.key === 'Home' || e.key === 'End' ||
        e.key === 'f' || e.key === 'F' ||
        e.key === 'o' || e.key === 'O' ||
        e.key === 'p' || e.key === 'P' ||
        e.key === 'Escape') {
      e.preventDefault();
      handleKey(e.key);
    }
  });

  // Initial scaling call
  updateScale();

})();
