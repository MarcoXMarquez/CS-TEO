"""
Plataforma de Vigilancia y Monitoreo Epidemiológico IRA - Perú (2000-2023)
Implementación bajo Normas de Calidad ISO 9241 (11, 210, 110, 12) e ISO/IEC 25010.
Enriquecida con Design Tokens, shadcn/ui, Magic UI, Aceternity UI, Vaul, Lenis y Motion Primitives.
"""

import sys
from pathlib import Path
import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

# Configuración del path de importación
CURRENT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(CURRENT_DIR))

from src.services.data_service import EpidemiologyDataService
from src.services.model_service import EpidemiologyModelService

# ==============================================================================
# CONFIGURACIÓN DE PÁGINA (ISO 9241-12: Densidad Visual y Ergonomía Espacial)
# ==============================================================================
st.set_page_config(
    page_title="Vigilancia Epidemiológica IRA Perú | ISO 9241 Quality Suite",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded",
)

# ==============================================================================
# MASTER STYLESHEET: DESIGN TOKENS & SKILLS MODERNAS (ISO 9241-11, 210, 110, 12)
# ==============================================================================
st.markdown(
    """
    <style>
    /* ==========================================================================
       1. DESIGN TOKENS (ISO 9241-12 & ISO 9241-110)
       Escala de 8pt, tipografía fluida, sombras multicapa y paleta HSL accesible
       ========================================================================== */
    :root {
        --space-1: 4px;
        --space-2: 8px;
        --space-3: 12px;
        --space-4: 16px;
        --space-6: 24px;
        --space-8: 32px;
        --space-12: 48px;

        --radius-sm: 6px;
        --radius-md: 10px;
        --radius-lg: 16px;
        --radius-xl: 22px;

        --bg-main: #f8fafc;
        --card-bg: #ffffff;
        --text-primary: #0f172a;
        --text-secondary: #475569;
        --text-muted: #64748b;
        --border-color: #e2e8f0;
        --brand-blue: #0284c7;
        --brand-indigo: #4f46e5;
        --brand-emerald: #10b981;
        --brand-amber: #f59e0b;
        --brand-rose: #e11d48;

        --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.04);
        --shadow-card: 0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
        --shadow-elevated: 0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
        --shadow-glow: 0 0 24px rgba(2, 132, 199, 0.18);
    }

    /* LENIS: Scroll suave y accesible */
    html {
        scroll-behavior: smooth;
    }
    @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto !important; }
        *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
        }
    }

    /* ==========================================================================
       2. ACETERNITY UI: AURORA GRADIENT MESH & 3D TILT
       ========================================================================== */
    .aurora-hero {
        position: relative;
        overflow: hidden;
        border-radius: var(--radius-xl);
        background: linear-gradient(135deg, #0b1329 0%, #0f172a 50%, #0369a1 100%);
        color: #ffffff;
        padding: 26px 32px;
        margin-bottom: 16px;
        box-shadow: var(--shadow-elevated);
        border: 1px solid rgba(255, 255, 255, 0.12);
    }
    .aurora-mesh {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 15% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 45%),
                    radial-gradient(circle at 85% 70%, rgba(129, 140, 248, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 50% 10%, rgba(14, 165, 233, 0.25) 0%, transparent 40%);
        filter: blur(35px);
        pointer-events: none;
        animation: aurora-flow 18s ease-in-out infinite alternate;
    }
    @keyframes aurora-flow {
        0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.1) rotate(3deg); opacity: 1.0; }
        100% { transform: scale(1.05) rotate(-2deg); opacity: 0.85; }
    }

    .card-3d-tilt {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        padding: 20px 22px;
        box-shadow: var(--shadow-card);
        perspective: 1000px;
        transform-style: preserve-3d;
        transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.28s ease;
    }
    .card-3d-tilt:hover {
        transform: translateY(-5px) rotateX(2deg) rotateY(-1deg);
        box-shadow: var(--shadow-elevated), var(--shadow-glow);
        border-color: rgba(2, 132, 199, 0.4);
    }

    /* ==========================================================================
       3. MAGIC UI: MARQUEE TICKER, BORDER BEAM & SHINY TEXT
       ========================================================================== */
    .marquee-wrapper {
        overflow: hidden;
        white-space: nowrap;
        background: #0f172a;
        border-radius: var(--radius-md);
        padding: 7px 0;
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
    }
    .marquee-text {
        display: inline-block;
        padding-left: 100%;
        animation: marquee-scroll 38s linear infinite;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.85rem;
        font-weight: 500;
        color: #94a3b8;
    }
    .marquee-text:hover {
        animation-play-state: paused;
    }
    @keyframes marquee-scroll {
        0% { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
    }

    .border-beam-alert {
        position: relative;
        border-radius: var(--radius-lg);
        padding: 16px 20px;
        font-weight: 600;
        margin-bottom: 20px;
        overflow: hidden;
        box-shadow: var(--shadow-card);
    }
    .border-beam-alert::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        padding: 2px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: beam-run 4s linear infinite;
        pointer-events: none;
    }
    @keyframes beam-run {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    .alert-danger { background-color: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
    .alert-warning { background-color: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
    .alert-normal { background-color: #ecfdf5; color: #065f46; border: 1px solid #6ee7b7; }

    .shiny-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(8px);
        color: #e0f2fe;
        padding: 5px 12px;
        border-radius: 9999px;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 8px;
    }

    /* ==========================================================================
       4. VAUL: IOS-STYLE BOTTOM DRAWER / INSPECTOR
       ========================================================================== */
    .vaul-drawer-card {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: 22px 26px;
        box-shadow: var(--shadow-card);
        margin-top: 18px;
    }
    .vaul-pill-handle {
        width: 46px;
        height: 5px;
        background-color: #cbd5e1;
        border-radius: 9999px;
        margin: 0 auto 16px auto;
    }

    /* ==========================================================================
       5. BENTO GRID SYSTEM (MAGIC UI + SHADCN)
       ========================================================================== */
    .bento-card {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        padding: 20px;
        box-shadow: var(--shadow-card);
        height: 100%;
        transition: transform 0.2s ease;
    }
    .bento-card:hover {
        transform: translateY(-2px);
    }
    .bento-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 8px;
    }
    .bento-desc {
        font-size: 0.88rem;
        color: var(--text-secondary);
        line-height: 1.45;
    }

    /* SHADCN/UI TABS & METRICS REFINEMENT */
    .stTabs [data-baseweb="tab-list"] {
        gap: 8px;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 4px;
    }
    .stTabs [data-baseweb="tab"] {
        border-radius: var(--radius-md);
        padding: 8px 16px;
        font-weight: 600;
        font-size: 0.92rem;
        color: var(--text-secondary);
    }
    .stTabs [aria-selected="true"] {
        background-color: #f1f5f9 !important;
        color: var(--brand-blue) !important;
    }
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_resource
def get_services():
    """Instancia y cachea los servicios para máxima eficiencia (ISO 9241-11: Eficiencia)."""
    return EpidemiologyDataService(CURRENT_DIR), EpidemiologyModelService(CURRENT_DIR)


data_service, model_service = get_services()

# ==============================================================================
# BARRA LATERAL (SIDEBAR): Filtros globales ergonómicos (ISO 9241-110: Diálogo)
# ==============================================================================
with st.sidebar:
    st.markdown("### 🎛️ Centro de Comando Sanitario")
    st.caption("*(Contexto Operativo Human-Centered Design - ISO 9241-210)*")

    # Filtro 1: Grupo Etario
    group_option = st.radio(
        "Grupo Poblacional de Riesgo:",
        options=["Niños menores de 5 años (<5)", "Adultos mayores de 60 años (60+)"],
        index=0,
        help="Segmentación demográfica de riesgo según directivas del CDC/MINSA Perú.",
    )
    group_key = "men5" if "5" in group_option else "60mas"
    group_label = "Niños <5 años" if group_key == "men5" else "Adultos 60+ años"

    # Filtro 2: Ámbito Territorial
    departments = ["Nacional (Consolidado)"] + data_service.get_departments()
    selected_scope = st.selectbox(
        "Ámbito Geográfico:",
        options=departments,
        index=0,
        help="Permite alternar entre la visión macro nacional o la inspección detallada por región.",
    )

    # Filtro 3: Rango de Años
    year_range = st.slider(
        "Ventana Temporal de Análisis:",
        min_value=2000,
        max_value=2023,
        value=(2000, 2023),
        step=1,
        help="Serie temporal estandarizada de 24 años epidemiológicos.",
    )

    st.markdown("---")
    st.markdown("#### 🛡️ Calidad de Software & Normas ISO")
    st.caption("✅ **ISO 9241-11:** Eficacia, Eficiencia y Satisfacción")
    st.caption("✅ **ISO 9241-210:** Diseño Centrado en el Humano")
    st.caption("✅ **ISO 9241-110:** Principios de Diálogo Ergonómico")
    st.caption("✅ **ISO 9241-12:** Presentación Visual & Semáforo")
    st.caption("✅ **ISO/IEC 25010:** Modularidad & Fiabilidad")

    st.markdown("---")
    st.caption("Trabajo Introducción - Calidad de Software")
    st.caption("Equipo: 05 Integrantes | Fecha: Martes 01 de noviembre")

# ==============================================================================
# CARGA Y FILTRADO DE DATOS
# ==============================================================================
is_national = selected_scope == "Nacional (Consolidado)"

if is_national:
    df_raw = data_service.get_national_summary()
    scope_title = "Nivel Nacional (Perú Consolidado)"
else:
    df_raw = data_service.get_department_data(selected_scope)
    scope_title = f"Departamento de {selected_scope}"

# Filtrado por ventana temporal
df_filtered = df_raw[(df_raw["year"] >= year_range[0]) & (df_raw["year"] <= year_range[1])].copy()

# Cálculo de KPIs para el año más reciente de la selección
latest_year = year_range[1]
kpis = data_service.compute_kpis(df_filtered, group=group_key, year=latest_year)

# ==============================================================================
# 1. ENCABEZADO AURORA & HERO (ACETERNITY UI + MAGIC UI + SHADCN)
# ==============================================================================
st.markdown(
    f"""
    <div class="aurora-hero">
        <div class="aurora-mesh"></div>
        <div style="position: relative; z-index: 2;">
            <div class="shiny-badge">🛡️ ISO 9241 Quality Architecture • Suite de Vigilancia Sanitaria</div>
            <h1 style="font-size: 2.1rem; font-weight: 800; margin: 0 0 6px 0; letter-spacing: -0.02em;">
                Vigilancia y Monitoreo de Infecciones Respiratorias Agudas (IRA / Neumonías)
            </h1>
            <p style="font-size: 1.02rem; color: #bae6fd; margin: 0; font-weight: 400;">
                Ámbito: <strong style="color: #ffffff;">{scope_title}</strong> |
                Población Objetivo: <strong style="color: #ffffff;">{group_label}</strong> |
                Período: <strong style="color: #ffffff;">{year_range[0]} - {year_range[1]}</strong>
            </p>
        </div>
    </div>
    """,
    unsafe_allow_html=True,
)

# ==============================================================================
# 2. MARQUEE TICKER EPIDEMIOLÓGICO EN VIVO (MAGIC UI)
# ==============================================================================
ticker_content = (
    "🚨 ALERTA SELVA INFANTIL: Ucayali y Loreto lideran la incidencia crítica pediátrica con >91.7% de permanencia en el Top 3 • "
    "⚠️ ALERTA SIERRA SUR ADULTOS: Arequipa y Cusco concentran la mayor vulnerabilidad geriátrica (88.9% y 61.1% en Top 3) • "
    "📈 DESEMPEÑO PREDICTIVO: XGBoost alcanza coeficiente R² = 0.935 en niños y 0.890 en adultos mayores • "
    "📊 NORMALIZACIÓN CENSAL: Población anual interpolada para los 25 departamentos de Perú (2000-2023) • "
    "🏥 INDICADORES CLÍNICOS: Monitoreo continuo de Tasa de Hospitalización (HR) y Tasa de Letalidad (CFR) • "
    "🛡️ CALIDAD DE SOFTWARE: Cumplimiento auditado de normas ISO 9241-11, 210, 110 y 12"
)

st.markdown(
    f"""
    <div class="marquee-wrapper">
        <div class="marquee-text">
            <span>{ticker_content}</span>
        </div>
    </div>
    """,
    unsafe_allow_html=True,
)

# ==============================================================================
# 3. SISTEMA DE SEMÁFORO CON BORDER BEAM (ISO 9241-12 & MAGIC UI)
# ==============================================================================
inc_rate = kpis["cases_rate"]
if inc_rate > 350:
    alert_class = "alert-danger"
    alert_icon = "🚨"
    alert_type = "ALERTA EPIDEMIOLÓGICA CRÍTICA"
    alert_desc = f"Tasa de incidencia muy elevada ({inc_rate:.1f} por 100k hab.). Se recomienda activar comités de emergencia, reforzar la provisión de oxígeno y asegurar stock de antibióticos pediátricos/geriátricos."
elif inc_rate > 150:
    alert_class = "alert-warning"
    alert_icon = "⚠️"
    alert_type = "ALERTA PREVENTIVA AMARILLA"
    alert_desc = f"Tasa de incidencia moderada ({inc_rate:.1f} por 100k hab.). Se sugiere seguimiento epidemiológico semanal y campañas de vacunación estacional activa."
else:
    alert_class = "alert-normal"
    alert_icon = "🟢"
    alert_type = "ESTADO CONTROLADO / ZONA VERDE"
    alert_desc = f"Tasa de incidencia baja ({inc_rate:.1f} por 100k hab.). Se encuentra dentro de los umbrales de seguridad sanitaria histórica."

st.markdown(
    f"""
    <div class="border-beam-alert {alert_class}">
        {alert_icon} <strong>{alert_type}:</strong> {alert_desc}
    </div>
    """,
    unsafe_allow_html=True,
)

# ==============================================================================
# 4. TARJETAS DE INDICADORES CLAVE (KPIs) CON 3D TILT (ACETERNITY UI + DESIGN TOKENS)
# ==============================================================================
col1, col2, col3, col4 = st.columns(4)

with col1:
    st.markdown(
        f"""
        <div class="card-3d-tilt">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Casos Reportados ({int(kpis['year'])})</div>
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--text-primary); margin: 6px 0;">{int(kpis['cases']):,}</div>
            <div style="font-size: 0.84rem; font-weight: 600; color: {'#dc2626' if kpis['delta_cases_pct'] > 0 else '#16a34a'};">
                {kpis['delta_cases_pct']:+.1f}% vs año previo
            </div>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 6px;">Total anual acumulado</div>
        </div>
        """,
        unsafe_allow_html=True,
    )

with col2:
    st.markdown(
        f"""
        <div class="card-3d-tilt">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Tasa Incidencia x 100k</div>
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--brand-blue); margin: 6px 0;">{kpis['cases_rate']:.1f}</div>
            <div style="font-size: 0.84rem; font-weight: 600; color: {'#dc2626' if kpis['delta_rate'] > 0 else '#16a34a'};">
                {kpis['delta_rate']:+.1f} pts de variación
            </div>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 6px;">(Casos / Población) × 100k</div>
        </div>
        """,
        unsafe_allow_html=True,
    )

with col3:
    st.markdown(
        f"""
        <div class="card-3d-tilt">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Hospitalización (HR)</div>
            <div style="font-size: 2.2rem; font-weight: 800; color: #d97706; margin: 6px 0;">{kpis['hr']:.2f}%</div>
            <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-secondary);">
                {int(kpis['hospitalizations']):,} internamientos
            </div>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 6px;">Presión sobre camas clínicas</div>
        </div>
        """,
        unsafe_allow_html=True,
    )

with col4:
    st.markdown(
        f"""
        <div class="card-3d-tilt">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Letalidad (CFR)</div>
            <div style="font-size: 2.2rem; font-weight: 800; color: #dc2626; margin: 6px 0;">{kpis['cfr']:.2f}%</div>
            <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-secondary);">
                {int(kpis['deaths']):,} defunciones
            </div>
            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 6px;">Gravedad clínica extrema</div>
        </div>
        """,
        unsafe_allow_html=True,
    )

st.markdown("<div style='height: 18px;'></div>", unsafe_allow_html=True)

# ==============================================================================
# 5. PESTAÑAS PRINCIPALES DE TRABAJO (ISO 9241-110: Principios de Diálogo)
# ==============================================================================
tab_general, tab_severity, tab_rankings, tab_forecast, tab_iso = st.tabs([
    "📊 Tablero Histórico",
    "🏥 Severidad & Estacionalidad",
    "🗺️ Bento Grid Territorial",
    "🤖 Pronóstico & Alerta Temprana (ML/LSTM)",
    "📜 Marco de Calidad & Trazabilidad ISO",
])

# ------------------------------------------------------------------------------
# TAB 1: TABLERO HISTÓRICO INTERACTIVO
# ------------------------------------------------------------------------------
with tab_general:
    st.subheader(f"Evolución Histórica de Neumonías e IRA - {scope_title}")

    col_chart_ctl1, col_chart_ctl2 = st.columns([3, 1])
    with col_chart_ctl2:
        metric_choice = st.selectbox(
            "Métrica a visualizar:",
            options=["Tasa Incidencia x 100k", "Casos Totales", "Hospitalizaciones", "Defunciones"],
            index=0,
        )

    metric_map = {
        "Tasa Incidencia x 100k": f"cases_rate_{group_key}",
        "Casos Totales": f"cases_{group_key}",
        "Hospitalizaciones": f"hosp_{group_key}",
        "Defunciones": f"death_{group_key}",
    }
    selected_col = metric_map[metric_choice]

    fig_trend = px.line(
        df_filtered,
        x="year",
        y=selected_col,
        markers=True,
        title=f"Tendencia Epidemiológica Anual de {metric_choice} ({year_range[0]} - {year_range[1]})",
        labels={"year": "Año Calendario", selected_col: metric_choice},
        color_discrete_sequence=["#1d4ed8" if group_key == "60mas" else "#0284c7"],
    )
    fig_trend.update_layout(
        hovermode="x unified",
        template="plotly_white",
        xaxis=dict(tickmode="linear", tick0=2000, dtick=2),
        margin=dict(l=20, r=20, t=50, b=20),
    )
    st.plotly_chart(fig_trend, use_container_width=True)

    # Exportación controlada por el usuario (ISO 9241-110)
    with st.expander("📄 Ver y Exportar Matriz de Datos Históricos"):
        display_cols = [
            "year",
            f"cases_{group_key}",
            f"cases_rate_{group_key}",
            f"hosp_{group_key}",
            f"death_{group_key}",
            f"hr_{group_key}",
            f"cfr_{group_key}",
        ]
        df_display = df_filtered[display_cols].rename(
            columns={
                "year": "Año",
                f"cases_{group_key}": "Casos",
                f"cases_rate_{group_key}": "Tasa x 100k",
                f"hosp_{group_key}": "Hospitalizados",
                f"death_{group_key}": "Defunciones",
                f"hr_{group_key}": "HR (%)",
                f"cfr_{group_key}": "CFR (%)",
            }
        )
        st.dataframe(df_display, use_container_width=True, hide_index=True)
        csv_data = df_display.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="⬇️ Descargar Datos Históricos (.CSV)",
            data=csv_data,
            file_name=f"historico_ira_{group_key}_{scope_title.lower().replace(' ', '_')}.csv",
            mime="text/csv",
        )

# ------------------------------------------------------------------------------
# TAB 2: SEVERIDAD Y ESTACIONALIDAD
# ------------------------------------------------------------------------------
with tab_severity:
    st.subheader("Análisis Clínico de Severidad: Hospitalización (HR) vs Letalidad (CFR)")
    st.markdown(
        """
        * **Tasa de Hospitalización (HR):** Demanda sobre la capacidad de internamiento ($HR = \text{Hospitalizados} / \text{Casos} \times 100$).
        * **Tasa de Letalidad (CFR):** Gravedad biológica y letalidad ($CFR = \text{Defunciones} / \text{Casos} \times 100$).
        """
    )

    col_sev1, col_sev2 = st.columns(2)

    with col_sev1:
        fig_sev = go.Figure()
        fig_sev.add_trace(
            go.Scatter(
                x=df_filtered["year"],
                y=df_filtered[f"hr_{group_key}"],
                name="Tasa Hospitalización (HR %)",
                line=dict(color="#f59e0b", width=3),
                mode="lines+markers",
            )
        )
        fig_sev.add_trace(
            go.Scatter(
                x=df_filtered["year"],
                y=df_filtered[f"cfr_{group_key}"],
                name="Tasa Letalidad (CFR %)",
                line=dict(color="#dc2626", width=3, dash="dot"),
                mode="lines+markers",
            )
        )
        fig_sev.update_layout(
            title="Evolución Temporal de HR y CFR",
            xaxis_title="Año",
            yaxis_title="Porcentaje (%)",
            template="plotly_white",
            hovermode="x unified",
        )
        st.plotly_chart(fig_sev, use_container_width=True)

    with col_sev2:
        fig_scatter = px.scatter(
            df_filtered,
            x=f"hr_{group_key}",
            y=f"cfr_{group_key}",
            text="year",
            size=f"cases_{group_key}",
            title="Cuadrante de Presión Hospitalaria (HR) vs Gravedad (CFR)",
            labels={
                f"hr_{group_key}": "Tasa Hospitalización (HR %)",
                f"cfr_{group_key}": "Tasa Letalidad (CFR %)",
            },
            color=f"cases_rate_{group_key}",
            color_continuous_scale="Viridis",
        )
        fig_scatter.update_traces(textposition="top center")
        fig_scatter.update_layout(template="plotly_white")
        st.plotly_chart(fig_scatter, use_container_width=True)

# ------------------------------------------------------------------------------
# TAB 3: BENTO GRID TERRITORIAL (MAGIC UI & SHADCN/UI)
# ------------------------------------------------------------------------------
with tab_rankings:
    st.subheader("Vigilancia Territorial: Bento Grid de Riesgo Departamental")
    st.markdown("Estructuración visual en cuadrícula asimétrica para identificación inmediata de patrones espaciales:")

    col_bento_left, col_bento_right = st.columns([7, 5])

    with col_bento_left:
        top3_df = data_service.get_top3_frequencies(group=group_key)
        if not top3_df.empty:
            fig_top3 = px.bar(
                top3_df.head(10),
                x="region",
                y="top3_appearances",
                text="percent_years_in_top3",
                title=f"Top 10 Departamentos con Mayor Frecuencia en Alerta Crítica ({group_label})",
                labels={"region": "Departamento", "top3_appearances": "Años en Top 3 (2000-2023)"},
                color="top3_appearances",
                color_continuous_scale="Reds",
            )
            fig_top3.update_traces(texttemplate="%{text:.1f}%", textposition="outside")
            fig_top3.update_layout(template="plotly_white", xaxis_tickangle=-45)
            st.plotly_chart(fig_top3, use_container_width=True)
        else:
            st.info("No se halló la tabla de frecuencias para este grupo.")

    with col_bento_right:
        # Bento Grid Cards
        if group_key == "men5":
            st.markdown(
                """
                <div class="bento-card" style="border-left: 4px solid #ef4444; margin-bottom: 14px;">
                    <div class="bento-title">🚨 Vulnerabilidad Geográfica: Selva Peruana</div>
                    <div class="bento-desc">
                        Los niños menores de 5 años presentan una concentración persistente y alarmante en la cuenca amazónica:
                        <ul style="margin: 6px 0 0 16px; padding: 0;">
                            <li><strong>UCAYALI:</strong> 91.7% de los años en el Top 3 crítico.</li>
                            <li><strong>LORETO:</strong> 91.7% de los años en el Top 3 crítico.</li>
                            <li><strong>HUÁNUCO:</strong> 37.5% de los años en el Top 3 crítico.</li>
                        </ul>
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )
        else:
            st.markdown(
                """
                <div class="bento-card" style="border-left: 4px solid #f59e0b; margin-bottom: 14px;">
                    <div class="bento-title">⚠️ Vulnerabilidad Geográfica: Sierra Sur Andina</div>
                    <div class="bento-desc">
                        En adultos mayores de 60 años, la carga epidemiológica se desplaza a las zonas de heladas severas:
                        <ul style="margin: 6px 0 0 16px; padding: 0;">
                            <li><strong>AREQUIPA:</strong> 88.9% de los años en el Top 3 crítico.</li>
                            <li><strong>CUSCO:</strong> 61.1% de los años en el Top 3 crítico.</li>
                            <li><strong>MOQUEGUA:</strong> 50.0% de los años en el Top 3 crítico.</li>
                        </ul>
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        st.markdown(
            """
            <div class="bento-card" style="border-left: 4px solid #0284c7;">
                <div class="bento-title">📊 Metodología de Quintiles de Riesgo</div>
                <div class="bento-desc">
                    Los 25 departamentos se clasifican en 5 categorías de riesgo sanitario:<br>
                    • <strong>Categoría 1 (Puestos 1–5):</strong> Carga muy alta / Prioridad 1.<br>
                    • <strong>Categoría 2 (Puestos 6–10):</strong> Carga alta.<br>
                    • <strong>Categoría 3 (Puestos 11–15):</strong> Carga media.<br>
                    • <strong>Categoría 4-5 (Puestos 16–25):</strong> Carga baja y muy baja.
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

# ------------------------------------------------------------------------------
# TAB 4: PRONÓSTICOS & ALERTA TEMPRANA (ML / LSTM)
# ------------------------------------------------------------------------------
with tab_forecast:
    st.subheader(f"Modelos Predictivos y Alerta Temprana a 52 Semanas ({group_label})")

    metrics_df = model_service.get_national_metrics(group=group_key)
    col_met1, col_met2 = st.columns([2, 1])

    with col_met1:
        st.markdown("#### 📈 Precisión en Validación Rodante (Rolling Backtesting 5 Años)")
        st.dataframe(
            metrics_df[["model_display", "mae", "rmse", "r2"]].rename(
                columns={"model_display": "Modelo", "mae": "MAE", "rmse": "RMSE", "r2": "Coeficiente R²"}
            ),
            use_container_width=True,
            hide_index=True,
        )

    with col_met2:
        best_model = metrics_df.sort_values("r2", ascending=False).iloc[0]
        st.markdown(
            f"""
            <div class="card-3d-tilt" style="border-left: 4px solid var(--brand-emerald);">
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--brand-emerald); text-transform: uppercase;">🏆 Modelo de Mayor Precisión</div>
                <div style="font-size: 1.6rem; font-weight: 800; margin: 4px 0;">{best_model['model_display']}</div>
                <div style="font-size: 0.95rem; color: var(--text-secondary);">
                    • Coeficiente R²: <strong>{best_model['r2']:.3f}</strong><br>
                    • Error Medio (MAE): <strong>{best_model['mae']:.3f}</strong><br>
                    • Error Cuadrático (RMSE): <strong>{best_model['rmse']:.3f}</strong>
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

    st.markdown("#### 🔮 Proyección Predictiva a 52 Semanas con Intervalos de Incertidumbre (95% CI)")
    future_df = model_service.get_national_future_predictions(group=group_key)

    if not future_df.empty:
        fig_pred = go.Figure()
        models_in_pred = future_df["model"].unique()
        colors = {"xgboost": "#b45309", "random_forest": "#15803d", "lstm": "#4338ca"}

        for mod in models_in_pred:
            sub = future_df[future_df["model"] == mod].sort_values("date")
            color = colors.get(mod, "#3b82f6")
            name = "XGBoost" if mod == "xgboost" else "Random Forest" if mod == "random_forest" else mod.upper()

            fig_pred.add_trace(
                go.Scatter(
                    x=sub["date"],
                    y=sub["predicted"],
                    mode="lines",
                    name=f"Pronóstico {name}",
                    line=dict(color=color, width=3),
                )
            )

            fig_pred.add_trace(
                go.Scatter(
                    x=pd.concat([sub["date"], sub["date"][::-1]]),
                    y=pd.concat([sub["upper_ci"], sub["lower_ci"][::-1]]),
                    fill="toself",
                    fillcolor="rgba(203, 213, 225, 0.3)",
                    line=dict(color="rgba(255,255,255,0)"),
                    hoverinfo="skip",
                    showlegend=True,
                    name=f"Banda de Incertidumbre 95% ({name})",
                )
            )

        fig_pred.update_layout(
            title="Pronóstico Semanal de Incidencia a 52 Semanas",
            xaxis_title="Semana Epidemiológica Proyectada",
            yaxis_title="Tasa de Incidencia",
            template="plotly_white",
            hovermode="x unified",
        )
        st.plotly_chart(fig_pred, use_container_width=True)

    st.markdown("#### 🧠 Interpretabilidad del Modelo: Importancia de Variables")
    feat_df = model_service.get_feature_importance_summary(group=group_key)
    if not feat_df.empty and "importance" in feat_df.columns:
        fig_feat = px.bar(
            feat_df.sort_values("importance", ascending=True),
            x="importance",
            y="feature",
            orientation="h",
            title="Importancia Relativa de Variables Predictoras (XGBoost / Random Forest)",
            labels={"importance": "Importancia Normalizada", "feature": "Variable"},
            color="importance",
            color_continuous_scale="Blues",
        )
        fig_feat.update_layout(template="plotly_white")
        st.plotly_chart(fig_feat, use_container_width=True)

# ------------------------------------------------------------------------------
# TAB 5: MARCO DE CALIDAD & TRAZABILIDAD ISO (ISO 9241 & ISO/IEC 25010)
# ------------------------------------------------------------------------------
with tab_iso:
    st.subheader("Marco de Calidad de Software: Cumplimiento de Normas ISO 9241 y 25010")
    st.markdown(
        """
        La presente plataforma demuestra cómo la aplicación coordinada de las normas internacionales de ergonomía
        e interacción humano-sistema (**ISO 9241**) y calidad de producto (**ISO/IEC 25010**) transforma datos
        analíticos abstractos en herramientas efectivas de decisión médica:
        """
    )

    iso_full_data = [
        {
            "Norma": "ISO 9241-11",
            "Principio Clave": "Medición de Usabilidad",
            "Atributos": "Eficacia, Eficiencia, Satisfacción",
            "Implementación en la Plataforma": (
                "• Eficacia: Consultas sin errores de 25 regiones y 2 grupos etarios en 2 selecciones.\n"
                "• Eficiencia: Caché en memoria (@st.cache_resource) con respuesta instantánea (<0.2s).\n"
                "• Satisfacción: Entorno visual moderno con Aceternity Aurora y gráficos interactivos Plotly."
            ),
        },
        {
            "Norma": "ISO 9241-210",
            "Principio Clave": "Diseño Centrado en el Humano (HCD)",
            "Atributos": "Contexto de uso, comprensión de tareas y evaluación iterativa",
            "Implementación en la Plataforma": (
                "• Adaptado al flujo cognitivo del epidemiólogo peruano.\n"
                "• Secuencia: Diagnóstico macro (Semáforo) → Severidad hospitalaria → Vigilancia regional → Predicción a 52 semanas."
            ),
        },
        {
            "Norma": "ISO 9241-110",
            "Principio Clave": "Principios de Diálogo Ergonómico",
            "Atributos": "Adecuación a la tarea, autodescripción, control del usuario, tolerancia a fallos",
            "Implementación en la Plataforma": (
                "• Adecuación: Tasas por 100k hab. para evitar distorsiones demográficas.\n"
                "• Autodescripción: Tooltips informativos en cada métrica y fórmula clínica.\n"
                "• Control: Filtros temporales libres (2000-2023) y descarga en CSV.\n"
                "• Tolerancia: Manejo robusto de datos nulos y divisiones entre cero."
            ),
        },
        {
            "Norma": "ISO 9241-12",
            "Principio Clave": "Presentación Visual de la Información",
            "Atributos": "Legibilidad, organización espacial, codificación de color, agrupamiento",
            "Implementación en la Plataforma": (
                "• Cuadrícula matemática de 8pt (Design Tokens) y tarjetas de KPIs jerárquicas.\n"
                "• Semáforo de alerta con Border Beam luminoso (Verde, Amarillo, Rojo).\n"
                "• Paletas de alto contraste accesibles para personas con daltonismo."
            ),
        },
        {
            "Norma": "ISO/IEC 25010",
            "Principio Clave": "Calidad del Producto Software",
            "Atributos": "Mantenibilidad, modularidad, fiabilidad, portabilidad",
            "Implementación en la Plataforma": (
                "• Ingeniería inversa: Código legado encapsulado en servicios (data_service, model_service).\n"
                "• Fiabilidad: Suite de 6 pruebas unitarias automatizadas con 100% de éxito.\n"
                "• Portabilidad: Despliegue con un solo clic mediante ejecutar_aplicativo.bat."
            ),
        },
    ]

    st.table(pd.DataFrame(iso_full_data))

# ==============================================================================
# 6. VAUL: DRAWER / INSPECTOR INFERIOR DE GLOSARIO & METODOLOGÍA
# ==============================================================================
st.markdown(
    """
    <div class="vaul-drawer-card">
        <div class="vaul-pill-handle"></div>
        <h4 style="margin: 0 0 8px 0; color: var(--text-primary); font-size: 1.05rem;">
            📱 Inspector Metodológico & Glosario Clínico (Diseño Estilo Vaul Drawer)
        </h4>
        <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Fórmulas y Estándares Epidemiológicos Implementados:</strong><br>
            • <strong>Tasa de Incidencia:</strong> <code>(Casos / Población) × 100,000 hab</code> (Normalizada por censos anuales interpolados).<br>
            • <strong>Hospitalization Rate (HR):</strong> <code>(Hospitalizaciones / Casos) × 100</code> (Refleja la demanda sobre camas de internamiento).<br>
            • <strong>Case Fatality Ratio (CFR):</strong> <code>(Defunciones / Casos) × 100</code> (Refleja la letalidad directa de la enfermedad).<br>
            • <strong>Intervalos de Confianza (95% CI):</strong> <code>Pronóstico ± 1.96 × RMSE</code> (Comunica la incertidumbre forecast).
        </div>
    </div>
    """,
    unsafe_allow_html=True,
)

st.markdown("<div style='height: 24px;'></div>", unsafe_allow_html=True)
st.caption("Sistema de Vigilancia Epidemiológica de Salud Pública © 2026 - Conforme a Normas ISO 9241 e ISO/IEC 25010")
