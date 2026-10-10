import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import movieReducer from './movieReducer';
import { fetchPopularMovies, searchMovies, fetchMovieDetails } from './movieActions';
import * as api from '../api/movieApi';

jest.mock('../api/movieApi');

const make = () => createStore(combineReducers({ movies: movieReducer }), applyMiddleware(thunk));

beforeEach(() => {
  api.getErrorMessage.mockImplementation((e) => e.message);
});

test('popular: success stores items and clears loading', async () => {
  api.getPopularMovies.mockResolvedValue({ results: [{ id: 1, title: 'A' }], page: 1, total_pages: 3 });
  const store = make();
  await store.dispatch(fetchPopularMovies(1));
  const { popular } = store.getState().movies;
  expect(popular.items).toHaveLength(1);
  expect(popular.loading).toBe(false);
  expect(popular.error).toBeNull();
});

test('popular: network failure surfaces an error (no silent fallback)', async () => {
  api.getPopularMovies.mockRejectedValue(new Error('Could not connect'));
  const store = make();
  await store.dispatch(fetchPopularMovies(1));
  expect(store.getState().movies.popular.error).toBe('Could not connect');
  expect(store.getState().movies.popular.items).toHaveLength(0);
});

test('search: empty query clears; results are stored', async () => {
  api.searchMoviesApi.mockResolvedValue({ results: [{ id: 2, title: 'B' }], page: 1, total_pages: 1, total_results: 1 });
  const store = make();
  await store.dispatch(searchMovies('bat'));
  expect(store.getState().movies.search.items).toHaveLength(1);
  await store.dispatch(searchMovies('   '));
  expect(store.getState().movies.search.items).toHaveLength(0);
});

test('details: error is stored', async () => {
  api.getMovieDetails.mockRejectedValue(new Error('We could not find that movie.'));
  const store = make();
  await store.dispatch(fetchMovieDetails(99));
  expect(store.getState().movies.details.error).toMatch(/could not find/);
});
