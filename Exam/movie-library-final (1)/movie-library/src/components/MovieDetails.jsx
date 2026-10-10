import { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { fetchMovieDetails } from '../redux/movieActions';
import { toggleFavorite, toggleWatchlist } from '../redux/authActions';
import { imageUrl, LABEL } from '../api/movieApi';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { item: movie, loading, error } = useSelector((s) => s.movies.details);
  const user = useSelector((s) => s.auth.user);
  const isFav = useSelector((s) => s.auth.favorites.some((m) => String(m.id) === String(id)));
  const inWatchlist = useSelector((s) => s.auth.watchlist.some((m) => String(m.id) === String(id)));

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const requireLogin = (action) => {
    if (!user) return navigate('/login', { state: { from: location.pathname } });
    dispatch(action(movie));
  };

  // Go back to wherever the user came from (search, profile, ...); fall back to home
  const goBack = (e) => {
    e.preventDefault();
    if (location.key !== 'default') navigate(-1);
    else navigate('/');
  };

  if (loading) return <Loader label={`Loading ${LABEL.one} details…`} />;
  if (error) return <ErrorMessage message={error} onRetry={() => dispatch(fetchMovieDetails(id))} />;
  if (!movie) return null;

  const cast = movie.credits?.cast?.slice(0, 12) || [];
  const languages = movie.spoken_languages?.map((l) => l.english_name).join(', ') || '—';

  return (
    <>
      <Link to="/" onClick={goBack} className="back-link">← Back</Link>

      <section
        className="detail-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(18,20,29,.55), #12141d), url("${imageUrl(movie.backdrop_path, 'w1280')}")` }}
      >
        <Row className="g-4 align-items-end">
          <Col xs={8} sm={5} md={3}>
            <img className="detail-poster" src={imageUrl(movie.poster_path)} alt={`${movie.title} poster`} />
          </Col>
          <Col md={9}>
            <h1 className="detail-title">{movie.title}</h1>
            {movie.tagline && <p className="tagline">{movie.tagline}</p>}
            <div className="d-flex flex-wrap gap-2 mb-3">
              {movie.genres?.map((g) => (
                <Badge key={g.id} bg="" className="genre-pill">{g.name}</Badge>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2">
              <Button className={isFav ? 'btn-accent' : 'btn-outline-accent'} onClick={() => requireLogin(toggleFavorite)}>
                {isFav ? '♥ In favorites' : '♡ Favorite'}
              </Button>
              <Button className={inWatchlist ? 'btn-accent' : 'btn-outline-accent'} onClick={() => requireLogin(toggleWatchlist)}>
                {inWatchlist ? '✓ On watchlist' : '+ Watchlist'}
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      <Row className="g-4 mt-1">
        <Col lg={8}>
          <h2 className="section-title">Overview</h2>
          <p className="detail-overview">{movie.overview || 'No description available.'}</p>
        </Col>
        <Col lg={4}>
          <h2 className="section-title">Facts</h2>
          <dl className="facts">
            <dt>Rating</dt>
            <dd>
              {movie.vote_average ? `★ ${movie.vote_average.toFixed(1)}` : 'Not rated'}
              {movie.vote_count > 0 && ` (${movie.vote_count.toLocaleString()} votes)`}
            </dd>
            <dt>Release date</dt>
            <dd>{movie.release_date || '—'}</dd>
            <dt>Runtime</dt>
            <dd>{movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '—'}</dd>
            <dt>Languages</dt>
            <dd>{languages}</dd>
            <dt>Genres</dt>
            <dd>{movie.genres?.map((g) => g.name).join(', ') || '—'}</dd>
          </dl>
        </Col>
      </Row>

      {cast.length > 0 && (
        <>
          <h2 className="section-title mt-4">Cast</h2>
          <div className="cast-row">
            {cast.map((c) => (
              <div className="cast-member" key={c.cast_id ?? c.credit_id ?? c.name}>
                <img src={imageUrl(c.profile_path, 'w185')} alt={c.name} loading="lazy" />
                <strong>{c.name}</strong>
                <span>{c.character}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
