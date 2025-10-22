import "./Navbar.css"
import logo from './assets/vissh-A85wLez290C5RXWV.avif';
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext"; // ✅ import du contexte

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  // ✅ bascule FR / EN
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const handleBookDemo = () => {
    window.location.href = "/contact"
  };

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
            {language === "en" ? "Home" : "Accueil"}
          </a>
          <a href="/about" className="nav-link">
            {language === "en" ? "About" : "À propos"}
          </a>
          <a href="/solutions" className="nav-link">
            {language === "en" ? "Solutions" : "Solutions"}
          </a>
          <a href="/services" className="nav-link">
            {language === "en" ? "Services" : "Services"}
          </a>
          <a href="/contact" className="nav-link">
            {language === "en" ? "Contact" : "Contact"}
          </a>
        </div>

        {/* Right side actions */}
        <div className="navbar-actions">
          <div className="language-selector" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            <img
              src={language === "en" ? "https://flagcdn.com/w20/gb.png" : "https://flagcdn.com/w20/fr.png"}
              alt={language === "en" ? "English" : "Français"}
              className="flag-icon"
            />
            <span className="language-text">
              {language === "en" ? "English" : "Français"}
            </span>
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
          <button className="demo-button" onClick={handleBookDemo}>
            {language === "en" ? "Book a Demo" : "Réserver une démo"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
