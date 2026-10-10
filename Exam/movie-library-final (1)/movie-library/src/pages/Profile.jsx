import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';

export default function Profile() {
  const { user, favorites, watchlist } = useSelector((s) => s.auth);

  return (
    <>
      <h1 className="section-title">{user.username}’s library</h1>

      <h2 className="sub-title">Favorites ({favorites.length})</h2>
      {favorites.length ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p className="text-muted-rh">
          No favorites yet. Open a title from <Link to="/">Popular</Link> or <Link to="/search">Search</Link> and tap Favorite.
        </p>
      )}

      <h2 className="sub-title mt-5">Watchlist ({watchlist.length})</h2>
      {watchlist.length ? (
        <MovieGrid movies={watchlist} />
      ) : (
        <p className="text-muted-rh">Your watchlist is empty. Tap “+ Watchlist” on any card or details page.</p>
      )}
    </>
  );
}
