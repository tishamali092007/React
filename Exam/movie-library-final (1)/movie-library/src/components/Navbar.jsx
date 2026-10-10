import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authActions';

export default function AppNavbar() {
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const close = () => setExpanded(false);

  const handleSignOut = () => {
    close();
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar expand="md" sticky="top" className="rh-navbar" variant="dark" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="rh-brand" onClick={close}>
          Reelhouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end onClick={close}>Popular</Nav.Link>
            <Nav.Link as={NavLink} to="/search" onClick={close}>Search</Nav.Link>
            {user && <Nav.Link as={NavLink} to="/profile" onClick={close}>My profile</Nav.Link>}
          </Nav>
          <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
            {user ? (
              <>
                <span className="text-muted-rh">Hi, {user.username}</span>
                <Button size="sm" variant="outline-light" onClick={handleSignOut}>Sign out</Button>
              </>
            ) : (
              <Button size="sm" className="btn-accent" as={Link} to="/login" onClick={close}>Sign in</Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
