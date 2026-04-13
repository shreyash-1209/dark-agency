# Design Brief: Dark Web Agency

**Theme**: Dark mode (primary), premium modern tech aesthetic.

## Tone & Differentiation
Editorial/magazine editorial showcase with refined minimalism. Double-carousel hero with staggered animation, bento services with hoverable depth, portfolio modal + detail pages. Sharp typography and strategic accent usage without visual clutter.

## Color Palette (OKLCH)

| Token                  | Light        | Dark             | Usage                          |
|------------------------|--------------|------------------|--------------------------------|
| **background**         | 0.99 0 0     | 0.10 0 0         | Page background                |
| **foreground**         | 0.15 0 0     | 0.93 0 0         | Text, primary content          |
| **card**               | 1.0 0 0      | 0.15 0 0         | Card/elevated surfaces         |
| **primary**            | 0.35 0 0     | 0.70 0.21 262    | Buttons, accents (teal)        |
| **secondary**          | 0.95 0 0     | 0.20 0 0         | Supporting elements            |
| **muted**              | 0.95 0 0     | 0.22 0 0         | Disabled, tertiary text        |
| **accent**             | 0.35 0 0     | 0.70 0.21 262    | Highlights, active states      |
| **destructive**        | 0.55 0.22 25 | 0.65 0.19 22     | Error states, warnings         |
| **border**             | 0.9 0 0      | 0.25 0 0         | Borders, dividers              |

**Typography**
- **Display**: Plus Jakarta Sans (geometric, modern, headlines & hero)
- **Body**: Satoshi (refined, neutral, copy & descriptions)
- **Mono**: JetBrains Mono (code, small accents)

## Elevation & Depth
- **Card baseline**: shadow-card (0 4px 12px, 8% opacity)
- **Elevated hover**: shadow-elevated (0 8px 24px, 16% opacity)
- **Subtle**: shadow-subtle (0 2px 8px, 12% opacity)
- **Borders**: border-border (0.25 L for dark, creates definition without contrast shock)

## Structural Zones

| Zone      | Treatment                                              | Spacing    |
|-----------|--------------------------------------------------------|------------|
| **Header**    | Fixed, bg-card with border-b, sticky on scroll         | py-4       |
| **Hero**      | Full-bleed bg-background, gradient accent overlay      | py-24–32   |
| **Sections**  | Alternating bg-background (main) & bg-card/30 (accent) | py-16–24   |
| **Cards**     | bg-card, border-border, shadow-card, hover-lift        | p-6–8      |
| **Footer**    | bg-card with border-t, muted text                      | py-12      |

## Component Patterns
- **Buttons**: `.btn-primary` (accent fill), `.btn-accent` (primary fill), hover opacity 90%
- **Cards**: `.card-hover` (scale 105%, shadow lift on hover)
- **Forms**: input border-border, focus ring-primary
- **Modals**: bg-popover, backdrop blur, smooth fade-in

## Motion & Interaction
- **Transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) (smooth easing)
- **Entrance**: fade-in (0.4s), slide-up (0.5s)
- **Hover**: scale 1.05, shadow lift, opacity change
- **Hero carousel**: staggered rotation, no bounce

## Anti-patterns Avoided
- No rainbow palettes or scattered accent usage
- No full-page gradients (only subtle gradient overlays)
- No generic blue defaults (teal primary instead)
- No uniform rounded corners (mix 0/8px/12px by zone)
- Services & portfolio sections prioritized for visual polish
