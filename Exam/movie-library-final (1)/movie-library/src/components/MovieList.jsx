import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../redux/movieActions';
import { imageUrl, LABEL, usingTmdb } from '../api/movieApi';
import MovieGrid from './MovieGrid';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default function MovieList() {
  const dispatch = useDispatch();
  const { items, page, totalPages, loading, error } = useSelector((s) => s.movies.popular);

  useEffect(() => {
    if (items.length === 0) dispatch(fetchPopularMovies(1));
  }, [dispatch, items.length]);

  const featured = items[0];

  return (
    <>
      {featured && (
        <section
          className="hero"
          style={{ backgroundImage: `linear-gradient(90deg, #12141d 15%, rgba(18,20,29,.35)), url("${imageUrl(featured.backdrop_path, 'w1280')}")` }}
        >
          <div className="hero-text">
            <p className="hero-kicker">{usingTmdb ? 'Popular right now' : 'Top rated pick'}</p>
            <h1>{featured.title}</h1>
            <p className="hero-overview">{featured.overview}</p>
            <Button as={Link} to={`/movie/${featured.id}`} className="btn-accent">See details</Button>
          </div>
        </section>
      )}

      <h2 className="section-title">Popular {LABEL.many}</h2>

      {error && <ErrorMessage message={error} onRetry={() => dispatch(fetchPopularMovies(page + 1))} />}

      {items.length > 0 && <MovieGrid movies={items} />}
      {loading && <Loader label={`Fetching popular ${LABEL.many}…`} />}

      {!loading && !error && page < totalPages && items.length > 0 && (
        <div className="text-center mt-5">
          <Button variant="outline-light" onClick={() => dispatch(fetchPopularMovies(page + 1))}>
            Load more {LABEL.many}
          </Button>
        </div>
      )}
    </>
  );
}
