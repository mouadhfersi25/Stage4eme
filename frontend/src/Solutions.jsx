import { DollarSign, Eye, Package, TrendingDown, Check, Shield, UserCheck, PackageCheck } from "lucide-react"
import "./Solutions.css"
import aaaa from './assets/aaaa.png';
const Solutions = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">Smarter Stores Start with Smarter AI</h1>
          <p className="solutions-hero-description">
            We solve the biggest challenges in physical retail — using the power of real-time, camera-based AI.
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <p className="problems-subtitle">PROBLEM</p>
        <h2 className="problems-title">The Problems Physical Retailers Face Every Day</h2>

        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <DollarSign className="problem-icon" />
            </div>
            <h3>Revenue Leakage</h3>
            <p>Hidden theft and fraud eat into profits without detection.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <Eye className="problem-icon" />
            </div>
            <h3>Customer Blind Spots</h3>
            <p>No clear understanding of how shoppers move or decide.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <Package className="problem-icon" />
            </div>
            <h3>Stockouts</h3>
            <p>Empty shelves hurt sales and damage brand trust.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <TrendingDown className="problem-icon" />
            </div>
            <h3>Failed Campaigns</h3>
            <p>Promotions flop without knowing what really works.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <p className="solution-subtitle">WE PROVIDE SOLUTION</p>
        <div className="solution-content">
          <div className="solution-text">
            <h2 className="solution-title">How VisShop AI Fixes It</h2>
            <div className="solution-list">
              <div className="solution-item">
                <Check className="check-icon" />
                <span>Detect suspicious behavior before loss happens</span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>Get real-time insights into customer movement and decisions</span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>Track stock levels and fix shelf issues before customers notice</span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>Optimize store layout and product placement with AI</span>
              </div>
            </div>
          </div>
          <div className="solution-image">
            <img src={aaaa} alt="AI-powered retail analytics" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <p className="features-subtitle">INSIDE</p>
        <h2 className="features-title">What You Get with VisShop AI</h2>
        <p className="features-description">
          Three powerful AI capabilities — integrated, automated, and built for your store.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3>Stop Theft Before It Happens</h3>
            <p>AI monitors in real-time and alerts staff to unusual behavior.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <UserCheck className="feature-icon" />
            </div>
            <h3>Know Your Shoppers</h3>
            <p>See how customers move, where they dwell, and what influences purchase.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PackageCheck className="feature-icon" />
            </div>
            <h3>Stay Ahead of Stockouts</h3>
            <p>Monitor shelf levels and restock faster — without manual checks.</p>
          </div>
        </div>

        <div className="features-cta">
          <button className="cta-button">Request a Free Demo</button>
        </div>
      </section>
    </div>
  )
}

export default Solutions
