---
name: motion-primitives
description: >-
  Advanced animation primitives for complex state transitions and micro-interactions.
  Use when creating morphing dialogs, animated number counters, text roll reveals,
  magnetic cursor elements, and physics-based spring transitions with Framer Motion.
---

# Motion Primitives Skill

`Motion Primitives` (by souporserious / Ibelick) provides specialized building blocks for polished, micro-interaction-driven React applications. It sits between low-level Framer Motion and full UI component libraries.

## Dependencies
```bash
npm install framer-motion clsx tailwind-merge
```

## Key Primitive Patterns

### 1. Animated Counter / Number Ticker
Animates numbers smoothly when data updates:
```tsx
"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

export function AnimatedNumber({
  value,
  direction = "up",
  className,
}: {
  value: number
  direction?: "up" | "down"
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.round(latest)
          )
        }
      }),
    [springValue]
  )

  return <span className={className} ref={ref} />
}
```

### 2. Morphing Dialog / LayoutId Transition
Smoothly transitions a small card or button into a full expanded modal without abrupt DOM changes:
```tsx
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function MorphingCard({ title, details }: { title: string; details: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        layoutId={`card-${title}`}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-4 rounded-xl border bg-card hover:shadow-md transition-shadow"
      >
        <motion.h4 layoutId={`title-${title}`} className="font-semibold text-foreground">
          {title}
        </motion.h4>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              layoutId={`card-${title}`}
              className="w-full max-w-lg p-6 bg-background rounded-2xl border shadow-xl"
            >
              <motion.h4 layoutId={`title-${title}`} className="text-2xl font-bold mb-4">
                {title}
              </motion.h4>
              <p className="text-muted-foreground">{details}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
```

### 3. Magnetic Hover Button
Follows mouse position subtly on hover for elevated tactile feedback.

## Physics Principles
- **Springs over Easing:** Use spring physics (`damping`, `stiffness`, `mass`) for interactive gestures and drags. Use cubic bezier curves (`ease-out`) for non-interactive enter/exit states.
- **Duration Tuning:** Micro-interactions should finish in 150ms–300ms. Modals in 300ms–450ms. Never make users wait for slow animations.
