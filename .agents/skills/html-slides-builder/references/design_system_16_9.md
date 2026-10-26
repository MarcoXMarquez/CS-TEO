# Sistema de Diseño 16:9 (`1920×1080`) — Tokens, Iconos SVG y Patrones Bento

Esta referencia contiene la paleta de colores oficial, la escala tipográfica, el catálogo de iconos vectoriales monocromáticos (cero emojis) y las plantillas de grillas Bento verificadas para llenar el lienzo `1920×1080` sin dejar espacios blancos vacíos.

---

## 1. Paleta de Colores y Tokens

| Uso | Color Hex | Clase Tailwind | Descripción |
| :--- | :--- | :--- | :--- |
| **Fondo de Lienzo** | `#F4F5F7` | `bg-[#F4F5F7]` | Gris arquitectónico claro que evita el deslumbramiento y resalta las tarjetas blancas |
| **Fondo de Tarjeta Principal** | `#FFFFFF` | `bg-white` | Contenedores primarios con borde `border-[#CBD0D8]` y sombra suave `shadow-sm` |
| **Fondo de Sub-Tarjeta** | `#F8FAFC` | `bg-[#F8FAFC]` | Bloques internos dentro de columnas con borde `border-slate-200` |
| **Fondo de Código / Fórmulas** | `#0F172A` | `bg-[#0F172A]` | Bloques oscuros de alto contraste para fórmulas matemáticas, CLI y logs |
| **Texto Principal** | `#1E293B` | `text-[#1E293B]` | Pizarra oscuro para títulos y conceptos clave |
| **Texto Secundario** | `#334155` / `#475569` | `text-[#334155]` | Cuerpo de lectura de alto contraste |
| **Acento Primario (Teal)** | `#167287` | `text-[#167287]` | Azul petróleo institucional / ingeniería |
| **Acento Crítico (Crimson)** | `#BA0034` | `text-[#BA0034]` | Carmesí académico / alertas / reglas estrictas |
| **Acento Telemetría (Amber)** | `#D97706` | `text-[#D97706]` | Ámbar para métricas de rendimiento, carga y latencia |
| **Acento Conformidad (Emerald)**| `#059669` | `text-[#059669]` | Verde esmeralda para estados aprobados (`PASS`, `OK`, `Validado`) |

---

## 2. Catálogo de Iconos Monocromáticos SVG (Cero Emojis)

Usa este diccionario `ic` en tu script generador de Python. Todos los iconos son monocromáticos y usan trazos limpios `stroke-width="2"`:

```python
ic = {
    "shield": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>""",
    "cpu": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>""",
    "database": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>""",
    "code": """<svg class="w-6 h-6 text-[#1E293B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>""",
    "activity": """<svg class="w-6 h-6 text-[#D97706] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>""",
    "chart": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>""",
    "server": """<svg class="w-6 h-6 text-[#475569] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>""",
    "document": """<svg class="w-6 h-6 text-[#167287] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>""",
    "git": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>""",
    "alert": """<svg class="w-6 h-6 text-[#BA0034] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>""",
    "award": """<svg class="w-6 h-6 text-[#059669] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>""",
    "check": """<svg class="w-5 h-5 text-[#059669] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>"""
}
```

---

## 3. Funciones Estándar de Encabezado y Pie de Lámina

```python
def header(tag, title, badge_text, badge_color="teal"):
    color_map = {
        "teal": "bg-[#167287]/10 text-[#167287] border-[#167287]/30",
        "crimson": "bg-[#BA0034]/10 text-[#BA0034] border-[#BA0034]/30",
        "amber": "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/30",
        "emerald": "bg-[#059669]/10 text-[#059669] border-[#059669]/30",
        "slate": "bg-[#1E293B]/10 text-[#1E293B] border-[#1E293B]/30"
    }
    b_class = color_map.get(badge_color, color_map["teal"])
    return f"""
    <div class="flex items-start justify-between shrink-0 mb-3 pb-3 border-b border-[#CBD0D8]/60">
      <div>
        <span class="text-xs font-mono font-bold tracking-widest uppercase text-[#BA0034]">{tag}</span>
        <h2 class="text-3xl lg:text-4xl font-black font-heading text-[#1E293B] tracking-tight mt-1">{title}</h2>
      </div>
      <div class="px-4 py-1.5 rounded-full text-xs font-mono font-bold border {b_class} flex items-center space-x-2 shadow-2xs">
        <span>{badge_text}</span>
      </div>
    </div>
    """

def footer(left_text, tag_text, tag_color="teal"):
    color_map = {
        "teal": "text-[#167287]",
        "crimson": "text-[#BA0034]",
        "amber": "text-[#D97706]",
        "emerald": "text-[#059669]",
        "slate": "text-[#475569]"
    }
    t_class = color_map.get(tag_color, color_map["teal"])
    return f"""
    <div class="flex items-center justify-between shrink-0 pt-2.5 mt-1 border-t border-[#CBD0D8]/60 text-xs text-[#64748B]">
      <div class="flex items-center space-x-2">
        <span class="w-2 h-2 rounded-full bg-[#167287]"></span>
        <span class="font-medium">{left_text}</span>
      </div>
      <div class="font-mono font-bold {t_class} pr-36">
        {tag_text}
      </div>
    </div>
    """
```

---

## 4. Patrones de Layout Sin Espacios Vacíos (Anti-Void Patterns)

### Patrón A: Columna de Fase / Ciclo de Vida (5 Columnas Verticales)
Para evitar espacios muertos dentro de las columnas de fases (`grid-cols-5 gap-4 flex-1 my-1`):
- Usa `py-7` en el contenedor de la diapositiva.
- En cada columna usa `flex flex-col` con un contenedor intermedio `space-y-2 flex-1 flex flex-col`:
  - Sub-tarjeta 1 (`p-3 rounded-xl`): Propósito / Objetivo (`text-sm`).
  - Sub-tarjeta 2 (`p-3 rounded-xl`): Actividades obligatorias con 3 viñetas (`text-sm`).
  - Sub-tarjeta 3 (`p-3 rounded-xl`): Técnica o Artefactos (`text-sm`).
  - Sub-tarjeta 4 (`p-3 rounded-xl`): Regla o Criterio de validación (`text-sm font-semibold`).
- Al final de la columna, coloca la tarjeta de entregable con **`mt-auto`** para que quede anclada al fondo sin huecos intermedios.

### Patrón B: Vista Dividida (Tarjetas Técnicas + Figura Real Base64)
- Usa `grid grid-cols-12 gap-6 items-stretch flex-1 my-2`.
- **Izquierda (`col-span-6` o `col-span-7`)**: 3 tarjetas apiladas con `flex-1 flex flex-col justify-between`, cada una con cabecera, descripción `text-sm`, bloque interno `bg-[#F8FAFC] p-3.5 rounded-xl` y barra inferior de métricas.
- **Derecha (`col-span-6` o `col-span-5`)**:
  - Cabecera de la figura (`pb-3 border-b`).
  - Contenedor de imagen `flex-1 flex items-center justify-center bg-slate-100 p-2 min-h-[340px] rounded-xl border` con `<img src="{b64_img}" class="w-full h-full object-contain">`.
  - Grilla inferior de 3 KPIs (`grid-cols-3 gap-3 my-3`) o tabla de auditoría técnica para llenar el espacio debajo de la imagen.

### Patrón C: Banner de Identidad del Grupo 02 (Lámina de Cierre)
```html
<div class="bg-white rounded-2xl p-4 border border-[#CBD0D8] shadow-sm flex items-center justify-between shrink-0">
  <div class="flex items-center space-x-3">
    <span class="px-3.5 py-1.5 rounded-xl bg-[#167287] text-white text-xs font-mono font-bold">GRUPO 02</span>
    <span class="text-sm font-semibold text-[#1E293B]">
      Yoel Condori, Marco Márquez, Jeremy Pérez, Rafael Nina, Leonardo Arce
    </span>
  </div>
  <div class="text-xs font-mono text-[#64748B]">
    Curso Calidad de Software · UNSA 2026
  </div>
</div>
```
*(Recuerda: nunca agregar calificaciones como `20/20`, `5/5` ni `Defensa Técnica Finalizada`).*
