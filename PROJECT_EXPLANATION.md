# Personal Portfolio Project Explanation

This document explains how the portfolio project works, file by file, and what each part of the code is doing.

## 1. Project Overview

This is a small multi-page portfolio website built with:

- HTML for structure
- CSS for design and layout
- JavaScript for the interactive hero effect

The project currently has:

- `index.html` for the home page
- `about.html` for the about page
- `projects.html` for the projects page
- `contact.html` for the contact page
- `style.css` for all shared styling
- `script.js` for the hero interaction
- `TRION.JPG` for the profile image

The project is static, which means it does not use a backend or database.

## 2. How The Pages Work Together

All four HTML pages share the same navigation bar and the same stylesheet. This gives the site a consistent look.

Each page links to the others through the nav:

- `index.html`
- `about.html`
- `projects.html`
- `contact.html`

The active page gets the `nav-active` class, which changes the link color so users can tell where they are.

## 3. `index.html`

This is the landing page of the portfolio.

### Head section

The `<head>` contains:

- `<meta charset="UTF-8">`
  This tells the browser to use UTF-8 character encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  This makes the page responsive on phones and tablets.
- `<link rel="stylesheet" href="style.css">`
  This connects the HTML to the CSS file.
- `<title>Trion | Home</title>`
  This sets the text shown in the browser tab.

### Navigation

The `<nav class="nav-list">` is the top navigation bar.

Inside it:

- The logo is an `<a>` tag so clicking it brings the user back to `index.html`.
- `logo-mark` is the styled box with the letter `T`.
- `logo-text` contains:
  - `logo-name` for `TRION`
  - `logo-role` for `Developer Portfolio`
- The `<ul>` contains the nav links.
- `class="nav-active"` marks the current page.

### Hero section

The hero section is:

```html
<section class="hero">
```

This is the main first impression area of the home page.

It contains:

- `hero-glow hero-glow-left`
- `hero-glow hero-glow-right`

These are decorative glowing shapes that sit in the background.

The main content is inside:

```html
<div class="hero-card" id="heroCard">
```

This card is important because:

- it holds the hero content
- it is styled like a glass card
- it is the element targeted by JavaScript for the mouse tilt effect

Inside the card are two sides:

### Left side: `hero-text`

This contains:

- `hero-tag`
  A small label saying `Software Developer`
- `<h1>`
  The main heading: `Hi, I'm Trion`
- `<p>`
  The introduction paragraph
- `hero-actions`
  A container for the two call-to-action buttons

The two buttons are links:

- `View Projects` links to `projects.html`
- `Contact Me` links to `contact.html`

### Right side: `hero-visual`

This contains:

- `image-ring`
  A circular gradient frame around the profile image
- `<img src="TRION.JPG">`
  The actual image
- `hero-badge hero-badge-top`
  Floating text badge: `Creative problem solver`
- `hero-badge hero-badge-bottom`
  Floating text badge: `Always learning`

### Home preview section

Below the hero is:

```html
<section class="home-preview">
```

This section introduces the three other parts of the portfolio:

- About
- Projects
- Contact

Each `preview-card` includes:

- a small label with `section-kicker`
- a heading
- a short paragraph
- a text link

### Script connection

At the bottom:

```html
<script src="script.js"></script>
```

This loads the JavaScript after the page content is already on screen.

## 4. `about.html`

This page explains who you are.

It uses the same nav and stylesheet as the home page.

### Main layout

The content is wrapped inside:

```html
<main class="page-shell">
```

This gives the page consistent spacing.

### Page hero

The `page-hero` section contains:

- a small top label with `section-kicker`
- a large heading
- a paragraph introducing you

### Content grid

The `content-grid` section has three `info-card` blocks:

- `My approach`
- `What I enjoy`
- `What drives me`

These are simple content cards laid out in a grid on larger screens and stacked on smaller screens.

### Strengths section

The `timeline-card` section includes:

- a title
- a `pill-row`
- multiple `skill-pill` spans

These pills visually display your skills and strengths.

## 5. `projects.html`

This page showcases project ideas.

### Structure

It follows the same pattern as `about.html`:

- shared nav
- `page-shell`
- `page-hero`

### Project grid

The main content is:

```html
<section class="project-grid">
```

Inside are three `project-card` elements.

Each card includes:

- `project-label`
  A small category label like `Web App` or `UI Concept`
- `<h2>`
  The project title
- `<p>`
  A short explanation
- `text-link`
  A placeholder link for future project previews

Right now these are sample projects. Later you can replace them with real ones.

## 6. `contact.html`

This page gives visitors a way to reach you.

### Page hero

Like the other inside pages, it starts with `page-hero` for the heading and intro text.

### Contact layout

The main content uses:

```html
<section class="contact-layout">
```

This creates a two-column layout:

- left side: contact information
- right side: contact form

### Contact details

The left card is an `info-card` with:

- email
- phone
- location

### Contact form

The form includes:

- a label and input for name
- a label and input for email
- a label and textarea for message
- a submit button with `btn btn-primary`

Important note:

The form is only visual right now. It does not send data anywhere because there is no backend and no form action configured yet.

## 7. `style.css`

This file controls the design of the whole site.

It is a shared stylesheet, which means every page uses it.

### Global reset

```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```

This removes default browser spacing and makes sizing easier to control.

### `body`

The `body` styles set:

- the font family
- the background gradient
- the text color
- the minimum page height

### Navigation styles

The nav section includes:

- `.nav-list`
  Creates a horizontal flex layout, spacing, sticky positioning, and a glass-like background
- `.logo`
  Aligns the logo mark and text side by side
- `.logo:hover`
  Adds a small upward motion on hover
- `.logo-mark`
  Styles the square badge with gradient background and rounded corners
- `.logo-mark::after`
  Adds a border-like overlay inside the logo for extra detail
- `.logo-text`, `.logo-name`, `.logo-role`
  Style the wordmark and subtitle
- `.nav-list ul`
  Displays nav items in a row
- `.nav-list ul a`
  Styles the links
- `.nav-active`
  Highlights the current page

### Hero styles

The main homepage hero uses:

- `.hero`
  Adds spacing and keeps decorative elements contained
- `.hero-card`
  Creates the large glass-style card using grid layout, border radius, background transparency, and box shadow
- `.hero-card:hover`
  Makes the shadow stronger on hover
- `.hero-text`
  Holds the text content
- `.hero-tag`
  Styles the small uppercase label
- `.hero-text h1`
  Makes the main heading large and responsive
- `.hero-text p`
  Styles the intro paragraph
- `.hero-actions`
  Lays out the buttons side by side

### Button styles

Buttons use shared classes:

- `.btn`
  Base button styling
- `.btn-primary`
  Filled warm accent button
- `.btn-secondary`
  Transparent outlined button
- `:hover`
  Adds lift or background change for interaction

### Hero image styles

- `.hero-visual`
  Centers the image area
- `.image-ring`
  Creates the circular gradient border and applies floating animation
- `.image-ring img`
  Makes the image round and contained
- `.hero-badge`
  Styles floating labels around the image
- `.hero-badge-top` and `.hero-badge-bottom`
  Position those labels

### Decorative glow

- `.hero-glow`
  Shared style for the blurred background circles
- `.hero-glow-left` and `.hero-glow-right`
  Position and color the glows

### Shared page section styles

The following classes are used across multiple pages:

- `.home-preview`
- `.content-grid`
- `.project-grid`
- `.contact-layout`

These control width, spacing, and grid layout.

Shared card styles include:

- `.preview-card`
- `.info-card`
- `.project-card`
- `.timeline-card`
- `.contact-form`

These all share:

- soft background
- border
- shadow
- rounded corners

### Text utility styles

- `.section-kicker`
  Small uppercase section label
- `.project-label`
  Similar label used for project categories
- `.text-link`
  Styles the small action links inside cards

### About page styles

- `.page-shell`
  Adds top and bottom spacing for inside pages
- `.page-hero`
  Centers the page intro content
- `.pill-row`
  Lays out skill pills in a wrapping row
- `.skill-pill`
  Styles each skill item

### Contact page styles

- `.contact-form`
  Makes the form vertical with spacing
- `.contact-form label`
  Styles labels
- `.contact-form input, .contact-form textarea`
  Styles form fields
- `:focus`
  Adds highlight when an input is active
- `.contact-list`
  Adds spacing between contact details

### Animations

There are two keyframe animations:

- `floatImage`
  Moves the profile image gently up and down
- `floatBadge`
  Moves the hero badges gently up and down

These make the hero feel more alive.

### Responsive design

At the bottom of the file there is:

```css
@media (max-width: 820px)
```

This changes the layout for smaller screens.

Examples:

- the nav stacks vertically
- the hero becomes one column instead of two
- the grids become single-column
- the hero buttons center themselves
- the badges reposition so they still fit the screen

This is what makes the site mobile-friendly.

## 8. `script.js`

This is the only JavaScript file in the project.

It makes the homepage hero card react to mouse movement.

### Step 1: select the hero card

```js
const heroCard = document.getElementById("heroCard");
```

This finds the element with `id="heroCard"` from `index.html`.

### Step 2: check if it exists

```js
if (heroCard) {
```

This prevents errors on pages that do not have a hero card, like `about.html` or `contact.html`.

### Step 3: `mousemove` event

```js
heroCard.addEventListener("mousemove", (event) => {
```

This runs whenever the mouse moves over the hero card.

Inside this function:

- `getBoundingClientRect()` gets the size and position of the card
- `x` and `y` calculate the mouse position inside the card
- `rotateY` changes based on left or right mouse position
- `rotateX` changes based on top or bottom mouse position

Then this line updates the card transform:

```js
heroCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
```

This creates the 3D tilt effect.

### Step 4: `mouseleave` event

```js
heroCard.addEventListener("mouseleave", () => {
```

When the mouse leaves the card, the transform resets to normal:

```js
heroCard.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
```

This makes the interaction feel smooth and controlled.

## 9. Design Patterns Used In The Project

This project uses a few simple but useful frontend patterns:

- Shared stylesheet across many pages
- Reusable classes for cards, labels, and buttons
- Responsive design through media queries
- Small JavaScript enhancement instead of heavy scripting
- Semantic structure using `nav`, `main`, `section`, `article`, and `form`

These patterns make the site easier to maintain and scale.

## 10. Current Limitations

A few things are not fully functional yet:

- The contact form does not submit anywhere yet
- The project preview links still use `#`
- There is no backend
- There is no form validation in JavaScript yet
- Only the home page has interactive JavaScript

## 11. Good Next Improvements

If you want to improve the project later, good next steps would be:

1. Connect the contact form to email or Formspree.
2. Replace sample project cards with real project links and screenshots.
3. Add a footer shared across all pages.
4. Add small animations to the inner pages too.
5. Create separate CSS sections or comments to make the stylesheet easier to scan.
6. Add accessibility improvements such as focus states for all links and clearer form validation.

## 12. Simple Summary

This project is a responsive personal portfolio website with four pages.

- HTML defines the content and structure.
- CSS creates the visual style, layout, and responsiveness.
- JavaScript adds the interactive hero tilt effect on the home page.

Everything is organized in a simple way, which makes it a strong beginner-friendly portfolio project and a solid base for future upgrades.
