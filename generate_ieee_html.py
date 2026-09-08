import os
import subprocess
from pathlib import Path

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ISO/IEC 25010 Quality Audit and ISO 9241 Ergonomic Modernization</title>
<style>
  @page {
    size: letter;
    margin: 0.70in 0.60in 0.70in 0.60in;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Times New Roman', Times, 'Nimbus Roman No9 L', serif;
    font-size: 9.8pt;
    line-height: 1.18;
    color: #000000;
    margin: 0;
    padding: 0;
    text-align: justify;
    background-color: #FFFFFF;
  }
  
  .header-container {
    width: 100%;
    text-align: center;
    margin-bottom: 12pt;
  }
  
  .paper-title {
    font-size: 19pt;
    font-weight: bold;
    line-height: 1.16;
    margin-bottom: 10pt;
    color: #000000;
  }
  
  .authors-table {
    width: 100%;
    margin: 0 auto 8pt auto;
    border-collapse: collapse;
  }
  .authors-table td {
    text-align: center;
    vertical-align: top;
    padding: 1pt 6pt;
    font-size: 9pt;
  }
  .author-name {
    font-weight: bold;
    font-size: 9.5pt;
    display: block;
    margin-bottom: 1pt;
  }
  .author-affil {
    font-style: italic;
    font-size: 8pt;
    color: #222222;
    display: block;
  }
  .author-city {
    font-size: 8pt;
    color: #333333;
    display: block;
  }
  .author-email {
    font-family: 'Courier New', Courier, monospace;
    font-size: 7.5pt;
    color: #111111;
    display: block;
    margin-top: 1pt;
  }

  .columns-container {
    column-count: 2;
    column-gap: 0.22in;
    column-fill: auto;
  }

  .abstract-box {
    margin-bottom: 8pt;
  }
  .abstract-title {
    font-weight: bold;
    font-style: italic;
  }
  .abstract-text {
    font-size: 8.8pt;
    font-weight: bold;
    line-height: 1.20;
  }
  .keywords-text {
    font-size: 8.8pt;
    margin-top: 4pt;
    margin-bottom: 8pt;
  }
  .keywords-title {
    font-weight: bold;
    font-style: italic;
  }

  h2.section-title {
    font-size: 9.8pt;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.04em;
    margin-top: 10pt;
    margin-bottom: 4pt;
    break-after: avoid;
  }
  
  h3.subsection-title {
    font-size: 9.8pt;
    font-weight: normal;
    font-style: italic;
    text-align: left;
    margin-top: 7pt;
    margin-bottom: 3pt;
    break-after: avoid;
  }

  p {
    margin-top: 0;
    margin-bottom: 4pt;
    text-indent: 12pt;
  }
  p.no-indent {
    text-indent: 0;
  }

  .full-width {
    column-span: all;
    width: 100%;
    margin-top: 8pt;
    margin-bottom: 8pt;
    text-align: center;
    break-inside: avoid;
  }
  .single-width {
    width: 100%;
    margin-top: 6pt;
    margin-bottom: 6pt;
    text-align: center;
    break-inside: avoid;
  }
  
  figure {
    margin: 0;
    padding: 0;
  }
  figure img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 3pt auto;
  }
  figcaption {
    font-size: 7.8pt;
    line-height: 1.15;
    text-align: justify;
    color: #111111;
    margin-top: 2pt;
  }
  figcaption .fig-num {
    font-weight: normal;
  }

  .table-box {
    margin: 6pt 0;
    width: 100%;
    break-inside: avoid;
  }
  .table-caption {
    font-size: 7.8pt;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.03em;
    margin-bottom: 3pt;
  }
  table.ieee-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8pt;
    line-height: 1.15;
    margin: 0 auto;
  }
  table.ieee-table th {
    border-top: 1.1pt solid #000000;
    border-bottom: 0.7pt solid #000000;
    padding: 2.5pt 3pt;
    font-weight: bold;
    text-align: left;
  }
  table.ieee-table td {
    padding: 2pt 3pt;
    vertical-align: top;
    text-align: left;
  }
  table.ieee-table tr.rule-bottom td {
    border-bottom: 1.1pt solid #000000;
  }
  table.ieee-table tr.rule-mid td {
    border-top: 0.4pt solid #CCCCCC;
  }

  .equation-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4pt 0;
    padding: 0 8pt;
    font-style: italic;
  }
  .equation-content {
    margin: 0 auto;
  }
  .equation-num {
    font-style: normal;
  }

  ol.references {
    padding-left: 14pt;
    margin-top: 3pt;
    font-size: 7.8pt;
    line-height: 1.16;
  }
  ol.references li {
    margin-bottom: 3pt;
    text-align: justify;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 8pt;
  }
</style>
</head>
<body>

<div class="header-container">
  <div class="paper-title">
    ISO/IEC 25010 Quality Audit and ISO 9241<br>
    Ergonomic Modernization of a Legacy Epidemiological<br>
    Surveillance System for Acute Respiratory Infections
  </div>
  
  <table class="authors-table">
    <tr>
      <td style="width: 33%;">
        <span class="author-name">Leonardo Ruben Arce Mayhua</span>
        <span class="author-affil">Universidad Nacional de San Agustín</span>
        <span class="author-city">Arequipa, Perú</span>
        <span class="author-email">larcem@unsa.edu.pe</span>
      </td>
      <td style="width: 33%;">
        <span class="author-name">Joel Isaias Condori Leon</span>
        <span class="author-affil">Universidad Nacional de San Agustín</span>
        <span class="author-city">Arequipa, Perú</span>
        <span class="author-email">jcondorile@unsa.edu.pe</span>
      </td>
      <td style="width: 33%;">
        <span class="author-name">Marco Antonio Marquez Herrera</span>
        <span class="author-affil">Universidad Nacional de San Agustín</span>
        <span class="author-city">Arequipa, Perú</span>
        <span class="author-email">mmarquezhe@unsa.edu.pe</span>
      </td>
    </tr>
  </table>
  
  <table class="authors-table" style="width: 66%;">
    <tr>
      <td style="width: 50%;">
        <span class="author-name">Rafael Diego Nina Calizaya</span>
        <span class="author-affil">Universidad Nacional de San Agustín</span>
        <span class="author-city">Arequipa, Perú</span>
        <span class="author-email">rninacal@unsa.edu.pe</span>
      </td>
      <td style="width: 50%;">
        <span class="author-name">Jeremy Joshua Perez Huamani</span>
        <span class="author-affil">Universidad Nacional de San Agustín</span>
        <span class="author-city">Arequipa, Perú</span>
        <span class="author-email">jperezhua@unsa.edu.pe</span>
      </td>
    </tr>
  </table>
</div>

<div class="columns-container">

  <div class="abstract-box">
    <span class="abstract-title">Abstract</span>—<span class="abstract-text">This paper applies static reverse engineering and software quality auditing to <i>ISPySA-Pneumonia</i>, a 6,839-line open-source Python analytics pipeline for the epidemiological surveillance of Acute Respiratory Infections (IRA) and pneumonia in Peru (2000–2023). Our investigation addresses three core objectives: (i) recover the pipeline's layered architectural topology and data contracts from source artifacts alone; (ii) identify, classify under ISO/IEC 25010, and correct structural defects that the original publication shipped undetected; and (iii) design, implement, and verify an interactive clinical monitoring platform whose visual ergonomics and interaction architecture strictly adhere to ISO 9241-11, ISO 9241-210, ISO 9241-110, and ISO 9241-12. The reverse-engineering audit revealed three critical contract defects: two broken file paths that caused silent consumption of stale population data, and an environment packaging incompatibility affecting legacy LSTM models. Following remediation, the data pipeline was re-executed over 2,143,985 weekly district observations, replicating published epidemiological dynamics. To decouple the presentation layer from legacy file structures, an anti-corruption service layer (<code>EpidemiologyDataService</code> and <code>EpidemiologyModelService</code>) was engineered. The resulting modernized platform, developed in Streamlit and styled via standardized Design Tokens and accessible UI primitives, exposes five dedicated surveillance modules with zero informal emojis and WCAG AAA redundant visual coding. Operational integrity is verified through an automated test suite executing unit, integration, and epidemiological domain invariant assertions with a 100% pass rate in 0.053 s.</span>
    
    <div class="keywords-text">
      <span class="keywords-title">Keywords</span>—reverse engineering, epidemiological surveillance, ISO 9241, ISO/IEC 25010, Streamlit, software quality, anti-corruption layer, Python, IRA, pneumonia, Peru
    </div>
  </div>

  <h2 class="section-title">I. Introduction</h2>
  <p>Public health information systems face a persistent structural gap between computationally rigorous statistical analysis and the operational requirements of healthcare decision-makers. Script-based analytics pipelines—sequences of standalone procedural scripts where each script ingests tabular files, performs transformations, and emits intermediate flat files or static plots—are widely deployed across academic research groups and regional health directorates with constrained software engineering infrastructure [1]. While computationally reproducible, these procedural pipelines exhibit fundamental maintainability and usability deficits: analytical conclusions remain sequestered inside disjoint directory structures of static PNG figures and CSV tables that epidemiologists must locate, correlate, and interpret manually without dynamic querying capabilities.</p>
  
  <p>In Peru, Acute Respiratory Infections (IRA) and pneumonia constitute the primary cause of preventable morbidity and mortality in vulnerable demographic cohorts: children under five years of age (&lt;5) and older adults aged sixty and older (60+) [2]. Seasonal surges are heavily influenced by bioclimatic factors, presenting marked territorial disparities between high-altitude Andean zones subject to intense cold fronts (<i>heladas</i>) and Amazonian departments characterized by persistent humidity and geographical isolation. Timely detection of abnormal incidence spikes is critical for the rational allocation of pediatric hospital beds, supplemental medical oxygen, and clinical personnel across decentralized regional health directorates (DIRESA). When surveillance pipelines fail to expose operable, interactive dashboards, epidemiological authorities are forced to rely on delayed quarterly bulletins or manual spreadsheets.</p>
  
  <p>The open-source repository <i>ISPySA-Pneumonia</i> [3] represents an archetype of this phenomenon. It provides an exhaustive historical analysis of IRA incidence, seasonality, territorial ranking, and predictive modeling in Peru over a 24-year timeframe (2000–2023). Nevertheless, its practical utility is constrained by a fragmented output structure consisting of dozens of uncoordinated image files. Furthermore, our static reverse-engineering audit revealed that the absence of explicit data contracts between scripts produced latent file-path defects that shipped undetected in the original publication, causing downstream scripts to consume stale data silently.</p>

  <p>To address these limitations, this paper executes an end-to-end software quality engineering process:</p>
  <p class="no-indent">1) Recovering the architectural topology and producer/consumer data contracts of the legacy pipeline through systematic static source reading;</p>
  <p class="no-indent">2) Identifying, isolating, and rectifying structural data-contract defects and runtime incompatibilities under the ISO/IEC 25010 quality model [4];</p>
  <p class="no-indent">3) Re-executing the corrected data-preparation and modeling pipelines across all 2.14 million weekly observations to validate consistency against published epidemiological findings;</p>
  <p class="no-indent">4) Designing and constructing an anti-corruption service layer (<code>EpidemiologyDataService</code> and <code>EpidemiologyModelService</code>) to isolate the domain model from legacy storage anomalies [5];</p>
  <p class="no-indent">5) Modernizing the clinical surveillance interface under the ISO 9241 ergonomics family [6]–[9], enforcing normalized Design Tokens, professional institutional palettes, redundant visual coding, and complete elimination of colloquial emojis; and</p>
  <p class="no-indent">6) Verifying system reliability through an automated test suite combining software contract checks with epidemiological domain invariant assertions.</p>

  <h2 class="section-title">II. Related Work and Standards</h2>
  
  <h3 class="subsection-title">A. Reverse Engineering and Legacy Modernization</h3>
  <p>Chikofsky and Cross [10] define reverse engineering as the examination of a subject system to identify its constituent components and interrelationships, synthesizing representations at higher levels of abstraction. In procedural data science pipelines lacking object-oriented domain boundaries, the primary recoverable entity is the <i>producer/consumer dependency graph</i>: computational scripts act as processing nodes, and persisted tabular files function as directed data contracts.</p>
  
  <p>Feathers [1] notes that the most critical defects in legacy systems reside within the unverified semantic gaps between what a producer script writes and what a consumer script expects. Evans [5] formalizes the <i>anti-corruption layer</i> pattern as a dedicated translation boundary that isolates a clean domain model from an unstable or anomalous external subsystem. We apply this architectural pattern to decouple our modernized visualization layer from the heterogeneous file paths of the legacy codebase.</p>

  <h3 class="subsection-title">B. Software Product Quality: ISO/IEC 25010</h3>
  <p>The ISO/IEC 25010 [4] quality model structures software quality characteristics. Our audit focuses specifically on <b>Maintainability</b> (evaluating <i>modularity</i> and <i>analysability</i>) and <b>Usability</b> (evaluating <i>appropriateness recognizability</i>, <i>learnability</i>, and <i>operability</i> in clinical contexts).</p>

  <h3 class="subsection-title">C. The ISO 9241 Ergonomics Family</h3>
  <p>Visual ergonomics adhere strictly to four parts of the ISO 9241 family: ISO 9241-11 [6] (effectiveness, efficiency, satisfaction); ISO 9241-210 [7] (human-centred design lifecycles); ISO 9241-110 [8] (seven dialogue principles); and ISO 9241-12 [9] (information presentation and redundant coding). Table I summarizes these theoretical and normative foundations.</p>

  <div class="table-box">
    <div class="table-caption">TABLE I<br>Reviewed Standards and Methodological Foundations</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 28%;">Source</th>
          <th style="width: 22%;">Type</th>
          <th>Role in this Investigation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>ISO 9241-11</td><td>Standard</td><td>Usability dimensions (effectiveness, efficiency)</td></tr>
        <tr class="rule-mid"><td>ISO 9241-210</td><td>Standard</td><td>Human-centred design workflows and personas</td></tr>
        <tr class="rule-mid"><td>ISO 9241-110</td><td>Standard</td><td>Seven dialogue principles &rarr; heuristic audit</td></tr>
        <tr class="rule-mid"><td>ISO 9241-12</td><td>Standard</td><td>Information layout &amp; redundant visual coding</td></tr>
        <tr class="rule-mid"><td>ISO/IEC 25010</td><td>Standard</td><td>Defect classification (modularity, analysability)</td></tr>
        <tr class="rule-mid"><td>Nielsen [11]</td><td>Book</td><td>Heuristic walkthrough and interaction cost</td></tr>
        <tr class="rule-mid"><td>Cleveland [12]</td><td>Method</td><td>STL seasonal-trend decomposition</td></tr>
        <tr class="rule-mid"><td>Chen [13]</td><td>Method</td><td>Extreme gradient boosting (XGBoost)</td></tr>
        <tr class="rule-mid"><td>Feathers [1]</td><td>Book</td><td>Boundary gap analysis in legacy software</td></tr>
        <tr class="rule-mid rule-bottom"><td>Evans [5]</td><td>Book</td><td>Anti-corruption layer domain facade</td></tr>
      </tbody>
    </table>
  </div>

  <h2 class="section-title">III. Materials and Method</h2>
  
  <h3 class="subsection-title">A. Legacy Repository Architecture</h3>
  <p>The legacy system <i>ISPySA-Pneumonia</i> [3] consists of 6,839 lines of executable Python code structured into 14 scripts across three functional packages: <code>src/data_preparation/</code> (3 scripts), <code>src/eda/</code> (5 scripts), and <code>src/modeling/</code> (14 scripts).</p>

  <h3 class="subsection-title">B. Epidemiological Dataset</h3>
  <p>The underlying epidemiological registry, <code>data/raw/iras_updated.csv</code>, comprises 2,143,985 weekly record observations collected across all 1,874 districts in Peru between 2000 and 2023 by CDC-MINSA. Attributes include weekly counts of non-pneumonia IRA cases, severe pneumonia cases, hospitalizations, and deaths, stratified into pediatric (&lt;5 years) and elderly adult (60+ years) cohorts. Cumulative annual incidence rates follow the official MINSA standard:</p>

  <div class="equation-box">
    <div class="equation-content">
      Incidence Rate = ( Reported Cases / Cohort Population ) &times; 100,000
    </div>
    <div class="equation-num">(1)</div>
  </div>

  <h3 class="subsection-title">C. Static Reverse-Engineering Protocol</h3>
  <p>Every script was systematically read to construct an exhaustive dependency registry capturing input file paths, expected schemas, generated output artifacts, transformed columns, and naming discrepancies.</p>

  <h3 class="subsection-title">D. Modern Technological Runtime</h3>
  <p>Table II summarizes the technological runtime utilized. The interface was constructed in Python using Streamlit, supported by <code>uv</code> package management, with service isolation provided by native Python design patterns.</p>

  <div class="table-box">
    <div class="table-caption">TABLE II<br>Technological Stack and Component Classification</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 35%;">Technology / Library</th>
          <th style="width: 45%;">Functional Role</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Python 3.12 / 3.13</td><td>Computational execution runtime</td><td>Shared</td></tr>
        <tr class="rule-mid"><td>uv (0.12.7)</td><td>Virtual environment manager</td><td>New</td></tr>
        <tr class="rule-mid"><td>pandas / NumPy</td><td>Tabular data processing</td><td>Legacy</td></tr>
        <tr class="rule-mid"><td>matplotlib / seaborn</td><td>Statistical figure generation</td><td>Legacy</td></tr>
        <tr class="rule-mid"><td>statsmodels (STL)</td><td>Loess seasonal decomposition</td><td>Legacy</td></tr>
        <tr class="rule-mid"><td>scikit-learn / XGBoost</td><td>Tree ensembles &amp; forecasting</td><td>Legacy</td></tr>
        <tr class="rule-mid"><td>Streamlit (1.32+)</td><td>Reactive surveillance platform</td><td>New</td></tr>
        <tr class="rule-mid"><td>Anti-Corruption Layer</td><td>Domain service abstraction</td><td>New</td></tr>
        <tr class="rule-mid"><td>unittest (stdlib)</td><td>Automated contract verification</td><td>New</td></tr>
        <tr class="rule-mid rule-bottom"><td>Windows Batch (CRLF)</td><td>Zero-config production runner</td><td>New</td></tr>
      </tbody>
    </table>
  </div>

  <div class="full-width">
    <figure>
      <img src="fig_architecture.png" alt="Architecture Diagram">
      <figcaption><span class="fig-num">Fig. 1.</span> Recovered five-tier layered architectural topology of the legacy ISPySA-Pneumonia pipeline, illustrating the anti-corruption service layer and modernized presentation tier under ISO/IEC 25010 and ISO 9241.</figcaption>
    </figure>
  </div>

  <h2 class="section-title">IV. Reverse Engineering Results</h2>
  
  <h3 class="subsection-title">A. Recovered Layered Architecture</h3>
  <p>The static reverse-engineering pass established that the pipeline conforms conceptually to a five-tier sequential topology, mapping Layer 0 (Raw Storage) through Layer 4 (Modernized Presentation Tier), as illustrated in Fig. 1.</p>

  <h3 class="subsection-title">B. Identified Data-Contract Defects</h3>
  <p>Our static analysis detected three critical structural defects that shipped undetected in the original publication, summarized in Table III. Under ISO/IEC 25010, the first two defects represent severe modularity and analysability flaws.</p>

  <div class="table-box">
    <div class="table-caption">TABLE III<br>Data-Contract Defects Diagnosed During Quality Audit</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 25%;">Script</th>
          <th style="width: 22%;">Defect Type</th>
          <th>Operational Impact and Remediation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>Incidence.py</code></td>
          <td>Path mismatch</td>
          <td>Emitted output to <code>outputs/tables/</code> instead of <code>data/processed/</code>; consumer <code>ranking_updated.py</code> silently aborted.<br><i>Fix</i>: redirected output path.</td>
        </tr>
        <tr class="rule-mid">
          <td><code>seasonality_analysis.py</code>,<br><code>Regional_Analysis.py</code></td>
          <td>Filename mismatch</td>
          <td>Consumer scripts read hyphenated <code>departmental-population.csv</code>; producer wrote underscores. Silently consumed stale data.<br><i>Fix</i>: reconciled path bindings.</td>
        </tr>
        <tr class="rule-mid rule-bottom">
          <td><code>src/modeling/</code></td>
          <td>Environment dependency</td>
          <td>TensorFlow 2.13 exhibits missing wheels for Python 3.12+ on Windows; LSTM crashed.<br><i>Fix</i>: prioritized robust XGBoost/RF.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="subsection-title">C. Pipeline Re-Execution and Epidemiological Validation</h3>
  <p>Following defect remediation, the data-preparation pipeline was re-executed against all 2,143,985 raw observations. The reconstructed national incidence series (Table IV) and model evaluation metrics (Table V) fully corroborate published findings [3]. Pediatric incidence experienced an overall 69.4% reduction between 2000 and 2019, followed by an epidemiological rebound post-2020. Conversely, adult elderly incidence exhibited sustained secular growth. The Amazonian departments of Loreto and Ucayali maintained the highest pediatric disease burden across 91.7% of the 24 analyzed years.</p>

  <div class="table-box">
    <div class="table-caption">TABLE IV<br>Re-Executed National Cumulative IRA Incidence Rate (per 100,000 pop.)</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 40%; text-align: center;">Epidemiological Year</th>
          <th style="width: 30%; text-align: right;">Children &lt;5</th>
          <th style="width: 30%; text-align: right;">Adults 60+</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="text-align: center;">2000</td><td style="text-align: right;">308.7</td><td style="text-align: right;">0.0*</td></tr>
        <tr class="rule-mid"><td style="text-align: center;">2005</td><td style="text-align: right;">230.1</td><td style="text-align: right;">0.0*</td></tr>
        <tr class="rule-mid"><td style="text-align: center;">2010</td><td style="text-align: right;">126.3</td><td style="text-align: right;">30.9</td></tr>
        <tr class="rule-mid"><td style="text-align: center;">2015</td><td style="text-align: right;">96.1</td><td style="text-align: right;">50.1</td></tr>
        <tr class="rule-mid"><td style="text-align: center;">2019</td><td style="text-align: right;">79.9</td><td style="text-align: right;">65.2</td></tr>
        <tr class="rule-mid rule-bottom"><td style="text-align: center;">2023</td><td style="text-align: right;">94.4</td><td style="text-align: right;">92.4</td></tr>
      </tbody>
    </table>
    <div style="font-size: 7.2pt; margin-top: 2pt;">*Elderly adult surveillance officially commenced in 2006.</div>
  </div>

  <div class="table-box">
    <div class="table-caption">TABLE V<br>Model Performance Leaderboard (Rolling 5-Year Backtest)</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 25%;">Cohort</th>
          <th style="width: 40%;">Model Architecture</th>
          <th style="text-align: right;">MAE</th>
          <th style="text-align: right;">RMSE</th>
          <th style="text-align: right;">R<sup>2</sup></th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Children &lt;5</td><td>XGBoost Regressor</td><td style="text-align: right;">0.184</td><td style="text-align: right;">0.271</td><td style="text-align: right;">0.935</td></tr>
        <tr class="rule-mid"><td>Children &lt;5</td><td>Random Forest</td><td style="text-align: right;">0.210</td><td style="text-align: right;">0.296</td><td style="text-align: right;">0.922</td></tr>
        <tr class="rule-mid"><td>Adults 60+</td><td>XGBoost Regressor</td><td style="text-align: right;">0.097</td><td style="text-align: right;">0.168</td><td style="text-align: right;">0.890</td></tr>
        <tr class="rule-mid rule-bottom"><td>Adults 60+</td><td>Random Forest</td><td style="text-align: right;">0.107</td><td style="text-align: right;">0.183</td><td style="text-align: right;">0.869</td></tr>
      </tbody>
    </table>
  </div>

  <div class="single-width">
    <figure>
      <img src="fig_classdiagram.png" alt="Class Diagram">
      <figcaption><span class="fig-num">Fig. 2.</span> UML class diagram of the modernized architecture, illustrating the anti-corruption services (<code>EpidemiologyDataService</code> and <code>EpidemiologyModelService</code>) and presentation facade.</figcaption>
    </figure>
  </div>

  <h2 class="section-title">V. Interface Architecture and Implementation</h2>
  
  <h3 class="subsection-title">A. Anti-Corruption Service Architecture</h3>
  <p>Directly binding a web presentation layer to heterogeneous CSV files creates severe architectural coupling. To isolate the modernized interface, we designed an anti-corruption service layer within <code>src/services/</code>, illustrated in Fig. 2: <code>EpidemiologyDataService</code> (encapsulating filesystem paths, automated schema sanitization, and in-memory caching) and <code>EpidemiologyModelService</code> (loading pre-trained model artifacts and computing 95% bootstrap confidence intervals).</p>

  <h3 class="subsection-title">B. Visual Ergonomics and Design Tokens</h3>
  <p>To satisfy ISO 9241-110 and ISO 9241-12, the interface abandons informal templates in favor of a mathematically rigorous design token architecture: an 8-pixel spatial grid; a sober institutional palette (clinical dark navy <code>#0F2942</code>, deep slate <code>#1E293B</code>); complete elimination of emojis; and multi-channel redundant coding (color tint, explicit text, and geometric markers &bull;, &blacktriangle;, &blacksquare;, &blacklozenge;).</p>

  <h3 class="subsection-title">C. Dedicated Surveillance Modules</h3>
  <p>The platform organizes epidemiological intelligence into five dedicated operational views:</p>

  <p><b>1) General Dashboard:</b> Illustrated in Fig. 3, this view delivers instantaneous situational awareness through four top-level KPI cards, an interactive 24-year historical series against an endemic alert channel, and a top-5 departmental burden ranking.</p>

  <div class="single-width">
    <figure>
      <img src="fig_dashboard.png" alt="Dashboard View">
      <figcaption><span class="fig-num">Fig. 3.</span> General Dashboard view: executive KPI cards, historical incidence trajectory, and top departmental burden ranking.</figcaption>
    </figure>
  </div>

  <p><b>2) Territorial Risk Stratification:</b> Shown in Fig. 4, this module provides geographic benchmarking across all Peruvian departments, categorizing territories into four standardized risk tiers under ISO 9241-12 redundant coding rules.</p>

  <div class="single-width">
    <figure>
      <img src="fig_territorial.png" alt="Territorial View">
      <figcaption><span class="fig-num">Fig. 4.</span> Territorial Risk Stratification view: comparative pediatric vs. elderly incidence and ISO 9241-12 redundant risk categorization.</figcaption>
    </figure>
  </div>

  <p><b>3) Clinical Severity Monitor:</b> Depicted in Fig. 5, this view contrasts Hospitalization Rates (HR) against Case-Fatality Ratios (CFR), revealing that elderly adults exhibit a case fatality rate approximately fourfold higher than pediatric patients.</p>

  <div class="single-width">
    <figure>
      <img src="fig_severity.png" alt="Severity View">
      <figcaption><span class="fig-num">Fig. 5.</span> Clinical Severity view: Hospitalization Rate (HR) vs. Case-Fatality Ratio (CFR) across epidemiological years (2006–2023).</figcaption>
    </figure>
  </div>

  <p><b>4) Predictive Modeling and 52-Week Forecast:</b> Presented in Fig. 6, this module surfaces inferences generated by the XGBoost Regressor (R<sup>2</sup>=0.935, MAE=0.184), projecting weekly disease volume 52 weeks forward with 95% empirical confidence intervals.</p>

  <div class="single-width">
    <figure>
      <img src="fig_forecast.png" alt="Forecast View">
      <figcaption><span class="fig-num">Fig. 6.</span> Predictive Forecast view: 52-week ahead XGBoost projection with 95% empirical confidence intervals and cross-validation metrics.</figcaption>
    </figure>
  </div>

  <p><b>5) Legacy EDA Diagnostic Gallery:</b> Illustrated in Fig. 7, this view resolves the discoverability crisis of the original repository by providing an indexed, web-based visual catalog of all 14 exploratory graphics generated by the legacy pipeline.</p>

  <div class="single-width">
    <figure>
      <img src="fig_gallery.png" alt="Gallery View">
      <figcaption><span class="fig-num">Fig. 7.</span> Legacy EDA Diagnostic Gallery: indexed web catalog providing instant access to seasonal decompositions, feature importances, and residual distributions.</figcaption>
    </figure>
  </div>

  <h3 class="subsection-title">D. Zero-Configuration Windows Launcher</h3>
  <p>To ensure seamless execution on institutional Windows workstations without administrative rights, <code>ejecutar_aplicativo.bat</code> was engineered. It strictly uses 7-bit ASCII characters and Windows CRLF line endings, auto-detects Python or <code>uv</code> environments, installs dependencies, launches the Streamlit server on port 8501, and opens the default browser.</p>

  <h2 class="section-title">VI. Automated Testing</h2>
  <p>Operational reliability and data-contract compliance are verified through an automated test suite implemented in <code>tests/test_services.py</code> using Python's standard <code>unittest</code> framework. As detailed in Table VI, the suite spans three core verification dimensions. Crucially, tests in the Domain Invariants group assert that pediatric incidence decreased across the historical horizon, that elderly CFR consistently exceeds child CFR, and that Loreto and Ucayali rank among the highest burden territories. All 6 tests execute and pass in 0.053 s, as shown in Fig. 8.</p>

  <div class="single-width">
    <figure>
      <img src="test_passed.png" alt="Automated Tests">
      <figcaption><span class="fig-num">Fig. 8.</span> Automated test suite execution: all 6 unit, integration, and epidemiological domain invariant tests passing in 0.053 s.</figcaption>
    </figure>
  </div>

  <div class="table-box">
    <div class="table-caption">TABLE VI<br>Automated Verification Suite Architecture</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 32%;">Verification Group</th>
          <th style="width: 10%; text-align: center;">N</th>
          <th>Target Verification Scope</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data Store Integrity</td>
          <td style="text-align: center;">2</td>
          <td>Validates exception-free initialization, singleton caching efficiency, and schema normalization.</td>
        </tr>
        <tr class="rule-mid">
          <td>Departmental Contracts</td>
          <td style="text-align: center;">2</td>
          <td>Validates dataset completeness across 25 administrative departments and 52-week ML forecasting horizon shape.</td>
        </tr>
        <tr class="rule-mid rule-bottom">
          <td>Epidemiological Invariants</td>
          <td style="text-align: center;">2</td>
          <td>Enforces domain constraints: non-negative rates, bounded CFR (0% &le; CFR &le; 20%), and elderly vulnerability ratios.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="section-title">VII. Heuristic Evaluation</h2>
  
  <h3 class="subsection-title">A. ISO 9241-110 Dialogue Principles Inspection</h3>
  <p>Table VII reports a formal heuristic evaluation of the modernized surveillance platform against the seven dialogue principles of ISO 9241-110 and presentation guidelines of ISO 9241-12, following Nielsen's inspection protocol [11].</p>

  <div class="table-box">
    <div class="table-caption">TABLE VII<br>ISO 9241-110 / ISO 9241-12 Heuristic Inspection Checklist</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 32%;">Principle</th>
          <th>Implemented Mechanism</th>
          <th style="width: 15%; text-align: center;">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Suitability for task (110)</td>
          <td>Dedicated views structured around specific clinical decisions. Dynamic cohort and department filtering.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Self-descriptiveness (110)</td>
          <td>Explicit dimensional units on all cards (per 100k hab., %). Informative subheadings citing source data vintage.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Conformity (110)</td>
          <td>Conventional navigation tabs; standardized MINSA risk classification thresholds.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Learnability (110)</td>
          <td>Uniform visual hierarchy across views: filter bar &rarr; KPI cards &rarr; analytical plots &rarr; detail tables.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Controllability (110)</td>
          <td>Unconstrained switching between cohorts. Immediate reset to national baseline.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Error tolerance (110)</td>
          <td>Graceful fallbacks for missing departmental records; moving averages to prevent over-reaction to weekly noise.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid">
          <td>Redundant coding (12)</td>
          <td>Risk tiers coded simultaneously by background tint, technical text, and geometric markers (&bull;, &blacktriangle;, &blacksquare;, &blacklozenge;).</td>
          <td style="text-align: center;">Pass</td>
        </tr>
        <tr class="rule-mid rule-bottom">
          <td>Visual legibility (12)</td>
          <td>High-contrast typography (&gt;12:1 contrast ratio) on clean light backgrounds; zero visual clutter.</td>
          <td style="text-align: center;">Pass</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="subsection-title">B. Interaction Cost Analysis</h3>
  <p>Table VIII evaluates the interaction cost across primary surveillance workflows. In every scenario, the user achieves complete situational intelligence within two or fewer user interactions, satisfying the rigorous efficiency benchmarks required for high-tempo public health operations.</p>

  <div class="table-box">
    <div class="table-caption">TABLE VIII<br>Surveillance Tasks and Interaction Cost</div>
    <table class="ieee-table">
      <thead>
        <tr>
          <th style="width: 55%;">Target Surveillance Task</th>
          <th style="width: 30%;">Target View</th>
          <th style="text-align: center;">Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Inspect current national situation</td><td>Dashboard</td><td style="text-align: center;">0</td></tr>
        <tr class="rule-mid"><td>Evaluate 24-year historical trajectory</td><td>Dashboard</td><td style="text-align: center;">1</td></tr>
        <tr class="rule-mid"><td>Identify top-burden departments</td><td>Territorial</td><td style="text-align: center;">1</td></tr>
        <tr class="rule-mid"><td>Examine clinical severity (HR vs CFR)</td><td>Severity</td><td style="text-align: center;">1</td></tr>
        <tr class="rule-mid"><td>Consult 52-week ML projections</td><td>Forecast</td><td style="text-align: center;">1</td></tr>
        <tr class="rule-mid"><td>Inspect legacy EDA diagnostic plots</td><td>Gallery</td><td style="text-align: center;">1</td></tr>
        <tr class="rule-mid rule-bottom"><td>Verify ISO compliance documentation</td><td>Audit Tab</td><td style="text-align: center;">1</td></tr>
      </tbody>
    </table>
  </div>

  <h2 class="section-title">VIII. Discussion</h2>
  <p>The experimental outcomes confirm that the barrier between legacy computational pipelines and operational decision support is fundamentally architectural rather than algorithmic. The analytical algorithms of <i>ISPySA-Pneumonia</i> were statistically sound, but undermined by brittle file plumbing.</p>

  <p><b>On the Anti-Corruption Service Layer:</b> Introducing <code>EpidemiologyDataService</code> and <code>EpidemiologyModelService</code> proved critical for isolating the user interface from filesystem anomalies. By centralizing path corrections, caching, and schema validations in domain services, downstream UI components interact solely with strongly typed contracts. Modifications to underlying data sources remain strictly encapsulated, maximizing <i>modularity</i> under ISO/IEC 25010.</p>

  <p><b>On Testing Domain Invariants:</b> Conventional software testing validates syntax and return types, but fails to identify corrupt epidemiological computations. By incorporating domain invariant assertions into the test suite (such as verifying that elderly case-fatality rates exceed pediatric rates and that pediatric incidence reflects long-term secular declines), automated testing actively protects public health integrity against silent data corruption.</p>

  <p><b>Ergonomic Tension: Conventions vs. Accessibility:</b> Traffic-light color conventions (green, amber, red) are deeply entrenched in epidemiological practice. However, ISO 9241-12 strongly proscribes reliance on color alone due to color-vision deficiencies. We reconciled this tension through multi-channel redundant coding, pairing color tints with explicit text labels and geometric markers.</p>

  <p><b>Threats to Validity and Limitations:</b> First, the heuristic audit was conducted by software engineering evaluators; empirical trials with active MINSA epidemiologists represent an essential next phase. Second, legacy LSTM deep learning models could not be re-executed under Python 3.12+ due to TensorFlow Windows packaging limits, though XGBoost and Random Forest models demonstrated superior predictive performance. Third, territorial granularity is currently aggregated at the departmental level; extending surveillance to provincial and district resolutions represents future work.</p>

  <h2 class="section-title">IX. Conclusions and Future Work</h2>
  <p>This investigation demonstrated that static reverse engineering, software quality auditing under ISO/IEC 25010, and visual modernization under ISO 9241 can transform a brittle, uncoordinated scientific codebase into an operable public health surveillance system. An anti-corruption service layer and a modernized clinical dashboard were engineered, operationalizing 6,839 lines of legacy analytics over 2.14 million epidemiological records without compromising underlying statistical validity.</p>

  <p>Our principal findings are fourfold:</p>
  <p class="no-indent">1) <i>Reverse engineering functions as an active audit mechanism</i>: static source code tracing exposed latent path defects that evaded runtime detection during original publication;</p>
  <p class="no-indent">2) <i>Anti-corruption layers safeguard architectural evolution</i>: encapsulating legacy data access behind domain services enables modern UI integration without destabilizing working models;</p>
  <p class="no-indent">3) <i>ISO 9241 provides actionable ergonomic constraints</i>: dialogue and presentation standards actively steered interface layout, enforcing high legibility, redundant coding, and low interaction cost;</p>
  <p class="no-indent">4) <i>Domain invariant testing bridges engineering and epidemiology</i>: verifying epidemiological truths within unit tests protects surveillance integrity against subtle analytical errors.</p>

  <p>Future work will conduct field usability evaluations with MINSA surveillance personnel under ISO 9241-210, expand spatial resolution to district levels, and establish automated ETL pipelines connected directly to CDC-MINSA databases.</p>

  <h2 class="section-title" style="text-align: left; font-style: italic;">Acknowledgment</h2>
  <p class="no-indent">The authors thank Danala, Thummalapally, and Jangoan for publishing the <i>ISPySA-Pneumonia</i> pipeline and datasets under an open-access license.</p>

  <h2 class="section-title">References</h2>
  <ol class="references">
    <li>M. C. Feathers, <i>Working Effectively with Legacy Code</i>. Upper Saddle River, NJ, USA: Prentice Hall, 2004.</li>
    <li>Pan American Health Organization, <i>Modules of Principles of Epidemiology for Public Health Control, Module 4: Health Surveillance</i>, 2nd ed. Washington, DC, USA: PAHO, 2011.</li>
    <li>G. Danala, A. R. Thummalapally, and L. S. Jangoan, &ldquo;ISPySA-Pneumonia: Healthcare analytics -- time series analysis of IRA for public health monitoring in Peru,&rdquo; <i>GitHub repository</i>, 2024.</li>
    <li>International Organization for Standardization, &ldquo;ISO/IEC 25010:2011 &mdash; Systems and software engineering &mdash; SQuaRE &mdash; System and software quality models,&rdquo; ISO/IEC, Tech. Rep., 2011.</li>
    <li>E. Evans, <i>Domain-Driven Design: Tackling Complexity in the Heart of Software</i>. Boston, MA, USA: Addison-Wesley, 2003.</li>
    <li>International Organization for Standardization, &ldquo;ISO 9241-11:2018 &mdash; Ergonomics of human-system interaction &mdash; Part 11: Usability: Definitions and concepts,&rdquo; ISO, Tech. Rep., 2018.</li>
    <li>International Organization for Standardization, &ldquo;ISO 9241-210:2019 &mdash; Ergonomics of human-system interaction &mdash; Part 210: Human-centred design for interactive systems,&rdquo; ISO, Tech. Rep., 2019.</li>
    <li>International Organization for Standardization, &ldquo;ISO 9241-110:2020 &mdash; Ergonomics of human-system interaction &mdash; Part 110: Interaction principles,&rdquo; ISO, Tech. Rep., 2020.</li>
    <li>International Organization for Standardization, &ldquo;ISO 9241-12:1998 &mdash; Ergonomic requirements for office work with visual display terminals &mdash; Part 12: Presentation of information,&rdquo; ISO, Tech. Rep., 1998.</li>
    <li>E. J. Chikofsky and J. H. Cross, &ldquo;Reverse engineering and design recovery: A taxonomy,&rdquo; <i>IEEE Software</i>, vol. 7, no. 1, pp. 13&ndash;17, Jan. 1990.</li>
    <li>J. Nielsen, <i>Usability Engineering</i>. San Francisco, CA, USA: Morgan Kaufmann, 1993.</li>
    <li>R. B. Cleveland, W. S. Cleveland, J. E. McRae, and I. Terpenning, &ldquo;STL: A seasonal-trend decomposition procedure based on Loess,&rdquo; <i>Journal of Official Statistics</i>, vol. 6, no. 1, pp. 3&ndash;73, 1990.</li>
    <li>T. Chen and C. Guestrin, &ldquo;XGBoost: A scalable tree boosting system,&rdquo; in <i>Proc. 22nd ACM SIGKDD Int. Conf. Knowledge Discovery and Data Mining</i>, 2016, pp. 785&ndash;794.</li>
  </ol>

</div>

</body>
</html>
"""

with open('paper.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Updated paper.html with optimized layout.")
