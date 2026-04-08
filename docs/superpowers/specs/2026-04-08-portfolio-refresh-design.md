# Portfolio Refresh — Design Spec

## Goal

Refresh laurenprete.com portfolio to showcase six current projects with visual storytelling, replacing the old project list. Scrub PII from resume references.

## Projects to Showcase

| Project | Type | Live URL | Login-Gated? |
|---------|------|----------|-------------|
| GorgonExplorer | Game Tool | gorgonexplorer.com | No |
| Leagues Advisor + RuneLite Plugin | Game Tool | leagues-advisor.com | No |
| GravMagnet | Client Work | — | Yes (screenshots only) |
| StarStuff Photos | Client Work | starstuffphotos.com | Partially (public storefront + gated CMS) |
| IKIM MIT | MIT | ikim.mit.edu | Partially (public site + gated content plugin) |

## Main Page — Project Cards

Replace the old text-heavy cards. New cards feature:

- **Hero image** filling the card
- **Gradient overlay** at the bottom with project name + one-line tagline
- **Tech badges** (small pills) showing the stack at a glance
- **Category label** in the corner: "Client Work" / "Game Tool" / "MIT"
- **Hover effect**: subtle image scale-up, shadow increase

The grid stays responsive: 1 column on mobile, 2 on medium, 3 on large.

## Project Detail Pages — Visual Storytelling

Each page follows this structure:

1. **Hero banner** — full-width screenshot, project name, tagline, tech badges, links (live site / GitHub)
2. **The Story** — 2-3 short paragraphs in problem-approach-outcome narrative format
3. **Feature Showcase** — alternating left/right blocks. Each block: annotated screenshot on one side, feature title + description on the other. Alternates direction as you scroll.
4. **Links footer** — live site, GitHub, back to portfolio

No bullet lists of features. Every feature is shown visually with a screenshot and a short description.

## Privacy Cleanup

- Remove address and phone from resume reference (hero section already clean — just name, LinkedIn, email)
- Keep LinkedIn and email as contact methods

## What Stays The Same

- Dark purple/cyan theme (`darkpurple: #1A0729`, `medpurple: #563370`, `lightpurple: #C095DB`, `lightblue: #65efff`)
- Astro + React + Tailwind stack
- GitHub Pages deployment
- Hero section (photo, bio, skills badges)
- Base layout and footer

## What Gets Removed

- Old project pages (`5squares.astro`, `nai-landing-pages.astro`)
- Old project images (`5sq.png`, `NAILanding.png`, `ethernet.png`, `vpx.png`, `youarehere.webp`)
- Slick carousel CSS imports (unused)
- `react-alice-carousel` and `react-slick` dependencies (unused)

## Image Requirements

Lauren needs to provide screenshots for each project:

| Project | Card Thumbnail | Hero Image | Feature Screenshots (3-5) |
|---------|---------------|------------|--------------------------|
| GorgonExplorer | 1 | 1 | 3-4 |
| Leagues Advisor | 1 | 1 | 3-4 |
| GravMagnet | 1 | 1 | 4-5 |
| StarStuff Photos | 1 | 1 | 3-4 |
| IKIM MIT | 1 | 1 | 3-4 |

Card thumbnails and hero images can be the same image in different crops. Feature screenshots should each highlight a specific capability.

## Out of Scope (Separate Workstreams)

- `games.laurenprete.com` landing page (Stripe/donations umbrella)
- Stack upgrades (Astro 4 -> 5, Node 16 -> current)
- Blog section
