import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <AppNavbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
