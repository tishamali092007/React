import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl, languageName } from '../api/movieApi';
import { toggleFavorite, toggleWatchlist } from '../redux/authActions';

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((s) => s.auth.user);
  const isFav = useSelector((s) => s.auth.favorites.some((m) => m.id === movie.id));
  const inWatchlist = useSelector((s) => s.auth.watchlist.some((m) => m.id === movie.id));

  const act = (action) => {
    if (!user) return navigate('/login', { state: { from: location.pathname } });
    dispatch(action(movie));
  };

  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—';

  return (
    <article className="movie-card h-100">
      <Link to={`/movie/${movie.id}`} className="poster-wrap">
        <img src={imageUrl(movie.poster_path)} alt={`${movie.title} poster`} loading="lazy" />
        <span className="rating-badge" title="Average rating">
          ★ {movie.vote_average ? movie.vote_average.toFixed(1) : 'NR'}
        </span>
      </Link>
      <div className="movie-card-body">
        <h3 className="movie-title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h3>
        <p className="movie-meta">
          {year} · {languageName(movie.original_language)}
        </p>
        <p className="movie-overview">{movie.overview || 'No description available.'}</p>
        <div className="card-actions">
          <button type="button" className={`fav-btn ${isFav ? 'active' : ''}`} onClick={() => act(toggleFavorite)} aria-pressed={isFav}>
            {isFav ? '♥ Favorite' : '♡ Favorite'}
          </button>
          <button type="button" className={`fav-btn ${inWatchlist ? 'active' : ''}`} onClick={() => act(toggleWatchlist)} aria-pressed={inWatchlist}>
            {inWatchlist ? '✓ Watchlist' : '+ Watchlist'}
          </button>
        </div>
      </div>
    </article>
  );
}
