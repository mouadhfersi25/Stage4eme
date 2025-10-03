import { BarChart, LineChart, Brain, CheckCircle, PlayCircle } from "lucide-react"
import "./Home.css"
import women from './assets/women.png';
import Homee from './assets/home.png';
const Home = () => {
   const handleViewAllServices = () => {
    window.location.href = "/services"
  }
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>Transforming In-Store Retail with AI-Powered Behavioral Intelligence</h1>
            <p className="tagline">
              We help traditional retailers detect theft, decode shopper behavior, and optimize shelf performance — all
              through advanced AI and computer vision.
            </p>
            <div className="cta-buttons">
              <button className="primary-cta">Try Live Demo</button>
            
            </div>
          </div>
          {/* L'image du héros est maintenant en arrière-plan CSS */}
        </div>
      </section>

      {/* Smarter Retail Starts Here / Services Section */}
      <section className="services-section">
         <p className="subtitle">SERVICES</p> {/* Added subtitle */}
        <h2 className="section-title">Smarter Retail Starts Here</h2>
        <p className="section-description">
          Designed to reduce loss, increase sales, and decode in-store behavior in real time.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <BarChart className="service-icon" />
              <h3>Shoplifting Detection</h3>
              <p>
                Detect suspicious behavior in real time and alert staff instantly. Prevent silent losses with AI-powered
                in-store surveillance.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <LineChart className="service-icon" />
              <h3>Retail Analytics</h3>
              <p>
                Understand customer movement, optimize store layout, and make data-driven decisions. Turn foot traffic
                into actionable insights that boost sales.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <Brain className="service-icon" />
              <h3>Smart Stock AI</h3>
              <p>
                Monitor shelf stock automatically using existing cameras. Reduce out-of-stocks, speed up restocking, and
                increase revenue.
              </p>
            </div>
          </div>
        </div>
          <button className="view-all-services-button" onClick={handleViewAllServices}>
          View All Our Services
        </button>
      </section>

      {/* Why Top Retailers Choose VisShop AI Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-content">
          <p className="subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">Why Top Retailers Choose VisShop AI</h2>
          <ul className="feature-list">
            <li>
              <CheckCircle className="check-icon" /> Real-time analysis powered by artificial intelligence
            </li>
            <li>
              <CheckCircle className="check-icon" /> Significant reduction in losses caused by shoplifting
            </li>
            <li>
              <CheckCircle className="check-icon" /> Deeper understanding of in-store customer behavior
            </li>
            <li>
              <CheckCircle className="check-icon" /> Modular and easy-to-integrate solution
            </li>
          </ul>
        </div>
        <div className="why-choose-us-image-container">
          <img src={women} alt="Woman using tablet" className="why-choose-us-image" />
        </div>
      </section>

      {/* Performance Insight in Action / Results Section */}
      <section className="performance-section">
        <div className="performance-content">
          <p className="subtitle">KEY INSIGHTS</p>
          <h2 className="section-title">Performance Insight in Action</h2>
          <p className="section-description">A real example of how VisShop AI drives measurable results.</p>
          <p className="performance-text">
            After relocating 'Honey Oat Bars' to the Snacks aisle, sales increased by 66% in just one month. This
            adjustment was based on AI behavior analysis from VisShop AI
          </p>
        </div>
        <div className="chart-container-wrapper">
          <div className="chart-card">
            <div className="p-6">
              {/* Placeholder for the chart image */}
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Sales Impact Comparison Chart"
                className="chart-placeholder-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Watch how VisShop AI stops theft and increases sales. / Video Demo Section */}
      <section className="video-section">
        <p className="subtitle">EXPLAINER</p>
        <h2 className="section-title">Watch how VisShop AI stops theft and increases sales.</h2>
        <div className="video-placeholder-container">
          <img src={Homee} alt="Video thumbnail" className="video-thumbnail" />
          <PlayCircle className="play-icon" />
        </div>
      </section>

      {/* Ready to bring AI into your store? / Final CTA Section */}
      <section className="final-cta-section">
        <h2 className="section-title">Ready to bring AI into your store?</h2>
        <button className="request-demo-button">Request a Free Demo</button>
      </section>
    </div>
  )
}

export default Home;
