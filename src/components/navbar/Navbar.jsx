// frontend/src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Define your navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    // Add more links as needed
  ];

  // Conditionally add special link for Navbar2
  if (location.pathname === "/special") {
    navLinks.push({ to: "/special", label: "Special Page" });
  }

  return (
    <nav>
      <div className="left">
        <img src="../../assets/images/xlogo.svg" alt="xcelsz logo" />
        <h2 className="desktop-resp">Xcelsz Agile Solutions</h2>
        <h1 className="mobile-resp">Xcelsz</h1>
      </div>
      <div className="right">
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
