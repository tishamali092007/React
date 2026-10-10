import * as T from './actionTypes';

/*
 * Simple demo authentication (no backend):
 *  - the first sign-in with a new username creates the account
 *  - later sign-ins must use the same password
 * Accounts live in localStorage. The hash is NOT secure; it only avoids storing
 * plain text and is fine for a coursework demo.
 */
const USERS_KEY = 'reelhouse_users';
const hash = (s) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return String(h);
};
const readUsers = () => {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; } catch { return {}; }
};

// Thunk: returns { ok: true } or { error: '...' }
export const login = (username, password) => (dispatch) => {
  const name = username.trim();
  const key = name.toLowerCase();
  const users = readUsers();
  if (users[key]) {
    if (users[key] !== hash(password)) return { error: 'Incorrect password for this username.' };
  } else {
    try { localStorage.setItem(USERS_KEY, JSON.stringify({ ...users, [key]: hash(password) })); } catch { /* ignore */ }
  }
  dispatch({ type: T.LOGIN, username: name });
  return { ok: true };
};

export const logout = () => ({ type: T.LOGOUT });

// Only the fields needed to render a card later are saved
const slim = (m) => ({
  id: m.id,
  title: m.title,
  poster_path: m.poster_path,
  vote_average: m.vote_average,
  original_language: m.original_language,
  overview: m.overview,
  release_date: m.release_date,
});

export const toggleFavorite = (movie) => ({ type: T.TOGGLE_FAVORITE, movie: slim(movie) });
export const toggleWatchlist = (movie) => ({ type: T.TOGGLE_WATCHLIST, movie: slim(movie) });
