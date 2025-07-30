# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack enabled
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint validation

## Architecture Overview

This is a **Next.js 15.4.4** university library application using the App Router with **React 19** and **TypeScript**. The project uses modern tooling including **Turbopack** for fast development builds.

### Design System & Styling

**Tailwind CSS v4** with extensive customization:
- **Custom color palette**: Primary (`#E7C9A5`), Admin (`#25388C`), semantic colors for green/red states
- **Typography**: IBM Plex Sans and Bebas Neue fonts with CSS custom properties
- **Theme system**: Comprehensive light/dark color scales (100-800) using HSL CSS variables
- **Responsive**: Custom `xs: 480px` breakpoint for fine-grained control

### Component Architecture

**shadcn/ui integration** with "new-york" style variant:
- Components use `class-variance-authority` for variant management
- Path aliases: `@/components`, `@/lib`, `@/ui` configured in both tsconfig and components.json
- Utility function `cn()` in `lib/utils.ts` combines `clsx` and `tailwind-merge`

### CSS Organization

Global styles in `app/globals.css` use **CSS layers**:
- `@layer base` - CSS variables, scrollbar utilities
- `@layer components` - Reusable component classes (`.form-btn`, `.form-input`, `.book-*`)
- Custom gradients: `gradient-vertical`, `gradient-gray`, `gradient-blue`

### Configuration Patterns

**ESLint** uses flat config format with:
- Next.js core web vitals rules
- Standard JavaScript style guide
- Tailwind CSS class validation
- Prettier integration

**TypeScript** configured with:
- Modern "bundler" module resolution
- Strict mode enabled
- Path mapping for `@/*` aliases

### Font System

Uses **next/font** optimization with:
- Geist Sans (`--font-geist-sans`) 
- Geist Mono (`--font-geist-mono`)
- CSS custom properties for consistent theming

### Development Notes

- Project uses cutting-edge versions (Next.js 15, React 19, Tailwind v4)
- CSS custom properties enable theme switching compatibility with shadcn/ui
- Component variants follow shadcn/ui patterns with Radix UI primitives
- Library-specific styling classes suggest this is for book/library management features