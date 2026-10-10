import * as T from './actionTypes';

const USER_KEY = 'reelhouse_user';
const prefsKey = (username) => `reelhouse_prefs_${username}`;

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const loadAuthState = () => {
  const user = read(USER_KEY, null);
  const prefs = user ? read(prefsKey(user.username), {}) : {};
  return { user, favorites: prefs.favorites || [], watchlist: prefs.watchlist || [] };
};

// Called from store.subscribe so the Redux state survives a refresh
export const persistAuthState = ({ user, favorites, watchlist }) => {
  try {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(prefsKey(user.username), JSON.stringify({ favorites, watchlist }));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  } catch {
    /* storage unavailable – ignore */
  }
};

const toggle = (list, movie) =>
  list.some((m) => m.id === movie.id) ? list.filter((m) => m.id !== movie.id) : [movie, ...list];

export default function authReducer(state = loadAuthState(), action) {
  switch (action.type) {
    case T.LOGIN: {
      const prefs = read(prefsKey(action.username), {});
      return {
        user: { username: action.username },
        favorites: prefs.favorites || [],
        watchlist: prefs.watchlist || [],
      };
    }
    case T.LOGOUT:
      return { user: null, favorites: [], watchlist: [] };
    case T.TOGGLE_FAVORITE:
      return state.user ? { ...state, favorites: toggle(state.favorites, action.movie) } : state;
    case T.TOGGLE_WATCHLIST:
      return state.user ? { ...state, watchlist: toggle(state.watchlist, action.movie) } : state;
    default:
      return state;
  }
}
