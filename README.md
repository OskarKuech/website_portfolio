# Portfolio Site

A simple journalism/writing portfolio with a Node/Express + MongoDB backend and a React + TypeScript + Tailwind frontend.

## Structure

```
portfolio-site/
  server/   Express API + Mongoose models (MongoDB)
  client/   React + TypeScript + Tailwind frontend (Vite)
```

## Features

- Two top-level tabs: **Writing** (landing page grid) and **About**.
- Landing page shows a responsive grid of article cards (image, publish date, publication, title, subtitle). Clicking a card opens the article's `url` in a new tab.
- Three dropdown filters above the grid: **Category**, **Tag**, **Publication** - each defaults to "All", options are populated dynamically from what's in the database, and they combine with AND logic.
- Articles are stored in MongoDB with fields: `title`, `subtitle`, `image`, `publishDate`, `publication`, `category`, `tag`, `url`.

## Setup

### 1. MongoDB

Use a local MongoDB instance or a free MongoDB Atlas cluster. You will need a connection string, e.g. mongodb://localhost:27017/portfolio or an Atlas URI like mongodb+srv://<user>:<password>@<cluster>.mongodb.net/portfolio

### 2. Server

Go into the server folder, copy .env.example to .env and set MONGODB_URI to your connection string.
Then install dependencies (this needs internet access on your own machine, not in this sandbox), run the seed script to insert 6 sample articles, and start the dev server. The API runs on http://localhost:4000.

### 3. Client

Go into the client folder, copy .env.example to .env (VITE_API_URL=http://localhost:4000/api by default), install dependencies, and start the dev server. The frontend runs on http://localhost:5173.

## API

- GET /api/articles?category=&tag=&publication= - list articles, optionally filtered. Omit or pass "All" to skip a filter.
- GET /api/articles/filters - distinct categories, tags, publications currently in the database, used to populate the dropdown options.
- GET /api/health - health check.

## Adding real articles

Either:
- Edit server/src/scripts/seed.ts with your own articles and re-run the seed script, or
- Insert documents directly into the articles collection in MongoDB (e.g. via MongoDB Compass or Atlas UI), matching the Article schema in server/src/models/Article.ts.

## Notes

- Category/Tag/Publication filter options are derived automatically from whatever values exist in the database - no need to hardcode them anywhere.
- The About page currently has placeholder copy in client/src/pages/About.tsx - replace with your real bio whenever you are ready.
- Design is intentionally minimal/neutral and content-first, per request.
