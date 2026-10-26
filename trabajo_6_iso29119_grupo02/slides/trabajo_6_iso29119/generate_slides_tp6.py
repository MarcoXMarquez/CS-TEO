"""
Generador de Diapositivas HTML Nativas 16:9 (1920x1080) - Alta Densidad Visual
Trabajo Parcial 6: Automatización de Pruebas de Software E2E bajo ISO/IEC/IEEE 29119
Grupo 02 - Calidad de Software UNSA 2026
"""

import sys
import base64
from pathlib import Path

CURRENT_DIR = Path(__file__).resolve().parent
REPO_ROOT = CURRENT_DIR.parents[1]

sys.path.insert(0, str(REPO_ROOT / ".agents" / "skills" / "html-slides-builder" / "scripts"))
from base_slide_generator import get_b64_image, ICONS, slide_header, slide_footer, build_deck_html

ASSETS_DIR = CURRENT_DIR / "assets"

def generate_deck():
    # 1. Carga de evidencias en Base64
    b64_bortman = get_b64_image(ASSETS_DIR / "evidencia_ispysa_bortman.png")
    b64_manchester = get_b64_image(ASSETS_DIR / "evidencia_ispysa_manchester.png")
    b64_bioclim = get_b64_image(ASSETS_DIR / "evidencia_ispysa_bioclimatica.png")
    b64_saucedemo = get_b64_image(ASSETS_DIR / "evidencia_saucedemo_checkout.png")
    b64_report = get_b64_image(ASSETS_DIR / "evidencia_playwright_report.png")

    slides_html = []
    slide_titles = []

    # =========================================================================
    # SLIDE 01: PORTADA EJECUTIVA INSTITUCIONAL
    # =========================================================================
    slide_titles.append("Portada Ejecutiva Institucional")
    slides_html.append(f"""
    <div class="slide-item opacity-100 z-10 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        
        <!-- Header Superior con Metadatos Académicos -->
        <div class="flex items-center justify-between shrink-0 pb-2.5 border-b border-[#CBD0D8]/70">
          <div class="flex items-center space-x-3">
            <span class="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#167287]/15 text-[#167287] border border-[#167287]/30">
              UNSA • ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS
            </span>
            <span class="text-xs font-mono text-[#475569]">Calidad de Software • Semestre 2026-B</span>
          </div>
          <div class="px-4 py-1 rounded-full text-xs font-mono font-bold bg-[#BA0034]/15 text-[#BA0034] border border-[#BA0034]/30">
            GRUPO 02 • TRABAJO PARCIAL 6
          </div>
        </div>

        <!-- Cuerpo Central Bento Grid -->
        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-3">
          
          <!-- Columna Izquierda: Título y Contexto (8 cols) -->
          <div class="col-span-8 flex flex-col justify-between space-y-3">
            <div>
              <span class="text-xs font-mono font-bold uppercase text-[#BA0034] tracking-widest block mb-1.5">
                NORMA INTERNACIONAL ISO/IEC/IEEE 29119 (PARTES 1 A 5)
              </span>
              <h1 class="text-5xl lg:text-6xl font-black font-heading text-[#1E293B] tracking-tight leading-[1.08]">
                Automatización de Pruebas E2E con Playwright
              </h1>
              <p class="text-base text-[#334155] mt-3 leading-relaxed font-sans">
                Verificación formal sobre el <strong>Sistema de Vigilancia Epidemiológica IRA Perú (ISPySA-Pneumonia)</strong> y la plataforma referencial <strong>SauceDemo</strong> bajo determinismo estricto, selectores semánticos y cero flakiness.
              </p>
            </div>

            <!-- 3 Métricas Destacadas Grandes -->
            <div class="grid grid-cols-3 gap-4">
              <div class="p-5 rounded-2xl bg-white border border-[#CBD0D8] shadow-sm">
                <span class="text-xs font-mono font-bold text-[#167287] uppercase block">SUITE COMPLETA E2E</span>
                <div class="text-3xl font-black font-mono text-[#1E293B] mt-1.5">24 Casos</div>
                <span class="text-xs text-[#64748B] mt-1 block">12 ISPySA + 12 SauceDemo</span>
              </div>
              <div class="p-5 rounded-2xl bg-white border border-[#CBD0D8] shadow-sm">
                <span class="text-xs font-mono font-bold text-[#059669] uppercase block">TASA DE FLAKINESS</span>
                <div class="text-3xl font-black font-mono text-[#059669] mt-1.5">0.00%</div>
                <span class="text-xs text-[#64748B] mt-1 block">72/72 pruebas aprobadas</span>
              </div>
              <div class="p-5 rounded-2xl bg-white border border-[#CBD0D8] shadow-sm">
                <span class="text-xs font-mono font-bold text-[#D97706] uppercase block">PUNTO EQUILIBRIO ROI</span>
                <div class="text-3xl font-black font-mono text-[#D97706] mt-1.5">N = 7</div>
                <span class="text-xs text-[#64748B] mt-1 block">Corridas para amortización</span>
              </div>
            </div>

            <!-- Integrantes del Grupo 02 -->
            <div class="p-4 rounded-2xl bg-white border border-[#CBD0D8] shadow-sm">
              <span class="text-xs font-mono font-bold text-[#64748B] uppercase block mb-2.5">Equipo de Trabajo — Grupo 02:</span>
              <div class="grid grid-cols-5 gap-2.5 text-xs font-mono">
                <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span class="font-bold text-[#1E293B] block">Yoel Condori</span>
                  <span class="text-[11px] text-[#64748B]">Arquitectura & ISO</span>
                </div>
                <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span class="font-bold text-[#1E293B] block">Marco Márquez</span>
                  <span class="text-[11px] text-[#64748B]">CI/CD & Testing</span>
                </div>
                <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span class="font-bold text-[#1E293B] block">Jeremy Pérez</span>
                  <span class="text-[11px] text-[#64748B]">Flakiness Protocol</span>
                </div>
                <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span class="font-bold text-[#1E293B] block">Rafael Nina</span>
                  <span class="text-[11px] text-[#64748B]">Clínica Bortman</span>
                </div>
                <div class="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span class="font-bold text-[#1E293B] block">Leonardo Arce</span>
                  <span class="text-[11px] text-[#64748B]">Análisis ROI</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Columna Derecha: Pilares del Trabajo TP6 (4 cols) -->
          <div class="col-span-4 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center space-x-2 text-sm font-mono font-bold text-[#167287] uppercase pb-2.5 border-b border-slate-100">
              {ICONS['shield']}
              <span>Pilares del Trabajo Parcial 6</span>
            </div>

            <div class="space-y-3.5 flex-1 flex flex-col justify-between py-2.5">
              
              <div class="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-[#167287] uppercase">Pilar 1</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-[#167287] font-bold">NORMA OFICIAL</span>
                </div>
                <h4 class="text-base font-bold text-[#1E293B] mt-1">ISO/IEC/IEEE 29119</h4>
                <p class="text-xs text-[#475569] mt-1 leading-relaxed">
                  Adopción formal de Partes 1 a 5: procesos de prueba, documentación estándar, técnicas analíticas de caja negra y keywords.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-[#BA0034] uppercase">Pilar 2</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-100 text-[#BA0034] font-bold">DOBLE ALCANCE</span>
                </div>
                <h4 class="text-base font-bold text-[#1E293B] mt-1">Salud Pública & E-Commerce</h4>
                <p class="text-xs text-[#475569] mt-1 leading-relaxed">
                  Sistema A: ISPySA-Pneumonia (Canal Bortman OPS, Triaje Manchester, Bioclima) + Sistema B: SauceDemo.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-[#059669] uppercase">Pilar 3</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-[#059669] font-bold">PLAYWRIGHT E2E</span>
                </div>
                <h4 class="text-base font-bold text-[#1E293B] mt-1">Determinismo & CI/CD</h4>
                <p class="text-xs text-[#475569] mt-1 leading-relaxed">
                  3 corridas consecutivas en Chromium con 1 worker, 0 retries, auto-waiting y reportes de trazabilidad en HTML/JSON.
                </p>
              </div>

            </div>

            <div class="p-3 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              ISO/IEC/IEEE 29119-2/3/4/5 COMPLIANT • 2026
            </div>
          </div>

        </div>

        <!-- Footer -->
        {slide_footer("Universidad Nacional de San Agustín de Arequipa • EPIS", "Grupo 02 · TP6", "teal")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 02: MARCO TEÓRICO NORMATIVO ISO/IEC/IEEE 29119
    # =========================================================================
    slide_titles.append("Marco Teórico Normativo ISO 29119")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("MARCO NORMATIVO INTERNACIONAL", "Estructura de la Serie ISO/IEC/IEEE 29119: Partes 1 a 5", "Estándar Global de Pruebas", "teal")}

        <div class="grid grid-cols-5 gap-4 flex-1 items-stretch py-2.5">
          
          <!-- Parte 1 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#167287]">PARTE 1</span>
                {ICONS['document']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Conceptos & Vocabulario</h3>
            </div>
            
            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#167287] block uppercase font-mono text-[11px]">Fundamento Ontológico:</span>
              <p class="text-[#334155] leading-relaxed">
                Establece la ontología internacional de pruebas diferenciando formalmente:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• <strong>Error humano:</strong> Equivocación mental en diseño o codificación.</div>
                <div>• <strong>Defecto (Bug):</strong> Manifestación estática en el código fuente.</div>
                <div>• <strong>Falla (Failure):</strong> Comportamiento anómalo dinámico en runtime.</div>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <span class="font-bold text-slate-700 block uppercase text-[11px]">Implementación en TP6:</span>
              <div>• Sustituye unívocamente a IEEE 829 e IEEE 1008</div>
              <div>• Glosario estandarizado en reporte académico Word</div>
              <div>• Taxonomía de severidad alineada a ISO 25010</div>
              <div>• Trazabilidad total de requisitos a ejecución</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-center text-xs font-mono font-bold text-[#0e7490]">
              Base Ontológica Oficial
            </div>
          </div>

          <!-- Parte 2 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#BA0034]">PARTE 2</span>
                {ICONS['shield']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Procesos de Prueba</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#BA0034] block uppercase font-mono text-[11px]">Gobierno Multicapa:</span>
              <p class="text-[#334155] leading-relaxed">
                Define el ciclo de vida en 3 niveles complementarios:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• <strong>Gobierno Organizacional:</strong> Políticas institucionales de QA.</div>
                <div>• <strong>Gestión del Proyecto:</strong> Planes, monitoreo y control.</div>
                <div>• <strong>Procesos Dinámicos:</strong> Diseño, ejecución y cierre formal.</div>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <span class="font-bold text-slate-700 block uppercase text-[11px]">Implementación en TP6:</span>
              <div>• Protocolo estricto de 3 corridas consecutivas</div>
              <div>• Criterio Exit: Flakiness 0.00% (72/72 pruebas aprobadas)</div>
              <div>• Concurrencia controlada: workers: 1, retries: 0</div>
              <div>• Análisis de riesgo y punto de equilibrio financiero</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-center text-xs font-mono font-bold text-[#be123c]">
              Procesos Dinámicos
            </div>
          </div>

          <!-- Parte 3 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#D97706]">PARTE 3</span>
                {ICONS['document']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Documentación Estándar</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#D97706] block uppercase font-mono text-[11px]">Artefactos Auditables:</span>
              <p class="text-[#334155] leading-relaxed">
                Estructura canónica y jerarquía formal de entregables:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• <strong>Test Plan:</strong> Alcance, cronograma y recursos.</div>
                <div>• <strong>Test Design & Case Spec:</strong> Entradas, precondiciones y salidas.</div>
                <div>• <strong>Test Summary Report:</strong> Dictamen y veredicto final.</div>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <span class="font-bold text-slate-700 block uppercase text-[11px]">Implementación en TP6:</span>
              <div>• Informe Formal Word (.docx) con carátula y matrices</div>
              <div>• Matriz bidireccional R1-R6 a T01-T12 en 2 sistemas</div>
              <div>• Resúmenes estructurados en JSON y Playwright HTML</div>
              <div>• Repositorio empaquetado en archivo de distribución .zip</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center text-xs font-mono font-bold text-[#b45309]">
              Artefactos Auditables
            </div>
          </div>

          <!-- Parte 4 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#059669]">PARTE 4</span>
                {ICONS['code']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Técnicas de Diseño</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#059669] block uppercase font-mono text-[11px]">Caja Negra Analítica:</span>
              <p class="text-[#334155] leading-relaxed">
                Metodologías formales para derivación sistemática de pruebas:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• <strong>Equivalence Partitioning:</strong> Clases válidas e inválidas.</div>
                <div>• <strong>Boundary Value Analysis:</strong> Valores límite en fronteras.</div>
                <div>• <strong>State Transition:</strong> Máquinas de estados finitos.</div>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <span class="font-bold text-slate-700 block uppercase text-[11px]">Implementación en TP6:</span>
              <div>• EP: standard_user vs locked_out_user</div>
              <div>• BVA: Fronteras de cuartiles Bortman Q1, Q2, Q3</div>
              <div>• State Transition: Vacío &rarr; Item Agregado &rarr; Checkout</div>
              <div>• Aritmética defensiva: Tolerancia &le; 0.05% y sumas de orden</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-xs font-mono font-bold text-[#047857]">
              Caja Negra Analítica
            </div>
          </div>

          <!-- Parte 5 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#1E293B]">PARTE 5</span>
                {ICONS['cpu']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Keyword-Driven Testing</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#1E293B] block uppercase font-mono text-[11px]">Modularidad Semántica:</span>
              <p class="text-[#334155] leading-relaxed">
                Abstracción de automatización mediante palabras clave desacopladas:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• <strong>Keywords de Negocio:</strong> Acciones legibles de alto nivel.</div>
                <div>• <strong>Desacoplamiento:</strong> Independencia de la tecnología web.</div>
                <div>• <strong>Reusabilidad:</strong> Reducción de mantenimiento de scripts.</div>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <span class="font-bold text-slate-700 block uppercase text-[11px]">Implementación en TP6:</span>
              <div>• Selectores dedicados [data-testid] en ISPySA</div>
              <div>• Mapeo semántico de acciones en SauceDemo</div>
              <div>• Page Object Pattern estructurado en Playwright</div>
              <div>• Resiliencia total ante rediseños de hojas de estilo CSS</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-slate-100 border border-slate-300 text-center text-xs font-mono font-bold text-[#334155]">
              Modularidad & Reuso
            </div>
          </div>

        </div>

        <div class="p-4 rounded-xl bg-white border border-[#CBD0D8] shadow-sm flex items-center justify-between text-xs">
          <div class="flex items-center space-x-3">
            <span class="font-mono font-bold text-[#167287] uppercase">Reemplazo Normativo Histórico:</span>
            <span class="text-[#334155]">ISO/IEC/IEEE 29119 unifica y sustituye a IEEE 829 (Test Documentation) e IEEE 1008 (Unit Testing).</span>
          </div>
          <span class="font-mono font-bold text-[#BA0034]">Vigencia Oficial: Certificación Internacional</span>
        </div>

        {slide_footer("Gobernanza de Pruebas • ISO/IEC/IEEE 29119-1/2/3/4/5", "Grupo 02 · UNSA", "teal")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 03: ARQUITECTURA TÉCNICA DEL FRAMEWORK PLAYWRIGHT
    # =========================================================================
    slide_titles.append("Arquitectura Técnica con Playwright")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("ARQUITECTURA DE AUTOMATIZACIÓN", "Framework de Pruebas E2E con Playwright & Chromium", "Determinismo Estricto", "crimson")}

        <div class="grid grid-cols-4 gap-5 flex-1 items-stretch py-2.5">
          
          <!-- Componente 1 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3.5 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#167287]">MOTOR NATIVO</span>
                {ICONS['cpu']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Chromium DevTools Protocol</h3>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#167287] block uppercase font-mono text-[11px]">Socket Bidireccional Directo:</span>
              <p class="text-[#334155] leading-relaxed">
                Control directo por sockets WebSocket bidireccionales sin necesidad de intermediarios HTTP como Selenium WebDriver.
              </p>
              <div class="text-[#334155] space-y-1 pt-1">
                <div>• Auto-waiting inteligente en carga de red y DOM.</div>
                <div>• Eliminación absoluta de retardos ciegos (<code>sleep</code>).</div>
                <div>• Monitoreo en tiempo real de hidratación y renderizado.</div>
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Métricas de Conexión:</div>
              <div>• Viewport Fijo: 1440 × 900 px (consistencia visual)</div>
              <div>• Modo Headless: True (optimizado para CI/CD)</div>
              <div>• Latencia Media: &lt; 40ms por comando de acción</div>
              <div>• Cero dependencias binarias externas en servidor</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-center text-xs font-mono font-bold text-[#0e7490]">
              Zero-WebDriver Bridge
            </div>
          </div>

          <!-- Componente 2 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3.5 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#BA0034]">CONTROL DE CONCURRENCIA</span>
                {ICONS['shield']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Single Worker & Zero Retries</h3>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#BA0034] block uppercase font-mono text-[11px]">Blindaje Determinista:</span>
              <p class="text-[#334155] leading-relaxed">
                Configuración formal con <code>workers: 1</code> y <code>retries: 0</code> para validar la verdadera calidad del software sin artefactos de concurrencia.
              </p>
              <div class="text-[#334155] space-y-1 pt-1">
                <div>• Impide que los reintentos oculten carreras críticas.</div>
                <div>• Garantiza aislamiento total mediante BrowserContext.</div>
                <div>• Cada falla se cataloga como defecto reproducible real.</div>
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Garantías de Ejecución:</div>
              <div>• Modo de ejecución estrictamente secuencial</div>
              <div>• Cero falsos positivos por saturación de CPU</div>
              <div>• Timeout determinista por caso: 45,000 ms</div>
              <div>• Tasa de Flakiness certificada: 0.00%</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-center text-xs font-mono font-bold text-[#be123c]">
              Determinismo Riguroso
            </div>
          </div>

          <!-- Componente 3 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3.5 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#059669]">SELECTORES RESILIENTES</span>
                {ICONS['code']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Semántica data-testid</h3>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#059669] block uppercase font-mono text-[11px]">Resiliencia ante Cambios:</span>
              <p class="text-[#334155] leading-relaxed">
                Aislamiento desacoplado de estilos CSS volátiles y refactorizaciones de diseño visual.
              </p>
              <div class="text-[#334155] space-y-1 pt-1">
                <div>• Uso de atributos de prueba dedicados [data-testid].</div>
                <div>• Integración con roles de accesibilidad WAI-ARIA.</div>
                <div>• Blindaje contra modificaciones estéticas de Tailwind.</div>
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Selectores Instrumentados:</div>
              <div>• [data-testid="bortman-alert"] (Semáforo OPS)</div>
              <div>• [data-testid="bortman-corridor"] (Gráfico 4 Zonas)</div>
              <div>• [data-testid="manchester-monitor"] (Camas UCI / O2)</div>
              <div>• [data-testid="bioclimatic-matrix"] (Heladas / Friaje)</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-xs font-mono font-bold text-[#047857]">
              Blindaje ante Refactor UI
            </div>
          </div>

          <!-- Componente 4 -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3.5 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#D97706]">TELEMETRÍA & AUDITORÍA</span>
                {ICONS['activity']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Trazabilidad Total</h3>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#D97706] block uppercase font-mono text-[11px]">Conformidad Documental:</span>
              <p class="text-[#334155] leading-relaxed">
                Generación continua de registros de auditoría conformes con la Parte 3 de la norma internacional:
              </p>
              <div class="space-y-1 text-[#334155] pt-0.5">
                <div>• Reporte oficial Playwright HTML navegable.</div>
                <div>• Volcado de métricas estructurado en JSON.</div>
                <div>• Grabación de paquetes de traza interactivos trace.zip.</div>
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Artefactos de Auditoría:</div>
              <div>• Capturas de pantalla integradas en Base64</div>
              <div>• Cronometría individual por cada paso de prueba</div>
              <div>• Registro de aserciones matemáticas defensivas</div>
              <div>• Inspección forense de errores paso a paso</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center text-xs font-mono font-bold text-[#b45309]">
              Auditoría ISO 29119-3
            </div>
          </div>

        </div>

        <div class="p-3.5 rounded-xl bg-[#0F172A] text-white flex items-center justify-between text-xs font-mono">
          <span>Configuración oficial: playwright.config.js • fullyParallel: false • timeout: 45000ms • workers: 1</span>
          <span class="text-emerald-400">Playwright v1.49 / 1.64 • Node.js v24 • Windows 64-bit</span>
        </div>

        {slide_footer("Infraestructura de Pruebas • Playwright E2E Engine", "Grupo 02 · UNSA", "crimson")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 04: ESPECIFICACIÓN DE REQUISITOS R1 A R6 (DOBLE ALCANCE)
    # =========================================================================
    slide_titles.append("Requisitos R1 a R6: Cobertura Dual")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("INGENIERÍA DE REQUISITOS", "Matriz de Mapeo de Requisitos Funcionales R1 a R6", "Doble Alcance de Pruebas", "teal")}

        <div class="grid grid-cols-6 gap-3.5 flex-1 items-stretch py-2.5">
          
          <!-- R1 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 1</span>
              <h4 class="text-base font-bold text-[#1E293B]">Acceso & Cohorte</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T01-T02):</strong>
              <p class="text-[#334155] leading-snug">Segmentación pediátrica (men5) y geriátrica (60mas). Actualización reactiva del hero banner y métricas.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="cohort-radio"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Texto de cohorte activo</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T01-T02):</strong>
              <p class="text-[#334155] leading-snug">Autenticación válida standard_user y bloqueo determinista a locked_out_user con banner de error.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: #login-button, [data-test="error"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Redirección /inventory.html</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Partición de Equivalencia (EP)</div>
              <div class="text-slate-500 text-[10px]">• Dominio Válido: credencial correcta</div>
              <div class="text-slate-500 text-[10px]">• Dominio Inválido: usuario bloqueado</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T01-T02: PASS (100%)
            </div>
          </div>

          <!-- R2 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 2</span>
              <h4 class="text-base font-bold text-[#1E293B]">Estructura & Alertas</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T03-T04):</strong>
              <p class="text-[#334155] leading-snug">Semáforo Bortman OPS y Corredor Endémico de 4 zonas con cuartiles Q1, Q2, Q3 en Tab I.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="bortman-alert"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: 4 tarjetas cuartiles visibles</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T03-T04):</strong>
              <p class="text-[#334155] leading-snug">Integridad de catálogo (6 productos con precios) y navegación profunda a detalle de ítem.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: .inventory_item, .inventory_details</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Conteo = 6 y botón 'Back'</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Análisis Valores Límite (BVA)</div>
              <div class="text-slate-500 text-[10px]">• Umbrales Q1 (&lt;85.1), Q2 (108.8)</div>
              <div class="text-slate-500 text-[10px]">• Umbral Epidémico Q3 (&ge;173.8)</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T03-T04: PASS (100%)
            </div>
          </div>

          <!-- R3 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 3</span>
              <h4 class="text-base font-bold text-[#1E293B]">Demanda / Orden</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T05-T06):</strong>
              <p class="text-[#334155] leading-snug">Monitor Manchester, proyección de camas UCI y consumo diario de O2 medicinal (m³/día).</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="manchester-monitor"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Camas UCI &gt; 0, 5 niveles MTS</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T05-T06):</strong>
              <p class="text-[#334155] leading-snug">Clasificación de precios ascendente (lohi) y descendente (hilo) sobre arreglo numérico P[i].</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-test="product-sort-container"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: P[i] &le; P[i+1] estricto</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Reglas Matemáticas de Dominio</div>
              <div class="text-slate-500 text-[10px]">• Monotonía en arrays de precios</div>
              <div class="text-slate-500 text-[10px]">• Balance de masa de flujo de O2</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T05-T06: PASS (100%)
            </div>
          </div>

          <!-- R4 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 4</span>
              <h4 class="text-base font-bold text-[#1E293B]">Estratifica / Carrito</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T07-T08):</strong>
              <p class="text-[#334155] leading-snug">Persistencia Top 3 y Matriz Bioclimática Regional (Heladas Altoandinas y Friaje).</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="bioclimatic-matrix"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Factores 1.35x y 1.25x</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T07-T08):</strong>
              <p class="text-[#334155] leading-snug">Gestión reactiva de carrito: add item, badge update, remove item con sincronía.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-test^="add-to-cart"], .badge</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: Badge = "1" &rarr; Removido</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Transición de Estados Finitos</div>
              <div class="text-slate-500 text-[10px]">• Estado 0: Carrito Vacío</div>
              <div class="text-slate-500 text-[10px]">• Estado 1: 1 Ítem &rarr; Estado 0</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T07-T08: PASS (100%)
            </div>
          </div>

          <!-- R5 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 5</span>
              <h4 class="text-base font-bold text-[#1E293B]">Aritmética / Form</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T09-T10):</strong>
              <p class="text-[#334155] leading-snug">Aserción de tolerancia matemática en tasas epidemiológicas HR y CFR con cota estricta &le; 0.05%.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="kpi-card-cases"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: |HR - Calc| &le; 0.05%</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T09-T10):</strong>
              <p class="text-[#334155] leading-snug">Validación de campos obligatorios en Checkout Step One y transición exitosa a Step Two.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: #continue, [data-test="error"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: 'First Name is required'</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Aritmética Defensiva</div>
              <div class="text-slate-500 text-[10px]">• Validación de campos vacíos</div>
              <div class="text-slate-500 text-[10px]">• Control de desbordamiento flotante</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T09-T10: PASS (100%)
            </div>
          </div>

          <!-- R6 -->
          <div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-1.5 border-b border-slate-100">
              <span class="text-xs font-mono font-bold text-[#167287] uppercase block">REQUISITO 6</span>
              <h4 class="text-base font-bold text-[#1E293B]">ML / Cierre Sesión</h4>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#167287] block font-mono text-[11px]">ISPySA (T11-T12):</strong>
              <p class="text-[#334155] leading-snug">Modelos predictivos ML (XGBoost R²=0.935) y trazabilidad de usabilidad ISO 9241 / ISO 25010.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: [data-testid="ml-forecast-tab"]</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: R² &gt; 0.90 y footer normativo</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1">
              <strong class="text-[#BA0034] block font-mono text-[11px]">SauceDemo (T11-T12):</strong>
              <p class="text-[#334155] leading-snug">Subtotal + Tax (8%) = Total, orden finalizada con éxito y logout seguro con limpieza de sesión.</p>
              <div class="text-[10px] font-mono text-slate-500 pt-0.5">• Loc: .summary_total_label, #finish</div>
              <div class="text-[10px] font-mono text-emerald-700 font-bold">• Aserción: 'Thank you for your order!'</div>
            </div>

            <div class="flex-1 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-[11px] font-mono text-[#334155] space-y-0.5">
              <span class="font-bold text-[#167287] block uppercase text-[10px]">Técnica ISO 29119-4:</span>
              <div class="text-[#334155]">Auditoría Financiera & ML</div>
              <div class="text-slate-500 text-[10px]">• Total = Item Total + Tax</div>
              <div class="text-slate-500 text-[10px]">• Cierre de sesión determinista</div>
            </div>

            <div class="shrink-0 p-2.5 rounded-lg bg-emerald-50 text-center font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
              T11-T12: PASS (100%)
            </div>
          </div>

        </div>

        <div class="p-3.5 rounded-xl bg-white border border-[#CBD0D8] shadow-sm flex items-center justify-between text-xs">
          <span class="font-mono font-bold text-[#167287]">TOTAL DE PRUEBAS AUTOMATIZADAS: 24 CASOS E2E FORMALES (12 POR SISTEMA)</span>
          <span class="text-[#475569]">Cumplimiento riguroso de la especificación técnica ISO/IEC/IEEE 29119-3</span>
        </div>

        {slide_footer("Matriz de Trazabilidad R1-R6 • Cobertura 100%", "Grupo 02 · UNSA", "teal")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 05: SISTEMA A: CANAL ENDÉMICO DE BORTMAN (OPS/MINSA)
    # =========================================================================
    slide_titles.append("Sistema A: Canal Endémico Bortman OPS")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("SISTEMA A: SALUD PÚBLICA (ISPYSA-PNEUMONIA)", "Canal Endémico de Bortman y Alerta Epidemiológica (OPS/MINSA)", "Vigilancia Centinela", "crimson")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Captura Real en Base64 (7 cols) -->
          <div class="col-span-7 bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
              <span class="font-bold text-[#BA0034]">EVIDENCIA VISUAL: INTERFAZ EN EJECUCIÓN (TAB I)</span>
              <span class="text-[#64748B]">Streamlit • Port: 8501 • Base64 Injected</span>
            </div>
            <div class="my-2 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex items-center justify-center flex-1 max-h-[500px]">
              <img src="{b64_bortman}" alt="Canal Endémico Bortman" class="w-full h-full object-contain">
            </div>
            <div class="grid grid-cols-4 gap-2.5 text-xs font-mono text-center">
              <div class="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200">
                <span class="text-[#0369a1] block font-bold text-sm">Q1 ÉXITO</span>
                <span class="text-slate-800 font-bold">&lt; 85.1 x 100k</span>
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span class="text-[#15803d] block font-bold text-sm">Q2 SEGURIDAD</span>
                <span class="text-slate-800 font-bold">85.1 - 108.8</span>
              </div>
              <div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                <span class="text-[#c2410c] block font-bold text-sm">Q3 ALARMA</span>
                <span class="text-slate-800 font-bold">108.8 - 173.8</span>
              </div>
              <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                <span class="text-[#991b1b] block font-bold text-sm">&ge; Q3 EPIDEMIA</span>
                <span class="text-slate-800 font-bold">Brote Activo</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Fundamento y Verificación Playwright (5 cols) -->
          <div class="col-span-5 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#167287] uppercase pb-2 border-b border-slate-100">
              {ICONS['shield']}
              <span>Metodología Canónica OPS / MINSA</span>
            </div>
            
            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center space-y-1.5">
              <h4 class="font-bold text-[#1E293B] text-base">Construcción del Corredor Bortman</h4>
              <p class="text-sm text-[#334155] leading-relaxed">
                Delimitación matemática de zonas sanitarias mediante cuartiles de la serie histórica 2000-2023. Permite discriminar variaciones estacionales normales de brotes epidémicos reales.
              </p>
              <div class="text-xs font-mono text-[#167287] pt-1">
                Fórmula: Q1 (p25), Mediana Histórica Q2 (p50), Umbral Epidémico Q3 (p75).
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center space-y-1.5">
              <h4 class="font-bold text-[#1E293B] text-base">Semáforo Dinámico en Banner</h4>
              <p class="text-sm text-[#334155] leading-relaxed">
                Evaluación automatizada de la tasa de incidencia del año más reciente contra los umbrales históricos, disparando protocolos clínicos y logísticos recomendados por la OPS.
              </p>
              <div class="text-xs font-mono text-[#059669] pt-1">
                Estados: Éxito (Verde), Seguridad (Azul), Alerta (Amarillo), Epidemia (Rojo).
              </div>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center space-y-2">
              <h4 class="font-bold text-[#1E293B] text-base">Cobertura de Pruebas E2E (Playwright)</h4>
              <div class="space-y-1.5 font-mono text-xs text-[#15803d]">
                <div>• <strong>T03 [R2]:</strong> Validación de texto y severidad del banner Bortman.</div>
                <div>• <strong>T04 [R2]:</strong> Renderizado de 4 zonas y 4 tarjetas de cuartiles en Tab I.</div>
              </div>
            </div>

            <div class="shrink-0 p-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Norma Técnica Bortman (OPS) • Casos T03 y T04 APROBADOS
            </div>
          </div>

        </div>

        {slide_footer("ISPySA-Pneumonia • Vigilancia Epidemiológica Bortman", "Grupo 02 · UNSA", "crimson")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 06: SISTEMA A: MONITOR DE TRIAJE MANCHESTER Y RECURSOS
    # =========================================================================
    slide_titles.append("Sistema A: Triaje Manchester y Camas UCI")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("SISTEMA A: SALUD PÚBLICA (ISPYSA-PNEUMONIA)", "Monitor de Triaje Manchester y Demanda Crítica (UCI y Oxígeno)", "Gestión Hospitalaria", "amber")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Captura Real en Base64 (7 cols) -->
          <div class="col-span-7 bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
              <span class="font-bold text-[#D97706]">EVIDENCIA VISUAL: SEVERIDAD CLÍNICA & TRIAJE (TAB II)</span>
              <span class="text-[#64748B]">MTS System • Base64 Injected</span>
            </div>
            <div class="my-2 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex items-center justify-center flex-1 max-h-[500px]">
              <img src="{b64_manchester}" alt="Monitor Triaje Manchester" class="w-full h-full object-contain">
            </div>
            <div class="grid grid-cols-3 gap-3 text-xs font-mono text-center">
              <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                <span class="text-[#b91c1c] block font-bold text-sm">CAMAS UCI PROYECTADAS</span>
                <span class="text-slate-800 font-bold">996 camas requeridas</span>
              </div>
              <div class="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200">
                <span class="text-[#0284c7] block font-bold text-sm">CONSUMO O2 MEDICINAL</span>
                <span class="text-slate-800 font-bold">38,832 m³/día (3,884 balones)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                <span class="text-[#d97706] block font-bold text-sm">SOPORTE CONVENCIONAL</span>
                <span class="text-slate-800 font-bold">3,484 pacientes</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Especificación de Triaje MTS (5 cols) -->
          <div class="col-span-5 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#D97706] uppercase pb-2 border-b border-slate-100">
              {ICONS['activity']}
              <span>Sistema de Triaje Manchester (MTS)</span>
            </div>

            <div class="flex-1 space-y-2 text-xs flex flex-col justify-center">
              <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                <div>
                  <span class="font-bold text-[#991b1b] block text-sm">Nivel 1 - Resucitación (Rojo)</span>
                  <span class="text-[#475569]">Atención inmediata (0 min). Insuficiencia respiratoria aguda severa.</span>
                </div>
                <span class="font-mono font-bold text-[#991b1b] text-base">299 pactes</span>
              </div>

              <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                <div>
                  <span class="font-bold text-[#c2410c] block text-sm">Nivel 2 - Emergencia (Naranja)</span>
                  <span class="text-[#475569]">Muy urgente (10 min). Oxigenoterapia de alto flujo requerida.</span>
                </div>
                <span class="font-mono font-bold text-[#c2410c] text-base">1,194 pactes</span>
              </div>

              <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                <div>
                  <span class="font-bold text-[#d97706] block text-sm">Nivel 3 - Urgencia (Amarillo)</span>
                  <span class="text-[#475569]">Urgente (60 min). Dificultad respiratoria moderada en sala.</span>
                </div>
                <span class="font-mono font-bold text-[#d97706] text-base">3,483 pactes</span>
              </div>

              <div class="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                <div>
                  <span class="font-bold text-[#15803d] block text-sm">Nivel 4 / 5 - Menor y No Urgente</span>
                  <span class="text-[#475569]">Poco urgente (120-240 min). Manejo ambulatorio/sala común.</span>
                </div>
                <span class="font-mono font-bold text-[#15803d] text-base">4,976 pactes</span>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-center space-y-1">
              <span class="font-mono font-bold text-[#167287] uppercase block">Verificación Playwright Automatizada:</span>
              <div class="space-y-1 font-mono text-xs text-[#15803d]">
                <div>• <strong>T05 [R3]:</strong> Carga de curvas HR vs CFR y cuadrante de dispersión clínica.</div>
                <div>• <strong>T06 [R3]:</strong> Aserción de camas UCI &gt; 0, consumo O2 y 5 niveles MTS.</div>
              </div>
            </div>

            <div class="shrink-0 p-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Planificación Hospitalaria Crítica • Casos T05 y T06 APROBADOS
            </div>
          </div>

        </div>

        {slide_footer("ISPySA-Pneumonia • Monitor de Triaje Manchester & UCI", "Grupo 02 · UNSA", "amber")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 07: SISTEMA A: MATRIZ BIOCLIMÁTICA REGIONAL Y MODELOS ML
    # =========================================================================
    slide_titles.append("Sistema A: Matriz Bioclimática y Modelos ML")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("SISTEMA A: SALUD PÚBLICA (ISPYSA-PNEUMONIA)", "Matriz de Vulnerabilidad Bioclimática y Modelos Predictivos", "Estratificación Regional", "teal")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Captura Real en Base64 (7 cols) -->
          <div class="col-span-7 bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
              <span class="font-bold text-[#167287]">EVIDENCIA VISUAL: MATRIZ BIOCLIMÁTICA (TAB III)</span>
              <span class="text-[#64748B]">Heladas & Friaje • Base64 Injected</span>
            </div>
            <div class="my-2 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex items-center justify-center flex-1 max-h-[500px]">
              <img src="{b64_bioclim}" alt="Matriz Bioclimática Regional" class="w-full h-full object-contain">
            </div>
            <div class="grid grid-cols-3 gap-3 text-xs font-mono text-center">
              <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                <span class="text-[#b91c1c] block font-bold text-sm">HELADAS ALTOANDINAS</span>
                <span class="text-slate-800 font-bold">Factor Exposición 1.35x</span>
              </div>
              <div class="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200">
                <span class="text-[#0284c7] block font-bold text-sm">FRIAJE AMAZÓNICO</span>
                <span class="text-slate-800 font-bold">Factor Exposición 1.25x</span>
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span class="text-[#15803d] block font-bold text-sm">COSTA Y VALLES</span>
                <span class="text-slate-800 font-bold">Factor Exposición 1.00x</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Factores Bioclimáticos y ML (5 cols) -->
          <div class="col-span-5 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#167287] uppercase pb-2 border-b border-slate-100">
              {ICONS['chart']}
              <span>Estratificación Climática & Algoritmos ML</span>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center space-y-1.5">
              <h4 class="font-bold text-[#1E293B] text-base">Cluster de Heladas (&gt;3000 msnm)</h4>
              <p class="text-sm text-[#334155] leading-relaxed">
                Puno, Cusco, Huancavelica, Pasco y Junín presentan estrés térmico severo en invierno, elevando la letalidad pediátrica y la necesidad urgente de oxígeno concentrado.
              </p>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center space-y-1.5">
              <h4 class="font-bold text-[#1E293B] text-base">Cluster de Friaje Amazónico</h4>
              <p class="text-sm text-[#334155] leading-relaxed">
                Loreto, Ucayali y Madre de Dios sufren caídas térmicas de hasta 15°C en 24 horas por vientos subantárticos, disparando brotes agudos en poblaciones no adaptadas.
              </p>
            </div>

            <div class="flex-1 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center space-y-1.5">
              <h4 class="font-bold text-[#1E293B] text-base">Desempeño de Modelos ML (Tab IV)</h4>
              <div class="font-mono text-xs text-[#334155] space-y-1 pt-1">
                <div>• <strong>XGBoost (Óptimo):</strong> R² = 0.935 | MAE = 0.184 | RMSE = 0.271</div>
                <div>• <strong>Random Forest:</strong> R² = 0.922 | MAE = 0.210 | RMSE = 0.296</div>
                <div>• <strong>Proyección:</strong> 52 semanas epidemiológicas con IC 95%.</div>
              </div>
            </div>

            <div class="shrink-0 p-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Estratificación 25 Dptos • Casos T07, T08, T11 y T12 APROBADOS
            </div>
          </div>

        </div>

        {slide_footer("ISPySA-Pneumonia • Bioclima & Machine Learning", "Grupo 02 · UNSA", "teal")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 08: SISTEMA B: SAUCEDEMO E2E SUITE Y CONSISTENCIA FINANCIERA
    # =========================================================================
    slide_titles.append("Sistema B: SauceDemo E2E Suite")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("SISTEMA B: E-COMMERCE REFERENCIAL", "Suite de Pruebas E2E SauceDemo y Consistencia Financiera", "Transacciones Críticas", "crimson")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Captura Real en Base64 (7 cols) -->
          <div class="col-span-7 bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
              <span class="font-bold text-[#BA0034]">EVIDENCIA VISUAL: CHECKOUT OVERVIEW STEP TWO</span>
              <span class="text-[#64748B]">SauceDemo • 100% Determinista • Base64 Injected</span>
            </div>
            <div class="my-2 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex items-center justify-center flex-1 max-h-[500px]">
              <img src="{b64_saucedemo}" alt="SauceDemo Checkout Overview" class="w-full h-full object-contain">
            </div>
            <div class="grid grid-cols-3 gap-3 text-xs font-mono text-center">
              <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span class="text-slate-600 block font-bold text-sm">ITEM TOTAL (NETO)</span>
                <span class="text-slate-900 font-bold">$39.98 (2 Ítems)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                <span class="text-[#d97706] block font-bold text-sm">IMPUESTO (TAX 8%)</span>
                <span class="text-[#d97706] font-bold">$3.20 (Calculado)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span class="text-[#059669] block font-bold text-sm">TOTAL FINAL APROBADO</span>
                <span class="text-[#059669] font-bold">$43.18 (Consistente)</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Cobertura 12 Casos T01-T12 (5 cols) -->
          <div class="col-span-5 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#BA0034] uppercase pb-2 border-b border-slate-100">
              {ICONS['code']}
              <span>Desglose de 12 Casos de Prueba (T01 a T12)</span>
            </div>

            <div class="flex-1 space-y-1.5 text-xs font-mono flex flex-col justify-center">
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T01-T02 [R1]:</strong> Login standard_user / Bloqueo locked</span>
                <span class="text-emerald-600 font-bold">PASS (4.7s)</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T03-T04 [R2]:</strong> Estructura catálogo / Ficha detalle</span>
                <span class="text-emerald-600 font-bold">PASS (1.4s)</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T05-T06 [R3]:</strong> Sort Ascendente P[i] / Descendente</span>
                <span class="text-emerald-600 font-bold">PASS (1.5s)</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T07-T08 [R4]:</strong> Carrito reactivo / Badge / Remove</span>
                <span class="text-emerald-600 font-bold">PASS (1.5s)</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T09-T10 [R5]:</strong> Validación requerida / Despacho</span>
                <span class="text-emerald-600 font-bold">PASS (1.7s)</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                <span><strong>T11-T12 [R6]:</strong> Aritmética financiera / Finish / Logout</span>
                <span class="text-emerald-600 font-bold">PASS (2.9s)</span>
              </div>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs flex flex-col justify-center space-y-1">
              <span class="font-mono font-bold text-[#167287] uppercase block">Aserción de Consistencia Financiera:</span>
              <p class="text-[#334155] leading-relaxed">
                Subtotal verificado por suma elemental de precios. Impuesto cotejado contra tasa de venta local (8.00%). Aprobación de orden con header oficial "Thank you for your order!".
              </p>
            </div>

            <div class="shrink-0 p-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              SauceDemo Suite • 12/12 Pruebas Aprobadas (15.6s)
            </div>
          </div>

        </div>

        {slide_footer("SauceDemo E-Commerce • Automatización Playwright E2E", "Grupo 02 · UNSA", "crimson")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 09: RESULTADOS DE EJECUCIÓN Y PROTOCOLO DE 3 CORRIDAS
    # =========================================================================
    slide_titles.append("Resultados: Protocolo de 3 Corridas")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("VERIFICACIÓN EMPÍRICA Y ESTABILIDAD", "Resultados del Protocolo de 3 Corridas Consecutivas (ISO 29119-2)", "Cero Flakiness", "emerald")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Reporte Playwright en Base64 (7 cols) -->
          <div class="col-span-7 bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-md flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono">
              <span class="font-bold text-[#059669]">REPORTE OFICIAL PLAYWRIGHT HTML (100% PASS)</span>
              <span class="text-[#64748B]">Chromium Headless • Base64 Injected</span>
            </div>
            <div class="my-2 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 flex items-center justify-center flex-1 max-h-[500px]">
              <img src="{b64_report}" alt="Playwright HTML Report" class="w-full h-full object-contain">
            </div>
            <div class="grid grid-cols-3 gap-3 text-xs font-mono text-center">
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span class="text-[#059669] block font-bold text-sm">TOTAL EJECUTADAS</span>
                <span class="text-slate-800 font-bold">72 Pruebas (3 x 24)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span class="text-[#059669] block font-bold text-sm">PRUEBAS APROBADAS</span>
                <span class="text-slate-800 font-bold">72 / 72 (100.0%)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200">
                <span class="text-[#0284c7] block font-bold text-sm">FLAKINESS RATE</span>
                <span class="text-[#0284c7] font-bold">0.00% (Determinista)</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Métricas de las 3 Corridas (5 cols) -->
          <div class="col-span-5 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#059669] uppercase pb-2 border-b border-slate-100">
              {ICONS['award']}
              <span>Cronometría y Métricas por Corrida</span>
            </div>

            <!-- Tabla de las 3 corridas -->
            <div class="shrink-0 overflow-hidden rounded-xl border border-slate-200">
              <table class="w-full text-xs font-mono text-left">
                <thead class="bg-[#1E3A8A] text-white">
                  <tr>
                    <th class="p-2.5">Corrida</th>
                    <th class="p-2.5 text-center">Pass</th>
                    <th class="p-2.5 text-center">Fail</th>
                    <th class="p-2.5 text-right">Duración</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="bg-white">
                    <td class="p-2.5 font-bold text-slate-800">Corrida 1</td>
                    <td class="p-2.5 text-center text-emerald-600 font-bold">24 (100%)</td>
                    <td class="p-2.5 text-center text-slate-400">0 (0%)</td>
                    <td class="p-2.5 text-right font-bold text-slate-700">69.51 s</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="p-2.5 font-bold text-slate-800">Corrida 2</td>
                    <td class="p-2.5 text-center text-emerald-600 font-bold">24 (100%)</td>
                    <td class="p-2.5 text-center text-slate-400">0 (0%)</td>
                    <td class="p-2.5 text-right font-bold text-slate-700">64.89 s</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-2.5 font-bold text-slate-800">Corrida 3</td>
                    <td class="p-2.5 text-center text-emerald-600 font-bold">24 (100%)</td>
                    <td class="p-2.5 text-center text-slate-400">0 (0%)</td>
                    <td class="p-2.5 text-right font-bold text-slate-700">73.77 s</td>
                  </tr>
                  <tr class="bg-emerald-50 text-emerald-950 font-bold">
                    <td class="p-2.5">Global</td>
                    <td class="p-2.5 text-center text-emerald-700">72 / 72</td>
                    <td class="p-2.5 text-center">0</td>
                    <td class="p-2.5 text-right">69.39 s (Prom.)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Cálculo de Flakiness -->
            <div class="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-center space-y-1">
              <span class="font-mono font-bold text-[#167287] uppercase block mb-1">Ecuación Formal de Flakiness (ISO 29119-2):</span>
              <div class="p-2.5 rounded-lg bg-[#0F172A] text-emerald-400 font-mono text-xs my-1">
                Flakiness = (Casos Discrepantes / Total Casos) × 100%<br>
                Flakiness = (0 / 24) = 0.00%
              </div>
              <p class="text-[#334155] text-xs leading-relaxed">
                La ausencia total de discrepancia entre ejecuciones certifica el blindaje contra condiciones de carrera y aserciones prematuras.
              </p>
            </div>

            <div class="shrink-0 p-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Certificación de Estabilidad ISO 29119-2 • APROBADO 100%
            </div>
          </div>

        </div>

        {slide_footer("Protocolo de 3 Corridas Consecutivas • Estabilidad Empírica", "Grupo 02 · UNSA", "emerald")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 10: ANÁLISIS ECONÓMICO Y RETORNO DE INVERSIÓN (ALTA DENSIDAD)
    # =========================================================================
    slide_titles.append("Análisis Económico y Retorno de Inversión (ROI)")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("VIABILIDAD ECONÓMICA DE CALIDAD", "Análisis de Retorno de Inversión (ROI) y Punto de Equilibrio", "ISO 29119-2", "amber")}

        <div class="grid grid-cols-12 gap-6 flex-1 items-stretch py-2.5">
          
          <!-- Columna Izquierda: Ecuación y Desglose Financiero (6 cols) -->
          <div class="col-span-6 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#D97706] uppercase pb-2 border-b border-slate-100">
              {ICONS['chart']}
              <span>Modelo de Retorno de Inversión (Break-Even Analysis)</span>
            </div>

            <!-- Bloque Fórmula Oscuro -->
            <div class="shrink-0 p-4 rounded-2xl bg-[#0F172A] text-white font-mono space-y-2">
              <div class="text-[#38bdf8] font-bold text-sm">Ecuación Formal del Punto de Equilibrio:</div>
              <div class="text-emerald-400 text-2xl font-bold">
                N_breakeven = &lceil; C_setup / (C_manual - C_auto) &rceil;
              </div>
              <div class="text-amber-400 font-bold pt-1 text-sm border-t border-slate-700">
                N = &lceil; 180 min / (28 min - 2 min) &rceil; = &lceil; 6.92 &rceil; = 7 Ciclos de Regresión
              </div>
            </div>

            <!-- Tabla de Costos Desglosada -->
            <div class="flex-1 overflow-hidden rounded-xl border border-slate-200">
              <table class="w-full text-xs font-mono text-left h-full">
                <thead class="bg-[#1E3A8A] text-white">
                  <tr>
                    <th class="p-2.5">Concepto de Ingeniería</th>
                    <th class="p-2.5 text-center">Tiempo</th>
                    <th class="p-2.5 text-right">Impacto en Sprint</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700">
                  <tr class="bg-white">
                    <td class="p-2 font-bold">Diseño y Setup Inicial (C_setup)</td>
                    <td class="p-2 text-center">180 min</td>
                    <td class="p-2 text-right text-slate-600">3.0 horas-hombre únicas</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="p-2 font-bold">Regresión Manual (C_manual)</td>
                    <td class="p-2 text-center">28 min</td>
                    <td class="p-2 text-right text-rose-600 font-bold">14 min × 2 sistemas</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-2 font-bold">Regresión Automatizada (C_auto)</td>
                    <td class="p-2 text-center">2 min</td>
                    <td class="p-2 text-right text-emerald-600 font-bold">69s ejecución + revisión</td>
                  </tr>
                  <tr class="bg-emerald-50 text-emerald-950 font-bold">
                    <td class="p-2">Ahorro Neto Recurrente (&Delta;C)</td>
                    <td class="p-2 text-center text-emerald-700 font-bold">26 min</td>
                    <td class="p-2 text-right text-emerald-700 font-bold">Por cada commit en CI/CD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Justificación Técnica -->
            <div class="shrink-0 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#334155] leading-relaxed">
              <span class="font-bold text-[#1E293B] block uppercase font-mono text-[11px] mb-0.5">Amortización Acelerada:</span>
              En un pipeline de integración continua con 3 a 5 despliegues semanales, la inversión de automatización se amortiza íntegramente en menos de dos semanas de sprint.
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Punto de Equilibrio: N = 7 Corridas • Amortización Garantizada
            </div>
          </div>

          <!-- Columna Derecha: Proyección de Ahorro Acumulado (6 cols) -->
          <div class="col-span-6 bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-md flex flex-col gap-3.5 h-full">
            <div class="shrink-0 flex items-center space-x-2 text-xs font-mono font-bold text-[#167287] uppercase pb-2 border-b border-slate-100">
              {ICONS['award']}
              <span>Proyección de Beneficios en Ciclos de Despliegue CI/CD</span>
            </div>

            <!-- Tabla de Proyección Expandida -->
            <div class="shrink-0 overflow-hidden rounded-xl border border-slate-200">
              <table class="w-full text-xs font-mono text-left">
                <thead class="bg-[#1E3A8A] text-white">
                  <tr>
                    <th class="p-2.5">Ciclos (N)</th>
                    <th class="p-2.5 text-center">Manual</th>
                    <th class="p-2.5 text-center">Automatizado</th>
                    <th class="p-2.5 text-right">Ahorro Neto</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="bg-white">
                    <td class="p-2.5 font-bold">1 ciclo</td>
                    <td class="p-2.5 text-center">28 min</td>
                    <td class="p-2.5 text-center">182 min</td>
                    <td class="p-2.5 text-right text-rose-600 font-bold">-154 min</td>
                  </tr>
                  <tr class="bg-amber-50">
                    <td class="p-2.5 font-bold text-[#92400e]">7 ciclos (Break-Even)</td>
                    <td class="p-2.5 text-center">196 min</td>
                    <td class="p-2.5 text-center">194 min</td>
                    <td class="p-2.5 text-right text-emerald-700 font-bold">+2 min (Amortizado)</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-2.5 font-bold">15 ciclos</td>
                    <td class="p-2.5 text-center">420 min</td>
                    <td class="p-2.5 text-center">210 min</td>
                    <td class="p-2.5 text-right text-emerald-600 font-bold">+210 min (3.5h)</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="p-2.5 font-bold">30 ciclos</td>
                    <td class="p-2.5 text-center">840 min</td>
                    <td class="p-2.5 text-center">240 min</td>
                    <td class="p-2.5 text-right text-emerald-600 font-bold">+600 min (10.0h)</td>
                  </tr>
                  <tr class="bg-emerald-50 font-bold text-emerald-950">
                    <td class="p-2.5">50 ciclos</td>
                    <td class="p-2.5 text-center">1,400 min</td>
                    <td class="p-2.5 text-center">280 min</td>
                    <td class="p-2.5 text-right text-emerald-700 font-bold">+1,120 min (18.7h)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 2 KPI Cards Ricos -->
            <div class="flex-1 grid grid-cols-2 gap-3.5 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-[#167287] uppercase">A 50 CICLOS</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-[#167287] font-bold">AHORRO TOTAL</span>
                  </div>
                  <div class="text-3xl font-black font-mono text-[#1E293B] mt-1.5">18.67 Horas</div>
                </div>
                <div class="space-y-1 text-slate-600 text-xs mt-2 font-sans">
                  <div>• Equivalente a 2.3 días laborales libres.</div>
                  <div>• Cero fatiga en pruebas repetitivas.</div>
                  <div>• Capacidad reasignada a nuevos features.</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-[#059669] uppercase">EFICIENCIA TEMPORAL</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-[#059669] font-bold">VELOCIDAD</span>
                  </div>
                  <div class="text-3xl font-black font-mono text-[#059669] mt-1.5">92.8% Menos</div>
                </div>
                <div class="space-y-1 text-slate-600 text-xs mt-2 font-sans">
                  <div>• De 28 min manual a ~2 min supervisado.</div>
                  <div>• Feedback inmediato en cada Pull Request.</div>
                  <div>• Detección temprana de regresiones críticas.</div>
                </div>
              </div>
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-[#0F172A] text-white text-xs font-mono text-center">
              Viabilidad Económica • Ahorro Acumulado &gt; 18 Horas a 50 Despliegues
            </div>
          </div>

        </div>

        {slide_footer("Análisis Financiero de Calidad • ISO/IEC/IEEE 29119-2", "Grupo 02 · UNSA", "amber")}
      </div>
    </div>
    """)

    # =========================================================================
    # SLIDE 11: DICTAMEN TÉCNICO DE ACEPTACIÓN
    # =========================================================================
    slide_titles.append("Dictamen Técnico y Cierre Institucional")
    slides_html.append(f"""
    <div class="slide-item opacity-0 pointer-events-none z-0 transition-opacity duration-300">
      <div class="w-full h-full px-14 py-7 flex flex-col justify-between overflow-hidden bg-[#F4F5F7]">
        {slide_header("CIERRE FORMAL DE CALIDAD", "Dictamen Técnico de Aceptación y Certificación de Software", "Veredicto Oficial", "emerald")}

        <div class="grid grid-cols-4 gap-5 flex-1 items-stretch py-2.5">
          
          <!-- Pilar 1 Conclusión -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#167287]">EXIT CRITERIA 1</span>
                {ICONS['shield']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Cobertura Funcional 100%</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#167287] block uppercase font-mono text-[11px]">Base Normativa ISO:</span>
              <p class="text-[#334155] leading-relaxed">
                ISO/IEC/IEEE 29119-2 Cláusula 6.4: Trazabilidad completa y exhaustiva entre requerimientos de usuario y casos de prueba ejecutados.
              </p>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Métricas de Auditoría:</div>
              <div>• 12 Casos ISPySA-Pneumonia (T01-T12)</div>
              <div>• 12 Casos SauceDemo Store (T01-T12)</div>
              <div>• Requisitos R1 a R6 cubiertos: 100%</div>
              <div>• Aserciones de frontend y backend: PASS</div>
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold text-center">
              24 / 24 Casos Verificados (PASS)
            </div>
          </div>

          <!-- Pilar 2 Conclusión -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#BA0034]">EXIT CRITERIA 2</span>
                {ICONS['award']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Determinismo & Flakiness 0%</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#BA0034] block uppercase font-mono text-[11px]">Base Normativa ISO:</span>
              <p class="text-[#334155] leading-relaxed">
                ISO/IEC/IEEE 29119-2 Cláusula 7.2: Estabilidad empírica de pruebas, reproducibilidad y ausencia absoluta de resultados intermitentes.
              </p>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Métricas de Auditoría:</div>
              <div>• 72 / 72 aprobaciones consecutivas</div>
              <div>• Reintentos permitidos (retries): 0</div>
              <div>• Tasa de Flakiness observada: 0.00%</div>
              <div>• Variabilidad entre corridas: 0 fallas</div>
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold text-center">
              Flakiness Rate = 0.00% (STABLE)
            </div>
          </div>

          <!-- Pilar 3 Conclusión -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#D97706]">EXIT CRITERIA 3</span>
                {ICONS['chart']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Viabilidad Económica (ROI)</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#D97706] block uppercase font-mono text-[11px]">Base Normativa ISO:</span>
              <p class="text-[#334155] leading-relaxed">
                ISO/IEC/IEEE 29119-2 Cláusula 8.1: Eficiencia operativa, análisis costo-beneficio de calidad y optimización de recursos humanos.
              </p>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Métricas de Auditoría:</div>
              <div>• Punto de equilibrio alcanzado: N = 7 ciclos</div>
              <div>• Ahorro neto por corrida: 26 minutos</div>
              <div>• Reducción de tiempo de ciclo: 92.8%</div>
              <div>• Retorno de inversión a 50 ciclos: +18.7 horas</div>
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold text-center">
              Break-Even: N = 7 Ciclos (VIABLE)
            </div>
          </div>

          <!-- Pilar 4 Conclusión -->
          <div class="bg-white rounded-2xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col gap-3 h-full">
            <div class="shrink-0 pb-2 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#059669]">EXIT CRITERIA 4</span>
                {ICONS['check']}
              </div>
              <h3 class="text-lg font-bold text-[#1E293B] mt-1">Cero Defectos Residuales</h3>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-xs space-y-1.5">
              <span class="font-bold text-[#059669] block uppercase font-mono text-[11px]">Base Normativa ISO:</span>
              <p class="text-[#334155] leading-relaxed">
                ISO/IEC/IEEE 29119-3 Cláusula 5.3: Criterios de aceptación formal y ausencia total de incidentes abiertos de severidad crítica o bloqueante.
              </p>
            </div>

            <div class="flex-1 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-center text-xs font-mono text-[#334155] space-y-1.5">
              <div class="font-bold text-slate-700 mb-1">Métricas de Auditoría:</div>
              <div>• Defectos bloqueantes abiertos: 0</div>
              <div>• Defectos críticos residuales: 0</div>
              <div>• Canal Bortman OPS validado clínicamente</div>
              <div>• Triaje Manchester y balance O2 conformes</div>
            </div>

            <div class="shrink-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold text-center">
              0 Defectos Críticos (CERTIFIED)
            </div>
          </div>

        </div>

        <!-- Banner de Veredicto Formal -->
        <div class="p-4 rounded-xl bg-white border border-[#CBD0D8] shadow-sm flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold text-[#167287] uppercase block">DICTAMEN TÉCNICO FORMAL DE CALIDAD DE SOFTWARE:</span>
            <div class="text-lg font-bold text-[#1E293B] mt-0.5">
              CERTIFICACIÓN SATISFACTORIA — APROBADO SIN RESERVAS TÉCNICAS
            </div>
          </div>
          <div class="text-right font-mono text-xs text-[#64748B]">
            <div>Grupo 02: Condori • Márquez • Pérez • Nina • Arce</div>
            <div class="text-[#167287] font-bold">Universidad Nacional de San Agustín • 2026</div>
          </div>
        </div>

        {slide_footer("Cierre de Evaluación Técnica • ISO/IEC/IEEE 29119 Compliant", "Grupo 02 · UNSA", "emerald")}
      </div>
    </div>
    """)

    out_file = CURRENT_DIR / "diapositivas_iso29119.html"
    build_deck_html(
        deck_title="TP6: Automatización de Pruebas ISO 29119 | Grupo 02 - UNSA",
        slides_html=slides_html,
        slide_titles=slide_titles,
        output_file=out_file
    )
    print(f"Diapositivas HTML nativas 16:9 generadas exitosamente en:\n{out_file}")

if __name__ == "__main__":
    generate_deck()
