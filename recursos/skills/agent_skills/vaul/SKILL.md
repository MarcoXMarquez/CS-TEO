---
name: vaul
description: >-
  iOS-style unstyled drawer and modal component for React with native drag physics,
  fluid touch inertia, and snap points. Use when building mobile-first sheets,
  slide-over drawers, or tactile bottom sheet menus.
---

# Vaul Drawer Skill

`Vaul` by Emil Kowalski is an unstyled drawer component for React that mimics iOS native sheets with genuine touch drag physics, smooth momentum, and snap points.

## Installation
```bash
npm install vaul
```

## Basic Usage Pattern
```tsx
import { Drawer } from "vaul"

export function MobileFilterDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent">
        Filter Departments
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-50 border-t border-border focus:outline-none">
          {/* iOS Grab Handle */}
          <div className="p-4 bg-background rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted-foreground/20 mb-6" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-semibold text-lg text-foreground mb-2">
                Epidemiological Filters
              </Drawer.Title>
              <Drawer.Description className="text-sm text-muted-foreground mb-4">
                Select department, risk level, and target age group.
              </Drawer.Description>
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
```

## Advanced Features

### 1. Snap Points
Allows the drawer to snap at multiple heights (e.g., 200px, 50% height, full screen):
```tsx
<Drawer.Root snapPoints={["250px", "500px", 1]} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
  {/* Content */}
</Drawer.Root>
```

### 2. Nested Drawers
Vaul supports nesting drawers inside each other with automatic stacking depth and scaling.

### 3. Directions
Supports drawer opening from `bottom` (default), `top`, `left`, or `right`:
```tsx
<Drawer.Root direction="right">
  {/* Sidebar drawer */}
</Drawer.Root>
```

## Best Practices
1. **Background Scaling:** Wrap the main app wrapper in `<div vaul-drawer-wrapper="">` when using `shouldScaleBackground` for the iOS sheet zoom-back effect.
2. **Accessible Grab Handle:** Always render the drag handle pill (`w-12 h-1.5 rounded-full`) so touch users immediately recognize the gesture affordance.
3. **Scrollable Inner Containers:** Place `overflow-y-auto` on the drawer body container so that dragging down at the top dismisses the drawer, but scrolling through lists works naturally.
