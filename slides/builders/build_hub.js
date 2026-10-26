const fs = require('fs');
const path = require('path');

function generateHubHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Midterm 5 Deliverables Portal: Software Quality in Public Healthcare</title>
  
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
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Lato', sans-serif;
      background-color: #F4F5F7;
      color: #2F3136;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body class="min-h-screen bg-[#F4F5F7] text-[#2F3136] relative overflow-x-hidden selection:bg-[#34909D] selection:text-white">

  <!-- Background Organic Blobs (Slidesgo Style) -->
  <svg class="absolute -top-16 -left-16 w-96 h-96 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
    <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
  </svg>
  <svg class="absolute top-1/3 -right-20 w-80 h-80 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
    <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
  </svg>
  <svg class="absolute -bottom-20 -left-16 w-88 h-88 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
    <path d="M0,200 L140,200 C120,140 140,90 90,60 C40,30 0,60 0,60 Z"/>
  </svg>

  <!-- Main Container -->
  <div class="relative z-10 max-w-6xl mx-auto px-6 py-10 sm:py-16">
    
    <!-- Top Academic Header -->
    <header class="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b-2 border-dashed border-[#CBD0D8] gap-4">
      <div>
        <div class="flex items-center space-x-3 mb-2">
          <span class="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#35363B] text-white">
            SOFTWARE QUALITY & TESTING · MIDTERM 5
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
            Target Grade: 20 / 20
          </span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black font-heading text-[#2F3136] tracking-tight uppercase">
          MASTER DELIVERABLES PORTAL
        </h1>
        <p class="text-sm sm:text-base text-[#5E626E] font-medium mt-1">
          Application of Standards ISO 20246:2017 & ISO/IEC 5055:2021 in Public Healthcare Systems
        </p>
      </div>

      <div class="flex flex-col items-start md:items-end text-xs font-mono bg-white p-3.5 rounded-xl border border-[#CBD0D8] shadow-xs">
        <span class="font-bold text-[#2F3136]">TEAM: GROUP 05 (Yoel, Marco, Jeremy, Rafael, Leo)</span>
        <span class="text-[#5E626E]">Due Date: October 13, 2026</span>
        <span class="text-[#34909D] font-bold mt-1">Platform: Quality Nexus</span>
      </div>
    </header>

    <!-- Deliverables Cards Section -->
    <section class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card 1: Team Pitch Deck -->
      <div class="bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono font-bold text-[#34909D] uppercase tracking-wider">DELIVERABLE 1</span>
          <h2 class="text-xl font-extrabold font-heading text-[#2F3136] mt-2 mb-2">Team Deck (Quality Nexus)</h2>
          <p class="text-xs text-[#5E626E] leading-relaxed mb-4">
            Comprehensive team presentation based on <code class="font-mono bg-[#E2E5E9] px-1 py-0.5 rounded text-[#2F3136]">Diapositivas del equipo.pptx</code>: industry margin erosion, Living Evidence Graph, deterministic engine, 6-state FSM, and B2B SaaS model.
          </p>
          <div class="space-y-1.5 text-xs text-[#2F3136] font-medium mb-6">
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#34909D]"></span>
              <span>12 Interactive 16:9 Slides (English)</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#34909D]"></span>
              <span>6-State Epistemic FSM Architecture</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#34909D]"></span>
              <span>REQ-089 Hospital Staging Case Study</span>
            </div>
          </div>
        </div>
        <a href="diapositivas_equipo.html" class="w-full py-3 px-4 rounded-xl bg-[#34909D] hover:bg-[#2C7B87] text-white font-bold text-center text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
          <span>Launch Team Deck (12 Slides)</span>
          <span>➔</span>
        </a>
      </div>

      <!-- Card 2: Assignment Solution -->
      <div class="bg-white rounded-2xl p-6 border-2 border-[#BA0034] shadow-sm flex flex-col justify-between bg-gradient-to-br from-white to-[#BA0034]/5">
        <div>
          <span class="text-xs font-mono font-bold text-[#BA0034] uppercase tracking-wider">DELIVERABLE 2</span>
          <h2 class="text-xl font-extrabold font-heading text-[#2F3136] mt-2 mb-2">Official Assignment Solution</h2>
          <p class="text-xs text-[#5E626E] leading-relaxed mb-4">
            Rigorous response to all 3 requirements from <code class="font-mono bg-[#E2E5E9] px-1 py-0.5 rounded text-[#2F3136]">enunciado.jpeg</code> applied directly to the Public Healthcare Project (EHR & Manchester Emergency Triage).
          </p>
          <div class="space-y-1.5 text-xs text-[#2F3136] font-medium mb-6">
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
              <span>Req 1: ISO 5055 Code Indicators & Formulas</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
              <span>Req 2: Code Efficiency & Triage Benchmarks</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
              <span>Req 3: Tripartite Tool Architecture</span>
            </div>
          </div>
        </div>
        <a href="enunciado_solucion.html" class="w-full py-3 px-4 rounded-xl bg-[#BA0034] hover:bg-[#99002B] text-white font-bold text-center text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
          <span>Launch Assignment Solution (14 Slides)</span>
          <span>➔</span>
        </a>
      </div>

      <!-- Card 3: Formal Engineering Report -->
      <div class="bg-white rounded-2xl p-6 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono font-bold text-[#35363B] uppercase tracking-wider">FORMAL DOCUMENT</span>
          <h2 class="text-xl font-extrabold font-heading text-[#2F3136] mt-2 mb-2">Technical Engineering Report</h2>
          <p class="text-xs text-[#5E626E] leading-relaxed mb-4">
            Full 11-chapter engineering monograph containing mathematical derivations, CWE tables, ISO 20246 audit processes, and CI/CD pipelines.
          </p>
          <div class="space-y-1.5 text-xs text-[#2F3136] font-medium mb-6">
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#35363B]"></span>
              <span>11 Comprehensive Chapters</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#35363B]"></span>
              <span>Mathematical Proofs & Aggregations</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#35363B]"></span>
              <span>Cryptographic SHA-256 Dossier Schema</span>
            </div>
          </div>
        </div>
        <a href="REPORTE_TECNICO_CALIDAD_SALUD_PUBLICA.md" target="_blank" class="w-full py-3 px-4 rounded-xl bg-[#35363B] hover:bg-[#202124] text-white font-bold text-center text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
          <span>View Engineering Report (MD)</span>
          <span>↗</span>
        </a>
      </div>
    </section>

    <!-- NEW SECTION: Speaker Scripts for 5 Presenters (English) -->
    <section class="bg-white rounded-2xl border border-[#CBD0D8] shadow-sm p-6 sm:p-8 mb-10">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-dashed border-[#CBD0D8] mb-6 gap-2">
        <div>
          <span class="text-xs font-mono font-bold text-[#F8B85E] uppercase tracking-wider">ORAL PRESENTATION SCRIPTS (ENGLISH)</span>
          <h3 class="text-xl font-bold font-heading text-[#2F3136]">Verbal Presentation Scripts for the 5 Speakers</h3>
          <p class="text-xs text-[#5E626E] mt-0.5">Equitable and professional role distribution for: <strong>Yoel, Marco, Jeremy, Rafael, and Leo</strong></p>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white self-start sm:self-auto">
          5 Coordinated Speakers
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Script 1 -->
        <div class="p-5 rounded-xl border-2 border-dashed border-[#34909D] bg-[#F4F5F7] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono font-bold text-[#34909D]">SCRIPT 1 · TEAM PITCH DECK</span>
              <span class="text-xs font-bold text-[#5E626E]">12 Slides</span>
            </div>
            <h4 class="font-bold text-base font-heading text-[#2F3136] mb-1">Speaker Script: Quality Nexus Pitch Deck</h4>
            <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
              Full English spoken script with allocated times, on-screen visual cues, and seamless verbal handoffs across all 12 team slides.
            </p>
            <div class="text-[11px] text-[#2F3136] font-mono space-y-1 mb-4 bg-white p-2.5 rounded border border-[#CBD0D8]">
              <div>• <strong>Yoel:</strong> Slides 01-02 (Cover & Industry Diagnosis)</div>
              <div>• <strong>Marco:</strong> Slides 03-04 (Competition & Living Graph)</div>
              <div>• <strong>Jeremy:</strong> Slides 05-06 (Standards & Determinism)</div>
              <div>• <strong>Rafael:</strong> Slides 07-08 (FSM & Staging Case Study)</div>
              <div>• <strong>Leo:</strong> Slides 09-12 (Security, SaaS & Roadmap)</div>
            </div>
          </div>
          <a href="GUION_EXPOSICION_EQUIPO.md" target="_blank" class="w-full py-2.5 px-3 rounded-lg bg-[#34909D] hover:bg-[#2C7B87] text-white font-bold text-xs text-center shadow-xs flex items-center justify-center space-x-1.5">
            <span>Open Team Deck Script (English MD)</span>
            <span>↗</span>
          </a>
        </div>

        <!-- Script 2 -->
        <div class="p-5 rounded-xl border-2 border-dashed border-[#BA0034] bg-[#F4F5F7] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono font-bold text-[#BA0034]">SCRIPT 2 · ASSIGNMENT SOLUTION</span>
              <span class="text-xs font-bold text-[#5E626E]">14 Slides</span>
            </div>
            <h4 class="font-bold text-base font-heading text-[#2F3136] mb-1">Speaker Script: Healthcare Assignment Solution</h4>
            <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
              Rigorous English defense script answering all 3 exam requirements step-by-step covering ISO 20246, ISO 5055, and emergency triage.
            </p>
            <div class="text-[11px] text-[#2F3136] font-mono space-y-1 mb-4 bg-white p-2.5 rounded border border-[#CBD0D8]">
              <div>• <strong>Yoel:</strong> Slides 01-03 (Cover, Healthcare & ISO Synergy)</div>
              <div>• <strong>Marco:</strong> Slides 04-05 (ISO 20246 Lifecycle & Req 1)</div>
              <div>• <strong>Jeremy:</strong> Slides 06-07 (Formulas & Req 2 Efficiency)</div>
              <div>• <strong>Rafael:</strong> Slides 08-10 (Hardware & Req 3 Capture)</div>
              <div>• <strong>Leo:</strong> Slides 11-14 (Process, Presentation, Demo & Grade 20)</div>
            </div>
          </div>
          <a href="GUION_EXPOSICION_ENUNCIADO.md" target="_blank" class="w-full py-2.5 px-3 rounded-lg bg-[#BA0034] hover:bg-[#99002B] text-white font-bold text-xs text-center shadow-xs flex items-center justify-center space-x-1.5">
            <span>Open Assignment Solution Script (English MD)</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Requirements Traceability Matrix -->
    <section class="bg-white rounded-2xl border border-[#CBD0D8] shadow-sm p-6 sm:p-8 mb-10">
      <div class="flex items-center justify-between pb-4 border-b-2 border-dashed border-[#CBD0D8] mb-6">
        <div>
          <span class="text-xs font-mono font-bold text-[#34909D] uppercase tracking-wider">ACADEMIC TRACEABILITY</span>
          <h3 class="text-xl font-bold font-heading text-[#2F3136]">Requirements Coverage & Evaluation Rubric</h3>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#10B981]/15 text-[#10B981]">
          Coverage: 100%
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b-2 border-dashed border-[#CBD0D8] text-[#5E626E] font-heading uppercase">
              <th class="py-2.5 px-3">Professor Requirement</th>
              <th class="py-2.5 px-3">Applied Standard</th>
              <th class="py-2.5 px-3">Healthcare Context</th>
              <th class="py-2.5 px-3">Deck Location</th>
              <th class="py-2.5 px-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-dashed divide-[#E2E5E9]">
            <tr class="hover:bg-[#F8F9FA]">
              <td class="py-3 px-3 font-bold text-[#2F3136]">1. Code Quality Indicators Structure</td>
              <td class="py-3 px-3 font-mono text-[#BA0034] font-bold">ISO/IEC 5055:2021</td>
              <td class="py-3 px-3 text-[#5E626E]">Security, Reliability, Performance & Maintainability in triage service.</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Assignment: Slides 05 & 06</td>
              <td class="py-3 px-3 text-[#10B981] font-bold">✓ Complete</td>
            </tr>
            <tr class="hover:bg-[#F8F9FA]">
              <td class="py-3 px-3 font-bold text-[#2F3136]">2. Code Efficiency Indicators</td>
              <td class="py-3 px-3 font-mono text-[#F8B85E] font-bold">ISO 25010 / Telemetry</td>
              <td class="py-3 px-3 text-[#5E626E]">Latency p95 &le; 400ms, CPU &le; 65%, Heap Drift &le; 5MB/h, v(G) &le; 10.</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Assignment: Slides 07 & 08</td>
              <td class="py-3 px-3 text-[#10B981] font-bold">✓ Complete</td>
            </tr>
            <tr class="hover:bg-[#F8F9FA]">
              <td class="py-3 px-3 font-bold text-[#2F3136]">3. Tripartite Tools Architecture</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">CI/CD & AST & APM</td>
              <td class="py-3 px-3 text-[#5E626E]">Capture (SonarQube/k6) ➔ Process (Nexus Core) ➔ Presentation (SHA-256).</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Assignment: Slides 09 to 12</td>
              <td class="py-3 px-3 text-[#10B981] font-bold">✓ Complete</td>
            </tr>
            <tr class="hover:bg-[#F8F9FA]">
              <td class="py-3 px-3 font-bold text-[#2F3136]">Formal Work Product Reviews</td>
              <td class="py-3 px-3 font-mono text-[#35363B] font-bold">ISO/IEC 20246:2017</td>
              <td class="py-3 px-3 text-[#5E626E]">5 formal review phases applied to clinical requirements & API contracts.</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Assignment: Slide 04</td>
              <td class="py-3 px-3 text-[#10B981] font-bold">✓ Complete</td>
            </tr>
            <tr class="hover:bg-[#F8F9FA]">
              <td class="py-3 px-3 font-bold text-[#2F3136]">Team Platform & Product Pitch</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Quality Nexus Pitch</td>
              <td class="py-3 px-3 text-[#5E626E]">Living Evidence Graph, 6-state FSM, case study, and B2B SaaS model.</td>
              <td class="py-3 px-3 font-mono text-[#34909D] font-bold">Team: Slides 01 to 12</td>
              <td class="py-3 px-3 text-[#10B981] font-bold">✓ Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Portal Footer -->
    <footer class="pt-6 border-t border-[#CBD0D8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E626E] gap-3">
      <div>
        <strong>Course: Software Quality and Testing</strong> · Midterm Evaluation 5 (TP5) · October 2026
      </div>
      <div class="flex items-center space-x-3 font-mono">
        <a href="diapositivas_equipo.html" class="hover:text-[#34909D] underline font-bold">Team Deck</a>
        <span>·</span>
        <a href="enunciado_solucion.html" class="hover:text-[#BA0034] underline font-bold">Assignment Solution</a>
        <span>·</span>
        <a href="GUION_EXPOSICION_EQUIPO.md" target="_blank" class="hover:text-[#34909D] underline font-bold">Guion 1</a>
        <span>·</span>
        <a href="GUION_EXPOSICION_ENUNCIADO.md" target="_blank" class="hover:text-[#BA0034] underline font-bold">Guion 2</a>
        <span>·</span>
        <a href="REPORTE_TECNICO_CALIDAD_SALUD_PUBLICA.md" target="_blank" class="hover:text-[#2F3136] underline font-bold">Technical Report (MD)</a>
      </div>
    </footer>

  </div>
</body>
</html>
`;
}

const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, generateHubHtml(), 'utf8');
console.log('✅ index.html updated with Speaker Scripts section.');
