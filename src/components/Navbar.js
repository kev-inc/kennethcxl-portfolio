import { Link } from "react-router-dom";

const Navbar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-size-3 has-text-weight-bold" href="/">
        kenneth
        <br />
        cxl
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <Link className="navbar-item" to="/">
            home
          </Link>
        </div>
        <div class="navbar-item">
          <Link className="navbar-item" to="/photos">
            photos
          </Link>
        </div>
        <div class="navbar-item">
          <Link className="navbar-item" to="/videos">
            videos
          </Link>
        </div>
        <div class="navbar-item is-hoverable">
          <Link className="navbar-item">tsl</Link>
          <div class="navbar-dropdown">
            <Link className="navbar-item" to="/tsl/clients">
              clients
            </Link>
            <Link className="navbar-item" to="/tsl/editorials">
              editorials
            </Link>
            <Link className="navbar-item" to="/tsl/videos">
              videos
            </Link>
          </div>
        </div>
        <div class="navbar-item">
          <Link className="navbar-item" to="/contact">
            contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
