import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { searchMovies } from '../redux/movieActions';
import { LABEL, usingTmdb } from '../api/movieApi';
import MovieGrid from './MovieGrid';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default function MovieSearch() {
  const dispatch = useDispatch();
  const search = useSelector((s) => s.movies.search);
  const [text, setText] = useState(search.query);

  // Debounce: results update as the user types, after a short pause
  useEffect(() => {
    const id = setTimeout(() => {
      if (text.trim() !== search.query) dispatch(searchMovies(text));
    }, 450);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, dispatch]);

  const { items, loading, error, query, page, totalPages, totalResults } = search;

  return (
    <>
      <h2 className="section-title">Search {LABEL.many}</h2>
      <Form onSubmit={(e) => { e.preventDefault(); dispatch(searchMovies(text)); }} className="mb-4">
        <Form.Control
          size="lg"
          type="search"
          className="rh-input"
          placeholder={`Search by title, e.g. ${usingTmdb ? 'Interstellar' : 'The Office'}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label={`Search ${LABEL.many}`}
          autoFocus
        />
      </Form>

      {error && <ErrorMessage message={error} onRetry={() => dispatch(searchMovies(query))} />}
      {loading && items.length === 0 && <Loader label={`Searching for “${query}”…`} />}

      {!loading && !error && !query && <p className="text-muted-rh">Type a title to see matching results.</p>}
      {!loading && !error && query && items.length === 0 && (
        <p className="text-muted-rh">No {LABEL.many} found for “{query}”. Try a different title.</p>
      )}

      {items.length > 0 && (
        <>
          <p className="text-muted-rh">{totalResults} results for “{query}”</p>
          <MovieGrid movies={items} />
          {loading && <Loader label="Loading more…" />}
          {!loading && page < totalPages && (
            <div className="text-center mt-5">
              <Button variant="outline-light" onClick={() => dispatch(searchMovies(query, page + 1))}>
                Load more results
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
