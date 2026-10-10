import * as T from './actionTypes';

const initialState = {
  popular: { items: [], page: 0, totalPages: 1, loading: false, error: null },
  search: { query: '', items: [], page: 0, totalPages: 1, totalResults: 0, loading: false, error: null },
  details: { id: null, item: null, loading: false, error: null },
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    // ----- Popular -----
    case T.POPULAR_REQUEST:
      return { ...state, popular: { ...state.popular, loading: true, error: null } };
    case T.POPULAR_SUCCESS: {
      const { results, page, totalPages } = action.payload;
      const items = page === 1 ? results : [...state.popular.items, ...results];
      return { ...state, popular: { items, page, totalPages, loading: false, error: null } };
    }
    case T.POPULAR_FAILURE:
      return { ...state, popular: { ...state.popular, loading: false, error: action.error } };

    // ----- Search -----
    case T.SEARCH_REQUEST:
      return {
        ...state,
        search: {
          ...state.search,
          query: action.query,
          items: action.page === 1 ? [] : state.search.items,
          loading: true,
          error: null,
        },
      };
    case T.SEARCH_SUCCESS: {
      if (action.query !== state.search.query) return state; // stale response
      const { results, page, totalPages, totalResults } = action.payload;
      const items = page === 1 ? results : [...state.search.items, ...results];
      return { ...state, search: { query: action.query, items, page, totalPages, totalResults, loading: false, error: null } };
    }
    case T.SEARCH_FAILURE:
      if (action.query !== state.search.query) return state;
      return { ...state, search: { ...state.search, loading: false, error: action.error } };
    case T.SEARCH_CLEAR:
      return { ...state, search: initialState.search };

    // ----- Details -----
    case T.DETAILS_REQUEST:
      return { ...state, details: { id: action.id, item: null, loading: true, error: null } };
    case T.DETAILS_SUCCESS:
      if (String(action.id) !== String(state.details.id)) return state;
      return { ...state, details: { ...state.details, item: action.payload, loading: false, error: null } };
    case T.DETAILS_FAILURE:
      if (String(action.id) !== String(state.details.id)) return state;
      return { ...state, details: { ...state.details, loading: false, error: action.error } };

    default:
      return state;
  }
}
