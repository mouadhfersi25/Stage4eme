import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import des icônes
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-brand left-aligned"> {/* Ajout de la classe left-aligned */}
          <h3>visshopAI</h3>
          <p>AI Powered Solution for Physical Retail Store.</p>
          <div className="email-subscribe-container">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input" 
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <nav className="footer-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/services">Services</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Other</h4>
          <nav className="footer-links">
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>📧 info@visshopai.com</p>
          <p>📞 +216 9801260</p>
          <p>📍 Sousse, Tunisia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2025 VisShop AI - All rights reserved</p>
        </div>
       <div className="social-media-icons">
  <a href="https://www.youtube.com/@visshopai" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaYoutube className="social-icon" />
  </a>
  <a href="https://www.facebook.com/visshopai" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaFacebook className="social-icon" />
  </a>
  <a href="https://www.linkedin.com/company/visshop-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaLinkedin className="social-icon" />
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;