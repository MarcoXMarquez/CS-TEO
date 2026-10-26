---
name: lenis
description: >-
  High-performance, accessible smooth scroll library for modern web applications.
  Use when creating fluid inertial scrolling, synchronizing GSAP or Framer Motion
  scroll animations, and eliminating jarring native wheel scrolls.
---

# Lenis Smooth Scroll Skill

`Lenis` (by Darkroom Engineering / Studio Freight) is the industry standard smooth scrolling library. It does not hijack native scrolling destructively; instead, it interpolates wheel events smoothly, preserving accessibility, keyboard navigation, and touch device ergonomics.

## Installation
```bash
npm install lenis
# Or for React specific wrapper
npm install lenis/react
```

## React / Next.js Setup

### 1. Global Provider (`components/providers/smooth-scroll-provider.tsx`)
```tsx
"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // Optional: hook into scroll updates
  })

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,             // Interpolation strength (lower = smoother, higher = more direct)
        duration: 1.2,          // Duration of smooth scroll
        smoothWheel: true,      // Smooth scroll on wheel events
        wheelMultiplier: 1.0,   // Scroll speed factor
        touchMultiplier: 1.0,   // Do not interfere with native touch inertia
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
```

### 2. Vanilla JavaScript / Custom `requestAnimationFrame`
```typescript
import Lenis from "lenis"

const lenis = new Lenis({
  autoRaf: true, // Automatically connects to requestAnimationFrame
})

// Programmatic scrolling to elements
export function scrollToSection(target: string | HTMLElement) {
  lenis.scrollTo(target, {
    offset: -80,
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })
}
```

### 3. Synchronization with GSAP ScrollTrigger
If combining Lenis with GSAP:
```typescript
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
```

## Critical Rules
1. **Accessibility (`prefers-reduced-motion`):** Check user preferences. If `window.matchMedia("(prefers-reduced-motion: reduce)").matches` is true, disable smooth scroll or set `lerp: 1`.
2. **Never destroy native mobile scroll:** Keep `touchMultiplier` untouched or let mobile devices scroll natively.
3. **Sticky Elements:** When using CSS `position: sticky`, ensure parent containers do not have `overflow: hidden`.
