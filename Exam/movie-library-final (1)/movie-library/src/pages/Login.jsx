import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../redux/authActions';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((s) => s.auth.user);
  const from = location.state?.from || '/profile';

  if (user) return <Navigate to={from} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 3) return setError('Username must be at least 3 characters.');
    if (password.length < 4) return setError('Password must be at least 4 characters.');
    const result = dispatch(login(username, password));
    if (result.error) return setError(result.error);
    navigate(from, { replace: true });
  };

  return (
    <div className="auth-card mx-auto">
      <h2 className="section-title">Sign in</h2>
      <p className="text-muted-rh">
        New here? Pick a username and a password (4+ characters) and your account is created on first sign-in. Your favorites and watchlist are saved to it.
      </p>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control className="rh-input" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control className="rh-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </Form.Group>
        <Button type="submit" className="btn-accent w-100">Sign in</Button>
      </Form>
    </div>
  );
}
