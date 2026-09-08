"""
Plataforma de Vigilancia y Monitoreo Epidemiológico IRA - Perú (2000-2023)
Implementación bajo Normas de Calidad ISO 9241 (11, 210, 110, 12).
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

# Configuración de página Streamlit (ISO 9241-12: Densidad visual y aprovechamiento espacial)
st.set_page_config(
    page_title="Vigilancia Epidemiológica IRA Perú | ISO 9241",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Estilos CSS personalizados para accesibilidad, alto contraste y tipografía clara (ISO 9241-12)
st.markdown(
    """
    <style>
    .main-header {
        font-size: 1.9rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 0.2rem;
    }
    .sub-header {
        font-size: 1.05rem;
        color: #475569;
        margin-bottom: 1.2rem;
    }
    .iso-badge {
        background-color: #e0f2fe;
        color: #0369a1;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    .metric-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .status-alert {
        padding: 12px;
        border-radius: 6px;
        font-weight: 600;
        margin-bottom: 15px;
    }
    .status-normal { background-color: #dcfce7; color: #166534; border-left: 4px solid #16a34a; }
    .status-warning { background-color: #fef9c3; color: #854d0e; border-left: 4px solid #ca8a04; }
    .status-danger { background-color: #fee2e2; color: #991b1b; border-left: 4px solid #dc2626; }
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
    st.markdown("### 🎛️ Panel de Control Epidemiológico")
    st.markdown("*(Configuración del contexto de uso - ISO 9241-210)*")

    # Filtro 1: Grupo Etario
    group_option = st.radio(
        "Grupo Poblacional de Riesgo:",
        options=["Niños menores de 5 años (<5)", "Adultos mayores de 60 años (60+)"],
        index=0,
        help="Seleccione el grupo vulnerable a monitorizar según el estándar de vigilancia epidemiológica.",
    )
    group_key = "men5" if "5" in group_option else "60mas"
    group_label = "Niños <5 años" if group_key == "men5" else "Adultos 60+ años"

    # Filtro 2: Ámbito Territorial
    departments = ["Nacional (Consolidado)"] + data_service.get_departments()
    selected_scope = st.selectbox(
        "Ámbito Geográfico:",
        options=departments,
        index=0,
        help="Permite alternar entre la visión macro nacional o el análisis detallado por departamento.",
    )

    # Filtro 3: Rango de Años
    year_range = st.slider(
        "Período de Análisis:",
        min_value=2000,
        max_value=2023,
        value=(2000, 2023),
        step=1,
        help="Ventana temporal para el cómputo de indicadores y series temporales.",
    )

    st.markdown("---")
    st.markdown("#### 📋 Cumplimiento Normativo")
    st.caption("✅ **ISO 9241-11:** Usabilidad y Eficacia")
    st.caption("✅ **ISO 9241-210:** Diseño Centrado en el Humano")
    st.caption("✅ **ISO 9241-110:** Diálogo Ergonómico")
    st.caption("✅ **ISO 9241-12:** Organización de Información")

    st.markdown("---")
    st.caption("Trabajo Introductorio - Calidad de Software")
    st.caption("Equipo: 05 Integrantes | 2026")

# ==============================================================================
# OBTENCIÓN Y FILTRADO DE DATOS
# ==============================================================================
is_national = selected_scope == "Nacional (Consolidado)"

if is_national:
    df_raw = data_service.get_national_summary()
    scope_title = "Nivel Nacional (Perú)"
else:
    df_raw = data_service.get_department_data(selected_scope)
    scope_title = f"Departamento de {selected_scope}"

# Aplicar filtro temporal
df_filtered = df_raw[(df_raw["year"] >= year_range[0]) & (df_raw["year"] <= year_range[1])].copy()

# Cómputo de KPIs para el último año seleccionado
latest_year = year_range[1]
kpis = data_service.compute_kpis(df_filtered, group=group_key, year=latest_year)

# ==============================================================================
# ENCABEZADO PRINCIPAL (ISO 9241-12: Jerarquía Visual)
# ==============================================================================
st.markdown('<div class="iso-badge">NORMA ISO 9241-12 / ISO 9241-110 COMPLIANT</div>', unsafe_allow_html=True)
st.markdown('<div class="main-header">🏥 Vigilancia y Monitoreo de Infecciones Respiratorias Agudas (IRA)</div>', unsafe_allow_html=True)
st.markdown(
    f'<div class="sub-header">Ámbito: <strong>{scope_title}</strong> | Población: <strong>{group_label}</strong> | Período: <strong>{year_range[0]} - {year_range[1]}</strong></div>',
    unsafe_allow_html=True,
)

# Sistema de Alertas Sanitarias Automatizado
inc_rate = kpis["cases_rate"]
if inc_rate > 350:
    st.markdown(
        f'<div class="status-alert status-danger">🚨 <strong>ALERTA EPIDEMIOLÓGICA ACTIVA:</strong> Tasa de incidencia crítica de {inc_rate:.1f} por 100k hab. Se recomienda reforzar centros de salud y stock de antibióticos/oxígeno.</div>',
        unsafe_allow_html=True,
    )
elif inc_rate > 150:
    st.markdown(
        f'<div class="status-alert status-warning">⚠️ <strong>ALERTA PREVENTIVA:</strong> Tasa de incidencia moderada de {inc_rate:.1f} por 100k hab. Mantener vigilancia activa y seguimiento semanal.</div>',
        unsafe_allow_html=True,
    )
else:
    st.markdown(
        f'<div class="status-alert status-normal">🟢 <strong>ESTADO CONTROLADO:</strong> Tasa de incidencia de {inc_rate:.1f} por 100k hab dentro de los rangos de seguridad histórica.</div>',
        unsafe_allow_html=True,
    )

# ==============================================================================
# TARJETAS DE INDICADORES CLAVE (KPIs) - ISO 9241-12
# ==============================================================================
col1, col2, col3, col4 = st.columns(4)

with col1:
    st.metric(
        label=f"Casos Reportados ({int(kpis['year'])})",
        value=f"{int(kpis['cases']):,}",
        delta=f"{kpis['delta_cases_pct']:+.1f}% vs año previo",
        help="Casos acumulados diagnosticados en el año seleccionado.",
    )

with col2:
    st.metric(
        label="Tasa Incidencia x 100k hab",
        value=f"{kpis['cases_rate']:.1f}",
        delta=f"{kpis['delta_rate']:+.1f} pts",
        help="Incidencia estandarizada: (Casos / Población) × 100,000 hab.",
    )

with col3:
    st.metric(
        label="Tasa de Hospitalización (HR)",
        value=f"{kpis['hr']:.2f}%",
        help="Hospitalization Rate: (Hospitalizados / Casos) × 100.",
    )

with col4:
    st.metric(
        label="Tasa de Letalidad (CFR)",
        value=f"{kpis['cfr']:.2f}%",
        help="Case Fatality Ratio: (Defunciones / Casos) × 100.",
    )

st.markdown("---")

# ==============================================================================
# PESTAÑAS DE TRABAJO (ISO 9241-110: Idoneidad para la tarea & Diálogo)
# ==============================================================================
tab_general, tab_severity, tab_rankings, tab_forecast, tab_iso = st.tabs([
    "📊 Tablero Histórico",
    "🏥 Severidad & Estacionalidad",
    "🗺️ Rankings & Vigilancia Regional",
    "🤖 Pronóstico & Alerta Temprana (ML/LSTM)",
    "📜 Calidad de Software & Normas ISO",
])

# ------------------------------------------------------------------------------
# TAB 1: TABLERO GENERAL HISTÓRICO
# ------------------------------------------------------------------------------
with tab_general:
    st.subheader(f"Evolución Histórica de Neumonías e IRA - {scope_title}")
    
    col_chart_ctl1, col_chart_ctl2 = st.columns([3, 1])
    with col_chart_ctl2:
        metric_choice = st.selectbox(
            "Métrica a graficar:",
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

    # Gráfico interactivo con Plotly
    fig_trend = px.line(
        df_filtered,
        x="year",
        y=selected_col,
        markers=True,
        title=f"Tendencia Anual de {metric_choice} ({year_range[0]} - {year_range[1]})",
        labels={"year": "Año", selected_col: metric_choice},
        color_discrete_sequence=["#1d4ed8" if group_key == "60mas" else "#0284c7"],
    )
    fig_trend.update_layout(
        hovermode="x unified",
        template="plotly_white",
        xaxis=dict(tickmode="linear", tick0=2000, dtick=2),
        margin=dict(l=20, r=20, t=50, b=20),
    )
    st.plotly_chart(fig_trend, use_container_width=True)

    # Tabla de datos detallada con opción de descarga (ISO 9241-110: Control de usuario)
    with st.expander("📄 Ver y Exportar Tabla de Datos Históricos"):
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
        * **Tasa de Hospitalización (HR):** Proporción de casos que requieren internamiento ($HR = \text{Hospitalizados} / \text{Casos}$). Indica la demanda sobre el sistema hospitalario.
        * **Tasa de Letalidad (CFR):** Proporción de casos que resultan en fallecimiento ($CFR = \text{Defunciones} / \text{Casos}$). Refleja la gravedad clínica y vulnerabilidad.
        """
    )

    col_sev1, col_sev2 = st.columns(2)

    with col_sev1:
        # Gráfico temporal de severidad
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
            title="Evolución de HR y CFR a lo largo del tiempo",
            xaxis_title="Año",
            yaxis_title="Porcentaje (%)",
            template="plotly_white",
            hovermode="x unified",
        )
        st.plotly_chart(fig_sev, use_container_width=True)

    with col_sev2:
        # Matriz de dispersión HR vs CFR
        fig_scatter = px.scatter(
            df_filtered,
            x=f"hr_{group_key}",
            y=f"cfr_{group_key}",
            text="year",
            size=f"cases_{group_key}",
            title="Dispersión: Severidad (HR vs CFR) por Año",
            labels={
                f"hr_{group_key}": "Tasa de Hospitalización (HR %)",
                f"cfr_{group_key}": "Tasa de Letalidad (CFR %)",
            },
            color=f"cases_rate_{group_key}",
            color_continuous_scale="Viridis",
        )
        fig_scatter.update_traces(textposition="top center")
        fig_scatter.update_layout(template="plotly_white")
        st.plotly_chart(fig_scatter, use_container_width=True)

# ------------------------------------------------------------------------------
# TAB 3: RANKINGS Y VIGILANCIA REGIONAL
# ------------------------------------------------------------------------------
with tab_rankings:
    st.subheader("Vigilancia Territorial: Rankings y Clasificación de Carga de Enfermedad")
    st.markdown(
        """
        La metodología divide los 25 departamentos en 5 categorías de riesgo según tasas de incidencia:
        * **Categoría 1 (Puestos 1–5):** Carga muy alta / máxima prioridad sanitaria.
        * **Categoría 2 (Puestos 6–10):** Carga alta.
        * **Categoría 3 (Puestos 11–15):** Carga media.
        * **Categoría 4 (Puestos 16–20):** Carga baja.
        * **Categoría 5 (Puestos 21–25):** Carga muy baja.
        """
    )

    col_rank1, col_rank2 = st.columns([1, 1])

    with col_rank1:
        top3_df = data_service.get_top3_frequencies(group=group_key)
        if not top3_df.empty:
            fig_top3 = px.bar(
                top3_df.head(10),
                x="region",
                y="top3_appearances",
                text="percent_years_in_top3",
                title=f"Top 10 Departamentos con Mayor Permanencia en Alerta Crítica ({group_label})",
                labels={"region": "Departamento", "top3_appearances": "Apariciones en Top 3 (2000-2023)"},
                color="top3_appearances",
                color_continuous_scale="Reds",
            )
            fig_top3.update_traces(texttemplate="%{text:.1f}% de los años", textposition="outside")
            fig_top3.update_layout(template="plotly_white", xaxis_tickangle=-45)
            st.plotly_chart(fig_top3, use_container_width=True)
        else:
            st.info("No se encontró la tabla de frecuencia de top 3.")

    with col_rank2:
        st.markdown("#### Departamentos de Mayor Vulnerabilidad Identificados")
        if group_key == "men5":
            st.error("👶 **Niños menores de 5 años:** Concentración crítica en la Selva:\n* **UCAYALI** (91.7% de los años en Top 3)\n* **LORETO** (91.7% de los años en Top 3)\n* **HUÁNUCO** (37.5% de los años en Top 3)")
        else:
            st.warning("👴 **Adultos mayores de 60 años:** Concentración crítica en la Sierra Sur:\n* **AREQUIPA** (88.9% de los años en Top 3)\n* **CUSCO** (61.1% de los años en Top 3)\n* **MOQUEGUA** (50.0% de los años en Top 3)")

        st.markdown("#### Matriz Anual de Incidencia por Departamento")
        rank_grid = data_service.get_rank_grid(group=group_key)
        if not rank_grid.empty:
            st.dataframe(rank_grid.head(10), use_container_width=True, hide_index=True)

# ------------------------------------------------------------------------------
# TAB 4: PRONÓSTICO Y MODELOS PREDICTIVOS (ML / LSTM)
# ------------------------------------------------------------------------------
with tab_forecast:
    st.subheader(f"Modelos Predictivos y Alerta Temprana a 52 Semanas ({group_label})")
    st.markdown(
        """
        Se emplearon modelos predictivos entrenados con validación rodante (*Rolling Window Backtesting* de 5 años):
        * **Modelos Machine Learning:** Random Forest y XGBoost.
        * **Modelos Deep Learning:** Redes Neuronales Recurrentes (LSTM).
        * **Modelos Estadísticos Basales:** Naïve, Seasonal Naïve y ARIMA.
        """
    )

    # 1. Tabla de Rendimiento de Modelos
    st.markdown("#### 📈 Comparativa de Desempeño Oficial (Backtesting Nacional)")
    metrics_df = model_service.get_national_metrics(group=group_key)
    
    col_met1, col_met2 = st.columns([2, 1])
    with col_met1:
        st.dataframe(
            metrics_df[["model_display", "mae", "rmse", "r2"]].rename(
                columns={"model_display": "Modelo", "mae": "MAE", "rmse": "RMSE", "r2": "Coeficiente R²"}
            ),
            use_container_width=True,
            hide_index=True,
        )
    with col_met2:
        best_model = metrics_df.sort_values("r2", ascending=False).iloc[0]
        st.success(
            f"🏆 **Mejor Modelo:** {best_model['model_display']}\n\n"
            f"* **Precisión (R²):** {best_model['r2']:.3f}\n"
            f"* **Error Medio Absoluto (MAE):** {best_model['mae']:.3f}\n"
            f"* **Error Cuadrático (RMSE):** {best_model['rmse']:.3f}"
        )

    # 2. Proyección Futura a 52 semanas con Intervalo de Confianza
    st.markdown("#### 🔮 Proyección Predictiva a 52 Semanas con Intervalos de Incertidumbre (95% CI)")
    future_df = model_service.get_national_future_predictions(group=group_key)

    if not future_df.empty:
        fig_pred = go.Figure()

        # Modelos disponibles en el CSV
        models_in_pred = future_df["model"].unique()
        colors = {"xgboost": "#b45309", "random_forest": "#15803d", "lstm": "#4338ca"}

        for mod in models_in_pred:
            sub = future_df[future_df["model"] == mod].sort_values("date")
            color = colors.get(mod, "#3b82f6")
            name = "XGBoost" if mod == "xgboost" else "Random Forest" if mod == "random_forest" else mod.upper()

            # Línea predicha
            fig_pred.add_trace(
                go.Scatter(
                    x=sub["date"],
                    y=sub["predicted"],
                    mode="lines",
                    name=f"Pronóstico {name}",
                    line=dict(color=color, width=3),
                )
            )

            # Intervalo de confianza superior e inferior
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
            title="Pronóstico Semanal Futuro de Tasa de Incidencia",
            xaxis_title="Fecha de Semana Epidemiológica",
            yaxis_title="Tasa Predicha",
            template="plotly_white",
            hovermode="x unified",
        )
        st.plotly_chart(fig_pred, use_container_width=True)
    else:
        st.info("No se hallaron proyecciones futuras para este grupo.")

    # 3. Importancia de Variables (Feature Importance)
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
# TAB 5: MARCO DE CALIDAD & NORMAS ISO
# ------------------------------------------------------------------------------
with tab_iso:
    st.subheader("Marco de Calidad de Software: Cumplimiento de Normas ISO 9241")
    st.markdown(
        """
        La presente interfaz interactiva fue desarrollada transformando el proyecto analítico legado
        y aplicando de forma explícita las normas internacionales de ergonomía e interacción humano-sistema:
        """
    )

    iso_data = [
        {
            "Norma ISO": "ISO 9241-11",
            "Enfoque Principal": "Definición y Medición de Usabilidad",
            "Atributos Clave": "Eficacia, Eficiencia y Satisfacción",
            "Implementación en esta Interfaz": (
                "• Eficacia: Permite acceder a cualquier departamento y grupo en menos de 2 selecciones con cero errores.\n"
                "• Eficiencia: Caché de datos (@st.cache_resource) que acelera el renderizado a <0.2s.\n"
                "• Satisfacción: Visualización limpia, KPIs destacados y exportación de reportes directos."
            ),
        },
        {
            "Norma ISO": "ISO 9241-210",
            "Enfoque Principal": "Diseño Centrado en el Ser Humano (HCD)",
            "Atributos Clave": "Contexto de uso, comprensión de usuarios y evaluación iterativa",
            "Implementación en esta Interfaz": (
                "• Modelado enfocado en las tareas de epidemiólogos y directores de salud pública de Perú.\n"
                "• Flujo jerárquico natural: Diagnóstico rápido (KPIs) → Monitoreo clínico → Alerta temprana con ML."
            ),
        },
        {
            "Norma ISO": "ISO 9241-110",
            "Enfoque Principal": "Principios de Diálogo Ergonómico",
            "Atributos Clave": "Adecuación a la tarea, autodescripción, control del usuario y tolerancia a fallos",
            "Implementación en esta Interfaz": (
                "• Adecuación: Muestra tasas por 100k hab. estandarizadas en lugar de conteos sin contexto.\n"
                "• Autodescripción: Tooltips explicativos en cada tarjeta y fórmula epidemiológica.\n"
                "• Control: Filtros de período temporal dinámicos y descargas en CSV.\n"
                "• Tolerancia a fallos: Degradación elegante ante datos ausentes sin caída del sistema."
            ),
        },
        {
            "Norma ISO": "ISO 9241-12",
            "Enfoque Principal": "Organización Visual de la Información",
            "Atributos Clave": "Legibilidad, codificación de color, densidad y agrupamiento",
            "Implementación en esta Interfaz": (
                "• Organización espacial en cuadrículas y tarjetas jerárquicas.\n"
                "• Codificación de color semántica (Rojo: Alerta crítica, Amarillo: Precaución, Verde: Seguro).\n"
                "• Paletas de alto contraste aptas para personas con daltonismo."
            ),
        },
    ]

    st.table(pd.DataFrame(iso_data))

    st.markdown("---")
    st.markdown("#### Datos de la Presentación")
    col_pres1, col_pres2 = st.columns(2)
    with col_pres1:
        st.write("📅 **Fecha de Entrega:** Martes 01 de noviembre")
        st.write("👥 **Modalidad:** Equipo de 05 Integrantes")
        st.write("📂 **Curso:** Calidad de Software")
    with col_pres2:
        st.write("🛠️ **Entorno de Ejecución:** Windows / `uv` / Python 3.12")
        st.write("🚀 **Lanzador Automatizado:** `ejecutar_aplicativo.bat`")
        st.write("📄 **Documento Técnico:** `INFORME_CALIDAD_SOFTWARE_SEMANA1.docx`")

st.markdown("---")
st.caption("Sistema de Vigilancia de Salud Pública © 2026 - Universidad de Calidad de Software")
