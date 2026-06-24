# Trion Portfolio Website

A responsive multi-page personal portfolio website built with HTML, CSS, and JavaScript.

## Pages

- `index.html` - homepage with interactive hero section
- `about.html` - personal introduction and strengths
- `projects.html` - featured project cards
- `contact.html` - contact information and contact form layout

## Features

- Branded navigation with reusable layout
- Interactive hero card on the homepage
- Responsive design for desktop and mobile
- Shared card-based visual system across pages
- Styled contact form
- Simple multi-page structure with no framework required

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
2nd draft/
|-- index.html
|-- about.html
|-- projects.html
|-- contact.html
|-- style.css
|-- script.js
|-- TRION.JPG
|-- PROJECT_EXPLANATION.md
|-- STUDY_NOTES.md
```

## How It Works

### HTML

Each page contains:

- a shared navigation bar
- page-specific content
- links to the shared stylesheet

The home page also loads `script.js` for the hero interaction.

### CSS

`style.css` handles:

- layout
- color palette
- logo styling
- hero design
- cards
- forms
- responsive behavior

### JavaScript

`script.js` adds a mouse-based tilt effect to the hero card on the home page by updating the card's transform during mouse movement.

## Running The Project

No installation is required.

1. Open the project folder.
2. Open `index.html` in a browser.
3. Use the navigation links to move between pages.

## Current Limitations

- The contact form is currently visual only
- Project links are placeholders
- There is no backend or database integration yet

## Possible Next Steps

1. Connect the contact form to a real submission service.
2. Replace sample projects with real portfolio items.
3. Add a footer and social links.
4. Add accessibility improvements and form validation.
5. Deploy the site online with GitHub Pages or Netlify.

## Documentation

- `PROJECT_EXPLANATION.md` contains a full file-by-file explanation
- `STUDY_NOTES.md` contains a simpler learning-focused explanation
