# SnapUI

SnapUI is a landing page for an AI-powered React component generator concept. It presents how a tool could turn text prompts into React components and CSS, helping frontend developers explore ideas and prototype interfaces faster.

> **Prototype status:** The generator shown on this site is a front-end demo. It simulates a short generation delay and displays a predefined example; it does not call an AI service or generate components from the entered prompt yet.

## Live Demo

Netlify deployment: https://your-netlify-url.netlify.app  
Replace this placeholder with the published site URL.

## What the Landing Page Includes

- A product overview, benefits, and frequently asked questions.
- A demo section with an embedded video.
- An interactive generator mockup with a prompt field, sample preview, and JSX/CSS display.
- Responsive layouts for different screen sizes.

## Tech Stack

- React 19
- Vite
- JavaScript and JSX
- CSS Modules
- Netlify (intended hosting platform)

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Benefits/
│   ├── Components/
│   ├── Demo/
│   ├── EarlyAccess/
│   ├── FAQ/
│   ├── Header/
│   ├── Hero/
│   ├── HowItWorks/
│   ├── SnapUI/
│   └── Footer/
├── App.jsx
├── index.css
└── main.jsx
```

Each section in `components/` has its own JSX component and CSS Module. `App.jsx` assembles the landing page, while `main.jsx` mounts it in the browser.

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/snapui.git
   cd snapui
   ```

   Replace the URL with the actual repository URL.

2. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

## Available Scripts

- `npm run dev` — start the local development server.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.