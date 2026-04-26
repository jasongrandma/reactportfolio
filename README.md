# Jason Granias Portfolio (Expo + React Native)

A responsive personal portfolio built with Expo and React Native, designed to mirror the existing visual style while improving structure and interactivity.

## Overview

This project is a single-page portfolio with four required sections:

- Home
- About
- Projects
- Contact

It includes reusable components, image-driven project showcases, section navigation, smooth scrolling, and a validated contact form.

## Tech Stack

- Expo
- React Native
- Expo Router
- styled-components
- @react-spring/native

## Features

- Recreated portfolio design language with a consistent color and typography system
- Persistent top navbar for section navigation
- Persistent footer with social links and back-to-top action
- Project showcase using local assets from labeled image folders
- Contact section with input validation for name, email, and message
- Spring-based section and project card animations
- Responsive behavior for web, tablet, and mobile layouts

## Project Structure

```text
app/
   _layout.tsx
   index.tsx

components/
   contact/
      contact-form.tsx
   layout/
      portfolio-footer.tsx
      portfolio-navbar.tsx
   projects/
      project-card.tsx

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

## Scripts

- `npm run start` start Expo dev server
- `npm run android` run Android target
- `npm run ios` run iOS target
- `npm run web` run web target
- `npm run lint` run ESLint checks

## Notes

- Image content is sourced from the local `assets/images` folders.
- Social links are editable in `data/portfolioData.ts`.
