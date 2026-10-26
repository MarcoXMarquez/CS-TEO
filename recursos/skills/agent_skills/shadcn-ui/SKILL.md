---
name: shadcn-ui
description: >-
  Modern, clean, accessible UI components built with Tailwind CSS and Radix UI.
  Use when building React or Next.js applications that require clean, customizable,
  unbloated components with zero vendor lock-in and complete accessibility.
---

# shadcn/ui Component Skill

`shadcn/ui` is the modern standard for building web interfaces. It is NOT a component library installed as an npm dependency, but a collection of reusable components that you copy and paste into your project.

## Core Philosophy
- **Full Ownership:** Code lives in your codebase (`components/ui`), allowing full customization.
- **Accessibility First:** Built on top of Radix UI unstyled primitives (WAI-ARIA compliant, keyboard navigation, focus management).
- **Tailwind Native:** Styled with Tailwind CSS and utility functions (`cn` from `clsx` and `tailwind-merge`).
- **Clean Aesthetic:** Subtlety, micro-borders (`border-border`), neutral color ramps, and zero visual clutter.

## Setup & Configuration

### 1. Initialize shadcn in Next.js / Vite
```bash
npx shadcn@latest init
```
Default configuration (`components.json`):
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### 2. Utility Function (`lib/utils.ts`)
Always combine Tailwind classes using `clsx` and `tailwind-merge`:
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Adding and Using Components

### Common Component Installation
```bash
npx shadcn@latest add button dialog dropdown-menu popover command form input table tabs
```

### Key Component Patterns

#### 1. Button with Variants
```tsx
import { Button } from "@/components/ui/button"

export function ActionButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
```

#### 2. Accessible Modal / Dialog
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SettingsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>
            Update your account details and notification preferences.
          </DialogDescription>
        </DialogHeader>
        {/* Modal content */}
      </DialogContent>
    </Dialog>
  )
}
```

## Quality Guidelines
1. **Never override Radix ARIA attributes:** Keep keyboard focus and screen reader labels intact.
2. **Use Semantic Tokens:** Always use semantic classes (`bg-background`, `text-foreground`, `border-border`, `bg-muted`) rather than hardcoded hex colors.
3. **Keep components modular:** Keep atomic UI pieces in `components/ui/` and compose complex domain components in `components/features/`.
