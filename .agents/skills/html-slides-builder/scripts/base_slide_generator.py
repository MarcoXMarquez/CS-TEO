"""
Plantilla Base para Generación de Diapositivas HTML Nativas 16:9 (1920x1080)
Compatible con html-slide-viewer, con incrustación Base64 e iconos monocromáticos SVG.
"""
import base64
from pathlib import Path


def get_b64_image(image_path: str | Path) -> str:
    """Convierte una imagen local a Data URI Base64 para evitar errores 404."""
    p = Path(image_path)
    if p.exists():
        ext = p.suffix.lower().lstrip(".")
        mime = "jpeg" if ext in ("jpg", "jpeg") else ext
        encoded = base64.b64encode(p.read_bytes()).decode("utf-8")
        return f"data:image/{mime};base64,{encoded}"
    raise FileNotFoundError(f"Imagen no encontrada para incrustar en Base64: {p}")


# Catálogo de Iconos Monocromáticos SVG (Cero Emojis)
ICONS = {
    "shield": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>""",
    "cpu": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>""",
    "database": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>""",
    "code": """<svg class="w-6 h-6 text-[#1E293B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>""",
    "activity": """<svg class="w-6 h-6 text-[#D97706] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>""",
    "chart": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>""",
    "server": """<svg class="w-6 h-6 text-[#475569] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>""",
    "document": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>""",
    "git": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>""",
    "alert": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>""",
    "award": """<svg class="w-6 h-6 text-[#059669] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>""",
    "check": """<svg class="w-5 h-5 text-[#059669] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>"""
}


def slide_header(tag: str, title: str, badge_text: str, badge_color: str = "teal") -> str:
    color_map = {
        "teal": "bg-[#167287]/10 text-[#167287] border-[#167287]/30",
        "crimson": "bg-[#BA0034]/10 text-[#BA0034] border-[#BA0034]/30",
        "amber": "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/30",
        "emerald": "bg-[#059669]/10 text-[#059669] border-[#059669]/30",
        "slate": "bg-[#1E293B]/10 text-[#1E293B] border-[#1E293B]/30"
    }
    b_class = color_map.get(badge_color, color_map["teal"])
    return f"""
    <div class="flex items-start justify-between shrink-0 mb-3 pb-3 border-b border-[#CBD0D8]/60">
      <div>
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-[#BA0034]">{tag}</span>
        <h2 class="text-3xl lg:text-4xl font-black font-heading text-[#1E293B] tracking-tight mt-1">{title}</h2>
      </div>
      <div class="px-4 py-1.5 rounded-full text-xs font-mono font-bold border {b_class} flex items-center space-x-2 shadow-2xs">
        <span>{badge_text}</span>
      </div>
    </div>
    """


def slide_footer(left_text: str, tag_text: str = "Grupo 02 · UNSA", tag_color: str = "teal") -> str:
    color_map = {
        "teal": "text-[#167287]",
        "crimson": "text-[#BA0034]",
        "amber": "text-[#D97706]",
        "emerald": "text-[#059669]",
        "slate": "text-[#475569]"
    }
    t_class = color_map.get(tag_color, color_map["teal"])
    return f"""
    <div class="flex items-center justify-between shrink-0 pt-2.5 mt-1 border-t border-[#CBD0D8]/60 text-xs text-[#64748B]">
      <div class="flex items-center space-x-2">
        <span class="w-2 h-2 rounded-full bg-[#167287]"></span>
        <span class="font-medium">{left_text}</span>
      </div>
      <div class="font-mono font-bold {t_class} pr-36">
        {tag_text}
      </div>
    </div>
    """


def build_deck_html(deck_title: str, slides_html: list[str], slide_titles: list[str], output_file: str | Path) -> None:
    """Ensambla todas las diapositivas en un documento HTML 1920x1080 autónomo."""
    joined_slides = "\n".join(slides_html)
    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{deck_title}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700;800;900&family=JetBrains+Mono:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          fontFamily: {{
            heading: ['Epilogue', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }},
          colors: {{
            brand: {{
              teal: '#167287',
              crimson: '#BA0034',
              amber: '#D97706',
              emerald: '#059669',
              slate: '#1E293B',
              bg: '#F4F5F7'
            }}
          }}
        }}
      }}
    }}
  </script>

  <style>
    html, body {{
      width: 1920px;
      height: 1080px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #F4F5F7;
      color: #1E293B;
      user-select: none;
    }}
    .slide-viewport {{
      width: 1920px;
      height: 1080px;
      position: relative;
      overflow: hidden;
      background-color: #F4F5F7;
    }}
    .slide-item {{
      width: 1920px;
      height: 1080px;
      position: absolute;
      inset: 0;
      box-sizing: border-box;
    }}
    body.is-embedded #hud-controls {{
      display: none !important;
    }}
    @media print {{
      @page {{
        size: 1920px 1080px;
        margin: 0;
      }}
      body, html {{
        width: 1920px !important;
        height: auto !important;
        overflow: visible !important;
        background-color: #F4F5F7 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }}
      .slide-viewport {{
        width: 1920px !important;
        height: auto !important;
        overflow: visible !important;
      }}
      .slide-item {{
        position: relative !important;
        width: 1920px !important;
        height: 1080px !important;
        opacity: 1 !important;
        display: block !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        break-after: page !important;
      }}
      #hud-controls {{
        display: none !important;
      }}
    }}
  </style>
</head>
<body>
  <div class="slide-viewport">
    {joined_slides}
  </div>

  <div id="hud-controls" class="fixed bottom-4 right-6 flex items-center space-x-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#CBD0D8] z-50">
    <button id="btn-prev" class="p-1.5 rounded-lg hover:bg-slate-100 text-[#475569] hover:text-[#1E293B] transition-colors" title="Anterior">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <div class="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#1E293B]">
      <span id="slide-num" class="text-[#BA0034]">01</span>
      <span class="text-[#64748B]">/</span>
      <span class="text-[#64748B]">{len(slides_html):02d}</span>
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
    const totalSlides = {len(slides_html)};
    const slides = document.querySelectorAll('.slide-item');
    const slideNum = document.getElementById('slide-num');

    if (window.parent && window.parent !== window) {{
      document.body.classList.add('is-embedded');
    }}

    function goToSlide(n) {{
      if (n < 0 || n >= totalSlides) return;
      slides[currentSlide].classList.remove('opacity-100', 'z-10');
      slides[currentSlide].classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      currentSlide = n;
      slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      slides[currentSlide].classList.add('opacity-100', 'z-10');
      
      if (slideNum) {{
        slideNum.textContent = String(currentSlide + 1).padStart(2, '0');
      }}

      if (window.parent && window.parent !== window) {{
        window.parent.postMessage({{
          type: 'slide-changed',
          slideIndex: currentSlide,
          totalSlides: totalSlides
        }}, '*');
      }}
    }}

    window.goToSlide = goToSlide;
    window.currentSlide = currentSlide;
    window.totalSlides = totalSlides;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnPdf = document.getElementById('btn-pdf');
    if (btnPrev) btnPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (btnNext) btnNext.addEventListener('click', () => goToSlide(currentSlide + 1));
    if (btnPdf) btnPdf.addEventListener('click', () => window.print());

    window.addEventListener('keydown', (e) => {{
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Enter') {{
        e.preventDefault();
        goToSlide(currentSlide + 1);
      }} else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {{
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }} else if (e.key === 'Home') {{
        e.preventDefault();
        goToSlide(0);
      }} else if (e.key === 'End') {{
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }} else if (e.key === 'f' || e.key === 'F' || e.key === 'o' || e.key === 'O' || e.key === 'p' || e.key === 'P') {{
        if (window.parent && window.parent !== window) {{
          window.parent.postMessage({{ type: 'slide-keydown', key: e.key }}, '*');
        }}
      }}
    }});

    window.addEventListener('message', (e) => {{
      if (!e.data) return;
      if (e.data.type === 'go-to-slide') {{
        goToSlide(e.data.slideIndex);
      }} else if (e.data.type === 'next-slide') {{
        goToSlide(currentSlide + 1);
      }} else if (e.data.type === 'prev-slide') {{
        goToSlide(currentSlide - 1);
      }} else if (e.data.type === 'get-info') {{
        sendInitInfo();
      }}
    }});

    function sendInitInfo() {{
      if (window.parent && window.parent !== window) {{
        window.parent.postMessage({{
          type: 'slide-init',
          totalSlides: totalSlides,
          currentSlide: currentSlide,
          slideTitles: {slide_titles}
        }}, '*');
      }}
    }}

    window.addEventListener('DOMContentLoaded', sendInitInfo);
    window.addEventListener('load', sendInitInfo);
    setTimeout(sendInitInfo, 250);
  </script>
</body>
</html>
"""
    dest = Path(output_file)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(html, encoding="utf-8")
    print(f"Generado exitosamente: {dest} ({len(html)} bytes)")
