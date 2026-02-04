# CLAUDE.md

This file provides context for AI assistants working in this repository.

## Project Overview

This is a **personal experiments lab** for rapidly prototyping interesting interfaces and user experiences ("vibe coding"). The repo is designed for fast iteration — new UI ideas, interaction patterns, and visual experiments.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` plugin — no `tailwind.config` file)
- **Component Library**: shadcn/ui (New York style, with Radix UI primitives)
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript and React hooks plugins

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check with `tsc -b` then build with Vite |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

Always run `npm run build` to verify changes compile and bundle correctly.

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components (button, card, badge, input, separator)
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # cn() utility for merging Tailwind classes
├── App.tsx           # Main application entry component
├── App.css           # App-specific styles (prefer Tailwind utilities instead)
├── main.tsx          # React DOM root mount
└── index.css         # Tailwind imports + CSS custom properties for theming
```

## Key Conventions

### Imports and Path Aliases

All imports from `src/` use the `@/` path alias:
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Adding shadcn/ui Components

The preferred method is the shadcn CLI:
```bash
npx shadcn@latest add <component-name>
```

If the CLI registry is unavailable, create components manually in `src/components/ui/` following the shadcn/ui patterns:
- Use Radix UI primitives for accessible, unstyled behaviors
- Use `class-variance-authority` (cva) for variant-based styling
- Use the `cn()` utility from `@/lib/utils` for class merging
- Export components as named function exports (not default exports)
- Add `data-slot` attributes for styling hooks

The `components.json` at the repo root configures the shadcn CLI.

### Styling

- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed)
- Theme is defined as CSS custom properties in `src/index.css` using oklch color space
- Light and dark mode supported via `.dark` class on the root element
- Prefer Tailwind utility classes in JSX over CSS files
- Use `cn()` to conditionally merge classes

### TypeScript

- Strict mode enabled
- No unused locals or parameters allowed (`noUnusedLocals`, `noUnusedParameters`)
- Use `erasableSyntaxOnly` — avoid TypeScript-specific runtime constructs (enums with initializers, namespaces with runtime code)
- Use `verbatimModuleSyntax` — always use `import type` for type-only imports

### Component Patterns

- Use function declarations for components (not arrow functions assigned to const)
- Props are typed inline with `React.ComponentProps<>` intersection patterns
- Keep components in separate files under `src/components/`
- UI primitives go in `src/components/ui/`, app components go in `src/components/`

### Development Philosophy

This is a prototyping sandbox. Priorities:
1. **Ship fast** — get ideas on screen quickly
2. **Keep it simple** — minimal abstraction, direct code
3. **Visual quality** — leverage shadcn/ui's design system for polish
4. **Iterate** — nothing is precious, experiment freely
