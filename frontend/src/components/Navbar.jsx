import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Notification System</h2>

      <div className="nav-links">
        <Link to="/">All Notifications</Link>

        <Link to="/priority">
          Top 10 Priority
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;