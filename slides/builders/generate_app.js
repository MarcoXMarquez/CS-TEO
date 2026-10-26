const fs = require('fs');
const path = require('path');

function buildHtml() {
  const slides = [
    // SLIDE 1: Portada (matches slide-01.png)
    {
      id: "slide-1",
      number: "01",
      title: "Quality Nexus",
      subtitle: "Sistema de Salud Pública",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L160,0 C140,80 160,130 100,160 C40,190 0,150 0,150 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -left-16 w-72 h-72 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,200 L0,60 C70,70 100,30 145,75 C190,120 160,200 160,200 Z"/>
          </svg>
          <svg class="absolute -bottom-20 -right-20 w-80 h-80 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L40,200 C60,120 30,70 85,35 C140,-5 200,40 200,40 Z"/>
          </svg>
          <svg class="absolute top-10 right-10 w-96 h-96 text-[#E4E7EB] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="95"/>
          </svg>

          <!-- Top header metadata -->
          <div class="relative z-10 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <span class="px-3 py-1 rounded bg-[#35363B] text-white text-xs font-bold tracking-widest uppercase">Grupo 05</span>
              <span class="px-3 py-1 rounded bg-[#D9DDE3] text-[#35363B] text-xs font-bold uppercase tracking-wider">Trabajo Parcial 5</span>
              <span class="text-xs text-[#5E626E] font-medium hidden sm:inline">13 de Octubre de 2026</span>
            </div>
            <div class="flex items-center space-x-2 text-xs font-semibold text-[#5E626E]">
              <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>ISO 20246 & ISO/IEC 5055 Compliant</span>
            </div>
          </div>

          <!-- Main content split: Left Title, Right Template Device Illustration -->
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            <div class="lg:col-span-7 space-y-4">
              <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#2F3136] tracking-tight leading-[1.05] font-heading">
                Quality<br/>Nexus
              </h1>
              <p class="text-2xl sm:text-3xl font-bold text-[#4B505E] tracking-tight font-heading">
                Sistema de Salud Pública
              </p>
              <p class="text-base sm:text-lg text-[#5E626E] font-normal leading-relaxed max-w-xl">
                Marco de evaluación determinista de calidad y eficiencia de código bajo las normas <strong>ISO 20246:2017</strong> e <strong>ISO/IEC 5055:2021</strong>, garantizando cero fallas críticas y trazabilidad inmutable.
              </p>
              <div class="pt-2 flex flex-wrap gap-2 text-xs text-[#35363B] font-semibold">
                <span class="px-3 py-1.5 rounded-md bg-white border border-[#CBD0D8] shadow-xs">🩺 HIS / EHR Hospitalario</span>
                <span class="px-3 py-1.5 rounded-md bg-white border border-[#CBD0D8] shadow-xs">⚡ Latencia Triaje P99 &lt; 200ms</span>
                <span class="px-3 py-1.5 rounded-md bg-white border border-[#CBD0D8] shadow-xs">🔒 Dossier Criptográfico Ed25519</span>
              </div>
            </div>

            <!-- Right: Exact visual motif from slide-01.png -->
            <div class="lg:col-span-5 flex justify-center items-center relative">
              <div class="relative w-80 sm:w-96 h-72 sm:h-80 flex items-center justify-center">
                <!-- Dark Cloud on top -->
                <div class="absolute -top-6 left-12 flex items-center">
                  <svg class="w-32 h-18 text-[#DDE1E6]" fill="currentColor" viewBox="0 0 100 60">
                    <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
                  </svg>
                </div>
                
                <!-- Chat Bubble -->
                <div class="absolute top-2 right-4 bg-[#55C0ED] text-white px-2 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>

                <!-- Monitor Desktop -->
                <div class="w-72 h-44 rounded-xl bg-[#2F3136] p-2 shadow-xl flex flex-col justify-between relative border border-[#1E2024]">
                  <!-- Window Header -->
                  <div class="flex items-center justify-between px-2 py-1 bg-[#42444C] rounded-t-lg">
                    <div class="flex space-x-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></span>
                      <span class="w-1.5 h-1.5 rounded-full bg-[#F8B85E]"></span>
                      <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    </div>
                    <span class="text-[9px] text-[#A6ABB4] font-mono">quality-nexus.his/eval</span>
                  </div>
                  <!-- Window Body -->
                  <div class="bg-[#F4F5F7] rounded-b-lg p-2 flex-1 flex flex-col justify-between text-[#2F3136]">
                    <div class="flex justify-between items-center text-[10px] font-bold border-b border-[#DDE1E6] pb-1">
                      <span>REQ-HLTH-042 (Triaje)</span>
                      <span class="text-[#10B981] font-mono">142 ms • PASS</span>
                    </div>
                    <div class="space-y-1 py-1">
                      <div class="flex items-center justify-between text-[9px]">
                        <span class="text-[#5E626E]">ISO 5055 Eficiencia</span>
                        <span class="font-bold">0 Violaciones</span>
                      </div>
                      <div class="w-full bg-[#DDE1E6] h-1.5 rounded-full overflow-hidden">
                        <div class="bg-[#34909D] h-full w-[98%]"></div>
                      </div>
                      <div class="flex items-center justify-between text-[9px]">
                        <span class="text-[#5E626E]">ISO 20246 Trazabilidad</span>
                        <span class="font-bold">100% Verificado</span>
                      </div>
                      <div class="w-full bg-[#DDE1E6] h-1.5 rounded-full overflow-hidden">
                        <div class="bg-[#55C0ED] h-full w-[100%]"></div>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <span class="px-2 py-0.5 rounded bg-[#35363B] text-[8px] text-white font-mono">FSM: CERTIFIED</span>
                    </div>
                  </div>
                </div>

                <!-- Monitor Stand -->
                <div class="absolute bottom-10 w-10 h-6 bg-[#2F3136] rounded-b"></div>
                <div class="absolute bottom-9 w-24 h-1.5 bg-[#2F3136] rounded-full"></div>

                <!-- Keyboard & Mouse -->
                <div class="absolute bottom-0 flex items-center space-x-2">
                  <div class="w-40 h-7 rounded bg-[#2F3136] p-1 flex items-center justify-center space-x-0.5">
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-2.5 h-1.5 bg-[#42444C] rounded-xs"></span>
                    <span class="w-6 h-1.5 bg-[#42444C] rounded-xs"></span>
                  </div>
                  <div class="w-5 h-7 rounded-full bg-[#2F3136] border border-[#42444C]"></div>
                </div>

                <!-- Left Phone with Dashed Connection -->
                <div class="absolute left-0 bottom-6 flex flex-col items-center">
                  <div class="w-12 h-22 rounded-xl bg-[#D9DDE3] border-2 border-[#2F3136] p-1 flex flex-col justify-between items-center shadow-lg">
                    <div class="w-3 h-0.5 rounded-full bg-[#8E95A5]"></div>
                    <div class="w-7 h-7 rounded-full bg-[#2F3136] flex items-center justify-center text-white">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div class="w-4 h-0.5 rounded-full bg-[#8E95A5]"></div>
                  </div>
                </div>
                <div class="absolute left-12 bottom-16 w-8 border-t-2 border-dashed border-[#8E95A5]"></div>

                <!-- Floating Code Card on Right -->
                <div class="absolute -right-2 top-10 w-16 h-20 rounded-lg bg-white border border-[#CBD0D8] p-1 shadow-md flex flex-col justify-between">
                  <div class="flex justify-end space-x-0.5">
                    <span class="w-1 h-1 rounded-full bg-[#BA0034]"></span>
                    <span class="w-1 h-1 rounded-full bg-[#F8B85E]"></span>
                    <span class="w-1 h-1 rounded-full bg-[#10B981]"></span>
                  </div>
                  <div class="space-y-1">
                    <div class="w-full h-1 bg-[#DDE1E6] rounded"></div>
                    <div class="w-3/4 h-1 bg-[#DDE1E6] rounded"></div>
                    <div class="w-5/6 h-1 bg-[#DDE1E6] rounded"></div>
                  </div>
                  <div class="text-[7px] text-[#34909D] font-mono font-bold text-center">Ed25519</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Universidad Nacional de Ingeniería / FIM • Calidad de Software</span>
            <span>Evaluación Parcial • Caso: Sistema de Salud Pública (HIS / Triaje)</span>
          </div>
        </div>
      `
    },

    // SLIDE 2: Tabla de Contenidos (matches slide-03.png)
    {
      id: "slide-2",
      number: "02",
      title: "Tabla de Contenidos",
      subtitle: "Estructura de la Presentación",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs & Template Gadgets -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>
          
          <!-- Top Right Browser Gadget (Slide 3 exact replica) -->
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

          <!-- Bottom Left Stacked Folders / Books (Slide 3 exact replica) -->
          <div class="absolute bottom-8 left-8 hidden md:flex flex-col items-center z-10">
            <div class="w-8 h-10 rounded bg-[#D9DDE3] border border-[#CBD0D8] shadow-xs p-1 mb-1 flex flex-col justify-between">
              <span class="w-full h-0.5 bg-[#8E95A5] rounded-full"></span>
              <span class="w-3/4 h-0.5 bg-[#8E95A5] rounded-full"></span>
              <span class="w-full h-0.5 bg-[#8E95A5] rounded-full"></span>
              <span class="w-1/2 h-0.5 bg-[#8E95A5] rounded-full"></span>
            </div>
            <div class="w-0.5 h-3 border-l-2 border-dashed border-[#8E95A5] mb-1"></div>
            <div class="flex items-end space-x-1">
              <div class="w-3.5 h-14 rounded-t bg-[#34909D] flex flex-col justify-between py-1 items-center">
                <span class="w-2 h-0.5 bg-white rounded-full"></span>
                <span class="w-2 h-0.5 bg-white rounded-full"></span>
              </div>
              <div class="w-3.5 h-16 rounded-t bg-[#35363B] flex flex-col justify-between py-1 items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span class="w-2 h-0.5 bg-white rounded-full"></span>
              </div>
              <div class="w-3.5 h-12 rounded-t bg-[#6F7082] flex flex-col justify-end py-1 items-center">
                <span class="w-2 h-0.5 bg-white rounded-full mb-0.5"></span>
                <span class="w-2 h-0.5 bg-white rounded-full"></span>
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Tabla de Contenidos
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Recorrido metodológico, normativo y práctico de Quality Nexus
            </p>
          </div>

          <!-- 2x3 Grid with Large Bold Numbers 01 to 06 -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 my-auto pl-0 md:pl-24 pr-0 md:pr-16">
            <!-- 01 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">01</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Diagnóstico & Contexto
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Desafíos críticos en Salud Pública, sistemas HIS/EHR y necesidad de determinismo.
              </p>
            </div>

            <!-- 02 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">02</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Dualidad Normativa
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Sinergia obligatoria entre ISO 20246 (requisitos) e ISO/IEC 5055 (código interno).
              </p>
            </div>

            <!-- 03 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">03</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Estructura de Indicadores
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                4 cuadrantes ISO 5055 y métricas específicas de eficiencia de código en salud.
              </p>
            </div>

            <!-- 04 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">04</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Stack de Herramientas
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Captura, procesamiento y presentación: SonarQube, K6, Prometheus y Grafana.
              </p>
            </div>

            <!-- 05 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">05</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Arquitectura Quality Nexus
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                FSM de 6 estados epistémicos, Golden Evaluation Suite y Dossier criptográfico.
              </p>
            </div>

            <!-- 06 -->
            <div class="space-y-1">
              <span class="text-4xl md:text-5xl font-extrabold text-[#2F3136] font-heading block">06</span>
              <h3 class="text-lg md:text-xl font-bold text-[#2F3136] font-heading leading-snug">
                Caso Empírico & ROI
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Triaje REQ-HLTH-042, latencia P99 142ms, viabilidad económica y marco MINSA.
              </p>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Presentación Oficial</span>
            <span>02 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 3: Diagnóstico en Salud Pública (matches slide-04.png layout: Left text + bullets, Right laptop photo template_assets/image9.jpg)
    {
      id: "slide-3",
      number: "03",
      title: "Diagnóstico en Salud Pública",
      subtitle: "El Problema Crítico en Sistemas Hospitalarios HIS / EHR",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Bottom Left Dark Folders (slide-04 motif) -->
          <div class="absolute bottom-8 left-8 hidden md:flex items-center space-x-1 z-10">
            <div class="w-12 h-9 rounded-lg bg-[#35363B] flex items-center justify-center text-white shadow-md relative">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <!-- Main Split Layout (slide-04 exact replica) -->
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            <!-- Left Text Column -->
            <div class="lg:col-span-7 space-y-4">
              <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading leading-tight">
                ¿Cuál es la crisis en el software de salud?
              </h2>
              <p class="text-sm text-[#4F525D] leading-relaxed">
                En el sector salud público, las fallas de software trascienden las pérdidas económicas: <strong>impactan de forma directa la supervivencia de los pacientes</strong>. Los sistemas hospitalarios actuales (HIS/EHR) presentan tres deficiencias estructurales:
              </p>

              <div class="space-y-3 pt-1">
                <div class="flex items-start space-x-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#BA0034] mt-1.5 shrink-0"></span>
                  <div>
                    <h4 class="text-sm font-bold text-[#2F3136]">Colapso bajo concurrencia extrema</h4>
                    <p class="text-xs text-[#5E626E]">Bloqueos en base de datos durante saturación de triaje de emergencias (latencias superiores a 700 ms).</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#BA0034] mt-1.5 shrink-0"></span>
                  <div>
                    <h4 class="text-sm font-bold text-[#2F3136]">Requisitos clínicos ambiguos</h4>
                    <p class="text-xs text-[#5E626E]">Especificaciones médicas verbales o informales sin verificación matemática ni checklist formal (brecha clínica-TI).</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#BA0034] mt-1.5 shrink-0"></span>
                  <div>
                    <h4 class="text-sm font-bold text-[#2F3136]">Auditorías manuales costosas y subjetivas</h4>
                    <p class="text-xs text-[#5E626E]">Más de 40 horas invertidas por sprint en revisiones de código manuales sin evidencia criptográfica reproducible.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Exact photo with media pills (image9.jpg) -->
            <div class="lg:col-span-5 flex justify-center items-center relative">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-sm">
                <img src="template_assets/image9.jpg" alt="Developer coding in hospital HIS system" class="w-full h-72 object-cover"/>
                
                <!-- Floating Media Pills on Right (slide-04 motif) -->
                <div class="absolute top-4 right-3 flex flex-col space-y-1.5">
                  <div class="w-24 h-7 rounded bg-[#35363B]/90 backdrop-blur-xs px-2 py-1 flex items-center justify-between text-white shadow-sm">
                    <span class="w-3.5 h-3.5 rounded bg-white/20"></span>
                    <span class="text-[9px] font-bold font-mono">HIS 2.4</span>
                  </div>
                  <div class="w-24 h-7 rounded bg-[#35363B]/90 backdrop-blur-xs px-2 py-1 flex items-center justify-between text-white shadow-sm">
                    <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-[9px] font-bold text-[#10B981] font-mono">FAIL P99</span>
                  </div>
                </div>

                <div class="absolute bottom-3 left-3 right-3 bg-[#2F3136]/90 backdrop-blur-xs text-white p-2.5 rounded-xl text-center text-xs">
                  <span class="font-bold text-[#F8B85E]">Impacto Clínico Real:</span> 1 segundo de retraso en triaje retrasa la atención en emergencias masivas.
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Diagnóstico Hospitalario</span>
            <span>03 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 4: Dualidad Normativa (matches slide-08.png 3 columns + folder stack left + cloud/phone right)
    {
      id: "slide-4",
      number: "04",
      title: "Dualidad Normativa",
      subtitle: "ISO 20246:2017 & ISO/IEC 5055:2021",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Stacked Folders on Left (slide-08 motif) -->
          <div class="absolute top-28 left-8 hidden lg:flex flex-col items-center z-10">
            <div class="w-8 h-10 rounded bg-[#D9DDE3] border border-[#CBD0D8] p-1 mb-1 flex flex-col justify-between">
              <span class="w-full h-0.5 bg-[#8E95A5]"></span>
              <span class="w-2/3 h-0.5 bg-[#8E95A5]"></span>
              <span class="w-full h-0.5 bg-[#8E95A5]"></span>
            </div>
            <div class="w-0.5 h-3 border-l-2 border-dashed border-[#8E95A5] mb-1"></div>
            <div class="flex items-end space-x-1">
              <div class="w-3.5 h-14 rounded-t bg-[#34909D]"></div>
              <div class="w-3.5 h-16 rounded-t bg-[#35363B]"></div>
              <div class="w-3.5 h-12 rounded-t bg-[#6F7082]"></div>
            </div>
          </div>

          <!-- Cloud & Phone on Right (slide-08 motif) -->
          <div class="absolute top-10 right-10 hidden lg:flex flex-col items-center z-10">
            <div class="relative">
              <svg class="w-24 h-14 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
                <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] mb-0.5"></span>
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB]"></span>
              </div>
            </div>
            <div class="h-6 w-0.5 border-l-2 border-dashed border-[#8E95A5]"></div>
            <div class="w-9 h-14 rounded-lg bg-[#D9DDE3] border-2 border-[#35363B] flex flex-col justify-center items-center">
              <div class="w-4 h-4 rounded-full bg-[#35363B]"></div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Dualidad Normativa
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Convergencia indispensable entre la especificación y el código fuente
            </p>
          </div>

          <!-- 3-Column Exact Layout (Presentation / Investors / Value style) -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 my-auto max-w-5xl pl-0 lg:pl-16 pr-0 lg:pr-16">
            <!-- Col 1: ISO 20246 -->
            <div class="space-y-3 bg-white/80 p-5 rounded-xl border border-[#DDE1E6] shadow-xs">
              <span class="text-xs font-bold text-[#34909D] tracking-wider uppercase block">Especificación Formal</span>
              <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                ISO 20246:2017
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Estándar internacional para procesos de revisión de artefactos de prueba y requisitos de software.
              </p>
              <div class="border-t border-[#E5E8EC] pt-2 text-xs text-[#35363B] space-y-1.5 font-medium">
                <div>• Checklist de completitud y no ambigüedad clínica.</div>
                <div>• Matriz de trazabilidad bidireccional (RTM).</div>
                <div>• Roles formales: Autor, Revisor, Moderador.</div>
                <div>• Cero supuestos no verificables en triaje.</div>
              </div>
            </div>

            <!-- Col 2: ISO/IEC 5055 -->
            <div class="space-y-3 bg-white/80 p-5 rounded-xl border border-[#DDE1E6] shadow-xs">
              <span class="text-xs font-bold text-[#BA0034] tracking-wider uppercase block">Calidad de Código Interno</span>
              <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                ISO/IEC 5055:2021
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Medición automatizada basada en reglas AST de defectos estructurales en el código fuente.
              </p>
              <div class="border-t border-[#E5E8EC] pt-2 text-xs text-[#35363B] space-y-1.5 font-medium">
                <div>• 4 Pilares: Seguridad, Confiabilidad, Eficiencia, Mantenibilidad.</div>
                <div>• Detección estricta de violaciones arquitectónicas.</div>
                <div>• Detección de fugas de memoria y bloqueos de DB.</div>
                <div>• Umbral de aceptación: 0 defectos críticos.</div>
              </div>
            </div>

            <!-- Col 3: Calidad Nexus -->
            <div class="space-y-3 bg-white/80 p-5 rounded-xl border border-[#35363B] shadow-xs">
              <span class="text-xs font-bold text-[#55C0ED] tracking-wider uppercase block">Integración Nexus</span>
              <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                Puente Bidireccional
              </h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Quality Nexus conecta ambos mundos asegurando que ninguna línea de código se ejecute sin justificación normativa.
              </p>
              <div class="border-t border-[#E5E8EC] pt-2 text-xs text-[#35363B] space-y-1.5 font-medium">
                <div>• Mapeo 1:1 Requisito ↔ Regla AST 5055.</div>
                <div>• Automatización del ciclo de revisión ISO 20246.</div>
                <div>• Certificación determinista en pipeline CI/CD.</div>
                <div>• Dossier inmutable con valor probatorio legal.</div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Normativa Internacional</span>
            <span>04 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 5: [Punto 1 Enunciado] Estructura de Indicadores ISO 5055 (matches slide-09.png 2x2 grid)
    {
      id: "slide-5",
      number: "05",
      title: "Estructura de Indicadores ISO 5055",
      subtitle: "[Requerimiento 1 del Enunciado]",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top Right Browser Gadget (slide-09 motif) -->
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

          <!-- Title -->
          <div class="relative z-10">
            <div class="inline-block px-2.5 py-0.5 rounded bg-[#BA0034] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              Punto 1 del Enunciado Docente
            </div>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Estructura de Indicadores de Calidad
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Selección de las 4 dimensiones de ISO/IEC 5055:2021 para el proyecto de Salud Pública
            </p>
          </div>

          <!-- 2x2 Quadrant Grid (slide-09 exact replica) -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 my-auto max-w-5xl pl-0 md:pl-20">
            <!-- Quad 1: Seguridad -->
            <div class="space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#BA0034]"></span>
                <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                  1. Seguridad (Security)
                </h3>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Protección crítica de Historias Clínicas Electrónicas (EHR) y confidencialidad médica según Ley 29733 y estándares HL7/FHIR:
              </p>
              <div class="text-xs text-[#35363B] font-mono bg-white/80 p-2.5 rounded border border-[#CBD0D8] space-y-1">
                <div>• Inyección SQL en expedientes EHR (CWE-89): <strong>0 violaciones</strong></div>
                <div>• Sanitización de inputs de triaje (CWE-79 XSS): <strong>0 violaciones</strong></div>
                <div>• Cifrado de datos sensibles en tránsito y reposo: <strong>AES-256 / TLS 1.3</strong></div>
              </div>
            </div>

            <!-- Quad 2: Confiabilidad -->
            <div class="space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#34909D]"></span>
                <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                  2. Confiabilidad (Reliability)
                </h3>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Tolerancia a fallos y disponibilidad ininterrumpida en servicios de atención de emergencia hospitalaria 24/7/365:
              </p>
              <div class="text-xs text-[#35363B] font-mono bg-white/80 p-2.5 rounded border border-[#CBD0D8] space-y-1">
                <div>• Control exhaustivo de punteros nulos (CWE-476 NullPtr): <strong>0 incidentes</strong></div>
                <div>• Manejo formal de excepciones clínicas no capturadas: <strong>100% resuelto</strong></div>
                <div>• Resiliencia ante caídas de red hospitalaria: <strong>Circuit Breaker activo</strong></div>
              </div>
            </div>

            <!-- Quad 3: Eficiencia de Rendimiento -->
            <div class="space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#F8B85E]"></span>
                <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                  3. Eficiencia (Performance)
                </h3>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Optimización de recursos de cómputo y respuesta sub-segundo en picos epidemiológicos de atención masiva:
              </p>
              <div class="text-xs text-[#35363B] font-mono bg-white/80 p-2.5 rounded border border-[#CBD0D8] space-y-1">
                <div>• Cierre estricto de conexiones a BD (CWE-404 Resource Leak): <strong>0 fugas</strong></div>
                <div>• Complejidad algorítmica de triaje Manchester: <strong>O(1) determinista</strong></div>
                <div>• Latencia P99 de atención por paciente: <strong>&lt; 200 ms</strong></div>
              </div>
            </div>

            <!-- Quad 4: Mantenibilidad -->
            <div class="space-y-1.5">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#55C0ED]"></span>
                <h3 class="text-xl font-bold text-[#2F3136] font-heading">
                  4. Mantenibilidad (Maintainability)
                </h3>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Estructura limpia para permitir evoluciones seguras del sistema HIS sin introducir regresiones clínicas:
              </p>
              <div class="text-xs text-[#35363B] font-mono bg-white/80 p-2.5 rounded border border-[#CBD0D8] space-y-1">
                <div>• Complejidad Ciclomática por método: <strong>McCabe CC &le; 10</strong></div>
                <div>• Cero código muerto o no alcanzable en reglas de dosificación: <strong>0%</strong></div>
                <div>• Cobertura de pruebas unitarias y de integración: <strong>&ge; 85%</strong></div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Selección de Indicadores ISO 5055</span>
            <span>05 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 6: [Punto 2 Enunciado] Indicadores de Eficiencia de Código (matches slide-10.png 6-grid)
    {
      id: "slide-6",
      number: "06",
      title: "Indicadores de Eficiencia de Código",
      subtitle: "[Requerimiento 2 del Enunciado]",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top-Right Media box gadget (slide-10 exact replica) -->
          <div class="absolute top-8 right-10 hidden md:flex flex-col space-y-1.5 z-10">
            <div class="w-26 h-8 rounded-md bg-[#35363B] px-2 py-1 flex items-center justify-between text-white shadow-xs">
              <span class="w-4 h-4 rounded bg-white/20"></span>
              <div class="flex flex-col space-y-0.5 w-14">
                <span class="w-full h-0.5 bg-white/80 rounded"></span>
                <span class="w-3/4 h-0.5 bg-white/50 rounded"></span>
              </div>
            </div>
            <div class="w-26 h-8 rounded-md bg-[#35363B] px-2 py-1 flex items-center justify-between text-white shadow-xs">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
              </svg>
              <div class="flex flex-col space-y-0.5 w-14">
                <span class="w-full h-0.5 bg-white/80 rounded"></span>
                <span class="w-1/2 h-0.5 bg-white/50 rounded"></span>
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <div class="inline-block px-2.5 py-0.5 rounded bg-[#BA0034] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              Punto 2 del Enunciado Docente
            </div>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Eficiencia de Código en Triaje
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Revisión y adopción de los 6 indicadores clave de eficiencia bajo ISO 5055 e ISO 25010
            </p>
          </div>

          <!-- 6-Item Grid (3x2 items matching slide-10) -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 my-auto max-w-5xl">
            <!-- Item 1 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  1. Latencia Algorítmica (P99)
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: &lt; 200 ms</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Tiempo de procesamiento del algoritmo de clasificación de triaje (Manchester) en el percentil 99 bajo carga máxima.
              </p>
            </div>

            <!-- Item 2 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  2. Consumo de Memoria RAM
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: &lt; 45 MB</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Huella de memoria RAM por hilo de ejecución clínica. Tasa de fuga (leak rate) = 0.0 MB/h durante 4 horas continuas.
              </p>
            </div>

            <!-- Item 3 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  3. Throughput Concurrente
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: &gt; 300 TPS</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Transacciones por segundo procesadas de forma concurrente, garantizando servicio durante contingencias masivas.
              </p>
            </div>

            <!-- Item 4 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  4. Complejidad Ciclomática
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: CC &le; 10</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Métrica McCabe en funciones de asignación de prioridad clínica. Máximo 2 niveles de anidamiento de bucles (loop nesting).
              </p>
            </div>

            <!-- Item 5 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  5. Contención de Locks (DB)
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: &lt; 15 ms</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Tiempo de espera en bloqueos de fila de base de datos durante la reserva simultánea de camas de urgencia.
              </p>
            </div>

            <!-- Item 6 -->
            <div class="space-y-1 bg-white/60 p-3 rounded-lg border border-[#DDE1E6]">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-[#2F3136] font-heading">
                  6. Densidad de Defectos
                </h3>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">Meta: &lt; 0.05 / KLoC</span>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Defectos estructurales de eficiencia bajo ISO 5055 por cada 1,000 líneas de código analizadas por el AST engine.
              </p>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Indicadores de Eficiencia de Código</span>
            <span>06 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 7: [Punto 3 Enunciado] Stack de Herramientas (matches slide-08.png 3 columns + illustration image8.png)
    {
      id: "slide-7",
      number: "07",
      title: "Stack de Herramientas",
      subtitle: "[Requerimiento 3 del Enunciado]",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Title -->
          <div class="relative z-10">
            <div class="inline-block px-2.5 py-0.5 rounded bg-[#BA0034] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              Punto 3 del Enunciado Docente
            </div>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Herramientas de Calidad
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Selección de herramientas para captura, procesamiento y presentación de indicadores
            </p>
          </div>

          <!-- 3 Columns: Captura / Procesamiento / Presentación -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-auto max-w-5xl">
            <!-- 1. Captura -->
            <div class="bg-white p-5 rounded-xl border border-[#CBD0D8] shadow-sm space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-lg bg-[#35363B] text-white flex items-center justify-center text-xs font-bold">1</span>
                <h3 class="text-lg font-bold text-[#2F3136] font-heading">
                  Captura (Ingesta)
                </h3>
              </div>
              <p class="text-xs text-[#5E626E]">
                Extracción estática y dinámica de datos brutos del sistema hospitalario:
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">SonarQube + CAST Imaging</span>
                  <span class="text-[#5E626E] text-[11px]">Análisis del AST, cálculo de métricas ISO 5055, cobertura y detección de CWEs.</span>
                </div>
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">K6 / Locust Load Engine</span>
                  <span class="text-[#5E626E] text-[11px]">Generación de carga determinista (300 VUs) sobre el servicio de triaje.</span>
                </div>
              </div>
            </div>

            <!-- 2. Procesamiento -->
            <div class="bg-white p-5 rounded-xl border border-[#CBD0D8] shadow-sm space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-lg bg-[#34909D] text-white flex items-center justify-center text-xs font-bold">2</span>
                <h3 class="text-lg font-bold text-[#2F3136] font-heading">
                  Procesamiento
                </h3>
              </div>
              <p class="text-xs text-[#5E626E]">
                Normalización, correlación y evaluación de reglas normativas:
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">Nexus Core Correlator</span>
                  <span class="text-[#5E626E] text-[11px]">Motor FSM en Rust/Go que evalúa las transiciones epistémicas sin alucinación.</span>
                </div>
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">Prometheus Time-Series</span>
                  <span class="text-[#5E626E] text-[11px]">Almacenamiento de series temporales de latencias p95/p99 y consumo de CPU/RAM.</span>
                </div>
              </div>
            </div>

            <!-- 3. Presentación -->
            <div class="bg-white p-5 rounded-xl border border-[#CBD0D8] shadow-sm space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-7 h-7 rounded-lg bg-[#F8B85E] text-[#2F3136] flex items-center justify-center text-xs font-bold">3</span>
                <h3 class="text-lg font-bold text-[#2F3136] font-heading">
                  Presentación
                </h3>
              </div>
              <p class="text-xs text-[#5E626E]">
                Visualización ejecutiva y generación de evidencia legal inmutable:
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">Grafana Enterprise Dashboards</span>
                  <span class="text-[#5E626E] text-[11px]">Paneles en tiempo real con alertas SLI/SLO para jefaturas médicas y TI.</span>
                </div>
                <div class="p-2.5 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <span class="font-bold text-[#2F3136] block">Nexus Cryptographic Dossier</span>
                  <span class="text-[#5E626E] text-[11px]">Reporte inmutable firmado con SHA-256 y Ed25519 para auditorías de MINSA.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Stack de Herramientas</span>
            <span>07 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 8: Proceso ISO 20246:2017 (matches workflow layout with template image4.png)
    {
      id: "slide-8",
      number: "08",
      title: "Proceso Formal ISO 20246",
      subtitle: "Flujo de Revisión de Requisitos de Salud",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Proceso Formal ISO 20246:2017
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Flujo sistemático de revisión y verificación de especificaciones de salud pública
            </p>
          </div>

          <!-- Content: 5 Steps + Template Illustration image4.png -->
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            <!-- Left 5 Phases -->
            <div class="lg:col-span-8 space-y-2">
              <div class="flex items-start space-x-3 bg-white p-2.5 rounded-lg border border-[#CBD0D8] shadow-xs">
                <div class="w-7 h-7 rounded bg-[#35363B] text-white flex items-center justify-center font-bold text-xs shrink-0">01</div>
                <div>
                  <h4 class="text-xs font-bold text-[#2F3136]">1. Planificación de la Revisión</h4>
                  <p class="text-[11px] text-[#5E626E]">Definición del alcance del módulo de triaje, asignación de roles (Médico Revisor, Arquitecto TI) y criterios de entrada.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 bg-white p-2.5 rounded-lg border border-[#CBD0D8] shadow-xs">
                <div class="w-7 h-7 rounded bg-[#34909D] text-white flex items-center justify-center font-bold text-xs shrink-0">02</div>
                <div>
                  <h4 class="text-xs font-bold text-[#2F3136]">2. Preparación Individual</h4>
                  <p class="text-[11px] text-[#5E626E]">Evaluación preliminar de cada requerimiento contra el checklist formal ISO 20246 (completitud, no ambigüedad, verificabilidad).</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 bg-white p-2.5 rounded-lg border border-[#CBD0D8] shadow-xs">
                <div class="w-7 h-7 rounded bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-xs shrink-0">03</div>
                <div>
                  <h4 class="text-xs font-bold text-[#2F3136]">3. Detección de Anomalías</h4>
                  <p class="text-[11px] text-[#5E626E]">Reunión formal de revisión para clasificar discrepancias clínicas, ambigüedades de sintaxis y vacíos de cobertura de pruebas.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 bg-white p-2.5 rounded-lg border border-[#CBD0D8] shadow-xs">
                <div class="w-7 h-7 rounded bg-[#BA0034] text-white flex items-center justify-center font-bold text-xs shrink-0">04</div>
                <div>
                  <h4 class="text-xs font-bold text-[#2F3136]">4. Retrabajo & Corrección</h4>
                  <p class="text-[11px] text-[#5E626E]">Modificación de la especificación clínica y casos de prueba por los autores, corrigiendo todas las observaciones registradas.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 bg-white p-2.5 rounded-lg border border-[#CBD0D8] shadow-xs">
                <div class="w-7 h-7 rounded bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shrink-0">05</div>
                <div>
                  <h4 class="text-xs font-bold text-[#2F3136]">5. Certificación & Cierre</h4>
                  <p class="text-[11px] text-[#5E626E]">Verificación del 100% de anomalías resueltas y emisión formal del certificado de especificación para habilitar codificación.</p>
                </div>
              </div>
            </div>

            <!-- Right Template Asset Image 4 -->
            <div class="lg:col-span-4 flex justify-center items-center">
              <div class="relative bg-white/70 p-4 rounded-2xl border border-[#CBD0D8] shadow-sm max-w-xs text-center">
                <img src="template_assets/image4.png" alt="Team Work Illustration" class="w-52 h-auto mx-auto object-contain"/>
                <div class="mt-2 text-xs font-bold text-[#2F3136]">Rigor de Equipo Multidisciplinario</div>
                <div class="text-[11px] text-[#5E626E]">Comité Médico • Ingenieros QA • Auditores</div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Proceso ISO 20246</span>
            <span>08 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 9: Separación Probabilística vs Determinista (matches 2-column contrast with template image6.png)
    {
      id: "slide-9",
      number: "09",
      title: "Separación Arquitectónica",
      subtitle: "Probabilístico (IA) vs Determinista (Nexus)",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Separación Arquitectónica
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Fase 1 Probabilística (Asistiva) vs Fase 2 Determinista (Certificación Matemática)
            </p>
          </div>

          <!-- 2 Columns + Center/Right Shield Illustration -->
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
            <!-- Left Col: Probabilístico (lg:col-span-4) -->
            <div class="lg:col-span-4 bg-white/80 p-5 rounded-2xl border border-[#CBD0D8] space-y-3 shadow-xs">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-6 bg-[#8E95A5] rounded-sm"></span>
                <div>
                  <span class="text-[10px] font-bold tracking-wider uppercase text-[#8E95A5]">Fase 1 • Asistiva</span>
                  <h3 class="text-lg font-bold text-[#2F3136] font-heading">Capa Probabilística (LLMs)</h3>
                </div>
              </div>
              <p class="text-xs text-[#5E626E]">
                Utilizada para redactar borradores de código y stubs de pruebas clínicas.
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <strong>Naturaleza:</strong> Estadística, sujeta a variabilidad y alucinaciones.
                </div>
                <div class="p-2 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <strong>Estado Nexus:</strong> Permanece en <code class="text-xs font-bold text-[#BA0034]">DRAFT</code>.
                </div>
                <div class="p-2 bg-[#FEE2E2] rounded border border-[#FECACA] text-[#991B1B]">
                  <strong>Regla de Oro:</strong> Ningún output de IA entra a producción sin barrera determinista.
                </div>
              </div>
            </div>

            <!-- Center Shield Asset (lg:col-span-4) -->
            <div class="lg:col-span-4 flex flex-col justify-center items-center text-center">
              <img src="template_assets/image6.png" alt="Shield of Verification" class="h-44 w-auto object-contain drop-shadow-sm"/>
              <div class="mt-2 text-xs font-bold text-[#2F3136]">La Barrera Infranqueable de Calidad</div>
              <div class="text-[10px] text-[#5E626E]">El escudo determinista bloquea defectos médicos</div>
            </div>

            <!-- Right Col: Determinista (lg:col-span-4) -->
            <div class="lg:col-span-4 bg-white/80 p-5 rounded-2xl border-2 border-[#35363B] space-y-3 shadow-xs">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-6 bg-[#10B981] rounded-sm"></span>
                <div>
                  <span class="text-[10px] font-bold tracking-wider uppercase text-[#10B981]">Fase 2 • Certificación</span>
                  <h3 class="text-lg font-bold text-[#2F3136] font-heading">Capa Determinista (Nexus)</h3>
                </div>
              </div>
              <p class="text-xs text-[#5E626E]">
                Motor algorítmico formal que certifica el AST, la carga y las normas.
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <strong>Naturaleza:</strong> 100% reproducible, lógica binaria y pruebas matemáticas.
                </div>
                <div class="p-2 bg-[#F4F5F7] rounded border border-[#E2E6EB]">
                  <strong>Estado Nexus:</strong> Transición unívoca en la FSM epistémica.
                </div>
                <div class="p-2 bg-[#DCFCE7] rounded border border-[#BBF7D0] text-[#166534]">
                  <strong>Garantía:</strong> Dossier firmado inmutable con valor probatorio ante SUSALUD.
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Separación Arquitectónica</span>
            <span>09 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 10: FSM de 6 Estados Epistémicos (matches 6-card layout)
    {
      id: "slide-10",
      number: "10",
      title: "Máquina de Estados Finitos (FSM)",
      subtitle: "6 Estados Epistémicos de Certificación",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top Right Browser Gadget -->
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

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Máquina de Estados Finitos (FSM)
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Flujo unívoco de transición epistémica para artefactos de software médico
            </p>
          </div>

          <!-- 6 States Grid (2 rows x 3 columns) -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-auto max-w-5xl">
            <!-- State 1 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E5E7EB] text-[#35363B]">ESTADO 1</span>
                <span class="text-xs text-[#8E95A5] font-bold">Entrada</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">DRAFT</h4>
              <p class="text-xs text-[#5E626E]">Código fuente o especificación clínica recién ingresada al repositorio. Sin validación formal previa.</p>
            </div>

            <!-- State 2 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E0E7FF] text-[#3730A3]">ESTADO 2</span>
                <span class="text-xs text-[#4F46E5] font-bold">Compilación</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">SYNTACTICALLY_VALID</h4>
              <p class="text-xs text-[#5E626E]">Árbol de Sintaxis Abstracta (AST) generado correctamente. Cero errores sintácticos o de compilación.</p>
            </div>

            <!-- State 3 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#CFFAFE] text-[#155E75]">ESTADO 3</span>
                <span class="text-xs text-[#0891B2] font-bold">ISO 20246</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">SPEC_ALIGNED</h4>
              <p class="text-xs text-[#5E626E]">Trazabilidad 100% verificada contra checklist ISO 20246. Cada función mapea a un requerimiento médico.</p>
            </div>

            <!-- State 4 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF3C7] text-[#92400E]">ESTADO 4</span>
                <span class="text-xs text-[#D97706] font-bold">ISO 5055</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">STATICALLY_VERIFIED</h4>
              <p class="text-xs text-[#5E626E]">Cero violaciones críticas de seguridad, confiabilidad, eficiencia y mantenibilidad en SonarQube/CAST.</p>
            </div>

            <!-- State 5 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#DCFCE7] text-[#166534]">ESTADO 5</span>
                <span class="text-xs text-[#16A34A] font-bold">Golden Suite</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">DETERMINISTICALLY_CERTIFIED</h4>
              <p class="text-xs text-[#5E626E]">Superación exitosa del banco de pruebas bajo estrés: latencia P99 &lt; 200ms y 0 fugas de memoria.</p>
            </div>

            <!-- State 6 -->
            <div class="bg-white p-3.5 rounded-xl border border-[#35363B] shadow-sm space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#35363B] text-white">ESTADO 6</span>
                <span class="text-xs text-[#10B981] font-bold">Legal / Auditor</span>
              </div>
              <h4 class="text-sm font-bold text-[#2F3136] font-mono">CRYPTO_AUDITED</h4>
              <p class="text-xs text-[#5E626E]">Dossier inmutable generado con firma digital Ed25519 y hash SHA-256. Artefacto sellado para producción.</p>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Estados de la FSM</span>
            <span>10 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 11: Caso de Estudio Triaje REQ-HLTH-042 (matches slide-11.png giant metrics)
    {
      id: "slide-11",
      number: "11",
      title: "Validación Empírica",
      subtitle: "Triaje de Urgencias REQ-HLTH-042",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top Dashed Connector Arch from Left Stack to Right Cloud (exact slide-11 replica) -->
          <div class="absolute top-10 left-16 right-16 hidden lg:block h-10 border-t-2 border-l-2 border-r-2 border-dashed border-[#8E95A5] -z-0"></div>

          <!-- Left Folder Stack Gadget -->
          <div class="absolute top-16 left-12 hidden lg:flex flex-col items-center z-10">
            <div class="w-8 h-10 rounded bg-[#D9DDE3] border border-[#CBD0D8] p-1 mb-1 flex flex-col justify-between">
              <span class="w-full h-0.5 bg-[#8E95A5]"></span>
              <span class="w-3/4 h-0.5 bg-[#8E95A5]"></span>
            </div>
            <div class="flex items-end space-x-1">
              <div class="w-3.5 h-14 rounded-t bg-[#34909D]"></div>
              <div class="w-3.5 h-16 rounded-t bg-[#35363B]"></div>
              <div class="w-3.5 h-12 rounded-t bg-[#6F7082]"></div>
            </div>
          </div>

          <!-- Right Cloud & Phone Gadget -->
          <div class="absolute top-12 right-12 hidden lg:flex flex-col items-center z-10">
            <div class="relative">
              <svg class="w-24 h-14 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
                <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] mb-0.5"></span>
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB]"></span>
              </div>
            </div>
            <div class="w-9 h-14 rounded-lg bg-[#D9DDE3] border-2 border-[#35363B] flex flex-col justify-center items-center mt-1">
              <div class="w-4 h-4 rounded-full bg-[#35363B]"></div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10 text-center">
            <div class="inline-block px-2.5 py-0.5 rounded bg-[#34909D] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              Caso Empírico de Triaje Hospitalario
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Resultados Empíricos: REQ-HLTH-042
            </h2>
            <p class="text-xs text-[#5E626E] mt-0.5 font-normal">
              Algoritmo de Triaje Manchester bajo carga extrema con K6 y Prometheus
            </p>
          </div>

          <!-- Giant Numbers Layout (Exact slide-11 replica: Top giant number, bottom two numbers) -->
          <div class="relative z-10 my-auto space-y-10">
            <!-- Top Giant Number -->
            <div class="text-center space-y-1">
              <div class="text-6xl sm:text-7xl md:text-8xl font-black text-[#2F3136] tracking-tight font-heading">
                142 ms
              </div>
              <p class="text-base sm:text-lg font-bold text-[#5E626E]">
                Latencia P99 de Triaje Manchester bajo carga máxima (Meta docente: &lt; 200 ms)
              </p>
            </div>

            <!-- Bottom Two Numbers -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <!-- Left Stat -->
              <div class="text-center space-y-1">
                <div class="text-5xl sm:text-6xl font-black text-[#2F3136] tracking-tight font-heading">
                  300 VUs
                </div>
                <p class="text-sm font-bold text-[#5E626E]">
                  Usuarios Virtuales Concurrentes simulando saturación epidemiológica masiva
                </p>
              </div>

              <!-- Right Stat -->
              <div class="text-center space-y-1">
                <div class="text-5xl sm:text-6xl font-black text-[#2F3136] tracking-tight font-heading">
                  0 Leaks
                </div>
                <p class="text-sm font-bold text-[#5E626E]">
                  Fugas de memoria detectadas tras 4 horas continuas de estrés (Leak rate = 0.0 MB/h)
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Validación Empírica</span>
            <span>11 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 12: Matriz Comparativa Golden Suite (matches slide-14.png dashed-border table)
    {
      id: "slide-12",
      number: "12",
      title: "Golden Evaluation Suite",
      subtitle: "Matriz Comparativa de Casos Extremos en Salud",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top-Right Cloud Gadget (slide-14 replica) -->
          <div class="absolute top-8 right-10 hidden md:flex items-center justify-center z-10">
            <div class="relative">
              <svg class="w-24 h-14 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
                <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] mb-0.5"></span>
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB]"></span>
              </div>
            </div>
          </div>

          <!-- Bottom-Left Phone Gadget (slide-14 replica) -->
          <div class="absolute bottom-8 left-8 hidden md:flex items-center space-x-2 z-10">
            <div class="w-8 h-12 rounded-lg bg-[#D9DDE3] border-2 border-[#35363B] flex items-center justify-center">
              <div class="w-3 h-3 rounded-full bg-[#35363B]"></div>
            </div>
            <div class="w-4 border-t-2 border-dashed border-[#8E95A5]"></div>
            <div class="w-8 h-8 rounded bg-[#35363B]"></div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Golden Evaluation Suite
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Comparativa de desempeño en 5 escenarios críticos hospitalarios
            </p>
          </div>

          <!-- Dashed-Border Comparison Table (Exact slide-14 replica) -->
          <div class="relative z-10 my-auto overflow-x-auto">
            <table class="w-full text-left border-collapse border border-dashed border-[#8E95A5] text-xs">
              <thead>
                <tr class="bg-[#D9DDE3] text-[#2F3136] font-bold">
                  <th class="p-2.5 border border-dashed border-[#8E95A5]">Escenario Clínico</th>
                  <th class="p-2.5 border border-dashed border-[#8E95A5]">Criterio ISO 20246</th>
                  <th class="p-2.5 border border-dashed border-[#8E95A5]">Regla ISO 5055</th>
                  <th class="p-2.5 border border-dashed border-[#8E95A5]">Tradicional (Sin Nexus)</th>
                  <th class="p-2.5 border border-dashed border-[#8E95A5] bg-[#C8CFD8]">Con Quality Nexus</th>
                  <th class="p-2.5 border border-dashed border-[#8E95A5]">FSM Estado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-dashed divide-[#8E95A5] bg-white/70">
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">1. Pico Triaje (300 VUs)</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]">Latencia P99 &lt; 200 ms</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] font-mono">Efficiency (Concurrency)</td>
                  <td class="p-2 text-[#BA0034] font-bold border border-dashed border-[#8E95A5]">780.2 ms (Fallo)</td>
                  <td class="p-2 text-[#10B981] font-bold border border-dashed border-[#8E95A5] bg-[#E8F5E9]">142.0 ms (Pasa)</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]"><span class="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[10px]">CERTIFIED</span></td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">2. Cifrado EHR/FHIR</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]">Confidencialidad Ley 29733</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] font-mono">Security (CWE-311)</td>
                  <td class="p-2 text-[#BA0034] font-bold border border-dashed border-[#8E95A5]">Claves en código plano</td>
                  <td class="p-2 text-[#10B981] font-bold border border-dashed border-[#8E95A5] bg-[#E8F5E9]">KMS HSM / AES-256</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]"><span class="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[10px]">CERTIFIED</span></td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">3. Fuga Memoria (4 horas)</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]">Disponibilidad 99.99%</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] font-mono">Reliability (CWE-401)</td>
                  <td class="p-2 text-[#BA0034] font-bold border border-dashed border-[#8E95A5]">+14.2 MB / hora</td>
                  <td class="p-2 text-[#10B981] font-bold border border-dashed border-[#8E95A5] bg-[#E8F5E9]">0.0 MB / hora</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]"><span class="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[10px]">CERTIFIED</span></td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">4. Sanitización SQL</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]">Integridad de Expediente</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] font-mono">Security (CWE-89)</td>
                  <td class="p-2 text-[#BA0034] font-bold border border-dashed border-[#8E95A5]">Concatenación directa</td>
                  <td class="p-2 text-[#10B981] font-bold border border-dashed border-[#8E95A5] bg-[#E8F5E9]">Sentencias preparadas</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]"><span class="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[10px]">CERTIFIED</span></td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">5. Dosis de Medicamentos</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]">Verificabilidad Clínica</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] font-mono">Maintainability (CC &le; 10)</td>
                  <td class="p-2 text-[#BA0034] font-bold border border-dashed border-[#8E95A5]">CC = 18 (Complejo)</td>
                  <td class="p-2 text-[#10B981] font-bold border border-dashed border-[#8E95A5] bg-[#E8F5E9]">CC = 6 (Refactorizado)</td>
                  <td class="p-2 border border-dashed border-[#8E95A5]"><span class="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[10px]">CERTIFIED</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Matriz de Control Golden Suite</span>
            <span>12 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 13: Pipeline de Calidad CI/CD (matches slide-19.png Roadmap / Gantt with #F8B85E blocks)
    {
      id: "slide-13",
      number: "13",
      title: "Pipeline CI/CD Automatizado",
      subtitle: "Secuencia de Verificación Continua",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top-Right Browser Gadget (slide-19 replica) -->
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
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Pipeline de Verificación CI/CD
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Flujo automatizado de control de calidad desde el commit hasta el pase a producción
            </p>
          </div>

          <!-- Gantt / Roadmap Infographic Table (Exact slide-19 replica with #F8B85E blocks) -->
          <div class="relative z-10 my-auto overflow-x-auto">
            <table class="w-full text-left border-collapse border border-dashed border-[#8E95A5] text-xs">
              <thead>
                <tr class="bg-[#D9DDE3] text-[#2F3136] font-bold">
                  <th class="p-2 border border-dashed border-[#8E95A5] w-44">Etapa Pipeline</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] w-64">Objetivo Determinista</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T1</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T2</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T3</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T4</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T5</th>
                  <th class="p-2 border border-dashed border-[#8E95A5] text-center w-12">T6</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-dashed divide-[#8E95A5] bg-white/70">
                <!-- Row 1 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">1. Git Commit & PR</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Parsing de AST y compilación sintáctica estricta</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">2. ISO 20246 Gate</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Verificación de requisitos formales y trazabilidad RTM</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">3. SonarQube / CAST</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Escaneo de reglas ISO 5055 (Seguridad, Confiabilidad)</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                </tr>
                <!-- Row 4 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">4. Golden Suite K6</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Pruebas de estrés de triaje (300 VUs, P99 &lt; 200ms)</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                </tr>
                <!-- Row 5 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">5. Dossier SHA-256</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Firma criptográfica inmutable Ed25519 del reporte</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                </tr>
                <!-- Row 6 -->
                <tr>
                  <td class="p-2 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">6. Deploy Hospitalario</td>
                  <td class="p-2 border border-dashed border-[#8E95A5] text-[#5E626E]">Despliegue a clúster Kubernetes de salud pública</td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"></td>
                  <td class="p-1 border border-dashed border-[#8E95A5]"><div class="h-5 bg-[#F8B85E] rounded-xs"></div></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Pipeline CI/CD</span>
            <span>13 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 14: Dossier Criptográfico de Auditoría (matches slide-20.png KPI dashboard with image3.png chart)
    {
      id: "slide-14",
      number: "14",
      title: "Dossier Criptográfico",
      subtitle: "Evidencia Inmutable para Auditoría Médica y Legal",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Top-Right Cloud Gadget (slide-20 replica) -->
          <div class="absolute top-8 right-10 hidden md:flex items-center justify-center z-10">
            <div class="relative">
              <svg class="w-24 h-14 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
                <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB] mb-0.5"></span>
                <span class="w-6 h-1.5 rounded-full bg-[#E5E7EB]"></span>
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Dossier Criptográfico
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Evidencia matemática con valor probatorio legal ante MINSA y SUSALUD
            </p>
          </div>

          <!-- Split Layout: Table on Left + Giant Stats & Chart on Right (Exact slide-20 replica) -->
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
            <!-- Left Table (col-span-6) -->
            <div class="lg:col-span-6 overflow-x-auto">
              <table class="w-full text-left border-collapse border border-dashed border-[#8E95A5] text-xs">
                <thead>
                  <tr class="bg-[#D9DDE3] text-[#2F3136] font-bold">
                    <th class="p-2 border border-dashed border-[#8E95A5]">Atributo de Certificación</th>
                    <th class="p-2 border border-dashed border-[#8E95A5]">Valor Verificado</th>
                    <th class="p-2 border border-dashed border-[#8E95A5]">Estado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-dashed divide-[#8E95A5] bg-white/70">
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">Hash Artefacto</td>
                    <td class="p-1.5 font-mono text-[11px] text-[#5E626E] border border-dashed border-[#8E95A5]">sha256:4a8f9b...e72</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">INMUTABLE</td>
                  </tr>
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">Firma Digital</td>
                    <td class="p-1.5 font-mono text-[11px] text-[#5E626E] border border-dashed border-[#8E95A5]">Ed25519 (HSM Hardware)</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">VÁLIDA</td>
                  </tr>
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">ISO 20246 Trazabilidad</td>
                    <td class="p-1.5 text-[#5E626E] border border-dashed border-[#8E95A5]">REQ-HLTH-042 (100%)</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">CONFORME</td>
                  </tr>
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">ISO 5055 Reglas AST</td>
                    <td class="p-1.5 text-[#5E626E] border border-dashed border-[#8E95A5]">0 Defectos Críticos</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">CERTIFICADO</td>
                  </tr>
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">Latencia Manchester P99</td>
                    <td class="p-1.5 text-[#5E626E] border border-dashed border-[#8E95A5]">142.0 ms (Target &lt; 200ms)</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">ÓPTIMO</td>
                  </tr>
                  <tr>
                    <td class="p-1.5 font-bold text-[#2F3136] border border-dashed border-[#8E95A5]">Fuga de Memoria</td>
                    <td class="p-1.5 text-[#5E626E] border border-dashed border-[#8E95A5]">0.0 MB/h en 4 horas</td>
                    <td class="p-1.5 text-[#10B981] font-bold border border-dashed border-[#8E95A5]">ESTABLE</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Right Stats and Chart (col-span-6) -->
            <div class="lg:col-span-6 space-y-4">
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="space-y-0.5">
                  <div class="text-2xl sm:text-3xl font-extrabold text-[#2F3136] font-heading">100%</div>
                  <div class="text-[11px] text-[#5E626E] font-bold">Auditabilidad</div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-2xl sm:text-3xl font-extrabold text-[#2F3136] font-heading">0 Viol.</div>
                  <div class="text-[11px] text-[#5E626E] font-bold">ISO 5055</div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-2xl sm:text-3xl font-extrabold text-[#2F3136] font-heading">&lt; 30s</div>
                  <div class="text-[11px] text-[#5E626E] font-bold">Generación</div>
                </div>
              </div>

              <!-- Bar & Line Chart from template assets (image3.png) -->
              <div class="bg-white p-2.5 rounded-xl border border-[#CBD0D8] shadow-xs flex flex-col items-center">
                <div class="text-xs font-bold text-[#2F3136] mb-1">Evolución de Rendimiento en Triaje</div>
                <img src="template_assets/image3.png" alt="Performance chart" class="h-28 object-contain"/>
                <div class="text-[10px] text-[#5E626E] mt-0.5">Comparativa de latencia P99 vs throughput en 4 sprints</div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Dossier Criptográfico</span>
            <span>14 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 15: Viabilidad Económica & Cumplimiento (matches slide-11 big numbers + pie chart template_assets/image1.png)
    {
      id: "slide-15",
      number: "15",
      title: "Viabilidad Económica",
      subtitle: "ROI, Ahorro de Horas & Marco Regulatorio MINSA",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
          </svg>

          <!-- Title -->
          <div class="relative z-10">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-[#2F3136] tracking-tight font-heading">
              Viabilidad Económica & Legal
            </h2>
            <p class="text-base text-[#5E626E] mt-1 font-normal">
              Justificación de retorno de inversión e impacto en el gasto público
            </p>
          </div>

          <!-- 3 Giant Stat Cards on Top -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 my-auto max-w-5xl">
            <div class="bg-white p-5 rounded-2xl border border-[#CBD0D8] shadow-xs text-center space-y-1">
              <span class="text-4xl sm:text-5xl font-black text-[#2F3136] font-heading block">30 - 40 h</span>
              <span class="text-xs font-bold text-[#5E626E] uppercase tracking-wider block">Ahorro por Release</span>
              <p class="text-[11px] text-[#5E626E]">Reducción del 85% en tiempo de revisión manual de código y auditorías de requisitos.</p>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-[#CBD0D8] shadow-xs text-center space-y-1">
              <span class="text-4xl sm:text-5xl font-black text-[#34909D] font-heading block">$2,100</span>
              <span class="text-xs font-bold text-[#5E626E] uppercase tracking-wider block">Ahorro Neto / Ciclo</span>
              <p class="text-[11px] text-[#5E626E]">Cálculo empírico considerando costos de ingenieros QA y comités médicos auditores.</p>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-[#CBD0D8] shadow-xs text-center space-y-1">
              <span class="text-4xl sm:text-5xl font-black text-[#F8B85E] font-heading block">&lt; 30 días</span>
              <span class="text-xs font-bold text-[#5E626E] uppercase tracking-wider block">Retorno de Inversión</span>
              <p class="text-[11px] text-[#5E626E]">Recuperación total del costo de implementación tras certificar los primeros 2 sprints.</p>
            </div>
          </div>

          <!-- Bottom: 2 Columns with Pie Chart on Right -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl items-center">
            <div class="md:col-span-8 bg-white/80 p-4 rounded-xl border border-[#CBD0D8] space-y-2">
              <h4 class="text-sm font-bold text-[#2F3136] font-heading">
                Alineación Regulatoria MINSA & SUSALUD
              </h4>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Cumplimiento directo de la <strong>Directiva Administrativa N° 214-MINSA</strong> (Historias Clínicas Electrónicas) y el estándar nacional de interoperabilidad (HL7/FHIR). El dossier firmado criptográficamente exime a la institución hospitalaria de negligencia técnica ante peritajes del Ministerio Público.
              </p>
            </div>

            <div class="md:col-span-4 bg-white p-3 rounded-xl border border-[#CBD0D8] shadow-xs flex flex-col items-center">
              <img src="template_assets/image1.png" alt="Distribution of savings" class="h-20 object-contain"/>
              <div class="text-[10px] text-[#5E626E] text-center mt-1">Distribución del Ahorro Operativo</div>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Viabilidad Económica</span>
            <span>15 / 16</span>
          </div>
        </div>
      `
    },

    // SLIDE 16: Conclusiones & Cierre ("¡Muchas Gracias!" matches slide-21.png)
    {
      id: "slide-16",
      number: "16",
      title: "Cierre & Conclusiones",
      subtitle: "¡Muchas Gracias!",
      render: () => `
        <div class="relative w-full h-full flex flex-col justify-between p-10 md:p-14">
          <!-- Blobs -->
          <svg class="absolute -top-12 -left-12 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
          </svg>
          <svg class="absolute -bottom-16 -left-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M0,200 L0,70 C70,80 100,40 140,80 C180,120 150,200 150,200 Z"/>
          </svg>
          <svg class="absolute -bottom-20 -right-20 w-80 h-80 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
            <path d="M200,200 L40,200 C60,120 30,70 85,35 C140,-5 200,40 200,40 Z"/>
          </svg>

          <!-- Top-Left Browser Card Gadget (slide-21 replica) -->
          <div class="absolute top-8 left-8 w-24 h-20 rounded-xl bg-[#D9DDE3] shadow-sm border border-[#CBD0D8] p-2 flex flex-col justify-between hidden md:flex z-10">
            <div class="flex space-x-1 mb-1">
              <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
              <span class="w-2 h-2 rounded-full bg-[#F8B85E]"></span>
              <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
            </div>
            <div class="flex space-x-1 items-center">
              <div class="w-6 h-8 rounded bg-[#55C0ED]"></div>
              <div class="space-y-1 w-10">
                <div class="w-full h-1 bg-[#8E95A5] rounded"></div>
                <div class="w-3/4 h-1 bg-[#8E95A5] rounded"></div>
              </div>
            </div>
          </div>

          <!-- Right Cloud & Phone Gadget (slide-21 replica) -->
          <div class="absolute top-24 right-8 hidden md:flex flex-col items-center z-10">
            <div class="w-12 h-14 rounded-lg bg-[#35363B] p-1 flex flex-col justify-between">
              <div class="flex justify-end space-x-0.5">
                <span class="w-1 h-1 rounded-full bg-[#BA0034]"></span>
                <span class="w-1 h-1 rounded-full bg-[#F8B85E]"></span>
              </div>
              <div class="space-y-0.5">
                <div class="w-full h-0.5 bg-white/60 rounded"></div>
                <div class="w-3/4 h-0.5 bg-white/40 rounded"></div>
              </div>
            </div>
            <div class="h-6 w-0.5 border-l-2 border-dashed border-[#8E95A5]"></div>
            <div class="w-12 h-20 rounded-xl bg-[#D9DDE3] border-2 border-[#35363B] flex flex-col justify-between items-center p-1">
              <div class="w-3 h-0.5 rounded-full bg-[#8E95A5]"></div>
              <div class="w-6 h-6 rounded-full bg-[#35363B] flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="w-4 h-0.5 rounded-full bg-[#8E95A5]"></div>
            </div>
          </div>

          <!-- Centered Big "Thanks!" Content (Exact slide-21 replica) -->
          <div class="relative z-10 text-center my-auto space-y-5 max-w-2xl mx-auto">
            <h1 class="text-6xl sm:text-7xl md:text-8xl font-black text-[#2F3136] tracking-tight font-heading">
              ¡Muchas Gracias!
            </h1>
            <p class="text-xl sm:text-2xl font-bold text-[#4B505E] font-heading">
              Quality Nexus: Excelencia Determinista para la Salud Pública
            </p>
            <p class="text-sm text-[#5E626E] leading-relaxed">
              ¿Tienen preguntas sobre la implementación, el caso empírico o la dualidad normativa ISO 20246 & ISO/IEC 5055?
            </p>

            <!-- Social / Contact Icons in Gold Circles (#F8B85E) (Exact slide-21 replica) -->
            <div class="flex items-center justify-center space-x-3 pt-2">
              <div class="w-10 h-10 rounded-full bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer hover:opacity-90">
                F
              </div>
              <div class="w-10 h-10 rounded-full bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer hover:opacity-90">
                I
              </div>
              <div class="w-10 h-10 rounded-full bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer hover:opacity-90">
                in
              </div>
              <div class="w-10 h-10 rounded-full bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer hover:opacity-90">
                X
              </div>
              <div class="w-10 h-10 rounded-full bg-[#F8B85E] text-[#2F3136] flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer hover:opacity-90">
                d
              </div>
            </div>

            <!-- Credits & Team attribution -->
            <div class="pt-3 text-xs text-[#5E626E] space-y-1">
              <p class="font-bold text-[#2F3136]">Grupo 05 • Trabajo Parcial 5 • 13 de Octubre de 2026</p>
              <p>Plantilla visual adaptada fielmente de <strong>Slidesgo</strong> (Multimedia Software Pitch Deck)</p>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="relative z-10 flex justify-between text-xs text-[#5E626E] border-t border-[#DDE1E6] pt-2">
            <span>Quality Nexus • Presentación Final</span>
            <span>16 / 16</span>
          </div>
        </div>
      `
    }
  ];

  // Generate the full HTML container with Tailwind CSS, Epilogue font, Lato font, JetBrains Mono font, and Interactive Navigator
  const htmlContent = `<!DOCTYPE html>
<html lang="es" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quality Nexus - Sistema de Salud Pública (ISO 20246 & ISO 5055)</title>
  
  <!-- Google Fonts: Epilogue & Lato -->
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
</head>
<body class="h-full flex flex-col justify-between select-none">

  <!-- Top Progress Bar -->
  <div class="no-print w-full h-1 bg-[#D1D5DB] fixed top-0 left-0 z-50">
    <div id="progressBar" class="h-full bg-[#34909D] transition-all duration-300 w-[6.25%]"></div>
  </div>

  <!-- Main Slide Viewport -->
  <main class="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
    <div id="slideViewport" class="slide-viewport w-full max-w-[1280px] max-h-[720px] rounded-2xl relative overflow-hidden flex flex-col">
      ${slides.map((s, idx) => `
        <div id="slide-${idx}" class="slide-item absolute inset-0 w-full h-full transition-opacity duration-300 ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}">
          ${s.render()}
        </div>
      `).join('\n')}
    </div>
  </main>

  <!-- Bottom Navigation Bar (Matching Template Light Aesthetics) -->
  <footer class="no-print bg-white/95 backdrop-blur-md border-t border-[#D1D5DB] px-6 py-2.5 flex items-center justify-between text-[#2F3136] z-50">
    <!-- Left: Slide Title & Info -->
    <div class="flex items-center space-x-3">
      <div class="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
      <span id="currentSlideTitle" class="text-xs font-bold text-[#2F3136] hidden sm:inline font-heading">01. Portada Quality Nexus</span>
    </div>

    <!-- Center: Prev / Next / Counter -->
    <div class="flex items-center space-x-2">
      <button onclick="prevSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Diapositiva Anterior (← o Flecha Arriba)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div class="px-3 py-1 rounded-md bg-[#F4F5F7] border border-[#CBD0D8] text-xs font-bold font-mono text-[#2F3136]">
        <span id="slideCounterCurrent">01</span> / <span id="slideCounterTotal">${slides.length.toString().padStart(2, '0')}</span>
      </div>

      <button onclick="nextSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Siguiente Diapositiva (→ o Espacio)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Right: Extra Controls (Overview, Fullscreen, Print) -->
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

  <!-- Modal Overview Grid (Index of 16 slides) -->
  <div id="overviewModal" class="no-print fixed inset-0 bg-[#2F3136]/80 backdrop-blur-sm z-50 hidden flex flex-col p-6 sm:p-10 justify-between">
    <div class="flex items-center justify-between text-white border-b border-white/20 pb-3">
      <h3 class="text-xl font-bold font-heading">Índice General de Diapositivas (${slides.length})</h3>
      <button onclick="toggleOverview()" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm">✕ Cerrar (Esc)</button>
    </div>
    
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 overflow-y-auto my-4 py-2">
      ${slides.map((s, idx) => `
        <div onclick="goToSlide(${idx}); toggleOverview();" class="bg-[#F4F5F7] p-3 rounded-lg border-2 hover:border-[#34909D] cursor-pointer transition-all hover:scale-105 shadow-md flex flex-col justify-between h-28">
          <div class="flex items-center justify-between text-[#2F3136]">
            <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#D9DDE3]">${(idx+1).toString().padStart(2, '0')}</span>
            <span class="text-[10px] text-[#5E626E] font-semibold">${s.subtitle || ''}</span>
          </div>
          <div class="text-xs font-bold text-[#2F3136] font-heading line-clamp-2">${s.title}</div>
          <div class="w-full bg-[#DDE1E6] h-1 rounded-full overflow-hidden">
            <div class="bg-[#34909D] h-full" style="width: ${((idx+1)/slides.length)*100}%"></div>
          </div>
        </div>
      `).join('\n')}
    </div>

    <div class="text-center text-xs text-white/70">
      Usa las flechas del teclado para navegar o haz clic en cualquier diapositiva.
    </div>
  </div>

  <script>
    let currentSlide = 0;
    const totalSlides = ${slides.length};
    const slideTitles = [
      ${slides.map(s => `"${s.number}. ${s.title}"`).join(', ')}
    ];

    function showSlide(index) {
      if (index < 0) index = 0;
      if (index >= totalSlides) index = totalSlides - 1;

      // Hide all
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

      // Update UI elements
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

    // Keyboard navigation
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

    // Initial show
    showSlide(0);
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');
  console.log('Successfully generated index.html with Slidesgo exact visual tokens and 16 slides!');
}

buildHtml();
