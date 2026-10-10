import axios from 'axios';

/*
 * Two data sources, one normalized shape:
 *  - TMDb   (real movies) -> used when REACT_APP_TMDB_KEY is set in .env
 *  - TVmaze (TV shows)    -> keyless fallback so the app still runs without a key
 * Errors are never swallowed: they propagate so the UI shows its error state.
 */
// Easy setup: paste your TMDb key between the quotes below (or use .env instead).
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY || '4b9a86008cd909c6c547fa3a54f094f0';
export const usingTmdb = Boolean(TMDB_KEY);
export const PROVIDER = usingTmdb ? 'TMDb' : 'TVmaze';
export const LABEL = usingTmdb
  ? { one: 'movie', many: 'movies' }
  : { one: 'show', many: 'shows' };

const tmdb = axios.create({ baseURL: 'https://api.themoviedb.org/3', timeout: 10000, params: { api_key: TMDB_KEY } });
const tvmaze = axios.create({ baseURL: 'https://api.tvmaze.com', timeout: 10000 });

const NO_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750"><rect width="100%" height="100%" fill="#1b1f2c"/><text x="50%" y="50%" fill="#6b7186" font-family="sans-serif" font-size="28" text-anchor="middle">No image</text></svg>`
  );

export const imageUrl = (path, size = 'w500') => {
  if (!path) return NO_IMAGE;
  if (/^https?:\/\//i.test(path) || path.startsWith('data:')) return path;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const languageName = (language) => {
  if (!language) return 'Unknown';
  if (language.length > 3 || /[^a-z-]/i.test(language)) return language; // already a name
  try {
    return new Intl.DisplayNames(['en'], { type: 'language' }).of(language) || language;
  } catch {
    return language;
  }
};

/* ---------------- TMDb ---------------- */
const fromTmdb = (m) => ({
  id: m.id,
  title: m.title || m.name || 'Untitled',
  poster_path: m.poster_path || null,
  backdrop_path: m.backdrop_path || m.poster_path || null,
  overview: m.overview || '',
  original_language: m.original_language || '',
  release_date: m.release_date || '',
  vote_average: Number(m.vote_average || 0),
  vote_count: m.vote_count || 0,
  runtime: m.runtime || null,
  genres: m.genres || [],
  tagline: m.tagline || '',
  spoken_languages: (m.spoken_languages || []).map((l) => ({ english_name: l.english_name || l.name })),
  credits: { cast: m.credits?.cast || [] },
});

const tmdbPage = async (url, params) => {
  const { data } = await tmdb.get(url, { params });
  return {
    results: data.results.map(fromTmdb),
    page: data.page,
    total_pages: Math.min(data.total_pages, 500), // TMDb caps paging at 500
    total_results: data.total_results,
  };
};

/* ---------------- TVmaze ---------------- */
const fromTvmaze = (show) => {
  const image = show.image?.original || show.image?.medium || null;
  const cast = show._embedded?.cast || [];
  return {
    id: show.id,
    title: show.name || 'Untitled',
    poster_path: show.image?.medium || image,
    backdrop_path: image,
    overview: (show.summary || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
    original_language: show.language || '',
    release_date: show.premiered || '',
    vote_average: Number(show.rating?.average || 0),
    vote_count: 0,
    runtime: show.averageRuntime || show.runtime || null,
    genres: (show.genres || []).map((name, i) => ({ id: `${show.id}-${i}`, name })),
    tagline: '',
    spoken_languages: show.language ? [{ english_name: show.language }] : [],
    credits: {
      cast: cast.map((c, i) => ({
        cast_id: `${show.id}-cast-${i}`,
        name: c.person?.name || 'Unknown',
        character: c.character?.name || '',
        profile_path: c.person?.image?.medium || c.person?.image?.original || null,
      })),
    },
  };
};

const PAGE_SIZE = 20;

/* ---------------- Public API (identical signatures for both providers) ---------------- */
export const getPopularMovies = async (page = 1) => {
  if (usingTmdb) return tmdbPage('/movie/popular', { page });
  // TVmaze has no "popular" endpoint: take one page of shows and rank it by rating.
  const { data } = await tvmaze.get('/shows', { params: { page: page - 1 } });
  const results = data
    .map(fromTvmaze)
    .filter((s) => s.poster_path)
    .sort((a, b) => b.vote_average - a.vote_average);
  return { results, page, total_pages: data.length === 250 ? page + 1 : page, total_results: results.length };
};

export const searchMoviesApi = async (query, page = 1) => {
  if (usingTmdb) return tmdbPage('/search/movie', { query, page, include_adult: false });
  const { data } = await tvmaze.get('/search/shows', { params: { q: query } });
  const all = data.map((e) => fromTvmaze(e.show));
  return {
    results: all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    page,
    total_pages: Math.max(1, Math.ceil(all.length / PAGE_SIZE)),
    total_results: all.length,
  };
};

export const getMovieDetails = async (id) => {
  if (usingTmdb) {
    const { data } = await tmdb.get(`/movie/${encodeURIComponent(id)}`, { params: { append_to_response: 'credits' } });
    return fromTmdb(data);
  }
  const { data } = await tvmaze.get(`/shows/${encodeURIComponent(id)}`, { params: { embed: 'cast' } });
  return fromTvmaze(data);
};

export const getErrorMessage = (err) => {
  const status = err.response?.status;
  if (status === 401) return 'Your TMDb API key is invalid. Check REACT_APP_TMDB_KEY in your .env file.';
  if (status === 404) return `We could not find that ${LABEL.one}.`;
  if (status === 429) return 'Too many requests. Wait a moment and try again.';
  if (!err.response) return `Could not connect to ${PROVIDER}. Check your internet connection and try again.`;
  return err.response?.data?.status_message || err.response?.data?.message || err.message || 'Something went wrong.';
};
