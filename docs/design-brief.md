# CODEX PROMPT — MANN PATEL PORTFOLIO
## NYC Overcast Daylight — Editorial Minimalism with Burnt Copper

### 1. Project Objective

Build or redesign my personal portfolio website for **Mann Patel**, a Computing Science student at the University of Alberta and Software Developer.

The website should follow the attached reference screenshots, with a premium editorial design inspired by New York City's architecture, photography, and atmosphere.

The visual concept is:

**A colorful New York City skyline during an overcast daytime, with dramatic grey clouds, natural architectural colors, and subtle Burnt Copper (#B35435) accents.**

It should feel like a professionally designed portfolio combining:

- Elegant editorial typography
- Minimalist architecture-inspired layouts
- Overcast New York photography
- Modern software engineering
- Sophisticated and restrained interactions
- Smooth, cinematic motion

The design must remain professional and suitable for software engineering recruiters.

Do not turn this into a colorful startup landing page, futuristic dashboard, dark cyberpunk website, or generic developer portfolio.

The latest attached design image is the primary reference.

---

# 2. IMPORTANT: Visual Direction

The most important requirement is to understand the difference between the earlier designs and the latest one.

### Earlier concepts — DO NOT USE

- Entire skyline in black and white
- Orange-tinted buildings
- Dark nighttime skyline
- Heavy rain effects covering the screen
- Brown or sepia-colored photography
- Artificially colored sky
- Bright sunny blue sky
- Excessively dark backgrounds

### FINAL concept — USE THIS

**A real New York City in natural daylight, under a dramatic grey, cloudy sky.**

The skyline should show natural architectural colors:

- Warm brown and red brick buildings
- Beige and limestone façades
- Dark blue-grey glass skyscrapers
- Subtle golden sunlight hitting some buildings
- Naturally colored bridges
- Muted blue-grey waterfront
- Grey and silver cloud formations

The SKY should dominate the upper area of the composition and remain grey.

The buildings should retain realistic colors.

The atmosphere should resemble a New York afternoon shortly before or after rain, but with enough daylight to see the architecture clearly.

Think:

"New York editorial photography on an overcast afternoon."

Not:

"Black-and-white New York photography."

The cityscape should feel photographic, realistic, atmospheric, and cinematic.

---

# 3. Technology and Implementation

First, inspect the existing portfolio repository.

Reuse the existing framework and architecture wherever possible.

If starting from scratch, use:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Motion for React / Framer Motion
- Lucide React icons
- Next.js Image for image optimization

Prioritize:

- Responsive layouts
- Accessibility
- Search engine optimization
- Fast loading
- Optimized images
- Maintainable components
- Smooth interactions
- Clean production-ready code

Do not install unnecessary animation libraries or introduce major dependencies without a clear need.

---

# 4. Design System

## Color Palette

The website should have a warm, neutral editorial identity.

| Purpose | Color |
|---|---|
| Main background | #F5F4F1 |
| Alternate background | #EAE8E4 |
| Primary text | #171717 |
| Secondary text | #686868 |
| Primary accent | #B35435 |
| Accent hover | #904029 |
| Border | #D6D2CB |
| White | #FFFFFF |
| Dark background | #242424 |

### Accent Color: Burnt Copper

Use `#B35435` as the signature accent.

The Burnt Copper should be used sparingly for:

- Primary CTA buttons
- Outlined secondary buttons
- Active navigation underline
- Section numbers
- Thin decorative lines
- Selected project borders
- Hover states
- Interactive links
- Form focus states
- Small arrow icons

Do not use copper as a large section background.

Do not apply copper filters to the NYC photograph.

The accent should complement the natural warm tones of the city.

### Typography

Use three distinct typography styles.

**Large headings:**

Instrument Serif, Cormorant Garamond, or a similar sophisticated editorial serif.

**Body text:**

Inter or Geist.

**Navigation and metadata:**

IBM Plex Mono or Geist Mono.

Typography hierarchy:

- Hero name: approximately 100–130px on large desktop screens
- Main section headings: 50–70px
- Project headings: 28–40px
- Body text: 16–18px
- Small metadata: 11–13px, uppercase with letter spacing

Typography must scale responsively.

Avoid decorative fonts for body text.

---

# 5. HERO SECTION — THE MOST IMPORTANT PART

The hero should reproduce the overall arrangement of the latest reference image.

The layout should feel spacious and carefully balanced.

## A. Background Photography

Use a high-resolution NYC skyline photograph that shows:

- Colorful buildings during daylight
- Dramatic overcast grey sky
- Brooklyn Bridge on the left if composition permits
- A recognizable Manhattan skyline
- Empire State Building where possible
- Natural colors
- Waterfront reflections if included

The skyline should visually occupy approximately the lower 35–45% of the hero at desktop sizes.

The grey sky should occupy most of the upper portion.

This creates clean negative space for the hero introduction.

### Image Treatment

- Preserve natural building colors
- Slightly reduce saturation if needed
- Maintain realistic contrast
- Preserve the atmospheric grey sky
- Avoid dark overlays across the entire photograph
- Avoid dramatic orange filters
- Avoid making the skyline black and white
- Keep the hero introduction readable

The final image should look like genuine editorial city photography.

### Asset Handling

Search the repository for existing NYC imagery first.

If no suitable image exists, use a properly licensed high-resolution photograph with a similar composition.

The generated reference image is intended for visual direction, not a requirement that an exact historical skyline photograph exists.

Do not invent an image source or assume a copyrighted image can be freely reused.

Prefer a locally stored, optimized hero image.

Use responsive cropping with the focal point positioned to preserve the skyline and text legibility.

## B. Navigation Bar

At the top of the page:

Left:

*MP*

Use a thin italic serif monogram.

Right:

ABOUT — EXPERIENCE — PROJECTS — SKILLS — RESUME — CONTACT

Styling:

- Transparent background over the hero
- Dark text
- Small uppercase letters
- Wide letter spacing
- Generous horizontal spacing
- Active link underlined in Burnt Copper
- Smooth underline reveal on hover

On scrolling:

- Navigation should remain sticky
- Add a subtle warm-grey background
- Add a thin lower border
- Avoid oversized shadows or glassmorphism

On mobile, use a minimal accessible menu.

## C. Hero Text

Position the main text in the upper-left portion of the hero.

Small heading:

COMPUTING SCIENCE · UNIVERSITY OF ALBERTA

Main name:

**Mann Patel**

Use an extremely elegant, large serif font.

Underneath:

*Software Developer*

This should be italic, smaller, and visually lighter.

Description:

"Computing Science student at the University of Alberta, building full-stack applications, AI-powered systems, and practical tools that solve real-world problems."

Add a thin vertical Burnt Copper line beside the description.

Use dark charcoal text, not pure black everywhere.

The text should appear directly over the naturally light grey sky.

If the image does not provide sufficient contrast, use a very subtle local background treatment behind the text rather than darkening the entire hero.

## D. Hero Buttons

Place two buttons beneath the description.

### Primary

VIEW PROJECTS →

- Background: #B35435
- Text: white
- Rectangular, minimal corners
- Monospace uppercase label
- Subtle hover transition

On hover:

- Background changes to #904029
- Arrow moves slightly to the right
- Button lifts approximately 2px
- Transition: 200–250ms

### Secondary

GET IN TOUCH →

- Transparent background
- Burnt Copper border
- Burnt Copper text

On hover:

- Background becomes Burnt Copper
- Text becomes white
- Arrow shifts slightly

Keep both buttons aligned horizontally on desktop.

Make them accessible and responsive on mobile.

## E. Social Links

Place minimal monochrome icons beside the buttons:

- GitHub
- LinkedIn
- Email

Default: dark charcoal.

Hover: Burnt Copper.

Use subtle scaling and proper accessible labels.

Only use actual verified profile links.

## F. Scroll Indicator

Lower left:

SCROLL ↓

Add a thin Burnt Copper vertical line.

Use gentle animation to suggest downward movement.

Avoid large bouncing effects.

---

# 6. Hero Motion and Atmospheric Effects

The hero should feel alive without being distracting.

### Initial Page Load

Sequence:

1. Navigation fades into view.
2. Name moves upward slightly and fades in.
3. Subtitle and introduction appear.
4. Buttons and social icons fade in.
5. Skyline remains visually stable and sharp.

Use staggered entrances of approximately 100–150ms between elements.

### Skyline Parallax

Implement an extremely subtle parallax effect if performance allows.

As the user scrolls:

- Skyline moves slightly slower than foreground text.
- Text transitions naturally into the next section.
- Avoid visible image distortion.

Disable or simplify parallax on mobile if necessary.

### Clouds

The grey sky should primarily come from the photograph itself.

Do not generate unrealistic animated clouds.

An optional extremely slow cloud movement effect is acceptable only if it looks natural and does not introduce visual artifacts.

### Rain

Do not add obvious falling rain to the hero.

The atmosphere should suggest rainy weather through the grey clouds and damp city aesthetic.

The scene should still feel like daylight.

Respect `prefers-reduced-motion`.

---

# 7. About Section — 01

This section should transition from the photographic hero into a clean warm-grey background.

Background:

`#F5F4F1`

Section label:

01 — ABOUT

Main heading:

**Building things that actually matter.**

Italicize "actually matter" using the editorial serif.

Use a two-column layout.

### Left Column

Introduce me as a software developer with interests in:

- Full-stack applications
- Backend engineering
- Cloud infrastructure
- AI/ML systems
- Software automation

Keep the copy clear, grounded, and professional.

### Right Column

Three capability groups:

BACKEND & CLOUD ENGINEERING

FULL-STACK DEVELOPMENT

AI & SOFTWARE AUTOMATION

Each capability group should have:

- Small Burnt Copper heading
- Thin copper vertical rule
- Short description in grey
- Generous spacing

Do not introduce cards unnecessarily.

---

# 8. Experience Section — 02

Create an elegant editorial experience timeline.

Background:

`#F5F4F1` or `#EAE8E4`

Each experience entry should use:

Left column:

- Dates
- Company
- Location

Right column:

- Role title in serif
- Brief accomplishments
- Technology tags

Separate roles with thin grey horizontal rules.

Use Burnt Copper sparingly for dates, location labels, or hover details.

Do not invent employment history.

Read the existing resume and use verified experience.

---

# 9. Projects Section — 03

Heading:

**Selected Work.**

Subtitle:

"A collection of things I've built."

The projects area should combine editorial minimalism with an interactive physical-photography aesthetic.

## Photo Swipe Gallery

Instead of traditional rectangular software project cards, create a horizontally draggable collection of project photographs.

The interaction should resemble printed photos emerging from a camera and sliding across a desk.

### Appearance

- Slightly overlapping photographs
- Thin off-white borders
- Subtle natural shadows
- Small rotations of approximately 1–3 degrees
- Smooth horizontal movement
- A clean background
- Minimal typography

### Interaction

On dragging:

- Photographs move smoothly
- Nearby photographs respond gently
- The active photograph becomes slightly larger
- Motion has a subtle spring effect
- Snapping to the nearest project feels natural

On hover:

- Active photograph border becomes Burnt Copper
- Image scales subtly
- Project title appears or becomes emphasized
- Explore arrow turns Burnt Copper

On click:

- Open a project details view or dedicated case-study page

Support trackpad scrolling, touch gestures, mouse dragging, and keyboard navigation.

Avoid excessive 3D rotations or gimmicky transitions.

## Projects to Include

### 01 — Hirely

AI-powered career platform.

Features:

- Resume analysis
- Intelligent job matching
- GitHub analysis
- Application tracking

Stack: FastAPI, MongoDB, React, Tailwind CSS.

### 02 — Pharmacy Workflow Automation

Backend-driven pharmacy management and automation platform.

Features:

- Patient intake
- Medication interaction checks
- Multi-stage workflows
- Authentication

Stack: FastAPI, Python, PostgreSQL.

### 03 — All Clear

Safety compliance platform.

Features:

- PPE violation monitoring
- Supervisor resolution workflows
- Audit-ready records
- Compliance reporting

Use verified technologies from the repository.

### 04 — EventLottery

Android application for event registration and selection.

Features:

- QR registration
- Lottery-based selection
- Geolocation
- Notifications

Stack: Java, Android, Firebase Firestore.

Use actual project screenshots when available.

Do not fabricate UI screenshots or claim unverified features.

---

# 10. Skills Section — 04

Keep the skills section typography-based and minimalist.

Avoid:

- Skill percentage bars
- Colorful logos everywhere
- Progress circles
- Excessive card backgrounds

Use categories:

LANGUAGES

FRONTEND

BACKEND

DATABASES

CLOUD & DEVOPS

AI & TOOLS

Show verified technologies.

Use small, minimal text labels.

Hovering over a skill may reveal a thin Burnt Copper underline or border.

The overall design should remain neutral.

---

# 11. Resume Section — 05

Create an embedded resume preview.

Use my actual PDF from the repository.

Requirements:

- Responsive PDF viewer
- Download button
- Open-in-new-tab option
- Clean presentation
- Mobile-friendly fallback

Use Burnt Copper for the download CTA.

Do not fabricate a resume.

---

# 12. Contact Section — 06

This section should bring back some of the New York atmosphere without making the page overly busy.

Heading:

**Get In Touch.**

Description:

"I'm always open to discussing software engineering opportunities, interesting projects, and meaningful collaborations."

Layout:

Left:

- Introductory text
- Email
- GitHub
- LinkedIn

Right:

- Name field
- Email field
- Message field
- Send button

### Styling

Background: warm grey or slightly lighter neutral.

Inputs:

- Light neutral fill
- Thin grey border
- Minimal corners
- Burnt Copper border on focus

Submit button:

- Burnt Copper background
- White text
- Darker copper hover

Implement a real delivery mechanism and proper form validation.

If there is no backend or delivery provider configured, clearly indicate that setup is required rather than pretending submission works.

---

# 13. Footer

Minimal footer.

Left:

© 2026 MANN PATEL

Right:

EDMONTON, AB · CANADA

Use small uppercase monospace typography.

Thin upper border.

Subtle hover effects on footer links.

---

# 14. Consistent Visual Language

The entire website should feel like one cohesive design.

### Use

- Natural NYC photography
- Grey overcast skies
- Warm-grey section backgrounds
- Burnt Copper accents
- Elegant serif typography
- Minimal uppercase labels
- Thin horizontal dividers
- Refined hover interactions
- Spacious layouts

### Avoid

- Unrelated colorful gradients
- Generic AI-generated abstract blobs
- Overly rounded UI components
- Neon effects
- Glassmorphism
- Excessive animations
- Overcrowded project cards
- Dark-mode styling throughout
- Fully monochromatic city photography

The city photography is the main expressive visual element.

The interface itself should remain quiet and sophisticated.

---

# 15. Responsive Requirements

Desktop:

- Large typography
- Spacious hero
- City skyline filling the lower portion
- Two-column editorial content
- Horizontal photograph gallery

Tablet:

- Smaller hero text
- Adjusted skyline cropping
- Responsive grids
- Touch-friendly navigation

Mobile:

- Compact navigation
- Readable hero text
- Preserve key skyline landmarks where possible
- Avoid placing skyscrapers directly behind the name
- Stack CTA buttons when necessary
- Touch-swipe project gallery
- Single-column content sections

Do not allow horizontal page overflow.

Use responsive image art direction where needed instead of forcing the desktop skyline crop onto every screen.

---

# 16. Performance and Accessibility

Ensure:

- Optimized image files
- No unnecessary large animation bundles
- Correct heading hierarchy
- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Accessible form labels
- Sufficient text contrast
- Reduced-motion support
- Lazy loading for below-the-fold images
- Responsive images
- Proper metadata and Open Graph tags

Avoid layout shifts during page loading.

---

# 17. Final Implementation Instructions

1. Inspect my current portfolio repository and understand its structure.
2. Identify reusable components, styles, assets, and existing content.
3. Implement the latest NYC design as closely as practical.
4. Prioritize the hero section and its photographic composition.
5. Preserve natural daylight colors in the buildings and grey weather in the sky.
6. Apply Burnt Copper consistently and sparingly.
7. Implement the project gallery with smooth, physical-photo-inspired swiping.
8. Build the remaining sections using the same editorial visual language.
9. Reuse authentic portfolio data and existing working links.
10. Test navigation, hover states, scrolling, mobile layouts, and accessibility.
11. Run the project's available type checks, linting, tests, and production build.
12. Fix issues introduced by the changes.
13. Report any missing assets or required external configuration.

## FINAL VISUAL REQUIREMENT

The finished portfolio should look like:

**A premium New York editorial website on an overcast afternoon, with a colorful Manhattan skyline, dramatic grey clouds, minimal warm-grey interface, sophisticated typography, and carefully placed Burnt Copper interactive accents.**

The most important details are:

- The New York skyline remains naturally colorful.
- The sky is dramatically grey, cloudy, and atmospheric.
- The environment is daylight, not nighttime.
- The name "Mann Patel" appears in large, elegant serif typography.
- Burnt Copper is the signature interactive color.
- All other sections remain simple and professional.
- Project images have a smooth, camera-photo-inspired swiping interaction.
- The experience feels cinematic but not overly animated.

**Do not compromise the clean, elegant visual identity by adding unnecessary decorative features.**

---

# Planned implementation roadmap and acceptance criteria

These are follow-up milestones. The foundation does not implement them.

## 2. Editorial design system

- Define warm neutral tokens and Burnt Copper `#B35435` with the palette and typography roles above.
- Establish serif display headings, readable body typography, and monospace metadata.
- Provide shared accessible controls with keyboard focus and adequate contrast.

## 3. Hero and navigation

- Use a properly licensed NYC daylight photograph with a dramatic grey sky and naturally colored buildings; record its source and license.
- Match the brief’s spacious composition with responsive crops that preserve landmarks and text legibility.
- Implement the responsive navigation and an accessible mobile menu with keyboard operation and visible focus.

## 4. Portfolio content

- Add About, verified experience, verified skills, and footer content only after owner/source verification.
- No employment or achievement claims appear without evidence tracked in the content checklist.

## 5. Projects

- Add only owner-verified project descriptions, technologies, links, and authentic screenshots with publication rights confirmed.
- Provide project details and a photo-style gallery operable by touch, mouse, keyboard, and trackpad without trapping focus.

## 6. Resume and contact

- Publish the actual owner-approved PDF with download, new-tab, and responsive fallback behavior.
- Validate contact fields and connect to a real delivery service; clearly communicate delivery failures and any required configuration.

## 7. Release preparation

- Verify reduced-motion behavior, keyboard accessibility, contrast, semantic structure, metadata, image optimization, and responsive layouts.
- Document production deployment and required configuration; do not deploy without explicit authorization.
