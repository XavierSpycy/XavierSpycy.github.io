# Personal Homepage Design — Jiarui Xu

**Date:** 2026-06-06  
**Repo:** `XavierSpycy.github.io`  
**Status:** Approved

---

## Overview

A complete rewrite of `XavierSpycy.github.io` as a fancy, animation-rich personal homepage. The design is professional and mature without being nerdy or immature. Target audience: recruiters, researchers, and collaborators who land on the page from GitHub, LinkedIn, or a paper citation.

---

## Technical Stack

- **Languages:** HTML, CSS, Vanilla JavaScript (no frameworks, no build step)
- **Hosting:** GitHub Pages (static, zero maintenance)
- **Dependencies:** None — all animations implemented in CSS/JS

---

## Visual Style: Nordic Light

| Property | Value |
|---|---|
| Background | White `#ffffff` / Light gray `#f8fafc` |
| Primary accent | Sky blue `#0ea5e9` |
| Secondary accent | Emerald `#10b981` |
| Tertiary accent | Violet `#8b5cf6` |
| Text primary | `#0f172a` |
| Text secondary | `#64748b` |
| Heading font | Georgia / serif |
| Body font | System sans-serif stack |
| Border/divider | `#e2e8f0` |

---

## Page Structure: Single-Page Long Scroll

Fixed top navigation bar with anchor links. All sections live on one page; scrolling is the primary navigation. The nav highlights the active section based on scroll position.

### Navigation items
`About · Timeline · Projects · Research · Contact`

---

## Sections

### 1. Hero (full-screen, 100vh)

**Layout:** Centered content over animated SVG background.

**Content:**
- Name: `Jiarui Xu` (large serif heading)
- Typewriter subtitle cycling through: `LLM Algorithm Engineer` → `ML Researcher` → `Open Source Contributor`
- 4 frosted-glass info cards arranged in a 2×2 grid:
  - 📍 Location (Shanghai, China)
  - 🎓 Education (MSc Data Science, USYD)
  - 📄 Paper (count with link to Research section)
  - 💼 Career (current role, generic label)
- CTA buttons: `View Projects ↓` and `Research ↓`

**Animations:**
- SVG flowing lines background (3 curves in theme colors, slow continuous animation)
- Mouse-following gradient glow (radial gradient tracks cursor position in Hero area)
- Frosted-glass cards slide up on page load with staggered delay
- Number count-up on the Paper/Career cards when they appear

### 2. About

**Layout:** Two columns — left: brief bio paragraph; right: skill tag cloud grouped by category.

**Content:**
- Bio: 2–3 sentences covering current role, research interests, and open-source work
- Skill categories: LLM / Deep Learning / ML / Backend / Tools
- Each skill is a pill-shaped tag with category color

**Animations:**
- Section fades in and slides up on scroll (`IntersectionObserver`)
- Skill tags stagger in one by one

### 3. Timeline

**Layout:** Vertical timeline (2-column alternating on desktop, single column on mobile).

**Content — Education:**
- MSc Data Science — University of Sydney (Feb 2023 – Jun 2024)
- BEng Industrial Engineering — Nanjing Tech University (Sep 2017 – Jun 2021)

**Content — Experience:**
- LLM Algorithm Engineer — Transsion Holdings / TEX AI (Feb 2025 – Present)
- LLM Algorithm Intern — Giant Network Group AI Lab (Aug 2024 – Nov 2024)
- Vacation Research Intern — USYD Engineering (Jun 2024 – Jul 2024, VRI Scholarship)
- AIGC Algorithm Intern — Funplus AI Tech (Dec 2023 – Feb 2024)

**Animations:**
- Timeline center line draws downward as section scrolls into view
- Each node pops in sequentially with a scale animation

### 4. Projects

**Layout:** 2-column card grid on desktop, 1-column on mobile.

**Content:** 10 projects total, each card contains:
- Project name (linked to GitHub)
- One-sentence description
- Tech stack tags
- Category badge

**Category filter tabs:** `All · NumPy · PyTorch · HuggingFace · LLM`

| Project | Category | Key tech |
|---|---|---|
| MLForce | NumPy | NumPy, PyPI |
| NumPy MLP | NumPy | NumPy, autograd |
| NumPy NMF | NumPy | NumPy |
| EMNIST Classifier | PyTorch | PyTorch, ResNet |
| CAT Multimodal | PyTorch | PyTorch, attention |
| Robust Trainers | PyTorch | PyTorch, noisy labels |
| Tab Transformers | PyTorch | PyTorch, tabular |
| MultiCLIP | PyTorch | CLIP, BLIP |
| Hands-on LoRA | HuggingFace | LoRA, Gemma, Qwen, Llama |
| Llama3Ops | LLM | LoRA → quantization → vLLM |

**Animations:**
- Cards stagger in on scroll
- Hover: slight upward float + border glow in theme color
- Hover: subtle 3D perspective tilt (CSS `transform: perspective rotateX/Y`)
- Filter tab switch: fade + scale transition on card grid

### 5. Research

**Layout:** Vertical list of paper cards (full-width).

**Content — 2 papers:**

1. **BERTDetect: A Neural Topic Modelling Approach for Android Malware Detection**
   - Venue: WWW'2025 Workshop — TempWeb 2025
   - Link: https://arxiv.org/abs/2503.18043

2. **A Framework to Assess Multilingual Vulnerabilities of LLMs**
   - Venue: WWW'2025 Short Paper Track
   - Link: https://arxiv.org/abs/2503.13081

Each card: title, venue badge, one-line abstract/description, arXiv button.

**Animations:**
- Cards fade in on scroll
- Hover: left border accent line extends, background tint

### 6. Contact (+ Footer)

**Layout:** Centered, minimal.

**Content:**
- Brief line: "Feel free to reach out"
- Icon links: GitHub · LinkedIn · HuggingFace · Email
- Footer: name + year

**Animations:**
- Icons scale up on hover with color transition to their brand color

---

## Animation System

All scroll-triggered animations use `IntersectionObserver` with a single reusable utility. Elements start with `opacity: 0; transform: translateY(20px)` and transition to visible state when they enter the viewport. Staggered items use CSS `--delay` custom property.

| Animation | Trigger | Implementation |
|---|---|---|
| SVG flow lines | Continuous | CSS `@keyframes` on SVG path offset |
| Typewriter effect | Page load | JS string cycling with cursor blink |
| Mouse glow | mousemove in Hero | JS updates CSS custom property |
| Count-up numbers | IntersectionObserver | JS rAF loop |
| Section fade-in | IntersectionObserver | CSS transition + JS class toggle |
| Card 3D tilt | mousemove on card | JS updates CSS transform |
| Timeline draw | IntersectionObserver | CSS `stroke-dashoffset` animation |

---

## File Structure

```
XavierSpycy.github.io/
├── index.html          # single page, all sections
├── style.css           # all styles
├── script.js           # all animations and interactions
└── assets/
    └── (optional: favicon, og-image)
```

The existing `pages/` directory (cv.html, publications.html, contact.html) will be removed as all content moves into `index.html`.

---

## Responsive Behavior

- **Desktop (≥1024px):** 2-column project grid, alternating timeline
- **Tablet (768–1023px):** 2-column grid, single-column timeline
- **Mobile (<768px):** 1-column everything, simplified hero cards (2×2 → 2×2 smaller), nav collapses to hamburger

---

## Out of Scope

- Blog / posts section
- Dark mode toggle
- i18n / Chinese language version
- Contact form (email link only)
- Analytics
