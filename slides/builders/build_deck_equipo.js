const fs = require('fs');
const path = require('path');

// ==========================================
// DECK 1: TEAM PRESENTATION (ENGLISH)
// (Strictly based on Diapositivas del equipo.pptx)
// ==========================================

const slides = [
  // ----------------------------------------------------
  // SLIDE 1: Cover
  // ----------------------------------------------------
  {
    number: "01",
    title: "Quality Nexus - Deterministic Verification Platform",
    subtitle: "Executive Pitch Deck",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Background Blobs -->
        <svg class="absolute -top-10 -left-10 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>
        <svg class="absolute -bottom-16 -right-16 w-72 h-72 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
        </svg>

        <!-- Top Right Browser Gadget -->
        <div class="absolute top-6 right-8 w-28 h-20 rounded-xl bg-[#D9DDE3] shadow-sm border border-[#CBD0D8] p-2 flex flex-col justify-between hidden sm:flex z-10">
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

        <!-- Header / Badge -->
        <div class="relative z-10 flex items-center space-x-3">
          <span class="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#35363B] text-white">
            SOFTWARE QUALITY & TESTING · MIDTERM 5
          </span>
          <span class="text-xs font-semibold text-[#5E626E]">
            Group 05 · October 2026
          </span>
        </div>

        <!-- Hero Content in Two Columns -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <div class="lg:col-span-7 space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#2F3136] tracking-tight leading-none uppercase">
              QUALITY<br/><span class="text-[#34909D]">NEXUS</span>
            </h1>
            <p class="text-base sm:text-lg text-[#5E626E] font-medium leading-relaxed max-w-xl">
              Auditable Evidence Governance and Deterministic Software Verification Platform for Mission-Critical Systems.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs">
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ Living Evidence Graph
              </span>
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ 6-State Epistemic FSM
              </span>
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ Zero Hallucination Core
              </span>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center items-center">
            <div class="relative w-full max-w-sm">
              <img src="template_assets/image4.png" alt="Engineering Team" class="w-full h-auto max-h-56 object-contain drop-shadow-md">
            </div>
          </div>
        </div>

        <!-- Footer Meta -->
        <div class="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#DDE1E6] text-xs text-[#5E626E]">
          <div class="font-bold text-[#2F3136]">
            Deliverable: Team Pitch Deck · Evaluation Midterm 5
          </div>
          <div class="font-mono text-[#34909D] font-bold">
            Team 05 · Software Engineering
          </div>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 2: Industry Diagnosis
  // ----------------------------------------------------
  {
    number: "02",
    title: "Industry Diagnosis: The Silent Margin Erosion in Software",
    subtitle: "Problem & Diagnosis",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L70,0 C90,60 50,110 100,150 C150,190 200,140 200,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">02. INDUSTRY DIAGNOSIS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">The Silent Margin Erosion in Software Development</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#BA0034]/10 text-[#BA0034] border border-[#BA0034]/20">
            Systemic Failure
          </span>
        </div>

        <!-- 3 Diagnostic Cards -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
          <!-- Card 1 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#BA0034]"></div>
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-2xl font-black font-mono text-[#BA0034]">20 - 40 hrs</span>
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#BA0034]/10 text-[#BA0034]">Per Sprint</span>
              </div>
              <h3 class="text-base font-bold font-heading text-[#2F3136] mb-2">Chronic Rework Waste</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Development teams lose dozens of engineering hours rewriting code and reconfiguring tests due to requirements that mutated silently without downstream notification.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#F0F2F5] text-[11px] font-bold text-[#BA0034]">
              Impact: 25% gross margin drain.
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#F8B85E]"></div>
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-2xl font-black font-mono text-[#F8B85E]">&gt; 65%</span>
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F8B85E]/20 text-[#2F3136]">Disconnect</span>
              </div>
              <h3 class="text-base font-bold font-heading text-[#2F3136] mb-2">Phantom Tests & Technical Debt</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Unit tests passing in green while asserting obsolete logic unaligned with real client specifications, creating a catastrophic false sense of security in CI/CD.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#F0F2F5] text-[11px] font-bold text-[#5E626E]">
              Risk: Undetected regressions in production.
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#34909D]"></div>
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-2xl font-black font-mono text-[#34909D]">100%</span>
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#34909D]/10 text-[#34909D]">Audit Gap</span>
              </div>
              <h3 class="text-base font-bold font-heading text-[#2F3136] mb-2">AI Hallucination Without Verification</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Generative co-pilots invent code or assume requirements without formal traceability, deterministic stress testing, or legal auditability for regulators.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#F0F2F5] text-[11px] font-bold text-[#34909D]">
              Consequence: Regulatory compliance failure.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 p-3.5 rounded-lg bg-[#35363B] text-white flex items-center justify-between text-xs">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-[#BA0034] animate-pulse"></span>
            <span class="font-bold">Core Insight:</span>
            <span class="text-white/80">The market does not need more code generation; it lacks rigorous verification and immutable evidence governance.</span>
          </div>
          <span class="font-mono text-[#55C0ED] font-bold hidden sm:inline">ISO 25010 / ISO 29148 Gap</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 3: Competitive Landscape
  // ----------------------------------------------------
  {
    number: "03",
    title: "Competitive Landscape: The Critical Verification Gap",
    subtitle: "Market Benchmarking",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-10 -left-10 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L120,0 C100,50 120,100 70,120 C20,140 0,100 0,100 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">03. COMPETITIVE LANDSCAPE</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">The Critical Verification Gap in the Industry</h2>
          </div>
          <div class="hidden sm:flex items-center space-x-1 text-xs font-mono font-bold text-[#5E626E]">
            <span>Benchmarking</span>
            <span>·</span>
            <span>4 Quadrants</span>
          </div>
        </div>

        <!-- Comparison Table (Dashed Style Matching Slidesgo) -->
        <div class="relative z-10 bg-white rounded-xl border border-[#CBD0D8] shadow-sm p-4 overflow-x-auto my-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="border-b-2 border-dashed border-[#CBD0D8] text-[#5E626E] font-heading uppercase text-[11px]">
                <th class="py-2.5 px-3">Solution Category</th>
                <th class="py-2.5 px-3">Representative Tools</th>
                <th class="py-2.5 px-3">Requirements Traceability</th>
                <th class="py-2.5 px-3">Runtime Verification</th>
                <th class="py-2.5 px-3">Determinism & FSM</th>
                <th class="py-2.5 px-3">Legal Audit Dossier</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-dashed divide-[#E2E5E9]">
              <tr class="hover:bg-[#F8F9FA]">
                <td class="py-2.5 px-3 font-bold text-[#2F3136]">Enterprise ALM</td>
                <td class="py-2.5 px-3 font-mono text-[#5E626E]">Jira, Polarion, DOORS</td>
                <td class="py-2.5 px-3 text-[#34909D] font-bold">Manual / Static</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Disconnected</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ No FSM</td>
                <td class="py-2.5 px-3 text-[#F8B85E] font-bold">Manual (PDFs)</td>
              </tr>
              <tr class="hover:bg-[#F8F9FA]">
                <td class="py-2.5 px-3 font-bold text-[#2F3136]">Agile Test Mgmt</td>
                <td class="py-2.5 px-3 font-mono text-[#5E626E]">Xray, Zephyr, TestRail</td>
                <td class="py-2.5 px-3 text-[#34909D] font-bold">Issue-Level Only</td>
                <td class="py-2.5 px-3 text-[#F8B85E] font-bold">CI/CD Reports</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ No Invalidation</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Partial</td>
              </tr>
              <tr class="hover:bg-[#F8F9FA]">
                <td class="py-2.5 px-3 font-bold text-[#2F3136]">Gen AI Co-pilots</td>
                <td class="py-2.5 px-3 font-mono text-[#5E626E]">Cursor, Copilot, Lovable</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Prompt / Ephemeral</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Hallucination</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Probabilistic</td>
                <td class="py-2.5 px-3 text-[#BA0034] font-bold">✕ Non-Auditable</td>
              </tr>
              <tr class="bg-[#34909D]/10 font-bold border-l-4 border-l-[#34909D]">
                <td class="py-2.5 px-3 text-[#34909D] flex items-center space-x-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#34909D]"></span>
                  <span>QUALITY NEXUS</span>
                </td>
                <td class="py-2.5 px-3 font-mono text-[#2F3136]">Our Platform</td>
                <td class="py-2.5 px-3 text-[#10B981]">✓ Living DAG Graph</td>
                <td class="py-2.5 px-3 text-[#10B981]">✓ Live Telemetry (k6)</td>
                <td class="py-2.5 px-3 text-[#10B981]">✓ 6-State FSM</td>
                <td class="py-2.5 px-3 text-[#10B981]">✓ SHA-256 Tamper-Proof</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer callout -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Defensive Moat: <strong>We do not compete with LLMs; we govern and mathematically audit their outcomes.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Deterministic Moat</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 4: Value Proposition
  // ----------------------------------------------------
  {
    number: "04",
    title: "Value Proposition: The Living Evidence Graph",
    subtitle: "Solution Architecture",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -left-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,200 L140,200 C120,140 140,90 90,60 C40,30 0,60 0,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">04. VALUE PROPOSITION</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">The Living Evidence Graph with Reactive Invalidation</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            DAG Architecture
          </span>
        </div>

        <!-- 4 Graph Nodes Flow -->
        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-4 gap-4 my-auto">
          <!-- Node 1 -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#34909D]/15 text-[#34909D]">NODE 1</span>
                <span class="text-xs">📋</span>
              </div>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Clinical Requirement</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Formal specification per <strong>ISO 29148</strong>. Elimination of lexical ambiguity.
              </p>
            </div>
            <div class="mt-3 text-[10px] font-mono font-bold text-[#34909D] bg-[#F4F5F7] p-1.5 rounded">
              ID: REQ-HLTH-042
            </div>
          </div>

          <!-- Node 2 -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F8B85E]/25 text-[#2F3136]">NODE 2</span>
                <span class="text-xs">🧪</span>
              </div>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Gherkin Scenario</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Mathematically parameterized acceptance tests. Strict SLA: Latency &le; 400ms.
              </p>
            </div>
            <div class="mt-3 text-[10px] font-mono font-bold text-[#2F3136] bg-[#F4F5F7] p-1.5 rounded">
              Given/When/Then SLA
            </div>
          </div>

          <!-- Node 3 -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#35363B] text-white">NODE 3</span>
                <span class="text-xs">💻</span>
              </div>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Source Code & AST</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Static scan per <strong>ISO 5055</strong>. Detection of N+1 queries and CWE rules.
              </p>
            </div>
            <div class="mt-3 text-[10px] font-mono font-bold text-[#5E626E] bg-[#F4F5F7] p-1.5 rounded">
              Commit: 9b2a7d1 (Git)
            </div>
          </div>

          <!-- Node 4 -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#10B981] shadow-sm flex flex-col justify-between bg-[#10B981]/5">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#10B981] text-white">NODE 4</span>
                <span class="text-xs">🔒</span>
              </div>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Telemetry & Dossier</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                k6 execution in Staging + <strong>SHA-256</strong> cryptographic hash of the audit file.
              </p>
            </div>
            <div class="mt-3 text-[10px] font-mono font-bold text-[#10B981] bg-white p-1.5 rounded border border-[#10B981]/30">
              SHA: e3b0c442...
            </div>
          </div>
        </div>

        <!-- Reactive Invalidation Mechanism -->
        <div class="relative z-10 bg-white p-4 rounded-xl border border-[#CBD0D8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div class="flex items-center space-x-3">
            <span class="w-3 h-3 rounded-full bg-[#BA0034] shrink-0"></span>
            <div>
              <strong class="text-[#2F3136]">Principle of Reactive Invalidation:</strong>
              <span class="text-[#5E626E]">Any modification to source code or database schema immediately invalidates downstream assertions, transitioning them to <code class="font-mono bg-[#E2E5E9] px-1 py-0.5 rounded text-[#BA0034] font-bold">INVALIDATED_BY_CHANGE</code>.</span>
            </div>
          </div>
          <span class="font-mono text-[11px] font-bold text-[#34909D] shrink-0">Reaction latency: &lt; 150 ms</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 5: International Standards
  // ----------------------------------------------------
  {
    number: "05",
    title: "International Standards Alignment & Ethical Boundary",
    subtitle: "Standards & Governance",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">05. INTERNATIONAL STANDARDS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Standards Alignment & Non-Negotiable Ethical Boundary</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#34909D]/15 text-[#34909D]">
            ISO Framework Compliance
          </span>
        </div>

        <!-- 3 Standards Pillars + Ethical Boundary -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 my-auto">
          <!-- ISO 25010 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-bold text-[#34909D] mb-1">STANDARD 1</div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-2">ISO/IEC 25010:2023</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Systems and Software Quality Requirements and Evaluation (SQuaRE):
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 mt-2 list-disc list-inside">
                <li>Performance efficiency</li>
                <li>Reliability & fault tolerance</li>
                <li>Data security & privacy</li>
                <li>Maintainability & modularity</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#34909D]">
              Product Quality Model
            </div>
          </div>

          <!-- ISO 29148 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-bold text-[#F8B85E] mb-1">STANDARD 2</div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-2">ISO/IEC/IEEE 29148:2018</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Requirements Engineering Lifecycle:
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 mt-2 list-disc list-inside">
                <li>Verifiable criteria</li>
                <li>Elimination of ambiguity</li>
                <li>Bidirectional traceability</li>
                <li>Formal clinical validation</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#2F3136]">
              Unambiguous Specifications
            </div>
          </div>

          <!-- ISO 29119 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-bold text-[#35363B] mb-1">STANDARD 3</div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-2">ISO/IEC/IEEE 29119</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Software Testing International Standard:
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 mt-2 list-disc list-inside">
                <li>Risk-based testing</li>
                <li>Requirements coverage</li>
                <li>Automated load testing</li>
                <li>Dynamic regression suites</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Dynamic Test Rigor
            </div>
          </div>

          <!-- Ethical Boundary -->
          <div class="bg-[#35363B] text-white rounded-xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-4 -bottom-4 opacity-10">
              <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/></svg>
            </div>
            <div>
              <div class="text-xs font-mono font-bold text-[#55C0ED] mb-1">ETHICAL BOUNDARY</div>
              <h3 class="font-bold text-sm text-white font-heading mb-2">Non-Negotiable Legal Line</h3>
              <p class="text-xs text-white/80 leading-relaxed">
                <strong>Software never self-certifies.</strong> Legal and clinical certification is strictly reserved for accredited human auditors.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-white/20 text-[10px] font-bold text-[#F8B85E]">
              Nexus Role: Construct the tamper-proof dossier.
            </div>
          </div>
        </div>

        <!-- Banner inferior -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Institutional Readiness: Full compliance for healthcare audits under <strong>MINSA, SUSALUD, and SBS</strong>.</span>
          <span class="font-mono text-[#34909D] font-bold">Auditable by Design</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 6: Reliability Architecture
  // ----------------------------------------------------
  {
    number: "06",
    title: "Reliability Architecture: Probabilistic vs. Deterministic",
    subtitle: "System Reliability",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">06. RELIABILITY ARCHITECTURE</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Rigorous Separation: Probabilistic Layer vs. Deterministic Core</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
            Zero Hallucination
          </span>
        </div>

        <!-- Split into Two Columns: Probabilistic vs Deterministic -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
          <!-- Left Column: Probabilistic -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between relative">
            <div class="flex items-center justify-between pb-3 border-b border-[#E2E5E9]">
              <div>
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BA0034]">Layer 1: Linguistic Copilot</span>
                <h3 class="text-lg font-bold font-heading text-[#2F3136]">Probabilistic Layer (Supervised LLM)</h3>
              </div>
              <span class="px-2.5 py-1 rounded bg-[#F8B85E]/20 text-[#2F3136] text-xs font-bold font-mono">AI Assisted</span>
            </div>
            
            <ul class="text-xs text-[#5E626E] space-y-2.5 my-4">
              <li class="flex items-start space-x-2">
                <span class="text-[#34909D] font-bold mt-0.5">▸</span>
                <span>Assists developers in converting natural language clinical specs into formal Gherkin steps.</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-[#34909D] font-bold mt-0.5">▸</span>
                <span>Flags vague lexical terms ("fast", "adequate") per ISO 29148 and recommends refinements.</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-[#34909D] font-bold mt-0.5">▸</span>
                <span>Proposes semantic candidate links with an explicit confidence score (0.0 to 1.0).</span>
              </li>
              <li class="flex items-start space-x-2 font-bold text-[#BA0034]">
                <span>✕</span>
                <span>RESTRICTION: Never issues PASSED/FAILED verdicts nor approves production releases.</span>
              </li>
            </ul>

            <div class="p-2.5 rounded bg-[#BA0034]/5 border border-[#BA0034]/20 text-[11px] text-[#BA0034] font-medium">
              Hallucination Vulnerability: Contained and isolated as advisory draft only.
            </div>
          </div>

          <!-- Right Column: Deterministic -->
          <div class="bg-white rounded-xl p-5 border-2 border-[#34909D] shadow-sm flex flex-col justify-between relative bg-gradient-to-br from-white to-[#34909D]/5">
            <div class="flex items-center justify-between pb-3 border-b border-[#34909D]/20">
              <div>
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#34909D]">Layer 2: Truth Arbiter</span>
                <h3 class="text-lg font-bold font-heading text-[#2F3136]">Deterministic Engine (Verification Core)</h3>
              </div>
              <span class="px-2.5 py-1 rounded bg-[#34909D] text-white text-xs font-bold font-mono">Go / Binary</span>
            </div>
            
            <ul class="text-xs text-[#2F3136] space-y-2.5 my-4 font-medium">
              <li class="flex items-start space-x-2">
                <span class="text-[#10B981] font-bold mt-0.5">✓</span>
                <span>Strict syntactic parser of raw test artifacts (JUnit XML, k6 JSON, SARIF reports).</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-[#10B981] font-bold mt-0.5">✓</span>
                <span>Pure mathematical Boolean assertion: <code class="font-mono bg-[#E2E5E9] px-1 rounded text-xs text-[#2F3136]">latency_p95 &le; 400ms</code>.</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-[#10B981] font-bold mt-0.5">✓</span>
                <span>If a threshold is violated, the test fails deterministically without stochastic drift (0% variance).</span>
              </li>
              <li class="flex items-start space-x-2 font-bold text-[#10B981]">
                <span>✓</span>
                <span>SHA-256 cryptographic signature seals every evaluated quality verdict permanently.</span>
              </li>
            </ul>

            <div class="p-2.5 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[11px] text-[#10B981] font-bold">
              Hallucination Rate: Exactly 0.0% (Reproducible formal mathematical logic).
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Audit Guarantee: <strong>No generative AI model can ever override the telemetry of the deterministic core.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Physically Isolated Boundary</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 7: Epistemology of Software Truth
  // ----------------------------------------------------
  {
    number: "07",
    title: "Epistemology of Software Truth: 6-State Formal FSM",
    subtitle: "Epistemic State Machine",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">07. EPISTEMOLOGY OF SOFTWARE TRUTH</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Finite State Machine (FSM): 6 Epistemic States</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            Formal State Machine
          </span>
        </div>

        <!-- 6 FSM States Grid -->
        <div class="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-auto">
          <!-- State 1 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#8E95A5]/20 text-[#2F3136]">STATE 1</span>
              <h4 class="font-bold font-mono text-xs text-[#2F3136] mt-1.5 mb-1">UNVERIFIED</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Requirement freshly authored or modified. No associated test telemetry recorded yet.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#8E95A5] mt-2 pt-1 border-t border-[#E2E5E9]">Initial Entry State</div>
          </div>

          <!-- State 2 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F8B85E]/30 text-[#2F3136]">STATE 2</span>
              <h4 class="font-bold font-mono text-xs text-[#2F3136] mt-1.5 mb-1">CANDIDATE_LINK</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Semantic link proposed by AI heuristics, awaiting explicit approval from lead engineer.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#F8B85E] mt-2 pt-1 border-t border-[#E2E5E9]">Human-in-the-Loop</div>
          </div>

          <!-- State 3 -->
          <div class="bg-white rounded-xl p-3.5 border-2 border-[#10B981] shadow-sm flex flex-col justify-between bg-[#10B981]/5">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#10B981] text-white">STATE 3</span>
              <h4 class="font-bold font-mono text-xs text-[#10B981] mt-1.5 mb-1">VERIFIED_EMPIRICALLY</h4>
              <p class="text-[11px] text-[#2F3136] leading-relaxed font-medium">
                Dynamic load tests passed in Staging and ISO 5055 metrics mathematically certified.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#10B981] mt-2 pt-1 border-t border-[#10B981]/30">Approved for Prod</div>
          </div>

          <!-- State 4 -->
          <div class="bg-white rounded-xl p-3.5 border-2 border-[#BA0034] shadow-sm flex flex-col justify-between bg-[#BA0034]/5">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#BA0034] text-white">STATE 4</span>
              <h4 class="font-bold font-mono text-xs text-[#BA0034] mt-1.5 mb-1">FAILED_EMPIRICALLY</h4>
              <p class="text-[11px] text-[#2F3136] leading-relaxed">
                Runtime telemetry breached SLA thresholds or critical AST CWE vulnerability flagged.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#BA0034] mt-2 pt-1 border-t border-[#BA0034]/30">Deployment Blocked</div>
          </div>

          <!-- State 5 -->
          <div class="bg-white rounded-xl p-3.5 border-2 border-[#55C0ED] shadow-sm flex flex-col justify-between bg-[#55C0ED]/5">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#55C0ED] text-[#2F3136]">STATE 5</span>
              <h4 class="font-bold font-mono text-xs text-[#2F3136] mt-1.5 mb-1">INVALIDATED_BY_CHANGE</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Source code modified by Git commit. Previous truth invalidated; re-evaluation mandated.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#34909D] mt-2 pt-1 border-t border-[#CBD0D8]">Reactive Invalidation</div>
          </div>

          <!-- State 6 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#35363B] text-white">STATE 6</span>
              <h4 class="font-bold font-mono text-xs text-[#2F3136] mt-1.5 mb-1">REVOKED</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Requirement deprecated by product management or clinical governance board.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#5E626E] mt-2 pt-1 border-t border-[#E2E5E9]">Lifecycle Retirement</div>
          </div>
        </div>

        <!-- Summary of Epistemic Flow -->
        <div class="relative z-10 p-3 rounded-lg bg-white border border-[#CBD0D8] shadow-xs flex items-center justify-between text-xs text-[#5E626E]">
          <span class="font-bold text-[#2F3136]">Formal Transition:</span>
          <span>UNVERIFIED ➔ (k6 Test Run) ➔ VERIFIED / FAILED ➔ (Git Push) ➔ INVALIDATED</span>
          <span class="font-mono text-[#34909D] font-bold">No Ambiguous Returns</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 8: Empirical Benchmarking
  // ----------------------------------------------------
  {
    number: "08",
    title: "Empirical Benchmarking: Real Staging Case Study REQ-089",
    subtitle: "Experimental Validation",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">08. EMPIRICAL BENCHMARKING</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Staging Case Study: Preemptive Detection in REQ-089</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#BA0034]/15 text-[#BA0034] border border-[#BA0034]/30">
            Regression Blocked
          </span>
        </div>

        <!-- Benchmark Comparison in Staging -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 my-auto">
          <!-- Left: Telemetry Chart and Bars -->
          <div class="md:col-span-7 bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-[#E2E5E9]">
              <span class="font-bold text-xs text-[#2F3136]">k6 Telemetry in Staging (300 Concurrent VUs)</span>
              <span class="font-mono text-xs text-[#BA0034] font-bold">SLA: &le; 500 ms</span>
            </div>

            <!-- Visual Comparison Bars -->
            <div class="space-y-4 my-2">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-[#10B981]">Stable Baseline (Commit 8a1f2)</span>
                  <span class="font-mono text-[#10B981]">210.5 ms (Complies)</span>
                </div>
                <div class="w-full bg-[#E2E5E9] h-3.5 rounded-full overflow-hidden">
                  <div class="bg-[#10B981] h-full rounded-full" style="width: 42%;"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-[#BA0034]">PR #142 with N+1 Regression (Commit 9b2a7)</span>
                  <span class="font-mono text-[#BA0034]">720.4 ms (SLA BREACH)</span>
                </div>
                <div class="w-full bg-[#E2E5E9] h-3.5 rounded-full overflow-hidden">
                  <div class="bg-[#BA0034] h-full rounded-full" style="width: 100%;"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-[#34909D]">Remediated Eager Loading Fix</span>
                  <span class="font-mono text-[#34909D]">192.1 ms (Optimized)</span>
                </div>
                <div class="w-full bg-[#E2E5E9] h-3.5 rounded-full overflow-hidden">
                  <div class="bg-[#34909D] h-full rounded-full" style="width: 38%;"></div>
                </div>
              </div>
            </div>

            <div class="text-[11px] text-[#5E626E] pt-2 border-t border-[#E2E5E9]">
              Root Cause via AST: Loop query iterating over patient allergy records instead of batch fetching in the database query.
            </div>
          </div>

          <!-- Right: Nexus Action -->
          <div class="md:col-span-5 bg-[#35363B] text-white rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase text-[#55C0ED]">Deterministic Response</span>
              <h4 class="text-sm font-bold font-heading text-white mt-1 mb-2">Automated CI/CD Pipeline Action</h4>
              
              <div class="space-y-2 text-xs font-mono text-white/90">
                <div class="bg-black/30 p-2 rounded border border-white/10">
                  <span class="text-[#F8B85E]">&gt; k6 test:</span> p95 = 720.4ms<br/>
                  <span class="text-[#BA0034]">&gt; SLA check:</span> FAILED (&gt; 500ms)<br/>
                  <span class="text-[#55C0ED]">&gt; FSM state:</span> FAILED_EMPIRICALLY<br/>
                  <span class="text-[#BA0034]">&gt; GitHub PR:</span> MERGE BLOCKED
                </div>
              </div>
            </div>

            <div class="mt-3 pt-2 border-t border-white/20 text-xs">
              <strong class="text-[#10B981]">Production Result:</strong>
              <span class="text-white/80">Zero downtime in hospital emergency rooms; zero patients affected.</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Empirical Evidence: <strong>Telemetry overrules theoretical assumptions every single time.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">100% Repeatable</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 9: Security and Robustness
  // ----------------------------------------------------
  {
    number: "09",
    title: "Security & Auditing: Golden Evaluation Suite",
    subtitle: "Adversarial Stress Testing",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-10 -left-10 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L120,0 C100,50 120,100 70,120 C20,140 0,100 0,100 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">09. SECURITY & AUDITING</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Golden Evaluation Suite: 10 Adversarial Stress Tests</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
            100% Neutralized
          </span>
        </div>

        <!-- Stress Tests Grid & Cryptography -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 my-auto">
          <!-- Left: 10 Adversarial Attacks -->
          <div class="md:col-span-8 bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <h4 class="font-bold text-xs font-heading text-[#2F3136] mb-2 uppercase tracking-wider text-[#34909D]">
              Adversarial Attack Matrix Designed to Break the Verification Engine
            </h4>
            
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>1. Malicious CI Mocking</span>
                <span class="font-mono font-bold text-[#10B981]">DETECTED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>2. LLM Prompt Injection</span>
                <span class="font-mono font-bold text-[#10B981]">BLOCKED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>3. Corrupted SARIF JSON</span>
                <span class="font-mono font-bold text-[#10B981]">REJECTED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>4. Manipulated Timeouts</span>
                <span class="font-mono font-bold text-[#10B981]">NEUTRALIZED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>5. SQLi in Clinical Filter</span>
                <span class="font-mono font-bold text-[#10B981]">CONTAINED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>6. CWE-311 (TLS) Bypass</span>
                <span class="font-mono font-bold text-[#10B981]">FLAGGED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>7. Git Hash Tampering</span>
                <span class="font-mono font-bold text-[#10B981]">SEALED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>8. Concurrency Race Cond.</span>
                <span class="font-mono font-bold text-[#10B981]">ISOLATED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>9. Injection in Gherkin Steps</span>
                <span class="font-mono font-bold text-[#10B981]">SANITIZED</span>
              </div>
              <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] flex items-center justify-between">
                <span>10. Heap Memory Leak</span>
                <span class="font-mono font-bold text-[#10B981]">RECORDED</span>
              </div>
            </div>

            <div class="mt-2 pt-2 border-t border-[#E2E5E9] text-[11px] text-[#10B981] font-bold flex items-center justify-between">
              <span>Overall Neutralization Rate: 10 / 10 (100.0%)</span>
              <span class="font-mono text-[#2F3136]">Zero Vulnerability Pass</span>
            </div>
          </div>

          <!-- Right: Cryptographic Dossier -->
          <div class="md:col-span-4 bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center space-x-2 text-[#34909D] mb-2">
                <span class="text-base">🔐</span>
                <h4 class="font-bold text-xs uppercase font-heading text-[#2F3136]">Cryptographic Dossier</h4>
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Every verification evaluation run produces a digitally hashed audit manifest:
              </p>
              
              <div class="p-2.5 rounded bg-[#F4F5F7] border border-[#CBD0D8] text-[10px] font-mono text-[#2F3136] space-y-1">
                <div><strong>Commit:</strong> 9b2a7d18e...</div>
                <div><strong>Telemetry:</strong> k6-run-741.json</div>
                <div><strong>AST Scan:</strong> sonar-sarif-v2.json</div>
                <div class="text-[#34909D] font-bold"><strong>SHA-256 Seal:</strong> e3b0c44298fc...</div>
              </div>
            </div>

            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[11px] font-bold text-[#35363B]">
              Tamper-proof by vendors or engineers.
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Security Rigor: <strong>Permanent immutability guaranteed for forensic digital audits.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Tamper-Evident</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 10: Commercial Feasibility
  // ----------------------------------------------------
  {
    number: "10",
    title: "Commercial Feasibility: B2B SaaS Model & 'The Wedge'",
    subtitle: "Go-To-Market Strategy",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">10. COMMERCIAL FEASIBILITY</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">B2B SaaS Business Model & 'The Wedge' Strategy</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F8B85E]/30 text-[#2F3136]">
            Go-To-Market
          </span>
        </div>

        <!-- 3 Pricing Tiers + The Wedge Strategy -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 my-auto">
          <!-- The Wedge -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#34909D] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#34909D]/15 text-[#34909D]">STRATEGY</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">The 'Wedge' CLI</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Free, open-source command line tool for individual developers. Validates requirements and local SLA thresholds instantly in git hooks.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Organic Bottom-Up Adoption
            </div>
          </div>

          <!-- Tier 1: Developer -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#5E626E]">TIER 1</span>
                <span class="text-lg font-black font-mono text-[#2F3136]">$49<span class="text-xs font-normal text-[#5E626E]">/dev/mo</span></span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-2">Developer Pro</h3>
              <ul class="text-[11px] text-[#5E626E] space-y-1.5 list-disc list-inside">
                <li>GitHub Actions integration</li>
                <li>Unlimited FSM evaluations</li>
                <li>JUnit & k6 telemetry parser</li>
                <li>Community support</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              For Startups & Devs
            </div>
          </div>

          <!-- Tier 2: Team / Clinic -->
          <div class="bg-white rounded-xl p-4 border-2 border-[#34909D] shadow-sm flex flex-col justify-between bg-gradient-to-br from-white to-[#34909D]/5">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#34909D]">TIER 2</span>
                <span class="text-lg font-black font-mono text-[#34909D]">$149<span class="text-xs font-normal text-[#5E626E]">/dev/mo</span></span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-2">Hospital / Team</h3>
              <ul class="text-[11px] text-[#2F3136] font-medium space-y-1.5 list-disc list-inside">
                <li>Living Evidence Graph (DAG)</li>
                <li>ISO 5055 Healthcare rulebook</li>
                <li>Automated SHA-256 Dossier</li>
                <li>24/7 Support SLA</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#34909D]/30 text-[10px] font-bold text-[#34909D]">
              Most Popular for Clinics
            </div>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="bg-[#35363B] text-white rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#55C0ED]">ENTERPRISE</span>
                <span class="text-sm font-black font-mono text-[#F8B85E]">CUSTOM</span>
              </div>
              <h3 class="font-bold text-sm text-white font-heading mb-2">Public Health Network</h3>
              <ul class="text-[11px] text-white/80 space-y-1.5 list-disc list-inside">
                <li>On-Premise / Gov Cloud</li>
                <li>MINSA/SUSALUD compliance</li>
                <li>Certified legal audit manifests</li>
                <li>Medical & QA staff training</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-white/20 text-[10px] font-bold text-[#55C0ED]">
              For Hospital Networks
            </div>
          </div>
        </div>

        <!-- Unit Economics Summary -->
        <div class="relative z-10 bg-white p-3 rounded-lg border border-[#CBD0D8] shadow-xs flex items-center justify-between text-xs text-[#5E626E]">
          <span class="font-bold text-[#2F3136]">Projected Unit Economics:</span>
          <span>LTV/CAC &gt; 4.2x · Monthly Churn &lt; 1.2% (Regulated Sectors) · Gross Margin &gt; 82%</span>
          <span class="font-mono text-[#10B981] font-bold">High Retention</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 11: Regional Traction
  // ----------------------------------------------------
  {
    number: "11",
    title: "Regional Traction: SBS Res. 504-2021 & Nearshore Growth",
    subtitle: "Regulation & LatAm Expansion",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -left-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,200 L140,200 C120,140 140,90 90,60 C40,30 0,60 0,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">11. REGIONAL TRACTION & REGULATION</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Regulatory Compliance in Peru and Nearshore Potential</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            SBS & MINSA Compliance
          </span>
        </div>

        <!-- 3 Pillars of Regulation and Growth -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
          <!-- Pillar 1: Peru Local -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#BA0034] uppercase tracking-wider">Peru (Domestic Market)</span>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mt-1 mb-2">SBS Res. 504-2021 & Law 29733</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                SBS Resolution No. 504-2021 imposes strict cybersecurity, change management, and auditable evidence controls across banking and regulated health systems.
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 list-disc list-inside">
                <li>End-to-end deployment traceability</li>
                <li>Protection of sensitive patient records</li>
                <li>Zero tolerance for transaction loss</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#BA0034]">
              Mandatory Legal Requirement
            </div>
          </div>

          <!-- Pillar 2: Pacific Alliance -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#34909D] uppercase tracking-wider">Latin America</span>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mt-1 mb-2">Regional LatAm Expansion</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Equivalent mandates in Colombia (SFC Circular 007) and Chile (CMF RAN 20-10) generate identical demand for tamper-proof software evidence.
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 list-disc list-inside">
                <li>ISO 25010 regional standardization</li>
                <li>Rapid adoption in telehealth & fintech</li>
                <li>Total addressable market: $420M USD</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Year 2 Target: Colombia & Chile
            </div>
          </div>

          <!-- Pillar 3: Nearshore US / SaMD -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#F8B85E] uppercase tracking-wider">Global Nearshore</span>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mt-1 mb-2">SaMD Service Export</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Software as a Medical Device (SaMD) regulated by the FDA and HIPAA compliance for Peruvian software factories exporting to North America.
              </p>
              <ul class="text-[11px] text-[#5E626E] space-y-1 list-disc list-inside">
                <li>FDA-compatible technical dossier</li>
                <li>Non-functional requirements verification</li>
                <li>High-value competitive advantage</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#2F3136]">
              High-Margin Export Service
            </div>
          </div>
        </div>

        <!-- Banner inferior -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Strategic Advantage: <strong>Regulation is not an obstacle; it is our primary sales accelerator.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Regulatory Moat</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 12: Roadmap and Launch Strategy
  // ----------------------------------------------------
  {
    number: "12",
    title: "Engineering Roadmap & 6-Month Delivery Strategy",
    subtitle: "Execution Roadmap",
    html: `
      <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">12. ENGINEERING ROADMAP</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">6-Month Engineering Roadmap & Quality Commitment</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981]">
            Agile Execution
          </span>
        </div>

        <!-- 3-Phase Gantt Timeline (Slidesgo Style with Colored Bars) -->
        <div class="relative z-10 space-y-4 my-auto">
          <!-- Phase 1 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="md:w-1/3">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#34909D]/15 text-[#34909D]">MONTHS 1 - 2</span>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mt-1">Phase 1: Deterministic Engine Core</h4>
              <p class="text-[11px] text-[#5E626E]">Go-based CLI engine, 6-state FSM, and GitHub Actions integration.</p>
            </div>
            <div class="md:w-2/3">
              <div class="w-full bg-[#E2E5E9] h-6 rounded-md overflow-hidden relative flex items-center">
                <div class="bg-[#34909D] h-full rounded-md flex items-center px-3 text-white text-[11px] font-bold" style="width: 100%;">
                  CLI Core + CI/CD Runner (100% Completed)
                </div>
              </div>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="md:w-1/3">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F8B85E]/30 text-[#2F3136]">MONTHS 3 - 4</span>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mt-1">Phase 2: Living Evidence Graph</h4>
              <p class="text-[11px] text-[#5E626E]">Interactive web DAG viewer, SonarQube & k6 telemetry parsers.</p>
            </div>
            <div class="md:w-2/3">
              <div class="w-full bg-[#E2E5E9] h-6 rounded-md overflow-hidden relative flex items-center">
                <div class="bg-[#F8B85E] h-full rounded-md flex items-center px-3 text-[#2F3136] text-[11px] font-bold" style="width: 75%;">
                  DAG Visualizer & Telemetry Parsers (In Progress)
                </div>
              </div>
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="md:w-1/3">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#35363B] text-white">MONTHS 5 - 6</span>
              <h4 class="font-bold text-sm text-[#2F3136] font-heading mt-1">Phase 3: Enterprise & Cryptography</h4>
              <p class="text-[11px] text-[#5E626E]">Legal SHA-256 dossier, healthcare audit suite, SOC2 / ISO 27001.</p>
            </div>
            <div class="md:w-2/3">
              <div class="w-full bg-[#E2E5E9] h-6 rounded-md overflow-hidden relative flex items-center">
                <div class="bg-[#35363B] h-full rounded-md flex items-center px-3 text-white text-[11px] font-bold" style="width: 45%;">
                  Regulatory Dossier & SOC2 (Planned)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Footer -->
        <div class="relative z-10 flex flex-wrap items-center justify-between pt-3 border-t border-[#DDE1E6] text-xs text-[#5E626E]">
          <div class="font-bold text-[#2F3136]">
            Quality Nexus © 2026 · Group 05 · Software Quality & Testing
          </div>
          <div class="font-mono text-[#10B981] font-bold">
            Excellence Commitment: Grade 20/20
          </div>
        </div>
      </div>
    `
  }
];

// Combine into single HTML string
function generateEquipoHtml() {
  const head = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quality Nexus - Team Presentation (Midterm 5)</title>
    
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
  <body class="h-screen w-screen flex flex-col justify-between selection:bg-[#34909D] selection:text-white">
  `;

  const topBar = `
    <!-- Top Bar Quick Navigation -->
    <header class="no-print bg-[#2F3136] text-white px-6 py-2 flex items-center justify-between text-xs z-50">
      <div class="flex items-center space-x-3">
        <a href="index.html" class="flex items-center space-x-1 font-bold hover:text-[#55C0ED] transition-colors">
          <span>← Back to Portal</span>
        </a>
        <span class="text-white/40">|</span>
        <span class="font-mono text-[#55C0ED] font-bold">PRESENTATION 1: TEAM DECK (QUALITY NEXUS)</span>
      </div>
      <div class="flex items-center space-x-4 text-white/80">
        <span class="hidden sm:inline">Navigate with arrows <strong>←</strong> <strong>→</strong> or space</span>
        <span class="hidden md:inline">Press <strong>F</strong> (Fullscreen) · <strong>O</strong> (Overview) · <strong>P</strong> (PDF)</span>
      </div>
    </header>
  `;

  const mainViewport = `
    <!-- 16:9 Viewport -->
    <main class="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden relative">
      <div class="slide-viewport w-full max-w-[1280px] max-h-[720px] rounded-2xl border border-[#CBD0D8] relative overflow-hidden flex flex-col">
        <!-- Progress Bar -->
        <div class="no-print w-full bg-[#E2E5E9] h-1.5 absolute top-0 left-0 z-30">
          <div id="progressBar" class="bg-[#34909D] h-full transition-all duration-300" style="width: ${(1/slides.length)*100}%"></div>
        </div>

        <!-- Slides Container -->
        <div class="relative w-full h-full flex-1">
          ${slides.map((s, idx) => `
            <div id="slide-${idx}" class="slide-item absolute inset-0 transition-opacity duration-300 ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}">
              ${s.html}
            </div>
          `).join('\n')}
        </div>
      </div>
    </main>
  `;

  const navigationFooter = `
    <!-- Bottom Navigation Bar -->
    <footer class="no-print bg-white/95 backdrop-blur-md border-t border-[#D1D5DB] px-6 py-2.5 flex items-center justify-between text-[#2F3136] z-50">
      <div class="flex items-center space-x-3">
        <a href="index.html" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors flex items-center space-x-1 text-xs font-bold" title="Back to Portal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="hidden md:inline">Portal</span>
        </a>
        <div class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
        <span id="currentSlideTitle" class="text-xs font-bold text-[#2F3136] hidden sm:inline font-heading truncate max-w-sm">
          01. ${slides[0].title}
        </span>
      </div>

      <div class="flex items-center space-x-2">
        <button onclick="prevSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Previous (←)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <div class="px-3 py-1 rounded-md bg-[#F4F5F7] border border-[#CBD0D8] text-xs font-bold font-mono text-[#2F3136]">
          <span id="slideCounterCurrent">01</span> / <span id="slideCounterTotal">${slides.length.toString().padStart(2, '0')}</span>
        </div>

        <button onclick="nextSlide()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#2F3136] transition-colors" title="Next (→)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div class="flex items-center space-x-2">
        <button onclick="toggleOverview()" class="px-2.5 py-1 rounded-md hover:bg-[#E5E7EB] text-xs font-bold text-[#4B505E] border border-[#D1D5DB] flex items-center space-x-1" title="Overview (O)">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span class="hidden md:inline">Overview</span>
        </button>

        <button onclick="toggleFullscreen()" class="p-1.5 rounded-lg hover:bg-[#E5E7EB] text-[#4B505E] transition-colors" title="Fullscreen (F)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
          </svg>
        </button>

        <button onclick="window.print()" class="px-2.5 py-1 rounded-md bg-[#35363B] hover:bg-[#202124] text-white text-xs font-bold flex items-center space-x-1" title="Export to PDF (P)">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
          </svg>
          <span>PDF</span>
        </button>
      </div>
    </footer>
  `;

  const overviewModal = `
    <!-- Overview Modal Grid -->
    <div id="overviewModal" class="no-print fixed inset-0 bg-[#2F3136]/90 backdrop-blur-sm z-50 hidden flex flex-col p-6 sm:p-10 justify-between">
      <div class="flex items-center justify-between text-white border-b border-white/20 pb-3">
        <h3 class="text-xl font-bold font-heading">Team Deck Slide Overview (${slides.length})</h3>
        <button onclick="toggleOverview()" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm">✕ Close (Esc)</button>
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
        Click on any card to jump directly to that slide.
      </div>
    </div>
  `;

  const scriptBlock = `
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
    </body>
    </html>
  `;

  return head + topBar + mainViewport + navigationFooter + overviewModal + scriptBlock;
}

const outputPath = path.join(__dirname, 'diapositivas_equipo.html');
fs.writeFileSync(outputPath, generateEquipoHtml(), 'utf8');
console.log('✅ diapositivas_equipo.html generated in English (' + slides.length + ' slides).');
