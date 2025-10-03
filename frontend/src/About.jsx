"use client"

import { Lightbulb, Target, Zap, Shield } from "lucide-react"
import "./About.css"
import femm from "./assets/fem.png"

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">We're Building the Smartest Eyes in Retail</h1>
          <p className="about-hero-description">
            Empowering retailers to combat losses, optimize systems, and understand their customers like never before.
          </p>
        </div>
      </section>

      {/* What Drives VisShop AI Section */}
      <section className="drives-section">
        <div className="drives-container">
          <div className="drives-content">
            <p className="drives-subtitle">ABOUT VISSHOP AI</p>
            <h2 className="drives-title">What Drives VisShop AI</h2>
            <p className="drives-description">
              Our purpose, our promise, and our vision — driving smarter retail with real-time intelligence.
            </p>
            <button className="read-more-button">Book a Demo</button>
          </div>
          <div className="drives-visual">
            <div className="chart-container">
              <svg viewBox="0 0 600 400" className="drives-chart">
                {/* Chart curves */}
                <path d="M50 320 Q150 270 250 220 T450 160" stroke="#6366f1" strokeWidth="3" fill="none" />
                <path
                  d="M50 270 Q150 220 250 190 T450 130"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                {/* Data points */}
                <circle cx="120" cy="290" r="4" fill="#6366f1" />
                <circle cx="220" cy="240" r="4" fill="#6366f1" />
                <circle cx="320" cy="190" r="4" fill="#6366f1" />

                {/* Vision section - repositioned and resized */}
                <foreignObject x="420" y="100" width="160" height="90">
                  <div className="chart-label">
                    <h4>Vision</h4>
                    <p>
                      To revolutionize retail through intelligent AI solutions that prevent losses and optimize
                      operations.
                    </p>
                  </div>
                </foreignObject>

                {/* Mission section - repositioned */}
                <foreignObject x="280" y="200" width="160" height="70">
                  <div className="chart-label">
                    <h4>Mission</h4>
                    <p>To become the world's leading AI partner for physical retail.</p>
                  </div>
                </foreignObject>

                {/* Who We Are section - repositioned */}
                <foreignObject x="50" y="330" width="160" height="70">
                  <div className="chart-label">
                    <h4>Who We Are</h4>
                    <p>Deep-tech company bringing AI to physical retail.</p>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-section">
        <div className="principles-container">
          <h2 className="drives-subtitle">BENEFITS</h2>
          <h2 className="principles-title">The Principles That Shape VisShop AI</h2>
          <p className="principles-description">
            These values drive every decision, every line of code, and every retail breakthrough.
          </p>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Lightbulb className="principle-icon" />
              </div>
              <h3>Innovation</h3>
              <p>We push beyond convention to create what hasn't existed before.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Target className="principle-icon" />
              </div>
              <h3>Precision</h3>
              <p>Accuracy isn't optional – it's the heart of every AI insight we deliver.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Zap className="principle-icon" />
              </div>
              <h3>Speed & Agility</h3>
              <p>We respond, adapt, and iterate faster than the market moves.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Shield className="principle-icon" />
              </div>
              <h3>Integrity</h3>
              <p>We do what's right, even when no camera is watching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Born Out of Frustration Section */}
      <section className="frustration-section">
        <div className="frustration-container">
          <div className="frustration-content">
            <p className="drives-subtitle">OWNER WORDS</p>
            <h2 className="frustration-title">Born Out of Frustration with Retail Losses</h2>
            <p className="frustration-description">
              We saw amazing tech everywhere — except inside physical stores. Cameras were everywhere, yet no insights
              were being captured. VisShop AI was created to change that — to turn silent losses into powerful data.
            </p>
          </div>
          <div className="frustration-visual">
            <div className="person-image-container">
               <img src={femm || "/placeholder.svg"} alt="Shoplifting Detection" className="service-detail-image1" />
              <div className="geometric-shape shape-cyan"></div>
              <div className="geometric-shape shape-blue"></div>
              <div className="geometric-shape shape-turquoise"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Grow Together Section */}
      <section className="grow-together-section">
        <div className="grow-together-container">
          <h2 className="grow-together-title">Let's Grow Together</h2>
          <p className="grow-together-description">We grow when our clients succeed. Join us in transforming retail.</p>
          <button className="demo-button">Request a Free Demo</button>
        </div>
      </section>
    </div>
  )
}

export default About
