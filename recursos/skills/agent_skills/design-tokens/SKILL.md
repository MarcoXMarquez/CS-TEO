---
name: design-tokens
description: >-
  Systematic design token architecture for spacing scales, typography, elevation,
  and color ramps. Use when designing production UI systems, standardizing themes,
  and enforcing mathematical visual consistency across multi-component apps.
---

# Design Tokens Architecture Skill

Design tokens are the visual atoms of a design system (colors, typography, spacing, border radii, shadows, motion curves). Standardizing tokens prevents the disjointed, arbitrary values typical of generic AI-generated interfaces.

## Three-Tier Token Architecture

```text
1. Primitive Tokens (Global)   -> e.g., blue-500: #3b82f6, space-4: 16px
2. Semantic Tokens (Contextual) -> e.g., color-brand-primary, space-inset-card
3. Component Tokens (Specific)  -> e.g., button-primary-bg, modal-elevation
```

## Standard Token System Implementation

### 1. Spacing Scale (8pt Grid System)
All margins, paddings, and gaps must strictly adhere to the 4px/8px scale:
```css
:root {
  --space-1: 0.25rem; /* 4px  - micro gaps */
  --space-2: 0.5rem;  /* 8px  - icon spacing, tight padding */
  --space-3: 0.75rem; /* 12px - input padding */
  --space-4: 1.0rem;  /* 16px - standard card padding */
  --space-6: 1.5rem;  /* 24px - section gaps */
  --space-8: 2.0rem;  /* 32px - container margins */
  --space-12: 3.0rem; /* 48px - hero sections */
}
```

### 2. Typographic Scale & Fluid Typescale
Use modular ratios (Major Second `1.125` or Minor Third `1.200`):
```css
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.8rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 0.925rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 1.65rem + 1.1vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3.0rem);
}
```

### 3. Elevation & Soft Shadows
Never use default hard black drop shadows. Use layered, low-opacity, diffuse shadows with ambient light:
```css
:root {
  /* Subtle border + soft ambient elevation */
  --shadow-subtle: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
  --shadow-popover: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
  --shadow-modal: 0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.05);
}
```

### 4. Color Ramps with CSS Variables / Tailwind
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --destructive: 0 84.2% 60.2%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --border: 217.2 32.6% 17.5%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
}
```

## Token Enforcement Rules
1. **No arbitrary values in markup:** Avoid classes like `p-[13px]`, `w-[317px]`, `text-[#324567]`. Use semantic token utilities.
2. **Predictable corner radius:** Keep corner rounding harmonious (Buttons: `--radius`, Cards: `calc(var(--radius) + 4px)`, Badges: `full`).
3. **Contrast Verification:** Always audit contrast of `text-muted-foreground` against `bg-background` to ensure it passes WCAG AA (4.5:1).
