# What Should I Eat?

A small, responsive React app that randomly chooses a meal. Users can filter by category, switch between light and dark themes, save favorites, and revisit their five most recent picks. Theme preference, favorites, and history are stored in the browser with `localStorage`, so no backend is required.

## Tech stack

- React
- Vite
- Plain CSS
- Browser `localStorage`

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
cd websitesi
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
```

The optimized files will be created in the `dist` directory. To preview that build locally:

```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel dashboard

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Sign in at [vercel.com](https://vercel.com) and select **Add New → Project**.
3. Import the repository.
4. If this app is inside a larger repository, set **Root Directory** to `websitesi`.
5. Vercel should detect **Vite** automatically. Confirm these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Select **Deploy**.

No environment variables are needed.

### Option 2: Vercel CLI

```bash
npm install -g vercel
cd websitesi
vercel
```

Follow the prompts. For a production deployment, run:

```bash
vercel --prod
```

## Project structure

```text
src/
  components/
    CategorySelector.jsx
    FoodResult.jsx
    Favorites.jsx
    RecentPicks.jsx
  data/
    foods.js
  App.jsx
  main.jsx
  styles.css
```

The meal list is kept in `src/data/foods.js`, making it easy to explain or expand in class.
