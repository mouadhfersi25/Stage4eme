import "./Navbar.css"
import logo from './assets/vissh-A85wLez290C5RXWV.avif';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
       <div className="navbar-logo">
      <Link to="/"> {/* Redirige vers la homepage (route "/") */}
        <img src={logo} alt="VisShop AI" className="logo-image" />
      </Link>
    </div>

        {/* Navigation Links */}
        <div className="navbar-menu">
          <a href="/" className="nav-link active">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/solutions" className="nav-link">
            Solutions
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Right side actions */}
        <div className="navbar-actions">
          <div className="language-selector">
            <img src="https://flagcdn.com/w20/gb.png" alt="English" className="flag-icon" />
            <span className="language-text">English</span>
            <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button className="demo-button">Book a Demo</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar