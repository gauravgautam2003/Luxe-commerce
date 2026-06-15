---
name: Apex Commerce
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#46566c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6e85'
  on-tertiary-container: '#e9f0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The brand personality is **Trustworthy, Fast, and High-End**. This design system balances the clinical precision of a professional tool with the aesthetic refinement of a luxury boutique. It is designed to scale across diverse product categories while maintaining a consistent "premium marketplace" feel.

The visual style is **Corporate Modern with a Minimalist focus**. It prioritizes high-quality product photography by using a restrained UI framework. Key characteristics include:
- **Generous Whitespace:** Heavy breathing room to reduce cognitive load and emphasize premium positioning.
- **Precision Engineering:** Tight alignment, consistent stroke weights, and systematic scaling.
- **Subtle Interactivity:** High-quality transitions and micro-interactions that feel responsive and "snappy."
- **Clarity over Decoration:** Every element serves a functional purpose; decorative flourishes are removed in favor of typographic excellence.

## Colors

The palette is anchored by **Electric Blue**, a high-energy primary accent used strategically for conversion-critical elements (CTAs, active states, and highlights). 

- **Primary (Electric Blue):** Used for "Action" states. It signifies progress and reliability.
- **Secondary (Slate 900):** Used for primary headings and high-contrast surfaces to provide a grounded, premium feel.
- **Neutral (Slate/Cool Grays):** A sophisticated range of grays defines the UI structure. 
- **Functional Colors:** Error (Red), Success (Emerald), and Warning (Amber) are used sparingly with low-saturation backgrounds and high-saturation text.

**Light Mode:** Backgrounds use `#FFFFFF` and `#F8FAFC` for subtle layering.
**Dark Mode:** Shifts to a deep `#020617` base, using subtle `#1E293B` borders to define containers rather than heavy shadows.

## Typography

This design system utilizes a dual-font approach. **Geist** provides a technical, clean edge for headings and UI labels, while **Inter** ensures maximum readability for body copy and long-form product descriptions.

- **Scale:** Employs a minor third scale for professional hierarchy. 
- **Line Heights:** Body copy is set at 1.6x to ensure a breathable, "Apple-like" reading experience.
- **Weights:** Use "Regular" (400) for body, "Medium" (500) for secondary buttons/labels, and "Semi-Bold/Bold" (600+) for headlines.
- **Mobile:** Headlines scale down by approximately 20% on mobile devices to prevent excessive wrapping.

## Layout & Spacing

The layout is based on a **12-column Fluid Grid** for desktop and a **4-column grid** for mobile. 

- **Spacing Rhythm:** A strict 4px/8px incremental system. Use `md` (16px) for internal component padding and `lg` (24px) for spacing between related blocks.
- **Container:** Standard content width is capped at 1280px to maintain line-length readability on ultra-wide monitors.
- **Vertical Spacing:** Use `xl` or `2xl` for section breaks to maintain the minimalist, airy aesthetic.
- **Safe Areas:** On mobile, a 16px horizontal margin is mandatory.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Soft Ambient Shadows** to create hierarchy without clutter.

- **Level 0 (Base):** Flat background color. No shadow. Used for the main canvas.
- **Level 1 (Cards):** 1px border (`Slate 200` in light, `Slate 800` in dark) with an ultra-soft shadow (Y: 2px, Blur: 8px, 4% Opacity Black).
- **Level 2 (Hover/Floating):** Lifted state. Shadow (Y: 8px, Blur: 20px, 8% Opacity Black).
- **Level 3 (Modals/Overlays):** Significant depth. Shadow (Y: 12px, Blur: 32px, 12% Opacity Black). Use a backdrop blur (12px) on the overlay to maintain context.

In dark mode, shadows are replaced by **subtle inner borders** or slight variations in surface lightness to indicate elevation.

## Shapes

The shape language is **Refined and Friendly**. 
- **Standard Corners:** 8px (`0.5rem`) for standard components like input fields and small buttons.
- **Large Components:** 16px (`1rem`) for product cards, image containers, and main modals.
- **Extra Large:** 24px (`1.5rem`) for promotional banners or hero sections.
- **Interactive Elements:** Buttons always follow the `rounded-lg` (12px-16px) or full-pill logic depending on the specific UI density.

## Components

- **Buttons:** 
  - *Primary:* Solid Electric Blue with white text. 16px corner radius.
  - *Secondary:* Ghost style with 1px Slate border or subtle gray background.
- **Input Fields:** 1px border with 8px radius. Active state uses a 2px Electric Blue ring with 20% opacity.
- **Product Cards:** Minimalist. Image occupies the top 70%. Typography is left-aligned. No borders on the card, just a subtle background color change or a very soft shadow on hover.
- **Chips/Badges:** Small (12px font), pill-shaped, using low-saturation versions of the functional colors (e.g., light blue background with dark blue text).
- **Lists:** Clean dividers (1px) with ample vertical padding (16px-20px) between items.
- **Shopping Cart Drawer:** Uses a Level 3 elevation with a backdrop blur. Items are presented in a clean list with "remove" icons as simple text links or subtle ghost buttons.