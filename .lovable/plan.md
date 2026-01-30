
# Implement Custom SVG Logo Component (180x48px)

## Overview
Replace the current text-based logo in the TopBar header with a custom inline SVG component that features a minimalist truck icon, "RouteEU" text, and an "EXPRESS" badge.

---

## Current State
The TopBar currently uses:
- A Lucide `Truck` icon in a yellow rounded square
- "RouteEU" as bold text
- "EKPRESS" (with a typo) as red accent text

---

## Implementation Steps

### Step 1: Create RouteEULogo Component
Create a new reusable SVG component at `src/components/RouteEULogo.tsx`:

**Specifications:**
- Fixed dimensions: 180x48px
- Inline SVG for performance (no external assets)
- Uses Tailwind classes where applicable

**Visual Layout (left to right):**
1. **Truck Icon** (left side)
   - Yellow circle background (#FBBF24)
   - Simplified truck silhouette in dark color

2. **Main Text** (center)
   - "RouteEU" in bold Navy (#1E293B)
   - Uses Inter font (site's primary font)
   - Font weight: 800 (extra-bold)

3. **EXPRESS Badge** (right side)
   - Rounded red pill (#EF4444)
   - White "EXPRESS" text
   - Uppercase, small font size

### Step 2: Update TopBar Component
Replace the current logo section in `src/components/TopBar.tsx`:

**Changes:**
- Remove Lucide `Truck` import
- Import new `RouteEULogo` component
- Replace the inner logo elements with `<RouteEULogo />`
- Adjust container padding to accommodate 180x48px logo
- Keep the glassmorphism pill container and animations

---

## Technical Details

### Color Mapping
| Element | Hex Code | Tailwind Equivalent |
|---------|----------|---------------------|
| Truck background | #FBBF24 | amber-400 (close to primary) |
| Navy text | #1E293B | slate-800 |
| Red badge | #EF4444 | red-500 |
| White text | #FFFFFF | white |

### SVG Structure
```text
+--------------------------------------------------+
|  [🚛]   RouteEU   [EXPRESS]                      |
|  Yellow    Navy      Red Badge                   |
|  Circle    Bold      White Text                  |
+--------------------------------------------------+
     ^         ^           ^
   ~40px    ~90px       ~50px
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/RouteEULogo.tsx` | Create new SVG component |
| `src/components/TopBar.tsx` | Update to use new logo component |

---

## Benefits
- **Consistent branding**: Fixed 180x48px ensures uniform appearance
- **Performance**: Inline SVG loads instantly with no network requests
- **Scalability**: Vector-based logo stays crisp at any resolution
- **Fixes typo**: "EKPRESS" corrected to "EXPRESS"
