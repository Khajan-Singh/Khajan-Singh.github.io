# UI & Color Scheme Evaluation

## Current UI architecture
- The site is a Jekyll static portfolio with a single global stylesheet (`assets/css/site.css`) loaded in the default layout.
- Navigation and page shells are componentized through includes/layouts (`_includes/nav.html`, `_layouts/default.html`), so global visual changes can be done efficiently from CSS tokens.

## Current visual system strengths
1. **Tokenized foundation is already in place**
   - `:root` defines a complete Catppuccin-based palette and semantic tokens (`--bg`, `--text`, `--line`, `--accent`, etc.).
   - This gives you a strong base for fast re-theming without touching most component rules.

2. **Consistent card/surface language**
   - Reusable classes (`.section`, `.card`, `.evidence-card`, `.postcard`, `.metric`) maintain consistent border radius, borders, and elevated surfaces.

3. **Typography and spacing are centralized**
   - Font families and type scale (`--step-*`) are already standardized; spacing rhythm uses shared utility patterns (`.stack`, `.cluster`, grid helpers).

4. **Solid interaction baseline**
   - Buttons/links have hover and focus-visible states.
   - Mobile nav toggling behavior is implemented and accessible enough for a simple static site.

## Key design gaps to improve
1. **Single-mode theme only (dark only)**
   - There is no light theme or user preference switch.
   - Opportunity: implement `[data-theme="light"]` token overrides + optional JS toggle persisted to `localStorage`.

2. **Accent hierarchy is narrow**
   - Blue/lavender is used heavily across buttons, links, active nav, and focus styles.
   - Opportunity: create role-based accents (`--accent-primary`, `--accent-success`, `--accent-warning`) and reserve each by purpose.

3. **Glass/elevation style could be more intentional**
   - Surface and border values are close in tone, making sections feel flatter on some displays.
   - Opportunity: slightly increase contrast between `--bg-elev-*` levels and lines for clearer depth.

4. **Hero section lacks a visual anchor**
   - Home page hero is text-rich but has no signature visual motif (illustration, shape system, or featured metric card).
   - Opportunity: add a lightweight hero visual block or highlighted “Current Build Status” card.

5. **State design system is incomplete**
   - No explicit semantic tokens for success/error/info/warning callouts.
   - Opportunity: define semantic tokens now so future components stay consistent.

## High-impact roadmap (recommended order)

### Phase 1 (quick wins, 1–2 hours)
- Introduce semantic token aliases and split foundation from brand accents:
  - `--color-bg`, `--color-surface-1`, `--color-text-primary`, `--color-border-default`, etc.
- Improve contrast for subtle text and borders.
- Normalize button/link active/hover states to use semantic tokens only.

### Phase 2 (theme flexibility, 2–4 hours)
- Add a **light theme** via `[data-theme="light"]` token overrides.
- Add a minimal theme toggle in nav (`_includes/nav.html`) and JS persistence in `assets/js/site.js`.
- Optionally honor `prefers-color-scheme` as default.

### Phase 3 (UI polish, 3–6 hours)
- Add one brand-forward hero visual treatment.
- Standardize card heading spacing and metadata hierarchy for better scanability.
- Add utility classes for section emphasis (`.section--highlight`, `.tag--accent`, `.btn--ghost`).

## Suggested starter palette directions
Choose one and map tokens around it:
1. **Deep tech (current style refined)**: indigo + cyan + mint accents.
2. **Eco engineering**: slate neutrals + moss green primary + amber data highlights.
3. **Editorial minimal**: near-monochrome surfaces + single vivid accent.

## Where to change what
- **Global tokens + components**: `assets/css/site.css`
- **Theme toggle UI**: `_includes/nav.html`
- **Theme behavior (persist + apply)**: `assets/js/site.js`
- **Hero content emphasis**: `index.md`

## Proposed first implementation task
If you want, the first concrete change I’d make is:
1. Add semantic tokens + light theme override in CSS.
2. Add a nav theme toggle button.
3. Add JS to persist preference.
4. Slightly refine button/nav contrast for both themes.

This gives immediate visual payoff while keeping the rest of your content structure unchanged.
