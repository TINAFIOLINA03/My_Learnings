# Cloud Learning Journey

A clean, responsive React static page documenting my exploration of AWS and Zoho Catalyst, presented as a narrative learning journey.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Intro.jsx              # Introduction section
    AWSLearning.jsx        # AWS learning narrative
    CatalystLearning.jsx   # Zoho Catalyst learning narrative
    AttemptsJourney.jsx    # Phase-by-phase execution timeline
    ScreenshotsSection.jsx # Screenshot placeholders
    KeyLearnings.jsx       # Summary of key learnings
    ClosingNote.jsx        # Closing note
    Section.css            # Shared section styles
  App.jsx                  # Main app component
  App.css                  # App-level styles
  main.jsx                 # Entry point
  index.css                # Global styles
```

## Adding Screenshots

Screenshot placeholders are in `ScreenshotsSection.jsx`. To add images:

1. Place your screenshot files in `public/images/` (create the directory if needed)
2. Update the placeholder divs in `ScreenshotsSection.jsx` to use `<img>` tags:

```jsx
<img src="/images/your-screenshot.png" alt="What I tried" />
```

## Design Philosophy

- Minimal, journal-like aesthetic
- Clean typography with neutral colors
- Mobile-responsive layout
- Narrative-first content presentation
