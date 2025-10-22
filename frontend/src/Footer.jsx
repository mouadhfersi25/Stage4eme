import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import des icônes
import './Footer.css';
import Notification from './Notification';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setNotification({ message: 'Veuillez entrer une adresse email', type: 'error' });
      return;
    }

    if (!validateEmail(email)) {
      setNotification({ message: 'Veuillez entrer une adresse email valide', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setNotification({ message: '', type: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/newsletter/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      if (response.ok) {
        setNotification({ message: 'Inscription réussie ! Merci de vous être abonné à notre newsletter.', type: 'success' });
        setEmail('');
      } else {
        const errorData = await response.json();
        if (response.status === 400 && errorData.email) {
          setNotification({ message: 'Cette adresse email est déjà inscrite à notre newsletter.', type: 'error' });
        } else {
          setNotification({ message: 'Erreur lors de l\'inscription. Veuillez réessayer.', type: 'error' });
        }
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      setNotification({ message: 'Impossible de contacter le serveur. Veuillez réessayer.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-brand left-aligned"> {/* Ajout de la classe left-aligned */}
          <h3>visshopAI</h3>
          <p>AI Powered Solution for Physical Retail Store.</p>
          <form className="email-subscribe-container" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="subscribe-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
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
          <p>📍 sousse 20 Mars jawhara 4000</p>
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
      
      {/* Notification en haut de la page */}
      <Notification 
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
    </footer>
  );
};

export default Footer;