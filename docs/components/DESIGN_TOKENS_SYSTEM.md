# Design Tokens System

## Overview

StormCom uses a centralized design tokens system to maintain consistency across components and enable easy theming and customization.

## Token Categories

### Colors
Base and semantic color tokens for consistent color usage across the application.

```typescript
import { colors } from '@/lib/design-tokens';

const primaryColor = colors.primary;
const errorColor = colors.error;
```

### Spacing
Consistent spacing scale based on 4px unit for margins, padding, and gaps.

```typescript
import { spacing } from '@/lib/design-tokens';

const padding = spacing['4'];  // 1rem
const gap = spacing['8'];      // 2rem
```

### Typography
Font families, sizes, weights, and line heights for text styling.

```typescript
import { fonts, fontSizes, fontWeights } from '@/lib/design-tokens';

const fontFamily = fonts.sans;
const fontSize = fontSizes.lg;
const fontWeight = fontWeights.semibold;
```

### Shadows
Elevation system for depth and visual hierarchy.

```typescript
import { shadows } from '@/lib/design-tokens';

const elevation = shadows.md;
```

### Animations
Timing and easing functions for smooth transitions.

```typescript
import { durations, easings } from '@/lib/design-tokens';

const duration = durations.normal;
const easing = easings.easeOut;
```

## Running Storybook

To view and interact with component stories:

```bash
npm run storybook
```

This starts the Storybook dev server on `http://localhost:6006`.

## Per-Store Theming

StormCom supports per-tenant theming via the `data-store-theme` attribute. Custom CSS variables can override default token values per store.

