---
name: aceternity-ui
description: >-
  Advanced animated UI components using Framer Motion and Tailwind CSS.
  Use when implementing 3D card tilt effects, aurora backgrounds, lamp headers,
  canvas reveals, and cinematic micro-interactions for web apps.
---

# Aceternity UI Component Skill

`Aceternity UI` provides copy-paste components built with **Framer Motion** and **Tailwind CSS**. It specializes in visual depth, 3D transforms, gradient mesh backgrounds, and interactive hover effects.

## Setup Requirements
```bash
npm install framer-motion clsx tailwind-merge canvas-confetti @types/canvas-confetti
```

Ensure your `tailwind.config.js` supports custom animations and utilities:
```javascript
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [],
}
```

## Key Components & Patterns

### 1. 3D Card Hover Effect (`3d-card`)
Provides mouse-tracking 3D tilt perspective:
```tsx
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export function Feature3DCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-card relative group/card border-border w-auto sm:w-[26rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-foreground">
          Real-Time Risk Categorization
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-muted-foreground text-sm max-w-sm mt-2">
          Automated classification into quintiles for immediate disease surveillance.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="h-40 w-full rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-border flex items-center justify-center font-mono text-sm">
            Interactive Forecast Engine
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
```

### 2. Aurora Background
Fluid, moving gradient mesh for dark and light modern headers:
```tsx
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "framer-motion"

export function HeaderAurora() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
          Predictive Public Health
        </h2>
        <p className="font-light text-base md:text-xl text-muted-foreground py-2 max-w-2xl">
          High-performance time-series modeling and early warning decisions.
        </p>
      </motion.div>
    </AuroraBackground>
  )
}
```

### 3. Lamp Container Effect
Creates an overhead light cone shining down on headline text.

## Performance & UX Guidelines
1. **GPU Acceleration:** Always use `transform: translate3d` or Framer Motion's hardware-accelerated transforms (`x`, `y`, `scale`, `rotate`).
2. **Avoid Layout Thrashing:** Do not animate `width`, `height`, or `top`/`left` directly; animate `scale` and `transform`.
3. **Subtlety:** Keep 3D tilts under 15-20 degrees to avoid disorienting the user.
