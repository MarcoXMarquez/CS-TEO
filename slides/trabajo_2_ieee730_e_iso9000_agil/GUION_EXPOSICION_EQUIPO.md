# ORAL PRESENTATION SCRIPT - PRESENTATION 1: TEAM PITCH DECK
## Quality Nexus: Deterministic Verification Platform & Auditable Evidence Governance
**Course:** Software Quality & Testing | **Evaluation:** Midterm Evaluation 5 (TP5)  
**Group:** Group 05 | **Deck File:** `diapositivas_equipo.html` (12 Interactive Slides)  
**Speakers:** Yoel, Marco, Jeremy, Rafael, Leo  
**Total Target Time:** 12 to 15 minutes (~2.5 to 3 minutes per speaker)

---

### SPEAKER ROLE ASSIGNMENT TABLE

| Speaker | Assigned Slides | Key Discussion Topics | Target Time |
|---|---|---|---|
| **1. Yoel** | **Slides 01 & 02** | Executive Cover, Problem Hook, Platform Mission, Industry Diagnosis & Silent Margin Erosion (20-40h/sprint lost). | 2.5 min |
| **2. Marco** | **Slides 03 & 04** | Competitive Landscape (ALM vs GenAI), The Critical Verification Gap, and The Living Evidence Graph (DAG & Reactive Invalidation). | 2.5 min |
| **3. Jeremy** | **Slides 05 & 06** | International Standards Alignment (ISO 25010, 29148, 29119), Non-Negotiable Ethical Boundary, and Reliability Architecture (Probabilistic vs. Deterministic). | 3.0 min |
| **4. Rafael** | **Slides 07 & 08** | Epistemology of Software Truth (6-State FSM) and Empirical Benchmarking (REQ-089 Staging Case Study with 500ms SLA). | 3.0 min |
| **5. Leo** | **Slides 09, 10, 11 & 12** | Golden Evaluation Suite (10 Adversarial Attacks), B2B SaaS Model & 'The Wedge', Regional Traction (SBS Res. 504-2021 / LatAm), and 6-Month Roadmap. | 3.5 min |

---

## 🎙️ SPEAKER 1: YOEL (Slides 01 & 02)

### Slide 01: *Quality Nexus - Deterministic Verification Platform*
* **On-Screen Action:** Keep the slide in Fullscreen mode (`F`). Point cursor to the main title and the three green verification feature badges.
* **Spoken Script:**
  > *"Good morning professor and colleagues. On behalf of Group 05, we are proud to introduce **Quality Nexus**: an engineering platform specifically architected to tackle one of the most critical and expensive blind spots in modern software engineering: the complete absence of auditable evidence governance and deterministic runtime verification in mission-critical systems.*
  > 
  > *Quality Nexus was not conceived as just another generative AI code assistant, nor as a superficial static linter. Instead, it is an end-to-end quality governance ecosystem that mathematically links formal requirements engineering under international standards, automated abstract syntax tree analysis, and real-world empirical telemetry. By doing so, we guarantee immutable, tamper-proof evidence with **zero tolerance for stochastic hallucination**.*
  > 
  > *To understand why this solution is indispensable in today's software landscape, let us examine our diagnosis of the software industry on slide 02."*

### Slide 02: *Industry Diagnosis: The Silent Margin Erosion in Software*
* **On-Screen Action:** Advance to slide 02 (`→`). Highlight the three metric callouts: **20-40 hrs**, **> 65%**, and **100%**.
* **Spoken Script:**
  > *"Across the global software industry, engineering teams suffer from a silent, chronic margin erosion driven by three systemic breakdowns:*
  > 
  > *First: **Chronic rework waste**. Software teams bleed between **20 and 40 engineering hours per sprint** re-writing code and repairing test suites due to specifications that mutated silently without downstream notification. This single failure mode drains up to 25% of operational gross margins.*
  > 
  > *Second: **Phantom tests and unquantified technical debt**. Over 65% of enterprise software organizations maintain unit test suites that pass green in CI/CD while asserting outdated, deprecated logic that no longer reflects customer requirements. This generates a dangerous, false sense of security.*
  > 
  > *And third: **The unchecked proliferation of generative AI co-pilots**. Generative tools write code probabilistically, introducing subtle architectural regressions that cannot be formally audited or defended during regulatory audits.*
  > 
  > *Our core diagnosis is definitive: **the industry does not need more unverified code generation; it urgently needs deterministic verification and immutable evidence governance.** I will now hand it over to **Marco**, who will break down the competitive landscape and our core value proposition."*
* **Verbal Handoff:** *"Over to you, Marco."*

---

## 🎙️ SPEAKER 2: MARCO (Slides 03 & 04)

### Slide 03: *Competitive Landscape: The Critical Verification Gap*
* **On-Screen Action:** Advance to slide 03 (`→`). Guide the audience across the dashed comparison matrix, highlighting the bottom teal row representing Quality Nexus.
* **Spoken Script:**
  > *"Thank you, Yoel. When we benchmark existing market solutions across four quadrants, a glaring verification gap becomes evident:*
  > 
  > *Legacy **Enterprise ALM suites** like Jira, Polarion, or IBM DOORS are notoriously heavy, manual, and completely decoupled from runtime execution telemetry.*
  > 
  > *Modern **Agile Test Management tools** such as Xray, Zephyr, or TestRail manage test runs at an issue level, but they lack a formal state machine and offer zero reactive invalidation when code changes.*
  > 
  > *On the emerging frontier, **Generative AI Co-pilots** like Cursor or Copilot generate code probabilistically without verifiable ground truth, making them unsuitable for regulated environments.*
  > 
  > *This is where **Quality Nexus** establishes a definitive competitive moat: we do not compete with LLMs nor do we replace Jira. We position ourselves as the **deterministic arbiter of software truth**. We model dependencies as a living Directed Acyclic Graph, ingest live load telemetry, and seal every verdict with SHA-256 hashes. Let us examine how this architecture operates on slide 04."*

### Slide 04: *Value Proposition: The Living Evidence Graph with Reactive Invalidation*
* **On-Screen Action:** Advance to slide 04 (`→`). Trace the 4 sequential nodes: Clinical Requirement ➔ Gherkin Scenario ➔ Code & AST ➔ Telemetry & Dossier, then emphasize the bottom reactive invalidation alert.
* **Spoken Script:**
  > *"The core engine of Quality Nexus is the **Living Evidence Graph**. Unlike traditional static traceability matrices that rot the moment a sprint begins, our graph continuously connects four live nodes:*
  > 
  > *1. **The Clinical or Business Requirement**, formally specified under ISO 29148 to eliminate lexical ambiguity.*  
  > *2. **The Gherkin Acceptance Scenario**, mathematically parameterized with strict SLA latency boundaries.*  
  > *3. **The Source Code and its Abstract Syntax Tree (AST)**, tied directly to the exact Git commit SHA.*  
  > *4. **The Runtime Telemetry and Cryptographic Dossier**, validated via staging load tests.*
  > 
  > *Our primary technical breakthrough is the **Principle of Reactive Invalidation**: if an engineer pushes a commit modifying a single database query or line of business logic, Quality Nexus detects the delta in under **150 milliseconds** and immediately transitions all downstream assertions to `INVALIDATED_BY_CHANGE`.*
  > 
  > *I will now pass the floor to **Jeremy**, who will explain our international standards alignment and our strict ethical boundary."*
* **Verbal Handoff:** *"Take it away, Jeremy."*

---

## 🎙️ SPEAKER 3: JEREMY (Slides 05 & 06)

### Slide 05: *International Standards Alignment & Ethical Boundary*
* **On-Screen Action:** Advance to slide 05 (`→`). Walk through the three standards columns, then draw explicit focus to the dark card: "Ethical Boundary".
* **Spoken Script:**
  > *"Thank you, Marco. For software quality in critical infrastructure—such as healthcare, banking, and government—good intentions are insufficient. Systems must be grounded in recognized international standards:*
  > 
  > *1. **ISO/IEC 25010:2023**, defining our product quality model: evaluating performance efficiency, reliability, security, and maintainability.*  
  > *2. **ISO/IEC/IEEE 29148:2018**, governing requirements engineering to eliminate lexical vagueness and guarantee testability.*  
  > *3. **ISO/IEC/IEEE 29119**, standardizing risk-based dynamic testing and test execution coverage.*
  > 
  > *However, our architecture is defined by an absolute **Non-Negotiable Ethical and Legal Boundary**: **Software never self-certifies.** In mission-critical software, no tool and no generative AI model possesses the legal authority to certify compliance. Legal certification is the exclusive jurisdiction of accredited human auditors. The role of Quality Nexus is to build the **tamper-evident forensic dossier** that empowers human auditors to verify compliance without dispute.*
  > 
  > *Let us examine on slide 06 how we enforce this separation within our reliability architecture."*

### Slide 06: *Reliability Architecture: Probabilistic Layer vs. Deterministic Core*
* **On-Screen Action:** Advance to slide 06 (`→`). Contrast the left column (Probabilistic LLM) against the right column (Go Deterministic Core).
* **Spoken Script:**
  > *"To permanently eliminate the hallucination risks inherent in modern AI tools, Quality Nexus enforces a strict physical separation between two distinct architectural layers:*
  > 
  > *On the left, we have the **Probabilistic Layer**, powered by a supervised Large Language Model. Its responsibility is strictly linguistic and advisory: it helps engineers draft Gherkin scenarios, flags ambiguous terms like 'fast' or 'scalable' per ISO 29148, and proposes candidate traceability links. Crucially, it has an immutable constraint: **it can never issue a PASSED or FAILED verdict and cannot approve a release.***
  > 
  > *On the right, we have the **Deterministic Engine**, compiled in Go. This is the sole arbiter of truth: it parses raw JUnit XML, k6 JSON, and SARIF static analysis files. It applies pure Boolean mathematical evaluation: if the SLA states latency must be under 400 milliseconds and telemetry clocks in at 401 ms, the test fails deterministically without stochastic drift. **Our hallucination rate is exactly 0.0%.***
  > 
  > *Next, my teammate **Rafael** will walk you through our epistemic state machine and our real-world staging benchmark."*
* **Verbal Handoff:** *"Rafael, the floor is yours."*

---

## 🎙️ SPEAKER 4: RAFAEL (Slides 07 & 08)

### Slide 07: *Epistemology of Software Truth: 6-State Formal FSM*
* **On-Screen Action:** Advance to slide 07 (`→`). Point to the 6 discrete states, emphasizing `VERIFIED_EMPIRICALLY` (green) and `INVALIDATED_BY_CHANGE` (cyan).
* **Spoken Script:**
  > *"Thank you, Jeremy. Truth in software engineering is neither binary nor permanent; it is dynamic and directly tied to code evolution. To govern this reality, Quality Nexus implements a **6-State Epistemic Finite State Machine (FSM)**:*
  > 
  > *1. **UNVERIFIED**: Initial state when a requirement is created without recorded runtime telemetry.*  
  > *2. **CANDIDATE_LINK**: Semantic link proposed by AI heuristics, awaiting mandatory human confirmation.*  
  > *3. **VERIFIED_EMPIRICALLY**: The golden state. Dynamic staging tests passed and mathematical thresholds are certified.*  
  > *4. **FAILED_EMPIRICALLY**: Telemetry breached SLA thresholds or static analysis flagged a critical CWE vulnerability.*  
  > *5. **INVALIDATED_BY_CHANGE**: Triggered automatically the moment a Git commit modifies code or database schemas, mandating re-execution.*  
  > *6. **REVOKED**: Formal retirement of deprecated specifications.*
  > 
  > *There are no ambiguous transitions or unverified bypasses. Every state mutation is cryptographically logged. Let us see this FSM in action during a real incident on slide 08."*

### Slide 08: *Empirical Benchmarking: Real Staging Case Study REQ-089*
* **On-Screen Action:** Advance to slide 08 (`→`). Point to the three horizontal telemetry bars (Green 210ms, Red 720ms, Teal 192ms) and the blocked pull request terminal output.
* **Spoken Script:**
  > *"To demonstrate empirical verification in practice, we benchmarked Quality Nexus against a critical hospital emergency transaction: **REQ-089**, simulating emergency patient triage under a concurrent load of 300 virtual users:*
  > 
  > *At baseline, the service performed smoothly with a 95th percentile latency of **210.5 milliseconds**, comfortably meeting the 500 ms SLA.*
  > 
  > *However, in Pull Request #142, an engineer implemented patient allergy lookup but inadvertently introduced an **N+1 query loop** in the ORM. Under manual tests, the feature looked functional. But when k6 automated load tests executed inside our pipeline, p95 latency spiked catastrophically to **720.4 milliseconds**.*
  > 
  > *What did Quality Nexus do? Deterministically and without human intervention, it mutated the requirement state to `FAILED_EMPIRICALLY` and **physically blocked the pull request merge in GitHub Actions**. Engineers refactored the query using eager loading, p95 dropped to **192.1 milliseconds**, and the Quality Gate turned green.*
  > 
  > *The outcome: **Zero hospital downtime and zero emergency patients impacted.** I now hand over the presentation to **Leo** to present our security suite, business model, and engineering roadmap."*
* **Verbal Handoff:** *"Leo, please take over."*

---

## 🎙️ SPEAKER 5: LEO (Slides 09, 10, 11 & 12)

### Slide 09: *Security & Auditing: Golden Evaluation Suite*
* **On-Screen Action:** Advance to slide 09 (`→`). Highlight the 10-attack matrix and the right-side Cryptographic Dossier box.
* **Spoken Script:**
  > *"Thank you, Rafael. A verification system is worthless if developers or external vendors can game it. To stress-test our verification engine, we executed our **Golden Evaluation Suite**, featuring **10 adversarial attack vectors**:*
  > 
  > *We simulated malicious CI mocking, LLM prompt injection, corrupted SARIF files, timeout tampering, SQL injections, and concurrency race conditions.*
  > 
  > *The result was an **overall neutralization rate of 100%**. Every attack was intercepted and contained. Furthermore, every evaluation run produces a **Cryptographic Dossier sealed with SHA-256**, permanently binding the Git commit SHA, the raw telemetry file, and the AST report into an immutable audit manifest."*

### Slide 10: *Commercial Feasibility: B2B SaaS Model & 'The Wedge'*
* **On-Screen Action:** Advance to slide 10 (`→`). Point to the 'Wedge' CLI and the three pricing tiers ($49, $149, Enterprise).
* **Spoken Script:**
  > *"From a commercial perspective, Quality Nexus is structured as a scalable B2B SaaS platform driven by **'The Wedge' strategy**:*
  > 
  > *We distribute a lightweight, free open-source CLI tool directly to developers to validate SLA limits in local git pre-push hooks, driving organic bottom-up adoption.*
  > 
  > *We then monetize through three tiers:*
  > *- **Developer Pro ($49/dev/month)** for growing teams requiring CI/CD pipelines.*  
  > *- **Hospital / Team ($149/dev/month)**, our flagship tier offering the Living Evidence Graph and ISO 5055 rulebooks.*  
  > *- And **Enterprise**, tailored for health networks with on-premise governance.*
  > 
  > *Our financial models project an LTV to CAC ratio exceeding 4.2x with monthly churn below 1.2% due to high retention in regulated industries."*

### Slide 11: *Regional Traction: SBS Res. 504-2021 & Nearshore Growth*
* **On-Screen Action:** Advance to slide 11 (`→`). Point out the three regulatory pillars: Peru, Latin America, and US Nearshore SaMD.
* **Spoken Script:**
  > *"Our market traction is fueled by strict regulatory mandates:*
  > 
  > *In Peru, **SBS Resolution No. 504-2021** and **Personal Data Protection Law 29733** legally mandate financial and healthcare institutions to maintain auditable, tamper-proof change management.*
  > 
  > *Across Latin America, identical requirements in Colombia (SFC Circular 007) and Chile (CMF RAN 20-10) represent an addressable market exceeding 420 million dollars.*
  > 
  > *Furthermore, for Peruvian software exporters targeting the US nearshore market, our dossiers provide the technical evidence required for FDA Software as a Medical Device (SaMD) and HIPAA audits."*

### Slide 12: *Engineering Roadmap & 6-Month Delivery Strategy*
* **On-Screen Action:** Advance to slide 12 (`→`). Show the 3-phase Gantt progress bars and deliver the closing remarks.
* **Spoken Script:**
  > *"To conclude, our 6-month engineering roadmap is tracking ahead of schedule:*
  > 
  > *- **Phase 1 (Months 1-2):** Go CLI engine and GitHub Actions integration are 100% completed and production-ready.*  
  > *- **Phase 2 (Months 3-4):** Living Evidence Graph interactive visualizer and telemetry parsers are at 75% progress.*  
  > *- **Phase 3 (Months 5-6):** Regulatory dossiers and SOC2 certification are actively scheduled.*
  > 
  > *In summary: Quality Nexus proves that software quality in mission-critical systems is neither a bureaucratic bottleneck nor an afterthought; it is a strategic asset certified through mathematical rigor and auditable engineering.*
  > 
  > *Thank you very much for your time. The team is now ready to take your questions."*

---
*(End of Team Pitch Deck Script)*
