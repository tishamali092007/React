import * as T from './actionTypes';
import { getPopularMovies, searchMoviesApi, getMovieDetails, getErrorMessage } from '../api/movieApi';

// Popular movies (supports "load more" via page)
export const fetchPopularMovies = (page = 1) => async (dispatch) => {
  dispatch({ type: T.POPULAR_REQUEST, page });
  try {
    const data = await getPopularMovies(page);
    dispatch({
      type: T.POPULAR_SUCCESS,
      payload: { results: data.results, page: data.page, totalPages: data.total_pages },
    });
  } catch (err) {
    dispatch({ type: T.POPULAR_FAILURE, error: getErrorMessage(err) });
  }
};

// Search – the query is echoed back so stale responses can be ignored
export const searchMovies = (query, page = 1) => async (dispatch) => {
  const q = query.trim();
  if (!q) return dispatch({ type: T.SEARCH_CLEAR });

  dispatch({ type: T.SEARCH_REQUEST, query: q, page });
  try {
    const data = await searchMoviesApi(q, page);
    dispatch({
      type: T.SEARCH_SUCCESS,
      query: q,
      payload: { results: data.results, page: data.page, totalPages: data.total_pages, totalResults: data.total_results },
    });
  } catch (err) {
    dispatch({ type: T.SEARCH_FAILURE, query: q, error: getErrorMessage(err) });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: T.DETAILS_REQUEST, id });
  try {
    const data = await getMovieDetails(id);
    dispatch({ type: T.DETAILS_SUCCESS, id, payload: data });
  } catch (err) {
    dispatch({ type: T.DETAILS_FAILURE, id, error: getErrorMessage(err) });
  }
};
