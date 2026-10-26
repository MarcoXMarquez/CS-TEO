---
name: magicui
description: >-
  High-impact landing page components with Apple-style polished aesthetics.
  Use when building SaaS homepages, hero sections, subtle animated borders,
  particle backgrounds, bento grids, and linear gradient transitions.
---

# Magic UI Component Skill

`Magic UI` is a collection of 50+ animated components designed for high-conversion landing pages, marketing sites, and polished SaaS products. It focuses on Apple-level subtle details: micro-borders, shimmer effects, particles, and smooth transitions.

## Prerequisites
Magic UI components use **Tailwind CSS** and **Framer Motion**:
```bash
npm install framer-motion clsx tailwind-merge
```

## CLI Installation
```bash
# Initialize magicui registry or add specific components
npx magicui-cli add border-beam marquee bento-grid particles animated-shiny-text
```

## Core Components & Patterns

### 1. Border Beam (Subtle glowing border effect)
Creates an elegant running light beam along the border of cards or containers:
```tsx
import { BorderBeam } from "@/components/magicui/border-beam"

export function HeroCard() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background p-8 shadow-sm">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900">
        Autonomous Healthcare Analytics
      </span>
      <BorderBeam size={250} duration={12} delay={9} colorFrom="#3b82f6" colorTo="#8b5cf6" />
    </div>
  )
}
```

### 2. Infinite Marquee (Logos, Reviews, Metrics)
Smooth CSS-driven infinite loop banner without JavaScript lag:
```tsx
import { Marquee } from "@/components/magicui/marquee"

export function MetricsTicker({ data }: { data: string[] }) {
  return (
    <div className="relative flex w-full overflow-hidden py-4 bg-muted/40">
      <Marquee pauseOnHover className="[--duration:25s]">
        {data.map((item, idx) => (
          <div key={idx} className="mx-6 text-sm font-medium text-muted-foreground">
            {item}
          </div>
        ))}
      </Marquee>
      {/* Gradient masks for smooth edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
```

### 3. Particles Background
Interactive or ambient floating particles for hero sections:
```tsx
import { Particles } from "@/components/magicui/particles"

export function HeroBackground() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <h1 className="z-10 text-4xl font-bold tracking-tight text-foreground">
        Next Generation Epidemiology
      </h1>
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color="#0284c7"
        refresh
      />
    </div>
  )
}
```

### 4. Bento Grid (Modern feature showcase)
Organizes features into an asymmetric, content-rich grid layout with micro-interactions.

## Quality Rules
1. **Never overuse animations:** Restrict intense animations to hero sections and subtle micro-interactions elsewhere.
2. **Respect `prefers-reduced-motion`:** Always fallback to static borders or disable continuous loops when reduced motion is detected.
3. **Contrast:** Ensure text over animated particles or gradients maintains at least 4.5:1 WCAG contrast.
