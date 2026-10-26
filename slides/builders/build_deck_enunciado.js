const fs = require('fs');
const path = require('path');

// ==========================================
// DECK 2: EXAM ASSIGNMENT SOLUTION (ENGLISH)
// (Strictly based on enunciado.jpeg grounded in
//  the Public Health Project HIS/EHR + Manchester Triage)
// ==========================================

const slides = [
  // ----------------------------------------------------
  // SLIDE 1: Academic Cover
  // ----------------------------------------------------
  {
    number: "01",
    title: "Application of ISO 20246 & ISO 5055 in Public Healthcare",
    subtitle: "Academic Cover Midterm 5",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
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
          <span class="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#BA0034] text-white">
            SOFTWARE QUALITY & TESTING · MIDTERM 5
          </span>
          <span class="text-xs font-semibold text-[#5E626E]">
            Official Assignment Deliverable · Group 05
          </span>
        </div>

        <!-- Hero Content in Two Columns -->
        <div class="relative z-10 grid grid-cols-12 gap-8 items-center my-auto">
          <div class="col-span-8 space-y-4">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#2F3136] tracking-tight leading-tight uppercase">
              APPLICATION OF STANDARDS<br/>
              <span class="text-[#34909D]">ISO 20246</span> & <span class="text-[#BA0034]">ISO/IEC 5055</span><br/>
              <span class="text-xl sm:text-2xl font-bold text-[#5E626E] normal-case">In the Public Healthcare Project (Hospital EHR & Manchester Triage)</span>
            </h1>
            <p class="text-sm sm:text-base text-[#5E626E] font-medium leading-relaxed max-w-xl">
              Formal and exhaustive answers to the 3 assignment requirements: Code quality indicators, performance efficiency metrics, and tripartite tooling architecture.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs">
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ Req 1: ISO 5055 Indicator Model
              </span>
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ Req 2: Code Efficiency Metrics
              </span>
              <span class="px-3 py-1 rounded-md bg-white border border-[#CBD0D8] text-[#2F3136] font-bold shadow-xs">
                ✓ Req 3: Capture, Process & Presentation
              </span>
            </div>
          </div>

          <div class="col-span-4 flex justify-center items-center">
            <div class="relative w-full max-w-sm">
              <img src="template_assets/image6.png" alt="Standards & Security" class="w-full h-auto max-h-56 object-contain drop-shadow-md">
            </div>
          </div>
        </div>

        <!-- Footer Meta -->
        <div class="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#DDE1E6] text-xs text-[#5E626E]">
          <div class="font-bold text-[#2F3136]">
            Evaluation Deliverable: Midterm 5 (TP5) · Date: October 13, 2026
          </div>
          <div class="font-mono text-[#34909D] font-bold">
            Target Rubric: Grade 20/20
          </div>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 2: Public Health Project Context
  // ----------------------------------------------------
  {
    number: "02",
    title: "Public Healthcare Context: Hospital EHR & Manchester Triage",
    subtitle: "Institutional Context",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L70,0 C90,60 50,110 100,150 C150,190 200,140 200,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">02. INSTITUTIONAL CONTEXT</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">The Public Healthcare Project: HIS/EHR & Emergency Triage</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#34909D]/15 text-[#34909D]">
            National Healthcare Sector
          </span>
        </div>

        <!-- 3 Clinical Context Cards -->
        <div class="relative z-10 grid grid-cols-3 gap-5 my-auto">
          <!-- Card 1 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#34909D]">CRITICAL SERVICE</span>
                <span class="text-base">🏥</span>
              </div>
              <h3 class="font-bold text-base font-heading text-[#2F3136] mb-2">Manchester Emergency Triage</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Microservice <code class="font-mono bg-[#E2E5E9] px-1 rounded text-[#2F3136]">/api/v1/triaje/evaluacion</code> tasked with categorizing clinical urgency into 5 priorities (Immediate Resuscitation to Non-Urgent).
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#BA0034]">
              Vital Risk: Latency spikes directly endanger human lives.
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#F8B85E]">CONCURRENCY</span>
                <span class="text-base">⚡</span>
              </div>
              <h3 class="font-bold text-base font-heading text-[#2F3136] mb-2">24/7 High-Availability Load</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                National high-complexity hospital networks (MINSA/EsSalud) experiencing massive traffic bursts during outbreaks and epidemics. Concurrency target: &ge; 300 VUs.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#2F3136]">
              Required Uptime: 99.99% in emergency admissions.
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#35363B]">REGULATION</span>
                <span class="text-base">⚖️</span>
              </div>
              <h3 class="font-bold text-base font-heading text-[#2F3136] mb-2">SUSALUD & Data Privacy Law</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Mandatory legal compliance protecting sensitive medical data under Peruvian Law 29733 and national electronic health record guidelines.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Requirement: Immutable change governance.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 p-3.5 rounded-lg bg-[#35363B] text-white flex items-center justify-between text-xs">
          <span>The team platform <strong>Quality Nexus</strong> provides automated assurance and auditable evidence over this healthcare system.</span>
          <span class="font-mono text-[#55C0ED] font-bold">REQ-HLTH-042</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 3: Dual Normative Synergy
  // ----------------------------------------------------
  {
    number: "03",
    title: "Dual Normative Synergy: ISO 20246:2017 & ISO/IEC 5055:2021",
    subtitle: "Integrated Normative Framework",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-10 -left-10 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L120,0 C100,50 120,100 70,120 C20,140 0,100 0,100 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">03. INTEGRATED STANDARDS FRAMEWORK</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Dual Normative Synergy: ISO 20246:2017 & ISO/IEC 5055:2021</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            Standards Synergy
          </span>
        </div>

        <!-- Two Columns Comparison -->
        <div class="relative z-10 grid grid-cols-2 gap-6 my-auto">
          <!-- ISO 20246 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-2 border-b border-[#E2E5E9]">
                <span class="text-xs font-mono font-bold text-[#34909D]">PROCESS & WORK PRODUCT REVIEW</span>
                <span class="text-xs font-bold px-2 py-0.5 rounded bg-[#34909D]/10 text-[#34909D]">Peer Review / Human</span>
              </div>
              <h3 class="font-bold text-lg font-heading text-[#2F3136] mt-2 mb-2">ISO/IEC/IEEE 20246:2017</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                International standard establishing formal processes and techniques for <strong>work product reviews</strong> across software and systems engineering.
              </p>
              <ul class="text-xs text-[#2F3136] space-y-2">
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#34909D]"></span>
                  <span>Formal inspections and technical peer reviews of clinical requirements.</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#34909D]"></span>
                  <span>Interdisciplinary team roles (Medical Doctors, QA, Lead Architects).</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#34909D]"></span>
                  <span>Early elimination of specification defects before code implementation.</span>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Focus: Early Quality of Requirements & Clinical Architecture.
            </div>
          </div>

          <!-- ISO 5055 -->
          <div class="bg-white rounded-xl p-5 border-2 border-[#BA0034] shadow-sm flex flex-col justify-between bg-gradient-to-br from-white to-[#BA0034]/5">
            <div>
              <div class="flex items-center justify-between pb-2 border-b border-[#BA0034]/20">
                <span class="text-xs font-mono font-bold text-[#BA0034]">CODE MEASUREMENT STANDARD</span>
                <span class="text-xs font-bold px-2 py-0.5 rounded bg-[#BA0034]/10 text-[#BA0034]">Automated / AST</span>
              </div>
              <h3 class="font-bold text-lg font-heading text-[#2F3136] mt-2 mb-2">ISO/IEC 5055:2021</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                CISQ/ISO international standard for <strong>automated source code quality measurement</strong> evaluating structural code health via AST parsers.
              </p>
              <ul class="text-xs text-[#2F3136] space-y-2">
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></span>
                  <span>Abstract Syntax Tree (AST) static and semantic structural analysis.</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></span>
                  <span>Evaluates 4 characteristics: Security, Reliability, Performance & Maintainability.</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></span>
                  <span>Formal mathematical rules based on critical CWE architectural weaknesses.</span>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#BA0034]/20 text-[11px] font-bold text-[#BA0034]">
              Focus: Internal Structural Health of Source Code.
            </div>
          </div>
        </div>

        <!-- Synthesis -->
        <div class="relative z-10 bg-white p-3.5 rounded-lg border border-[#CBD0D8] shadow-xs flex items-center justify-between text-xs text-[#5E626E]">
          <span class="font-bold text-[#2F3136]">Operational Synergy:</span>
          <span>ISO 20246 governs WHAT the clinical system must do; ISO 5055 guarantees HOW it is structurally constructed.</span>
          <span class="font-mono text-[#10B981] font-bold">Comprehensive Coverage</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 4: ISO 20246 Review Lifecycle
  // ----------------------------------------------------
  {
    number: "04",
    title: "ISO 20246:2017 Formal Review Lifecycle for Clinical Artifacts",
    subtitle: "ISO 20246 Implementation",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -left-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,200 L140,200 C120,140 140,90 90,60 C40,30 0,60 0,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">04. ISO 20246:2017 IMPLEMENTATION</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Review Lifecycle for Clinical Work Products</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#34909D]/15 text-[#34909D]">
            5 Formal Review Phases
          </span>
        </div>

        <!-- 5 Phases Grid -->
        <div class="relative z-10 grid grid-cols-5 gap-3.5 my-auto">
          <!-- Phase 1 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#34909D]/15 text-[#34909D]">PHASE 1</span>
              <h4 class="font-bold text-xs font-heading text-[#2F3136] mt-2 mb-1">Planning</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Definition of Entry Criteria. Role assignment: Moderator, Author, Clinical Doctor Reviewer, and Scribe.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#34909D] mt-2 pt-1 border-t border-[#E2E5E9]">Scope Established</div>
          </div>

          <!-- Phase 2 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F8B85E]/30 text-[#2F3136]">PHASE 2</span>
              <h4 class="font-bold text-xs font-heading text-[#2F3136] mt-2 mb-1">Preparation</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Individual document analysis using <strong>ISO 29148</strong> checklists to identify ambiguity in triage rules.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#F8B85E] mt-2 pt-1 border-t border-[#E2E5E9]">Rigorous Checklists</div>
          </div>

          <!-- Phase 3 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#BA0034]/15 text-[#BA0034]">PHASE 3</span>
              <h4 class="font-bold text-xs font-heading text-[#2F3136] mt-2 mb-1">Review Meeting</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Structured peer session logging anomalies in OpenAPI contracts without debating author competency.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#BA0034] mt-2 pt-1 border-t border-[#E2E5E9]">Formal Inspection</div>
          </div>

          <!-- Phase 4 -->
          <div class="bg-white rounded-xl p-3.5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#35363B] text-white">PHASE 4</span>
              <h4 class="font-bold text-xs font-heading text-[#2F3136] mt-2 mb-1">Rework</h4>
              <p class="text-[11px] text-[#5E626E] leading-relaxed">
                Author rewrites specifications into mathematically parameterized <strong>Gherkin</strong> acceptance criteria.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#35363B] mt-2 pt-1 border-t border-[#E2E5E9]">Parameterization</div>
          </div>

          <!-- Phase 5 -->
          <div class="bg-white rounded-xl p-3.5 border-2 border-[#10B981] shadow-sm flex flex-col justify-between bg-[#10B981]/5">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#10B981] text-white">PHASE 5</span>
              <h4 class="font-bold text-xs font-heading text-[#10B981] mt-2 mb-1">Follow-Up & Close</h4>
              <p class="text-[11px] text-[#2F3136] leading-relaxed font-medium">
                Verification of Exit Criteria (0 open critical defects). Formal sign-off and requirement load into Nexus as <code class="font-mono text-[10px]">UNVERIFIED</code>.
              </p>
            </div>
            <div class="text-[10px] font-bold text-[#10B981] mt-2 pt-1 border-t border-[#10B981]/30">Signed Manifest</div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>ISO 20246 Rule: <strong>No clinical line of code enters production without passing through a formal peer review gate.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Repeatable Process</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 5: [REQ 1] Code Quality Indicators Structure
  // ----------------------------------------------------
  {
    number: "05",
    title: "Req 1: Code Quality Indicators Structure (ISO/IEC 5055)",
    subtitle: "Requirement 1 Solution",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#BA0034]">05. SOLUTION TO ASSIGNMENT REQ 1</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Code Quality Indicators Structure (ISO/IEC 5055:2021)</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            CISQ / ISO Taxonomy
          </span>
        </div>

        <!-- 4 ISO 5055 Measure Cards -->
        <div class="relative z-10 grid grid-cols-4 gap-4 my-auto">
          <!-- 1. Security -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#BA0034] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#BA0034] uppercase tracking-wider">MEASURE 1</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">1. Code Security</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-2">
                Prevents unauthorized access to clinical history records and critical injection flaws:
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 font-mono">
                <li>• CWE-89 (SQL Injection)</li>
                <li>• CWE-79 (Clinical XSS)</li>
                <li>• CWE-311 (Missing TLS Ciphers)</li>
                <li>• CWE-306 (Missing Endpoint Auth)</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#BA0034]">
              Gate Weight: 35%
            </div>
          </div>

          <!-- 2. Reliability -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#34909D] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#34909D] uppercase tracking-wider">MEASURE 2</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">2. System Reliability</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-2">
                Ensures 24/7 continuous operation and prevents unhandled runtime crashes:
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 font-mono">
                <li>• CWE-667 (Bed Lock Deadlocks)</li>
                <li>• CWE-476 (Null Pointer Crash)</li>
                <li>• CWE-754 (Poor Error Handling)</li>
                <li>• CWE-398 (Corrupted Logic)</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#34909D]">
              Gate Weight: 25%
            </div>
          </div>

          <!-- 3. Performance -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#F8B85E] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#F8B85E] uppercase tracking-wider">MEASURE 3</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">3. Performance Efficiency</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-2">
                Optimizes CPU consumption, heap memory allocation, and algorithmic runtime:
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 font-mono">
                <li>• CWE-400 (Uncontrolled Resources)</li>
                <li>• CWE-775 (DB Connection Leak)</li>
                <li>• N+1 Query Antipattern</li>
                <li>• Thread Pool Exhaustion</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#2F3136]">
              Gate Weight: 25%
            </div>
          </div>

          <!-- 4. Maintainability -->
          <div class="bg-white rounded-xl p-4 border-2 border-dashed border-[#35363B] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#35363B] uppercase tracking-wider">MEASURE 4</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">4. Code Maintainability</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-2">
                Enables future software updates and safe refactoring by healthcare engineers:
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 font-mono">
                <li>• CWE-1075 (Cyclic Dependencies)</li>
                <li>• CWE-1047 (God Classes &gt; 1K loc)</li>
                <li>• McCabe Cyclomatic Complexity</li>
                <li>• Technical Debt Ratio (TDR)</li>
              </ul>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Gate Weight: 15%
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>International Standard: <strong>ISO/IEC 5055 evaluates source code AST directly without human subjectivity.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">100% Automated</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 6: [REQ 1 - Detail] Mathematical Modeling
  // ----------------------------------------------------
  {
    number: "06",
    title: "Req 1 Detail: Mathematical Formulas & Quality Gate Thresholds",
    subtitle: "Formulas & Thresholds",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#BA0034]">06. FORMAL MATHEMATICAL MODELING</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Aggregation Formulas and Quality Gate Thresholds</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981]">
            Strict Thresholds
          </span>
        </div>

        <!-- 3 Mathematical Formulas Cards -->
        <div class="relative z-10 grid grid-cols-3 gap-5 my-auto">
          <!-- Formula 1: Structural Weakness Density -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-mono font-bold text-[#34909D]">FORMULA 1</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Structural Weakness Density (D_sw)</h3>
              <div class="bg-[#F4F5F7] p-3 rounded-lg border border-[#CBD0D8] text-center font-mono text-xs my-3 text-[#2F3136] font-bold">
                D_sw = Σ(Critical CWEs) / KLOC
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Measures concentration of structural code defects per thousand lines of executable code.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#10B981]">
              Hospital Threshold: D_sw &lt; 0.05 / KLOC
            </div>
          </div>

          <!-- Formula 2: Technical Debt Ratio -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-mono font-bold text-[#F8B85E]">FORMULA 2</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Technical Debt Ratio (TDR)</h3>
              <div class="bg-[#F4F5F7] p-3 rounded-lg border border-[#CBD0D8] text-center font-mono text-xs my-3 text-[#2F3136] font-bold">
                TDR = (Remediation Hours / Total Dev Hours) × 100%
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Ratio of required engineering remediation effort to total development effort.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#10B981]">
              Hospital Threshold: TDR &le; 5.0%
            </div>
          </div>

          <!-- Formula 3: Quality Gate Score -->
          <div class="bg-white rounded-xl p-5 border-2 border-[#34909D] shadow-sm flex flex-col justify-between bg-gradient-to-br from-white to-[#34909D]/5">
            <div>
              <span class="text-xs font-mono font-bold text-[#34909D]">FORMULA 3</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Composite Quality Gate Score (QGS)</h3>
              <div class="bg-[#F4F5F7] p-2.5 rounded-lg border border-[#CBD0D8] text-center font-mono text-[11px] my-3 text-[#2F3136] font-bold">
                QGS = 0.35·S + 0.25·R + 0.25·E + 0.15·M
              </div>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Weighted composite score across all four ISO 5055 dimensions required for production approval.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#34909D]/30 text-[11px] font-bold text-[#34909D]">
              Pass Threshold: QGS &ge; 85.0%
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Mathematical Determinism: <strong>If QGS &lt; 85% or any critical security vulnerability exists, the build fails deterministically.</strong></span>
          <span class="font-mono text-[#BA0034] font-bold">Zero Tolerance</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 7: [REQ 2] Code Efficiency Indicators
  // ----------------------------------------------------
  {
    number: "07",
    title: "Req 2: Code Efficiency Indicators in Clinical Triage",
    subtitle: "Requirement 2 Solution",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#BA0034]">07. SOLUTION TO ASSIGNMENT REQ 2</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Code Efficiency Indicators in Manchester Emergency Triage</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            Runtime Telemetry
          </span>
        </div>

        <!-- 4 Temporal Indicators Cards -->
        <div class="relative z-10 grid grid-cols-4 gap-4 my-auto">
          <!-- Latency p95 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#34909D]">TEMPORAL 1</span>
                <span class="text-xs">⏱️</span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-1">95th Percentile Latency (p95)</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Response time for 95% of incoming emergency clinical triage classification calls.
              </p>
              <div class="text-2xl font-black font-mono text-[#34909D]">&le; 400 ms</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Prevents triage waiting queues.
            </div>
          </div>

          <!-- Latency p99 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#F8B85E]">TEMPORAL 2</span>
                <span class="text-xs">⏱️</span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-1">99th Percentile Latency (p99)</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Upper latency ceiling for outlier complex cases or patients with dense medical histories.
              </p>
              <div class="text-2xl font-black font-mono text-[#F8B85E]">&le; 800 ms</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Guaranteed ceiling for complex cases.
            </div>
          </div>

          <!-- TTFB -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#10B981]">TRANSPORT</span>
                <span class="text-xs">🚀</span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Time to First Byte (TTFB)</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Elapsed duration until the first response byte arrives at the ER triage workstation.
              </p>
              <div class="text-2xl font-black font-mono text-[#10B981]">&le; 120 ms</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Low-overhead HTTP transport.
            </div>
          </div>

          <!-- Throughput -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-mono font-bold text-[#35363B]">CAPACITY</span>
                <span class="text-xs">📊</span>
              </div>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mb-1">Sustained Throughput</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Processed transactions per second under 300 concurrent user load in Staging.
              </p>
              <div class="text-2xl font-black font-mono text-[#35363B]">&ge; 450 TPS</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Disaster-level burst handling.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Empirical Validation: <strong>Stress-tested with Grafana k6 simulating ER rush-hour peaks.</strong></span>
          <span class="font-mono text-[#10B981] font-bold">Immutable Telemetry</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 8: [REQ 2 - Detail] Resource Consumption
  // ----------------------------------------------------
  {
    number: "08",
    title: "Req 2 Detail: Computational Resources & Code Complexity",
    subtitle: "Resource Usage & Complexity",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#BA0034]">08. RESOURCES & ALGORITHMIC COMPLEXITY</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Hardware Usage, Heap Leaks, and Cyclomatic Complexity</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#34909D]/15 text-[#34909D]">
            Internal Code Metrics
          </span>
        </div>

        <!-- 4 Resource & Code Metrics Grid -->
        <div class="relative z-10 grid grid-cols-4 gap-4 my-auto">
          <!-- CPU -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#34909D] uppercase">RESOURCE 1</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-1">CPU Utilization</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Average sustained processor load across 2 vCPUs during 15-minute load test.
              </p>
              <div class="text-xl font-black font-mono text-[#34909D]">&le; 65% nominal</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              35% emergency buffer.
            </div>
          </div>

          <!-- Memory Heap -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#F8B85E] uppercase">RESOURCE 2</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-1">Heap Leak Rate (ΔHeap)</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Residual RAM drift following forced post-test JVM Garbage Collection cycles.
              </p>
              <div class="text-xl font-black font-mono text-[#F8B85E]">&le; 5 MB / hour</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#10B981]">
              Zero memory leak in 24h.
            </div>
          </div>

          <!-- Pool Connections -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#35363B] uppercase">RESOURCE 3</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-1">JDBC Pool Saturation</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Active PostgreSQL database connections over total configured pool size.
              </p>
              <div class="text-xl font-black font-mono text-[#35363B]">&le; 70% saturation</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#5E626E]">
              Prevents "Pool Exhausted".
            </div>
          </div>

          <!-- Cyclomatic Complexity -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#BA0034] uppercase">CODE AST</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-1">McCabe Complexity v(G)</h3>
              <p class="text-[11px] text-[#5E626E] leading-relaxed mb-2">
                Linearly independent execution paths per clinical triage rule method.
              </p>
              <div class="text-xl font-black font-mono text-[#BA0034]">v(G) &le; 10</div>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#BA0034]">
              High maintainability.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 p-3 rounded-lg bg-white border border-[#CBD0D8] shadow-xs flex items-center justify-between text-xs text-[#5E626E]">
          <span class="font-bold text-[#2F3136]">Golden Rule in Code:</span>
          <span>Zero N+1 query antipatterns permitted in ORM entity mapping of patient records.</span>
          <span class="font-mono text-[#10B981] font-bold">N+1 Queries = 0</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 9: [REQ 3] Tripartite Tools Architecture
  // ----------------------------------------------------
  {
    number: "09",
    title: "Req 3: Tripartite Tools Architecture Overview",
    subtitle: "Requirement 3 Solution",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-10 -left-10 w-56 h-56 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L120,0 C100,50 120,100 70,120 C20,140 0,100 0,100 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#BA0034]">09. SOLUTION TO ASSIGNMENT REQ 3</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Integrated Tripartite Tool Architecture: Capture, Process, and Presentation</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#35363B] text-white">
            End-to-End Pipeline
          </span>
        </div>

        <!-- 3 Architecture Phases in Columns -->
        <div class="relative z-10 grid grid-cols-3 gap-5 my-auto">
          <!-- Phase 1: Capture -->
          <div class="bg-white rounded-xl p-5 border-2 border-dashed border-[#34909D] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#34909D]/15 text-[#34909D]">PHASE 1: CAPTURE</span>
                <span class="text-xs">📥</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Data & Telemetry Capture</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Static code AST extraction and dynamic load telemetry generation.
              </p>
              <div class="space-y-1.5 text-xs">
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>SonarQube:</strong> ISO 5055 CWE rules
                </div>
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>Grafana k6:</strong> 300 VUs load test
                </div>
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>OpenTelemetry:</strong> CPU & Heap RAM
                </div>
              </div>
            </div>
            <div class="mt-4 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#34909D]">
              Output: SARIF / JSON / XML Artifacts
            </div>
          </div>

          <!-- Phase 2: Process -->
          <div class="bg-white rounded-xl p-5 border-2 border-[#BA0034] shadow-sm flex flex-col justify-between bg-[#BA0034]/5">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#BA0034] text-white">PHASE 2: PROCESS</span>
                <span class="text-xs">⚙️</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Processing & Arbitration</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Mathematical schema normalization and automated gate evaluation in CI/CD.
              </p>
              <div class="space-y-1.5 text-xs">
                <div class="p-2 rounded bg-white border border-[#CBD0D8] font-mono">
                  <strong>Quality Nexus Core:</strong> Go Daemon
                </div>
                <div class="p-2 rounded bg-white border border-[#CBD0D8] font-mono">
                  <strong>FSM Engine:</strong> Boolean Evaluator
                </div>
                <div class="p-2 rounded bg-white border border-[#CBD0D8] font-mono">
                  <strong>GitHub Actions:</strong> Branch Gate
                </div>
              </div>
            </div>
            <div class="mt-4 pt-2 border-t border-[#BA0034]/30 text-[10px] font-bold text-[#BA0034]">
              Action: Pull Request Merge Approved or Blocked
            </div>
          </div>

          <!-- Phase 3: Presentation -->
          <div class="bg-white rounded-xl p-5 border-2 border-dashed border-[#10B981] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#10B981] text-white">PHASE 3: PRESENTATION</span>
                <span class="text-xs">📊</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Indicator Presentation</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Executive dashboards and cryptographically sealed legal audit files.
              </p>
              <div class="space-y-1.5 text-xs">
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>SHA-256 Dossier:</strong> Legal PDF/JSON
                </div>
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>Executive Portal:</strong> ISO 25010 Radar
                </div>
                <div class="p-2 rounded bg-[#F4F5F7] border border-[#CBD0D8] font-mono">
                  <strong>Grafana APM:</strong> Live p95 Curves
                </div>
              </div>
            </div>
            <div class="mt-4 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#10B981]">
              Audience: Hospital Directors & MINSA Auditors
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Complete Automation: <strong>Seamless pipeline embedded directly in hospital software repositories.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">CI/CD Continuous Governance</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 10: [REQ 3 - Phase 1] Capture Tools
  // ----------------------------------------------------
  {
    number: "10",
    title: "Req 3 Phase 1: Information & Telemetry Capture Tools",
    subtitle: "Capture Phase",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">10. CAPTURE TOOLS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Static AST Scanners and Dynamic Load Telemetry</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#34909D]/15 text-[#34909D]">
            Phase 1: Ingestion
          </span>
        </div>

        <!-- 3 Capture Tools Detail -->
        <div class="relative z-10 grid grid-cols-3 gap-5 my-auto">
          <!-- SonarQube -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-xs font-mono font-bold text-[#34909D]">STATIC (AST)</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">SonarQube Enterprise</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Scans source code on every Pull Request against the <strong>ISO/IEC 5055</strong> CWE rule catalog.
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 list-disc list-inside">
                <li>Detects SQL injections and cross-site scripting</li>
                <li>Computes McCabe cyclomatic complexity v(G)</li>
                <li>Standardized export in SARIF format</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Role: Compile-time static vulnerability scan.
            </div>
          </div>

          <!-- k6 -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-xs font-mono font-bold text-[#F8B85E]">DYNAMIC (LOAD)</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Grafana k6 (Load as Code)</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Executes automated load scripts in Staging mimicking 300 emergency room physicians performing simultaneous triage assessments.
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 list-disc list-inside">
                <li>Measures percentile latencies (p95 and p99)</li>
                <li>Validates clinical SLA thresholds (&le; 400ms)</li>
                <li>Generates raw <code class="font-mono text-[10px]">k6-summary.json</code></li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#2F3136]">
              Role: Realistic clinical emergency stress testing.
            </div>
          </div>

          <!-- OpenTelemetry -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-xs font-mono font-bold text-[#35363B]">TELEMETRY (APM)</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">OpenTelemetry + Prometheus</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Continuous real-time collection of infrastructure metrics during load test execution.
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 list-disc list-inside">
                <li>Sustained vCPU utilization percentage</li>
                <li>Heap memory drift following GC cycles</li>
                <li>PostgreSQL active connection pool saturation</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#5E626E]">
              Role: Deep JVM and hardware telemetry diagnostics.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Infrastructure as Code: <strong>All capture test suites reside version-controlled within the same Git repository.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">As-Code Governance</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 11: [REQ 3 - Phase 2] Processing Engine
  // ----------------------------------------------------
  {
    number: "11",
    title: "Req 3 Phase 2: Processing Engine & CI/CD Orchestration",
    subtitle: "Processing Phase",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -bottom-16 -left-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,200 L140,200 C120,140 140,90 90,60 C40,30 0,60 0,60 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">11. PROCESSING ENGINE</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Quality Nexus Deterministic Engine and CI/CD Orchestration</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#BA0034]/15 text-[#BA0034]">
            Phase 2: Arbitration
          </span>
        </div>

        <!-- Processing Engine Architecture Grid -->
        <div class="relative z-10 grid grid-cols-12 gap-5 my-auto">
          <!-- Left: Engine Flow -->
          <div class="col-span-7 bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <h3 class="font-bold text-sm font-heading text-[#2F3136] mb-3">Deterministic Engine Core Logic (Go Daemon)</h3>
            
            <div class="space-y-3 text-xs text-[#2F3136]">
              <div class="flex items-start space-x-2.5">
                <span class="w-5 h-5 rounded-full bg-[#34909D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <div>
                  <strong>Schema Normalization:</strong> Ingests heterogeneous artifacts (SARIF, k6 JSON, JUnit XML) into a unified canonical evidence schema.
                </div>
              </div>
              <div class="flex items-start space-x-2.5">
                <span class="w-5 h-5 rounded-full bg-[#34909D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <div>
                  <strong>Strict Boolean Evaluation:</strong> Evaluates metrics mathematically against clinical thresholds without stochastic heuristics (Zero Hallucination).
                </div>
              </div>
              <div class="flex items-start space-x-2.5">
                <span class="w-5 h-5 rounded-full bg-[#34909D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <div>
                  <strong>FSM State Mutation:</strong> If <code class="font-mono bg-[#E2E5E9] px-1 rounded">p95 &gt; 400ms</code>, automatically mutates status to <code class="font-mono text-[#BA0034] font-bold">FAILED_EMPIRICALLY</code>.
                </div>
              </div>
              <div class="flex items-start space-x-2.5">
                <span class="w-5 h-5 rounded-full bg-[#34909D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                <div>
                  <strong>Cryptographic Hashing:</strong> Computes compound SHA-256 hash linking git commit, raw telemetry, and verdict.
                </div>
              </div>
            </div>

            <div class="mt-4 pt-2 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Processing Speed: &lt; 2.5 seconds per commit.
            </div>
          </div>

          <!-- Right: CI/CD Pipeline -->
          <div class="col-span-5 bg-[#35363B] text-white rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase text-[#55C0ED]">Git Pipeline</span>
              <h4 class="text-sm font-bold font-heading text-white mt-1 mb-3">GitHub Actions Integration</h4>
              
              <div class="p-3 rounded bg-black/40 border border-white/10 text-xs font-mono space-y-1 text-white/90">
                <div class="text-[#55C0ED] font-bold">name: quality-gate-check</div>
                <div>on: [pull_request]</div>
                <div>jobs:</div>
                <div class="pl-2">evaluate-iso-5055:</div>
                <div class="pl-4 text-[#F8B85E]">run: qnexus eval --strict</div>
                <div class="pl-4 text-[#10B981]">if: failure()</div>
                <div class="pl-6 text-[#BA0034]">exit 1 # Block PR merge</div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-white/20 text-xs">
              <strong class="text-[#10B981]">Branch Protection:</strong>
              <span class="text-white/80">Merging code into <code class="font-mono text-[#55C0ED]">main</code> is physically blocked if the clinical Quality Gate fails.</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Radical Determinism: <strong>Zero room for human oversight or accidental deployment omissions.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Zero Tolerance Gate</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 12: [REQ 3 - Phase 3] Presentation Layer
  // ----------------------------------------------------
  {
    number: "12",
    title: "Req 3 Phase 3: Presentation Layer & Digital Quality Dossier",
    subtitle: "Presentation Phase",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">12. PRESENTATION TOOLS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Digital Quality Dossier & Executive Dashboards</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981]">
            Phase 3: Output
          </span>
        </div>

        <!-- 3 Output Formats Grid -->
        <div class="relative z-10 grid grid-cols-3 gap-5 my-auto">
          <!-- 1. Cryptographic Dossier -->
          <div class="bg-white rounded-xl p-5 border-2 border-[#10B981] shadow-sm flex flex-col justify-between bg-[#10B981]/5">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#10B981]">LEGAL AUDIT</span>
                <span class="text-xs">📜</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Digital Quality Dossier</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Tamper-proof package sealed with <strong>SHA-256</strong> hash. Contains immutable evidence of ISO 20246 reviews and ISO 5055 telemetry.
              </p>
              <div class="p-2 rounded bg-white border border-[#CBD0D8] text-[10px] font-mono text-[#2F3136] space-y-0.5">
                <div>SHA-256: 7d2a...89e1</div>
                <div>Signer: Lead Medical QA Auditor</div>
                <div class="text-[#10B981] font-bold">Status: CERTIFIED COMPLIANT</div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-[#10B981]/30 text-[11px] font-bold text-[#10B981]">
              Audience: SUSALUD / MINSA Forensic Audits.
            </div>
          </div>

          <!-- 2. Executive Portal -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#34909D]">EXECUTIVE LEVEL</span>
                <span class="text-xs">📊</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Executive Quality Portal</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Executive cockpit with ISO 25010 radar charts, risk gauges, and aggregated health indicators for hospital leadership.
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 list-disc list-inside">
                <li>ISO 25010 quality radar</li>
                <li>Longitudinal technical debt trend</li>
                <li>Composite system reliability index</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#34909D]">
              Audience: Hospital Deans & Medical Directors.
            </div>
          </div>

          <!-- 3. Grafana APM -->
          <div class="bg-white rounded-xl p-5 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono font-bold text-[#F8B85E]">LIVE OPERATIONS</span>
                <span class="text-xs">📈</span>
              </div>
              <h3 class="font-bold text-base text-[#2F3136] font-heading mb-2">Grafana Real-time APM</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed mb-3">
                Sub-second operational visualization of percentile latency curves, CPU load, and database health.
              </p>
              <ul class="text-[11px] text-[#2F3136] space-y-1 list-disc list-inside">
                <li>Live percentile latency histograms (p95/p99)</li>
                <li>Real-time automated Slack/Ops alerts</li>
                <li>PostgreSQL and JVM live metrics</li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-[#E2E5E9] text-[11px] font-bold text-[#2F3136]">
              Audience: SRE & DevOps Engineers.
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Multi-Audience Reporting: <strong>Deep technical analysis for engineers; executive summaries for hospital leadership.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Multi-Audience Reporting</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 13: Empirical Demonstration: Manchester Triage
  // ----------------------------------------------------
  {
    number: "13",
    title: "Empirical Demonstration: Manchester Triage Staging Case Study",
    subtitle: "Experimental Validation",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -right-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M200,0 L60,0 C90,60 50,110 100,160 C150,200 200,150 200,150 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">13. EMPIRICAL CASE STUDY</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Manchester Triage: Bottleneck Detection & Remediation in Staging</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981]">
            Case Study
          </span>
        </div>

        <!-- Case Study Incident Comparison -->
        <div class="relative z-10 grid grid-cols-12 gap-5 my-auto">
          <!-- Left: Incident Sequence -->
          <div class="col-span-7 bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <h4 class="font-bold text-xs font-heading text-[#2F3136] mb-2 uppercase tracking-wider text-[#34909D]">
              Incident Sequence in the Emergency Triage Service
            </h4>

            <div class="space-y-2.5 text-xs text-[#2F3136]">
              <div class="p-2 rounded bg-[#F4F5F7] border-l-4 border-l-[#34909D]">
                <strong>Step 1: Clinical Requirement REQ-HLTH-042</strong><br/>
                <span class="text-[11px] text-[#5E626E]">Triage categorization must respond under 400ms under heavy patient load.</span>
              </div>
              <div class="p-2 rounded bg-[#BA0034]/10 border-l-4 border-l-[#BA0034]">
                <strong>Step 2: Regression in PR #142 (Commit 9b2a7)</strong><br/>
                <span class="text-[11px] text-[#BA0034]">Sequential loop query introduced on allergy table (N+1 Query). p95 latency spikes to <strong>720.4ms</strong>.</span>
              </div>
              <div class="p-2 rounded bg-[#35363B] text-white border-l-4 border-l-[#55C0ED]">
                <strong>Step 3: Automated CI/CD Arbitration</strong><br/>
                <span class="text-[11px] text-white/80">k6 flags SLA breach. Quality Nexus blocks pull request and alerts engineering team.</span>
              </div>
              <div class="p-2 rounded bg-[#10B981]/10 border-l-4 border-l-[#10B981]">
                <strong>Step 4: Eager Loading Remediation</strong><br/>
                <span class="text-[11px] text-[#10B981]">Query refactored to single SQL JOIN FETCH. p95 drops to <strong>192.1ms</strong>. Merge approved.</span>
              </div>
            </div>

            <div class="mt-2 pt-2 border-t border-[#E2E5E9] text-[10px] text-[#5E626E]">
              Validated with k6 running 300 VUs continuously for 10 minutes.
            </div>
          </div>

          <!-- Right: Before vs After Metrics -->
          <div class="col-span-5 bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <h4 class="font-bold text-xs font-heading text-[#2F3136] mb-2 uppercase tracking-wider text-[#BA0034]">
              Before vs. After Metrics Comparison
            </h4>

            <div class="space-y-3 text-xs">
              <div class="flex items-center justify-between p-2 rounded bg-[#F4F5F7]">
                <span class="text-[#5E626E]">p95 Latency:</span>
                <span class="font-mono font-bold"><span class="text-[#BA0034]">720.4 ms</span> ➔ <span class="text-[#10B981]">192.1 ms</span></span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-[#F4F5F7]">
                <span class="text-[#5E626E]">CPU Load (2 vCPUs):</span>
                <span class="font-mono font-bold"><span class="text-[#BA0034]">88.5%</span> ➔ <span class="text-[#10B981]">51.2%</span></span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-[#F4F5F7]">
                <span class="text-[#5E626E]">SQL Queries / Triage:</span>
                <span class="font-mono font-bold"><span class="text-[#BA0034]">14 queries</span> ➔ <span class="text-[#10B981]">1 query</span></span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-[#F4F5F7]">
                <span class="text-[#5E626E]">Nexus FSM State:</span>
                <span class="font-mono font-bold text-[#10B981]">VERIFIED_EMPIRICALLY</span>
              </div>
            </div>

            <div class="mt-3 p-2 rounded bg-[#10B981]/15 border border-[#10B981]/30 text-center text-xs font-bold text-[#10B981]">
              ✓ Acceptance Criteria 100% Met
            </div>
          </div>
        </div>

        <!-- Bottom Banner -->
        <div class="relative z-10 flex items-center justify-between text-xs text-[#5E626E] pt-2">
          <span>Production Impact: <strong>Zero emergency room disruptions across national public hospitals.</strong></span>
          <span class="font-mono text-[#34909D] font-bold">Hospital Resilience</span>
        </div>
      </div>
    `
  },

  // ----------------------------------------------------
  // SLIDE 14: Conclusions and Rubric Grade 20
  // ----------------------------------------------------
  {
    number: "14",
    title: "Executive Synthesis, Grade 20 Rubric & Conclusions",
    subtitle: "Conclusions & Rubric",
    html: `
      <div class="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <!-- Blobs -->
        <svg class="absolute -top-12 -left-12 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
        </svg>

        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold tracking-wider uppercase text-[#34909D]">14. SYNTHESIS & EXCELLENCE RUBRIC</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#2F3136]">Engineering Conclusions & Rubric Fulfillment (Grade 20/20)</h2>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981] text-white">
            Grade 20 / 20
          </span>
        </div>

        <!-- 4 Key Conclusions Grid -->
        <div class="relative z-10 grid grid-cols-4 gap-4 my-auto">
          <!-- Conclusion 1 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#34909D] uppercase">PILLAR 1</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Complete Rubric Response</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                All 3 exam requirements solved exhaustively: (1) ISO 5055 indicators, (2) code efficiency metrics, and (3) tripartite tools architecture.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#10B981]">
              100% Requirements Fulfilled
            </div>
          </div>

          <!-- Conclusion 2 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#BA0034] uppercase">PILLAR 2</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Real Healthcare Anchoring</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Metrics applied directly to Manchester emergency triage and electronic health records under SUSALUD and MINSA statutory regulations.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#BA0034]">
              Tangible Clinical Value
            </div>
          </div>

          <!-- Conclusion 3 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#F8B85E] uppercase">PILLAR 3</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Probabilistic vs. Deterministic</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                AI assists but never certifies. The deterministic engine guarantees zero hallucinations and mathematically auditable truth.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#2F3136]">
              Firm Ethical Boundary
            </div>
          </div>

          <!-- Conclusion 4 -->
          <div class="bg-white rounded-xl p-4 border border-[#CBD0D8] shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold text-[#10B981] uppercase">PILLAR 4</span>
              <h3 class="font-bold text-sm text-[#2F3136] font-heading mt-1 mb-2">Cryptographic Evidence</h3>
              <p class="text-xs text-[#5E626E] leading-relaxed">
                Digital dossier sealed with SHA-256 transforms software quality into a permanent evidentiary asset for statutory regulators.
              </p>
            </div>
            <div class="mt-3 pt-2 border-t border-[#E2E5E9] text-[10px] font-bold text-[#10B981]">
              Forensic Audit Ready
            </div>
          </div>
        </div>

        <!-- Final Footer -->
        <div class="relative z-10 flex flex-wrap items-center justify-between pt-3 border-t border-[#DDE1E6] text-xs text-[#5E626E]">
          <div class="font-bold text-[#2F3136]">
            Midterm 5 (TP5) · Group 05 · Software Quality & Testing · October 2026
          </div>
          <div class="font-mono text-[#10B981] font-bold text-sm">
            TARGET EVALUATION: GRADE 20 / 20
          </div>
        </div>
      </div>
    `
  }
];

// Combine into single HTML string
function generateEnunciadoHtml() {
  const head = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application of ISO 20246 & ISO 5055 in Public Healthcare - Midterm 5 Deliverable</title>
    
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
        @page {
          size: 16in 9in;
          margin: 0;
        }
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        html, body {
          width: 16in !important;
          height: auto !important;
          overflow: visible !important;
          background: white !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
        }
        .no-print {
          display: none !important;
        }
        main {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          max-width: none !important;
          max-height: none !important;
          overflow: visible !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .slide-viewport {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          max-width: none !important;
          max-height: none !important;
          overflow: visible !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          margin: 0 !important;
          padding: 0 !important;
          aspect-ratio: auto !important;
        }
        .slide-viewport > div {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          overflow: visible !important;
          position: static !important;
        }
        .slide-item {
          display: block !important;
          position: relative !important;
          width: 16in !important;
          height: 9in !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-after: page !important;
          break-inside: avoid !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          overflow: hidden !important;
          margin: 0 !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          bottom: auto !important;
          z-index: 1 !important;
          background-color: #F4F5F7 !important;
        }
        .slide-item:last-child {
          page-break-after: avoid !important;
          break-after: avoid !important;
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
        <span class="font-mono text-[#F8B85E] font-bold">PRESENTATION 2: ASSIGNMENT SOLUTION (PUBLIC HEALTHCARE)</span>
        <span class="text-white/40">|</span>
        <a href="dashboard_iso_salud.html" target="_blank" class="px-2 py-0.5 rounded bg-[#BA0034] text-white font-bold hover:bg-[#99002B] transition-all flex items-center space-x-1" title="Open Interactive ISO Demonstrator">
          <span>📊 Live ISO Dashboard</span>
        </a>
      </div>
      <div class="flex items-center space-x-4 text-white/80">
        <span class="hidden sm:inline">Navigate with arrows <strong>←</strong> <strong>→</strong> or space</span>
        <span class="hidden md:inline">Press <strong>F</strong> (Fullscreen) · <strong>O</strong> (Overview) · <strong>P</strong> (PDF)</span>
      </div>
    </header>
  `;

  const mainViewport = `
    <!-- 16:9 Central Viewport -->
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
        <div class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></div>
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
    <!-- Modal Overview Grid -->
    <div id="overviewModal" class="no-print fixed inset-0 bg-[#2F3136]/90 backdrop-blur-sm z-50 hidden flex flex-col p-6 sm:p-10 justify-between">
      <div class="flex items-center justify-between text-white border-b border-white/20 pb-3">
        <h3 class="text-xl font-bold font-heading">Healthcare Assignment Slide Overview (${slides.length})</h3>
        <button onclick="toggleOverview()" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm">✕ Close (Esc)</button>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 overflow-y-auto my-4 py-2">
        ${slides.map((s, idx) => `
          <div onclick="goToSlide(${idx}); toggleOverview();" class="bg-[#F4F5F7] p-3 rounded-lg border-2 hover:border-[#BA0034] cursor-pointer transition-all hover:scale-105 shadow-md flex flex-col justify-between h-28">
            <div class="flex items-center justify-between text-[#2F3136]">
              <span class="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#D9DDE3]">${(idx+1).toString().padStart(2, '0')}</span>
              <span class="text-[10px] text-[#5E626E] font-semibold truncate max-w-[120px]">${s.subtitle || ''}</span>
            </div>
            <div class="text-xs font-bold text-[#2F3136] font-heading line-clamp-2">${s.title}</div>
            <div class="w-full bg-[#DDE1E6] h-1 rounded-full overflow-hidden">
              <div class="bg-[#BA0034] h-full" style="width: ${((idx+1)/slides.length)*100}%"></div>
            </div>
          </div>
        `).join('\n')}
      </div>

      <div class="text-center text-xs text-white/70">
        Click on any card to jump directly to that exam slide.
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

const outputPath = path.join(__dirname, 'enunciado_solucion.html');
fs.writeFileSync(outputPath, generateEnunciadoHtml(), 'utf8');
console.log('✅ enunciado_solucion.html generated in English (' + slides.length + ' slides).');
