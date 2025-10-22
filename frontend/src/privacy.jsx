import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <h1 className="privacy-hero-title">
            We Respect Your Privacy and Protect Your Data
          </h1>
          <p className="privacy-hero-description">
            Your trust matters — we ensure full GDPR compliance and never store personal or biometric data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="privacy-content">
        <div className="privacy-container">
          {/* We Respect Your Privacy Section */}
          <section className="privacy-section">
            <h2>We Respect Your Privacy</h2>
            <p>
              At VisShop AI, we believe privacy is a fundamental right. Our AI services are designed to provide retailers with real-time insights <strong>without compromising individual identities or personal data.</strong>
            </p>
          </section>

          {/* How We Protect Your Information Section */}
          <section className="privacy-section">
            <h2>How We Protect Your Information</h2>
            
            <div className="privacy-subsection">
              <h3>No Facial Recognition</h3>
              <p>We never use or store any facial recognition technology in our systems.</p>
            </div>

            <div className="privacy-subsection">
              <h3>SSL-Encrypted Transmission</h3>
              <p>All video streams and data transfers are protected with end-to-end SSL encryption.</p>
            </div>

            <div className="privacy-subsection">
              <h3>Real-Time Anonymization</h3>
              <p>Our AI processes video streams in real time and does not identify or recognize individuals.</p>
            </div>

            <div className="privacy-subsection">
              <h3>Automatic Data Deletion (within 24 hours)</h3>
              <p>All footage is automatically deleted within 24 hours of processing unless requested otherwise by the client for debugging purposes.</p>
            </div>

            <div className="privacy-subsection">
              <h3>No Personal or Biometric Data Stored</h3>
              <p>We do not collect, store, or process personal or biometric data such as facial features, names, or identities.</p>
            </div>
          </section>

          {/* GDPR Compliance Section */}
          <section className="privacy-section">
            <h2>We Are Fully GDPR Compliant</h2>
            <p>VisShop AI operates in accordance with the European Union's General Data Protection Regulation (GDPR), including:</p>
            
            <div className="privacy-subsection">
              <p><strong>Data Minimization:</strong> We only process the minimal amount of data required for our service to function.</p>
            </div>

            <div className="privacy-subsection">
              <p><strong>Purpose Limitation:</strong> Data is used only for the specified purpose of retail analytics and theft prevention.</p>
            </div>

            <div className="privacy-subsection">
              <p><strong>Data Retention:</strong> All customer-related video data is deleted within 24 hours unless otherwise required for system training (with explicit consent).</p>
            </div>

            <div className="privacy-subsection">
              <p><strong>Anonymity by Design:</strong> Our platform is designed to ensure that no individual is identifiable at any stage of processing.</p>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="privacy-section">
            <h2>Your Rights Under GDPR</h2>
            <p>You have the right to:</p>
            <ul className="privacy-rights-list">
              <li>Access any personal data we may hold (if applicable)</li>
              <li>Request correction or deletion</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise your rights, contact: <a href="mailto:privacy@visshop.ai" className="privacy-link">privacy@visshop.ai</a></p>
          </section>

          {/* Contact Section */}
          <section className="privacy-section">
            <h2>Need More Information?</h2>
            <p>If you have questions about our data practices or want to request deletion, please contact:</p>
            
            <div className="privacy-contact">
              <p><strong>Data Protection Officer</strong></p>
              <p>Email: <a href="mailto:privacy@visshop.ai" className="privacy-link">privacy@visshop.ai</a></p>
              <p>Address: <strong>Sousse, Tunisia</strong></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
