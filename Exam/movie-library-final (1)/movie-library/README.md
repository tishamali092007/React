# Reelhouse – Movie Library (React + Redux + Bootstrap)

Create React App project: React Router, Redux + redux-thunk, axios, react-bootstrap.

## Run

```bash
npm install
cp .env.example .env     # then paste your TMDb key into REACT_APP_TMDB_KEY
npm run dev               # (or npm start) http://localhost:3000
```

### API key (movies)
1. Create a free account at https://www.themoviedb.org and request an API key (Settings → API).
2. Put the **API Key (v3 auth)** in `.env` as `REACT_APP_TMDB_KEY=...` and restart `npm start`.

If no key is set, the app automatically uses the keyless **TVmaze** API (TV shows) so it still runs;
all UI labels switch from "movies" to "shows". Network/API failures are never hidden – they show the
error message with a "Try again" button.

## Requirement map

| # | Requirement | Where |
|---|---|---|
| 1 | CRA + dependencies | `package.json` |
| 2 | Components | `src/components` (MovieList, MovieDetails, MovieSearch, PrivateRoute, Navbar) |
| 3 | Redux actions / reducers / thunks | `src/redux` |
| 4 | External API | `src/api/movieApi.js` (TMDb, TVmaze fallback) |
| 5 | Fetch + display popular | `MovieList.jsx` → `fetchPopularMovies` |
| 6 | Title, poster, language, description, rating | `MovieCard.jsx` |
| 7 | Live search (debounced) | `MovieSearch.jsx` → `searchMovies` |
| 8 | Details: cast, genre, release date | `MovieDetails.jsx` → `fetchMovieDetails` |
| 9 | Loading + error handling | `Loader.jsx`, `ErrorMessage.jsx`, reducer error state |
| 10 | Auth + favorites/watchlist in Redux | `authActions.js`, `authReducer.js`, `Login.jsx`, `Profile.jsx` |
| 11 | Responsive Navbar | `Navbar.jsx` |
| 12 | Bootstrap styling | react-bootstrap + `index.css` |

## Auth note
Demo auth without a backend: the first sign-in with a new username creates the account, later sign-ins
must match the password. Accounts are stored in localStorage with a simple (non-secure) hash.

## Tests
`npm test -- --watchAll=false`
