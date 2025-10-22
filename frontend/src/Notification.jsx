import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300); // Wait for animation to complete
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!message) return null;

  return (
    <div className={`notification ${type} ${isVisible ? 'visible' : ''}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {type === 'success' ? '✓' : '✕'}
        </span>
        <span className="notification-text">{message}</span>
        <button className="notification-close" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
