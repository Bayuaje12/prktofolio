# BAYU / IBOYY — Motion Graphics Portfolio

Professional personal portfolio motion video built with **Remotion + React + TypeScript**.

## Project Identity
- **Name**: BAYU
- **Nickname**: IBOYY
- **Brand**: IBOYY CREATIVE
- **Title**: Creative Developer & Digital Creator
- **Tagline**: CREATING DIGITAL EXPERIENCES.

## Output Specs
- Vertical: `1080x1920` (9:16), 30 FPS, 45–60s, MP4 H.264
- Horizontal: `1920x1080` (16:9), 30 FPS
- Composition IDs: `BayuPortfolioVertical`, `BayuPortfolioHorizontal`

## Quick Start

```bash
npm install
npm run preview
```

## Render

```bash
# Vertical final
npm run render:vertical

# Horizontal
npm run render:horizontal

# Both
npm run render:all

# QC (after render)
npm run qc
# or specific file
bash scripts/qc.sh out/bayu-portfolio-vertical.mp4
```

Outputs are written to `out/`.

## Central Content Config
Edit **`src/data/content.ts`** to replace all personal content:
- Personal identity, description, tagline
- Profile photo path
- Skills/tools list
- Project showcase items (name, category, description, thumbnail, accent)
- Social media placeholders (replace with real usernames/URLs)
- Audio paths

Timing/scene durations: **`src/data/timing.ts`**  
Theme/colors/fonts: **`src/data/theme.ts`**

## Asset Structure

```text
public/
  assets/
    profile/       # Replace profile-placeholder.svg with real photo
    projects/      # Replace project-01..06.svg with real thumbnails
    icons/         # Skill/tool icons
    logos/         # Optional logo files
    backgrounds/   # Optional backgrounds
    audio/         # music-placeholder.wav, whoosh/click/impact.wav
    fonts/         # Optional local fonts
    reference/     # Put reference video/images here
```

## Replace Placeholders
1. **Profile photo**: put real image in `public/assets/profile/` and update `CONTENT.personal.profilePhoto`.
2. **Projects**: update `CONTENT.projects` entries; replace thumbnails in `public/assets/projects/`.
3. **Socials**: replace `username` and `url` in `CONTENT.socials` (no fake accounts are included).
4. **Logo**: wordmark is generated from `CONTENT.personal.logoWordmark`. For a custom logo asset, place it in `public/assets/logos/` and wire it in `Scene06Outro`.
5. **Music**: replace `public/assets/audio/music-placeholder.wav` with licensed music and update `CONTENT.audio.music`.
6. **Reference video**: place in `public/assets/reference/` and use it when refining motion/timing.

## Scene Map
- **Scene01Intro** (`src/scenes/Scene01Intro.tsx`): dark intro, gradient motion, particles, CTA.
- **Scene02Profile** (`src/scenes/Scene02Profile.tsx`): big name, glass profile card, parallax, 3D.
- **Scene03Skills** (`src/scenes/Scene03Skills.tsx`): floating skill cards, staggered motion.
- **Scene04Showcase** (`src/scenes/Scene04Showcase.tsx`): animated project gallery (main section).
- **Scene05SearchSocial** (`src/scenes/Scene05SearchSocial.tsx`): search typing, social cards.
- **Scene06Outro** (`src/scenes/Scene06Outro.tsx`): minimal white outro, wordmark, handle.

## Quality Checklist
- [ ] No missing assets in render
- [ ] No black frames / broken transitions
- [ ] Text readable on mobile 9:16
- [ ] Audio licensed and synced
- [ ] Real profile/projects/socials replaced
- [ ] MP4 exported and QC passed

## Notes
- This project uses placeholder assets/content by default.
- Do not claim render success until `out/*.mp4` exists and `scripts/qc.sh` passes.
- On Termux/Android, ensure Chromium is available for Remotion rendering (`chromium-browser` detected).
- **Termux compatibility (applied):** Remotion downgraded to `4.0.200` (webpack bundler) to avoid rspack native binding issues on Android arm64. `node_modules/@remotion/renderer/dist/serve-static.js` was patched to continue when the Remotion compositor binary is unavailable (not needed for this project; no OffthreadVideo). If you reinstall dependencies, reapply the patch or keep this note.
