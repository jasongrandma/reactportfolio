# Jason Granias Portfolio (Expo + React Native)

A responsive personal portfolio built with Expo and React Native. The app is organized as a multi-page experience with dedicated Home, About, Projects, and Contact screens.

## Overview

This project is a multi-page portfolio with four required pages:

- Home
- About
- Projects
- Contact

It includes reusable components, image-driven project showcases, navigation, animations, and a validated contact form.

## Tech Stack

- Expo
- React Native
- Expo Router
- styled-components
- @react-spring/native

## Features

- Multi-page routing with Expo Router
- Persistent top navbar and footer across all pages
- Home hero with semi-transparent background image and welcome text
- About page with bio, basic skills, interests, and social links
- Projects page with at least three projects, descriptions, and images from local folders
- Contact page with social details and validated contact form
- Spring-based reveal animations for key sections
- Responsive layout behavior for web, tablet, and mobile

## Requirement Checklist

- Expo project setup and clear folder structure: complete
- Required pages and shared components: complete
- Styled-components for UI styling and consistent theme: complete
- Responsiveness across desktop, tablet, mobile: complete
- Form validation in contact form: complete
- Animations using React Spring: complete
- Git/GitHub workflow: expected externally via repository history

## Project Structure

```text
app/
  _layout.tsx
  index.tsx
  about.tsx
  projects.tsx
  contact.tsx

components/
  contact/
    contact-form.tsx
  layout/
    site-nav.tsx
    portfolio-footer.tsx

data/
  portfolioData.ts

styles/
  portfolioTheme.ts

assets/
  images/
  reference/
```

## Setup

1. Install dependencies

```bash
npm install
```

2. Start Expo

```bash
npm run start
```

3. Launch target platform from the Expo CLI prompt

- Press `w` for web
- Press `a` for Android
- Press `i` for iOS (macOS only)

## GitHub Pages Deployment

This project is configured to deploy from the `main` branch using GitHub Actions.

### What is configured

- Static web output via Expo Router
- GitHub Pages base path set to `/reactportfolio`
- Deployment workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- `.nojekyll` marker added during the build so Expo's underscore-prefixed assets are served correctly

### How to publish

1. Push your changes to `main`.
2. Open the repository on GitHub.
3. In the repository settings, make sure GitHub Pages is set to use GitHub Actions if prompted.
4. After the workflow finishes, your site will be available at the repository Pages URL.

## Scripts

- `npm run start` start Expo dev server
- `npm run android` run Android target
- `npm run ios` run iOS target
- `npm run web` run web target
- `npm run lint` run ESLint checks

## Notes

- Image content is sourced from local `assets/images` project folders.
- Portfolio text and project metadata are editable in `data/portfolioData.ts`.
- If your repository name changes, update the `baseUrl` value in [app.json](app.json).
