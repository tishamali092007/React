import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark app-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-pencil-square me-2"></i>BlogHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                <i className="bi bi-house-door-fill me-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                <i className="bi bi-journal-richtext me-1"></i> Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                <i className="bi bi-gear-fill me-1"></i> Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}