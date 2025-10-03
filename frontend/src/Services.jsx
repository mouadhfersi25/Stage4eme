import { Rocket, Lock, Truck, Hash, Store, Pill, Shirt, Laptop, ShoppingBag, Building } from "lucide-react"
import "./Services.css"
import shoppp from "./assets/shoplifting.png"
import retailll from "./assets/retail.jpg"
import stockk from "./assets/stock.png"
const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-content">
          <h1>AI Solutions Built for Physical Retail</h1>
          <p>Three powerful services, one seamless platform — all powered by your existing store cameras.</p>
        </div>
      </section>

      {/* Shoplifting Detection Section */}
      <section className="service-detail-section">
        <div className="service-detail-content">
          <p className="service-subtitle">SERVICE</p>
          <h2 className="service-detail-title">Shoplifting Detection</h2>
          <p className="service-detail-description">
            Our AI-powered surveillance system monitors store
            <br /> activity in real time, detecting suspicious behavior the
            <br />
            moment it happens. By identifying potential theft
            <br /> early, VisShop AI empowers your team to act fast
            <br /> — reducing losses and increasing peace of mind across
            <br /> all locations.
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={shoppp || "/placeholder.svg"} alt="Shoplifting Detection" className="service-detail-image1" />
        </div>
      </section>

      {/* Retail Analytics Section */}
      <section className="service-detail-section reverse">
        <div className="service-detail-content">
          <p className="service-subtitle">SERVICE</p>
          <h2 className="service-detail-title">Retail Analytics</h2>
          <p className="service-detail-description">
            Gain unmatched insights into how customers interact
            <br /> with your space. From tracking foot traffic and dwell
            <br />
            time to identifying high-activity zones, our behavioral
            <br /> analytics turn raw movement into data-driven
            <br />
            decisions that improve layout, staffing, and sales <br />
            performance.
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={retailll || "/placeholder.svg"} alt="Retail Analytics" className="service-detail-image2" />
        </div>
      </section>

      {/* Smart Stock AI Section */}
      <section className="service-detail-section">
        <div className="service-detail-content">
          <p className="service-subtitle">SERVICE</p>
          <h2 className="service-detail-title">Smart Stock AI</h2>
          <p className="service-detail-description">
            Stop guessing what's happening on your shelves. Our
            <br /> smart stock system monitors shelf levels using real
            <br />
            -time video intelligence, alerting staff before a product
            <br /> runs out. No more blind spots — just faster restocking
            <br />
            and fewer missed sales.
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={stockk || "/placeholder.svg"} alt="Smart Stock AI" className="service-detail-image3" />
        </div>
      </section>

      {/* Built to Solve Retail Pain Section */}
      <section className="problem-solver-section">
        <p className="problem-solver-subtitle">PROBLEM SOLVER</p>
        <h2 className="problem-solver-title">Built to Solve Real Retail Pain</h2>
        <p className="problem-solver-description">
          Every feature we built comes from listening to real store managers, not just writing code.
        </p>
        <div className="problem-solver-grid">
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Rocket className="problem-solver-icon" />
            </div>
            <h3>+7% revenue growth</h3>
            <p>Retailers increase sales through better shelf and campaign visibility.</p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Lock className="problem-solver-icon" />
            </div>
            <h3>Up to 60% less theft</h3>
            <p>Stop losses before they happen with real-time detection.</p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Truck className="problem-solver-icon" />
            </div>
            <h3>4.5x faster restocking</h3>
            <p>Improve team speed and reduce manual shelf checks.</p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Hash className="problem-solver-icon" />
            </div>
            <h3>Smarter decisions</h3>
            <p>Use AI insights instead of guesswork.</p>
          </div>
        </div>
      </section>

      {/* Perfect For All Types of Physical Retail Section */}
      <section className="sectors-section">
        <p className="sectors-subtitle">COVER ALL SECTORS</p>
        <h2 className="sectors-title">Perfect For All Types of Physical Retail</h2>
        <p className="sectors-description">
          Whether you manage one shop or hundreds, VisShop AI is designed to scale with your retail needs.
        </p>
        <div className="sectors-grid">
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Store className="sector-icon" />
            </div>
            <span>Supermarkets & Hypermarkets</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Pill className="sector-icon" />
            </div>
            <span>Pharmacies</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Shirt className="sector-icon" />
            </div>
            <span>Fashion & Apparel</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Laptop className="sector-icon" />
            </div>
            <span>Electronics Retailers</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <ShoppingBag className="sector-icon" />
            </div>
            <span>Beauty & Cosmetics</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Building className="sector-icon" />
            </div>
            <span>Franchise Chains & Malls</span>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Store with AI? / Final CTA Section */}
      <section className="final-cta-section">
        <h2 className="section-title">Ready to Transform Your Store with AI?</h2>
        <p className="section-description">
          Let us show you how VisShop AI can secure, optimize, and grow your retail business — starting today.
        </p>
        <button className="request-demo-button">Request a Free Demo</button>
      </section>
    </div>
  )
}

export default Services
