# Reelhouse – Movie Library App

A movie library web app built with **React (Create React App)**, **Redux + redux-thunk**, **React Router**, **axios** and **React-Bootstrap**. Movie data comes from **The Movie Database (TMDb) API**.

## Demo Video

▶️ **[Watch the output video on Google Drive](https://drive.google.com/file/d/1EsCwgBxq3q28Xp8cq7iZHOGEk3l7TuXa/view?usp=sharing)**

https://drive.google.com/file/d/1EsCwgBxq3q28Xp8cq7iZHOGEk3l7TuXa/view?usp=sharing

## Features

- **Popular movies** with a featured hero banner and "Load more" pagination
- **Movie cards** showing title, poster, language, description and rating
- **Live search** – results update as you type (debounced)
- **Movie details** – overview, rating, release date, runtime, languages, genres and cast
- **Loading spinners** and **error messages** with a "Try again" button
- **User authentication** – sign in, sign out, protected profile page
- **Favorites and watchlist** saved per user (Redux store, kept after refresh)
- **Responsive Navbar** and a clean dark Bootstrap theme

## Tech stack

| Purpose | Library |
|---|---|
| UI framework | React 18 (Create React App) |
| State management | Redux, react-redux, redux-thunk |
| Routing | react-router-dom v6 |
| API calls | axios |
| Styling | Bootstrap 5, react-bootstrap |
| Movie data | TMDb API |

## Getting started

**Requirements:** Node.js 18 or newer.

```bash
npm install
npm run dev
```

The app opens at http://localhost:3000. (`npm start` does the same thing.)

## TMDb API key

1. Create a free account at https://www.themoviedb.org
2. Open **Settings → API**, choose **personal use**, fill in the form and copy the **API Key (v3 auth)**.
3. Add the key using **either** method:

   **Option A – `.env` file (recommended)**
   ```bash
   copy .env.example .env      # Windows  (use `cp` on Mac/Linux)
   ```
   Then edit `.env`:
   ```
   REACT_APP_TMDB_KEY=your_api_key_here
   ```

   **Option B – directly in code**
   In `src/api/movieApi.js`, put your key in the `TMDB_KEY` line.

4. Restart `npm run dev` after changing the key.

> **Never upload your real API key to a public GitHub repository.** `.env` is already in `.gitignore`.

If no key is set, the app falls back to the keyless TVmaze API and shows TV shows instead of movies.

### Page does not load in India?
Some Indian ISPs block `themoviedb.org`. If the site or the app cannot connect, change your DNS to `1.1.1.1` / `8.8.8.8`, use a mobile hotspot, or use a VPN.

## Project structure

```
src/
├── api/
│   └── movieApi.js          # TMDb requests (popular, search, details) + error messages
├── components/
│   ├── Navbar.jsx           # Responsive navigation, sign in / sign out
│   ├── MovieList.jsx        # Popular movies (fetchPopularMovies)
│   ├── MovieSearch.jsx      # Live search (searchMovies)
│   ├── MovieDetails.jsx     # Full details + cast (fetchMovieDetails)
│   ├── MovieCard.jsx        # Title, poster, language, description, rating
│   ├── MovieGrid.jsx        # Responsive grid of cards
│   ├── PrivateRoute.jsx     # Protects the profile page
│   ├── Loader.jsx           # Loading spinner
│   └── ErrorMessage.jsx     # Error alert with retry
├── pages/
│   ├── Login.jsx            # Sign in form
│   └── Profile.jsx          # Favorites and watchlist
├── redux/
│   ├── store.js             # Store with thunk middleware
│   ├── actionTypes.js
│   ├── movieActions.js      # Thunks for popular, search, details
│   ├── movieReducer.js      # Movie data, loading and error state
│   ├── authActions.js       # Login, logout, favorites, watchlist
│   └── authReducer.js       # User + preferences (persisted)
├── App.jsx                  # Routes
└── index.js                 # Entry point (Provider + Router)
```

## Routes

| Path | Page | Access |
|---|---|---|
| `/` | Popular movies | Public |
| `/search` | Search movies | Public |
| `/movie/:id` | Movie details | Public |
| `/login` | Sign in | Public |
| `/profile` | Favorites and watchlist | Signed-in users only |

## Requirements checklist

| # | Requirement | Where |
|---|---|---|
| 1 | Project setup with required dependencies | `package.json` |
| 2 | Component structure | `src/components` |
| 3 | Redux: actions, reducers, thunks, loading and errors | `src/redux` |
| 4 | External movie API integration | `src/api/movieApi.js` |
| 5 | Fetch and display popular movies | `MovieList.jsx`, `MovieGrid.jsx` |
| 6 | Movie details on cards (title, poster, language, description, rating) | `MovieCard.jsx` |
| 7 | Movie search with live updates | `MovieSearch.jsx` |
| 8 | Details page with cast, genre, release date | `MovieDetails.jsx` |
| 9 | Loading indicators and error handling | `Loader.jsx`, `ErrorMessage.jsx` |
| 10 | User authentication, favorites and watchlist in Redux | `Login.jsx`, `authActions.js`, `authReducer.js` |
| 11 | Responsive Navbar | `Navbar.jsx` |
| 12 | Bootstrap styling and theme | react-bootstrap, `index.css` |

## Authentication note

This is a demo login with no backend. The first sign-in with a new username creates the account; later sign-ins must use the same password. Accounts are stored in the browser's localStorage with a simple (non-secure) hash, so it is suitable for a coursework project only.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` / `npm start` | Start the development server |
| `npm run build` | Create a production build |
| `npm test -- --watchAll=false` | Run the Redux tests |

## Credits

Movie data and images provided by [The Movie Database (TMDb)](https://www.themoviedb.org). This product uses the TMDb API but is not endorsed or certified by TMDb.

## Deploying (live link)

1. `npm run build` creates the `build` folder.
2. Drag the `build` folder onto https://app.netlify.com/drop (or import the repo on Vercel).
3. `public/_redirects` and `vercel.json` make `/search`, `/movie/:id` and `/profile` work after a page refresh.

Visitors whose ISP blocks `themoviedb.org` will see the connection error message instead of movies.
