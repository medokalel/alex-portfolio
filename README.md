# Developer Portfolio Template

A dark, single-page developer portfolio template with an animated code-editor hero, a filterable project grid, a tech-stack section and an experience timeline. Built with React and Vite while practising component layout, CSS modules and small interactions.

**Live demo:** https://alex-portfolio-weld.vercel.app/

> **All content is sample content.** "Alex Chen", the companies, numbers, projects and contact details are made up to show how the design looks when filled in. Nothing here describes a real person's career. The interface and code were built by [Mohamed Khalil](https://github.com/medokalel).

## What it includes

- Hero with a typing animation of a code editor (finished text is shown straight away when the visitor prefers reduced motion)
- About section with skill bars and stats
- Project cards with category filters
- Tech stack grid and experience timeline
- Responsive layout, sticky navbar, skip link, dismissible "demo template" notice

## Built with

React 19, Vite, React Router, Bootstrap 5 (grid and utilities) and Font Awesome, plus CSS modules for each section.

## Project structure

```
src/
  components/   one folder per section (component + CSS module)
  assets/       images
```

## Run locally

```bash
git clone https://github.com/medokalel/alex-portfolio.git
cd alex-portfolio
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Using it for a real portfolio

Replace the sample data at the top of each component (`Hero`, `About`, `Projects`, `TechStack`, `Experience`, `Contact`) and remove the `DemoBanner` from `Layout.jsx`. Add real project links and screenshots, and a contact form or email link of your own.

## Author

Mohamed Khalil · [GitHub](https://github.com/medokalel) · [LinkedIn](https://www.linkedin.com/in/mohamed-khalil1/)
