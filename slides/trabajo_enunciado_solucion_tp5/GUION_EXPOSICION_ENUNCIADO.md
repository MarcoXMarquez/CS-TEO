# ORAL PRESENTATION SCRIPT - PRESENTATION 2: ASSIGNMENT SOLUTION (TP5)
## Application of Standards ISO 20246 & ISO/IEC 5055 in Public Healthcare
**Course:** Software Quality & Testing | **Evaluation:** Midterm Evaluation 5 (TP5)  
**Group:** Group 05 | **Deck File:** `enunciado_solucion.html` (14 Interactive Slides)  
**Speakers:** Yoel, Marco, Jeremy, Rafael, Leo  
**Total Target Time:** 14 to 17 minutes (~3 to 3.5 minutes per speaker)

---

### SPEAKER ROLE ASSIGNMENT TABLE

| Speaker | Assigned Slides | Key Discussion Topics | Target Time |
|---|---|---|---|
| **1. Yoel** | **Slides 01, 02 & 03** | Academic Cover TP5, Public Health Project Context (Hospital EHR & Manchester Triage), and Dual Normative Synergy (ISO 20246 + ISO 5055). | 3.0 min |
| **2. Marco** | **Slides 04 & 05** | ISO 20246 Review Lifecycle (5 Clinical Phases) and **[Req 1]** Hierarchical Structure of Code Quality Indicators under ISO/IEC 5055:2021. | 3.0 min |
| **3. Jeremy** | **Slides 06 & 07** | **[Req 1 Detail]** Mathematical Indicator Modeling ($D_{SW}$, $TDR$, $QGS$) and **[Req 2]** Code Efficiency Indicators in Clinical Triage (p95, p99, TTFB, TPS). | 3.5 min |
| **4. Rafael** | **Slides 08, 09 & 10** | **[Req 2 Detail]** Hardware Usage, Heap Drift & McCabe Complexity; **[Req 3]** Tripartite Tool Architecture Overview and Capture Tools (SonarQube, k6, APM). | 3.5 min |
| **5. Leo** | **Slides 11, 12, 13 & 14** | **[Req 3 Phases 2 & 3]** CI/CD Process Engine & SHA-256 Cryptographic Dossier; Empirical Staging Demonstration and Grade 20/20 Rubric Synthesis. | 4.0 min |

---

## 🎙️ SPEAKER 1: YOEL (Slides 01, 02 & 03)

### Slide 01: *Application of Standards ISO 20246 & ISO/IEC 5055 in Public Healthcare*
* **On-Screen Action:** Open `enunciado_solucion.html` in Fullscreen mode (`F`). Point the cursor to the three requirement badges: Req 1, Req 2, and Req 3.
* **Spoken Script:**
  > *"Good morning professor and members of the evaluation jury. Today, Group 05 delivers our **formal, rigorous solution to Midterm Evaluation 5**, addressing step-by-step the three core requirements specified in the official exam prompt:*
  > 
  > *1. The hierarchical structure of code quality indicators grounded in **ISO/IEC 5055:2021**.*  
  > *2. The quantitative metrics adopted to evaluate **source code efficiency** under high-concurrency runtime load.*  
  > *3. The selection and technical architecture of tools across all three mandated phases: **information capture, processing, and presentation**.*
  > 
  > *As required by the assignment guidelines, this entire implementation is anchored directly within our team's **Public Healthcare Project**: the National Hospital Information System (HIS/EHR) and the Manchester Emergency Triage microservice, governed by the Quality Nexus platform.*
  > 
  > *Let us first examine the institutional context and clinical criticality on slide 02."*

### Slide 02: *Public Healthcare Context: Hospital EHR & Manchester Triage*
* **On-Screen Action:** Advance to slide 02 (`→`). Point to the three clinical context cards: Critical Microservice (`/api/v1/triaje/evaluacion`), High Concurrency, and SUSALUD Data Regulations.
* **Spoken Script:**
  > *"To appreciate why software quality in this domain is non-negotiable, we must understand its clinical operational environment:*
  > 
  > *The core transaction of this system is the **Manchester Emergency Triage microservice** (`/api/v1/triaje/evaluacion`), responsible for categorizing incoming emergency room patients into five vital priority levels: from Priority 1 Immediate Resuscitation to Priority 5 Non-Urgent.*
  > 
  > *Across national public hospitals within MINSA and EsSalud, this system operates under **24/7 high concurrency**, facing acute demand surges during seasonal outbreaks and mass casualty incidents. In this environment, a latency degradation of merely a few seconds is not an inconvenient bug: **it delays medical categorization and directly threatens human lives**.*
  > 
  > *Furthermore, storing and retrieving patient clinical records is legally governed by Peruvian Law 29733 and national electronic health record guidelines under SUSALUD, mandating zero data leakage and immutable audit trails.*
  > 
  > *Slide 03 illustrates how we synthesize the two standards mandated by the professor."*

### Slide 03: *Dual Normative Synergy: ISO 20246:2017 & ISO/IEC 5055:2021*
* **On-Screen Action:** Advance to slide 03 (`→`). Contrast the left column (ISO 20246 Process Reviews) with the right column (ISO 5055 Automated AST Measurement).
* **Spoken Script:**
  > *"The exam prompt mandates the coordinated application of two international standards:*
  > 
  > *On the left, we apply **ISO/IEC/IEEE 20246:2017**, which standardizes the **formal review processes of software work products**. This standard governs formal inspections, walkthroughs, and peer reviews of clinical requirements, architecture designs, and API contracts before code is even written.*
  > 
  > *On the right, we apply **ISO/IEC 5055:2021**, developed by CISQ and ratified by ISO. This is the premier global standard for the **automated measurement of internal source code structural quality**, parsing the Abstract Syntax Tree (AST) across four dimensions: Security, Reliability, Performance Efficiency, and Maintainability.*
  > 
  > *The synergy is seamless: **ISO 20246 validates WHAT the clinical system must do through formal human peer reviews, while ISO 5055 mathematically certifies HOW the code is structurally engineered.** I will now hand over to **Marco** to present our review lifecycle and the solution to Requirement 1."*
* **Verbal Handoff:** *"Marco, please proceed."*

---

## 🎙️ SPEAKER 2: MARCO (Slides 04 & 05)

### Slide 04: *ISO 20246:2017 Formal Review Lifecycle for Clinical Artifacts*
* **On-Screen Action:** Advance to slide 04 (`→`). Walk through the 5 horizontal phases: Planning ➔ Preparation ➔ Review Meeting ➔ Rework ➔ Follow-up & Close.
* **Spoken Script:**
  > *"Thank you, Yoel. To ensure rigorous compliance with **ISO 20246:2017** in our healthcare system, we formalized a 5-phase work product review lifecycle:*
  > 
  > *1. **Planning Phase:** Establishing Entry Criteria and assigning four formal roles: a neutral QA Moderator, the Microservice Author, an Emergency Physician Domain Reviewer, and a Scribe.*  
  > *2. **Preparation Phase:** Independent reviewer inspection utilizing checklists based on **ISO 29148 Clause 5.2**, hunting down vague terms like 'fast response' and replacing them with quantifiable numeric thresholds.*  
  > *3. **Review Meeting:** A structured collegial session logging defects and API contract discrepancies without attacking author competence.*  
  > *4. **Rework Phase:** The author translates medical observations into mathematically parameterized **Gherkin acceptance criteria** with strict latency limits.*  
  > *5. **Follow-Up and Close:** Verification of Exit Criteria: zero open critical defects. With formal sign-off, clinical requirements are loaded into Quality Nexus under the initial state `UNVERIFIED`.*
  > 
  > *Our institutional policy is absolute: **no line of clinical code reaches production without passing through this formal review gate.** Let us now solve Requirement 1 on slide 05."*

### Slide 05: *Req 1: Code Quality Indicators Structure (ISO/IEC 5055)*
* **On-Screen Action:** Advance to slide 05 (`→`). Present the 4 dashed-border cards corresponding to the 4 CISQ dimensions of ISO 5055.
* **Spoken Script:**
  > *"Addressing **REQUIREMENT 1: Code Quality Indicators Structure**, we adopted the formal architectural taxonomy of **ISO/IEC 5055:2021**, structured across four internal dimensions:*
  > 
  > *1. **Code Security (Security):** Safeguards patient health records against unauthorized access under Law 29733. Measures critical architectural flaws including **CWE-89** (SQL Injection in patient search), **CWE-79** (Clinical XSS), **CWE-311** (Missing TLS encryption), and **CWE-306** (Missing authentication in prescription endpoints). Quality Gate weight: **35%**.*  
  > *2. **System Reliability (Reliability):** Guarantees zero unhandled crashes during 24/7 emergency operations: **CWE-667** (Deadlocks during concurrent ER bed allocation), **CWE-476** (Null pointer exceptions on missing allergy fields), and **CWE-754** (Improper error handling). Quality Gate weight: **25%**.*  
  > *3. **Performance Efficiency (Performance):** Optimizes processor usage and database pooling: **CWE-400** (Uncontrolled resource consumption), **CWE-775** (JDBC connection pool leaks), and N+1 query antipatterns. Quality Gate weight: **25%**.*  
  > *4. **Code Maintainability (Maintainability):** Ensures clean modularity for future engineering iterations: **CWE-1075** (Cyclic package dependencies), **CWE-1047** (God classes exceeding 1,000 lines), and Cyclomatic Complexity. Quality Gate weight: **15%**.*
  > 
  > *I will now pass the floor to **Jeremy** to explain our mathematical formulations and Requirement 2."*
* **Verbal Handoff:** *"Over to you, Jeremy."*

---

## 🎙️ SPEAKER 3: JEREMY (Slides 06 & 07)

### Slide 06: *Req 1 Detail: Mathematical Formulas & Quality Gate Thresholds*
* **On-Screen Action:** Advance to slide 06 (`→`). Explain the three mathematical formulas: $D_{SW}$, $TDR$, and $QGS$.
* **Spoken Script:**
  > *"Thank you, Marco. To ensure that ISO 5055 indicators are not treated as subjective opinions, we established three formal mathematical aggregation and cutoff models:*
  > 
  > *First: **Structural Weakness Density ($D_{SW}$)**:*  
  > *$$D_{SW} = \frac{\sum \text{Critical CWE Weaknesses}}{KLOC}$$*  
  > *This calculates the volume of severe architectural defects per thousand lines of executable code. For our hospital system, we enforce: **$D_{SW} < 0.05$ defects per KLOC**.*
  > 
  > *Second: **Technical Debt Ratio ($TDR$):***  
  > *$$TDR = \frac{\text{Estimated Remediation Hours}}{\text{Total Development Hours}} \times 100\%$$*  
  > *Mandating that technical remediation effort must not exceed **5.0%** of total engineering effort.*
  > 
  > *Third: **Composite Quality Gate Score ($QGS$):***  
  > *$$QGS = 0.35 \cdot S_{\text{sec}} + 0.25 \cdot R_{\text{rel}} + 0.25 \cdot E_{\text{perf}} + 0.15 \cdot M_{\text{maint}}$$*  
  > *The mandatory pass threshold to authorize a production release is **$QGS \ge 85.0\%$**. If this composite score drops below 85% or if **a single critical security flaw exists**, the pipeline deterministically halts deployment.*
  > 
  > *Let us now turn to slide 07 to solve Requirement 2."*

### Slide 07: *Req 2: Code Efficiency Indicators in Clinical Triage*
* **On-Screen Action:** Advance to slide 07 (`→`). Highlight the 4 temporal indicator callouts: p95 ($\le 400\text{ms}$), p99 ($\le 800\text{ms}$), TTFB ($\le 120\text{ms}$), and Throughput ($\ge 450\text{ TPS}$).
* **Spoken Script:**
  > *"Addressing **REQUIREMENT 2: Adopted Code Efficiency Indicators**, we defined four quantitative runtime metrics validated through Grafana k6 load tests against our Manchester emergency triage microservice:*
  > 
  > *1. **95th Percentile Latency ($p95 \le 400\text{ ms}$):** 95% of incoming emergency triage assessments must execute in under 400 milliseconds, guaranteeing zero latency lag for on-duty emergency physicians.*  
  > *2. **99th Percentile Latency ($p99 \le 800\text{ ms}$):** Establishing an upper latency ceiling to bound edge cases during peak patient arrival bursts.*  
  > *3. **Time to First Byte ($TTFB \le 120\text{ ms}$):** Validating the speed of our network transport and HTTP reverse proxy routing before delivering data to hospital tablets.*  
  > *4. **Sustained Throughput ($\ge 450\text{ TPS}$):** The system must sustain at least 450 completed transactions per second under a concurrent load of 300 virtual users in Staging.*
  > 
  > *I will now hand over to **Rafael**, who will detail hardware resource consumption and our tripartite tool architecture."*
* **Verbal Handoff:** *"Rafael, please take the lead."*

---

## 🎙️ SPEAKER 4: RAFAEL (Slides 08, 09 & 10)

### Slide 08: *Req 2 Detail: Computational Resources & Code Complexity*
* **On-Screen Action:** Advance to slide 08 (`→`). Point out the 4 resource metrics: CPU ($\le 65\%$), $\Delta\text{Heap} \le 5\text{MB/h}$, Connection Pool ($\le 70\%$), and McCabe Complexity $v(G) \le 10$.
* **Spoken Script:**
  > *"Thank you, Jeremy. Continuing with Requirement 2, ISO 25010 and ISO 5055 require monitoring not only response times, but also **hardware resource consumption and internal algorithmic complexity**:*
  > 
  > *1. **Sustained CPU Utilization ($\le 65\%$ nominal across 2 vCPUs):** Reserving a 35% processing buffer to withstand sudden mass casualty intake surges without CPU throttling.*  
  > *2. **Heap Memory Leak Rate ($\Delta\text{Heap} \le 5\text{ MB/hour}$):** Tracking residual RAM growth following forced JVM Garbage Collection cycles to prevent catastrophic Out-of-Memory crashes.*  
  > *3. **Database Connection Pool Saturation ($\le 70\%$ active):** Preventing connection pool exhaustion in PostgreSQL during heavy query concurrency.*  
  > *4. **McCabe Cyclomatic Complexity ($v(G) \le 10$ per method):** Bounding independent execution paths within triage evaluation algorithms to guarantee complete unit test branch coverage.*  
  > *And our mandatory code rule: **Zero N+1 query antipatterns** allowed in relational database mapping.*
  > 
  > *Let us now examine Requirement 3 on slide 09."*

### Slide 09: *Req 3: Tripartite Tools Architecture Overview*
* **On-Screen Action:** Advance to slide 09 (`→`). Point to the three pipeline pillars: Phase 1 Capture ➔ Phase 2 Process ➔ Phase 3 Presentation.
* **Spoken Script:**
  > *"Addressing **REQUIREMENT 3: Tools Selection for Capture, Process, and Presentation**, we engineered a decoupled tripartite automated architecture:*
  > 
  > *1. **Phase 1: Information Capture Tools (Ingestion):** Extracting static code AST metrics and live dynamic telemetry via SonarQube, Grafana k6, and OpenTelemetry.*  
  > *2. **Phase 2: Processing and Arbitration Engine (Transformation):** Orchestrated by the Quality Nexus Go daemon and GitHub Actions, normalizing raw reports and asserting Boolean rules against hospital thresholds.*  
  > *3. **Phase 3: Presentation Tools (Output):** Producing tamper-evident SHA-256 dossiers for MINSA health audits, executive radar dashboards for hospital leadership, and live APM metrics for SRE teams.*
  > 
  > *Slide 10 details our capture toolchain."*

### Slide 10: *Req 3 Phase 1: Information & Telemetry Capture Tools*
* **On-Screen Action:** Advance to slide 10 (`→`). Discuss SonarQube Enterprise, Grafana k6, and OpenTelemetry.
* **Spoken Script:**
  > *"In the Capture Phase, we selected three industry-leading tools based on their precision and Infrastructure-as-Code capabilities:*
  > 
  > *- **SonarQube Enterprise:** Evaluates the Abstract Syntax Tree on every Pull Request against the ISO 5055 CWE catalog, exporting findings in standardized SARIF format.*  
  > *- **Grafana k6 (Load as Code):** Executes JavaScript test suites simulating 300 emergency room physicians performing concurrent triages, outputting percentile latencies into `k6-summary.json`.*  
  > *- **OpenTelemetry + Prometheus:** Gathers low-level operating system and JVM telemetry (CPU, Heap memory drift, and thread contention).*  
  > *All tests are versioned directly in Git alongside application code.*
  > 
  > *Next, my teammate **Leo** will explain the processing engine, presentation layer, and our empirical validation."*
* **Verbal Handoff:** *"Leo, please take over."*

---

## 🎙️ SPEAKER 5: LEO (Slides 11, 12, 13 & 14)

### Slide 11: *Req 3 Phase 2: Processing Engine & CI/CD Orchestration*
* **On-Screen Action:** Advance to slide 11 (`→`). Point to the Go Core daemon flow and the GitHub Actions Branch Protection snippet.
* **Spoken Script:**
  > *"Thank you, Rafael. In **Phase 2: Processing and Arbitration**, the core component is the **Quality Nexus Deterministic Engine**, running as a compiled Go daemon:*
  > 
  > *1. **Schema Normalization:** Transforming heterogeneous SARIF, k6 JSON, and JUnit XML outputs into a unified canonical evidence schema.*  
  > *2. **Pure Mathematical Boolean Evaluation:** Evaluating metrics strictly against clinical thresholds without probabilistic heuristics, guaranteeing **zero hallucinations**.*  
  > *3. **FSM State Mutation:** If p95 latency exceeds 400 ms or weakness density breaches 0.05, the FSM instantly mutates to `FAILED_EMPIRICALLY`.*  
  > *4. **GitHub Actions Orchestration:** Enforcing automated **Branch Protection** that physically halts merges to `main` in under 2.5 seconds if quality gates fail.*  
  > *Slide 12 covers our presentation outputs."*

### Slide 12: *Req 3 Phase 3: Presentation Layer & Digital Quality Dossier*
* **On-Screen Action:** Advance to slide 12 (`→`). Highlight the three presentation outputs: Cryptographic Dossier, Executive Portal, and Grafana APM.
* **Spoken Script:**
  > *"In **Phase 3: Indicator Presentation**, Quality Nexus serves tailored reporting across all organizational tiers:*
  > 
  > *- For legal and statutory health regulators (SUSALUD / MINSA), we generate the **Digital Quality Dossier**: a tamper-proof package signed with a **SHA-256 cryptographic hash**, binding ISO 20246 review logs and ISO 5055 telemetry for forensic audits.*  
  > *- For hospital deans and medical directors, the **Executive Quality Portal** displays an ISO 25010 quality radar, clinical risk gauges, and technical debt trends.*  
  > *- For DevOps and SRE teams, **Grafana Real-time APM** delivers live p95 latency curves and automated incident paging.*
  > 
  > *Let us examine slide 13 to see our empirical staging demonstration."*

### Slide 13: *Empirical Demonstration: Manchester Triage Staging Case Study*
* **On-Screen Action:** Advance to slide 13 (`→`). Trace the clinical incident: 720.4ms regression (red) resolved to 192.1ms (green).
* **Spoken Script:**
  > *"To demonstrate our architecture under real public healthcare conditions, we simulated a staging incident:*
  > 
  > *In Pull Request #142, an engineer implemented patient allergy verification but introduced an N+1 loop query. During k6 load testing, p95 latency jumped from 210 ms to **720.4 milliseconds**, violating our 400 ms SLA and consuming 88.5% CPU.*
  > 
  > *Quality Nexus responded immediately: the Quality Gate failed, the FSM mutated to `FAILED_EMPIRICALLY`, and the pull request was blocked. Developers refactored the query using **Eager Loading via SQL JOIN FETCH**. Upon re-running the pipeline, p95 latency plummeted to **192.1 milliseconds**, queries dropped from 14 to 1 single database call, and the Quality Gate turned green.*
  > 
  > *The result: **A critical hospital bottleneck was neutralized before reaching production emergency rooms.***
  > 
  > *Let us conclude on slide 14 with our evaluation rubric synthesis."*

### Slide 14: *Executive Synthesis, Grade 20 Rubric & Conclusions*
* **On-Screen Action:** Advance to slide 14 (`→`). Highlight the 4 achievement pillars and the Grade 20/20 target badge.
* **Spoken Script:**
  > *"To conclude our defense, we summarize the four pillars fulfilling the evaluation rubric for a **Grade of 20 / 20**:*
  > 
  > *1. **Exhaustive Response to All 3 Prompt Requirements:** We mathematically formulated and architected every requirement: ISO 5055 structural indicators, runtime code efficiency, and the complete tripartite toolchain.*  
  > *2. **Direct Grounding in Public Healthcare:** All theoretical models were verified against the Manchester emergency triage microservice and Peruvian health data regulations.*  
  > *3. **Firm Ethical Boundary and Determinism:** Proving that AI assists but never certifies; our deterministic engine guarantees reproducible mathematical ground truth.*  
  > *4. **Immutable Cryptographic Evidence:** Our SHA-256 dossiers establish a tamper-proof forensic record ready for statutory oversight.*
  > 
  > *This concludes our defense of Midterm Evaluation 5. Thank you very much for your attention. We now welcome questions from the professor and jury."*

---
*(End of Assignment Solution Script)*
