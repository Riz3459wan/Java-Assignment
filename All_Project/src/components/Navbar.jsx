import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/todo" className="nav-link">
          Todo List
        </NavLink>
        <NavLink to="/text" className="nav-link">
          Text Analyzer
        </NavLink>
        <NavLink to="/share" className="nav-link">
          Share Calculation
        </NavLink>
        <NavLink to="/seat" className="nav-link">
          Seat Booking
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
