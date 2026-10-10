import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import movieReducer from './movieReducer';
import authReducer, { persistAuthState } from './authReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Keep the signed-in user and their favorites/watchlist across page refreshes
store.subscribe(() => persistAuthState(store.getState().auth));

export default store;
