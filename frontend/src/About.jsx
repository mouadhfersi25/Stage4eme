"use client";

import { Lightbulb, Target, Zap, Shield } from "lucide-react";
import "./About.css";
import femm from "./assets/fem.png";
import { useLanguage } from "./LanguageContext"; // ✅ import du contexte

const About = () => {
  const { language } = useLanguage(); // ✅ récupération de la langue

  const handleBookDemo = () => {
    window.location.href = "/contact"
  }

  const handleRequestDemo = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            {language === "en"
              ? "We're Building the Smartest Eyes in Retail"
              : "Nous construisons les yeux les plus intelligents du commerce de détail"}
          </h1>
          <p className="about-hero-description">
            {language === "en"
              ? "Empowering retailers to combat losses, optimize systems, and understand their customers like never before."
              : "Donner aux détaillants les moyens de lutter contre les pertes, d'optimiser les systèmes et de mieux comprendre leurs clients comme jamais auparavant."}
          </p>
        </div>
      </section>

      {/* What Drives Section */}
      <section className="drives-section">
        <div className="drives-container">
          <div className="drives-content">
            <p className="drives-subtitle">
              {language === "en" ? "ABOUT VISSHOP AI" : "À PROPOS DE VISSHOP AI"}
            </p>
            <h2 className="drives-title">
              {language === "en" ? "What Drives VisShop AI" : "Ce qui motive VisShop AI"}
            </h2>
            <p className="drives-description">
              {language === "en"
                ? "Our purpose, our promise, and our vision — driving smarter retail with real-time intelligence."
                : "Notre objectif, notre promesse et notre vision — rendre le commerce plus intelligent grâce à l’intelligence en temps réel."}
            </p>
            <button className="read-more-button" onClick={handleBookDemo}>
              {language === "en" ? "Book a Demo" : "Réserver une démo"}
            </button>
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
                    <h4>{language === "en" ? "Vision" : "Vision"}</h4>
                    <p>
                      {language === "en"
                        ? "To revolutionize retail through intelligent AI solutions that prevent losses and optimize operations."
                        : "Révolutionner le commerce grâce à des solutions IA intelligentes qui préviennent les pertes et optimisent les opérations."}
                    </p>
                  </div>
                </foreignObject>

                {/* Mission section - repositioned */}
                <foreignObject x="280" y="200" width="160" height="70">
                  <div className="chart-label">
                    <h4>{language === "en" ? "Mission" : "Mission"}</h4>
                    <p>
                      {language === "en"
                        ? "To become the world's leading AI partner for physical retail."
                        : "Devenir le partenaire IA numéro 1 du commerce physique."}
                    </p>
                  </div>
                </foreignObject>

                {/* Who We Are section - repositioned */}
                <foreignObject x="50" y="330" width="160" height="70">
                  <div className="chart-label">
                    <h4>{language === "en" ? "Who We Are" : "Qui sommes-nous"}</h4>
                    <p>
                      {language === "en"
                        ? "Deep-tech company bringing AI to physical retail."
                        : "Entreprise deep-tech qui apporte l’IA au commerce physique."}
                    </p>
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
          <h2 className="drives-subtitle">
            {language === "en" ? "BENEFITS" : "AVANTAGES"}
          </h2>
          <h2 className="principles-title">
            {language === "en"
              ? "The Principles That Shape VisShop AI"
              : "Les principes qui façonnent VisShop AI"}
          </h2>
          <p className="principles-description">
            {language === "en"
              ? "These values drive every decision, every line of code, and every retail breakthrough."
              : "Ces valeurs guident chaque décision, chaque ligne de code et chaque innovation dans le commerce."}
          </p>
          <div className="principles-grid">
            <div className="principle-card">
              <Lightbulb className="principle-icon" />
              <h3>{language === "en" ? "Innovation" : "Innovation"}</h3>
              <p>
                {language === "en"
                  ? "We push beyond convention to create what hasn't existed before."
                  : "Nous allons au-delà des conventions pour créer ce qui n’a jamais existé."}
              </p>
            </div>
            <div className="principle-card">
              <Target className="principle-icon" />
              <h3>{language === "en" ? "Precision" : "Précision"}</h3>
              <p>
                {language === "en"
                  ? "Accuracy isn't optional – it's the heart of every AI insight we deliver."
                  : "La précision n’est pas optionnelle – elle est au cœur de chaque analyse IA que nous livrons."}
              </p>
            </div>
            <div className="principle-card">
              <Zap className="principle-icon" />
              <h3>{language === "en" ? "Speed & Agility" : "Vitesse & Agilité"}</h3>
              <p>
                {language === "en"
                  ? "We respond, adapt, and iterate faster than the market moves."
                  : "Nous répondons, nous adaptons et nous innovons plus vite que le marché."}
              </p>
            </div>
            <div className="principle-card">
              <Shield className="principle-icon" />
              <h3>{language === "en" ? "Integrity" : "Intégrité"}</h3>
              <p>
                {language === "en"
                  ? "We do what's right, even when no camera is watching."
                  : "Nous faisons ce qui est juste, même quand personne ne nous observe."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frustration Section */}
      <section className="frustration-section">
        <div className="frustration-container">
          <div className="frustration-content">
            <p className="drives-subtitle">
              {language === "en" ? "OWNER WORDS" : "MOTS DU FONDATEUR"}
            </p>
            <h2 className="frustration-title">
              {language === "en"
                ? "Born Out of Frustration with Retail Losses"
                : "Née de la frustration liée aux pertes du commerce"}
            </h2>
            <p className="frustration-description">
              {language === "en"
                ? "We saw amazing tech everywhere — except inside physical stores. Cameras were everywhere, yet no insights were being captured. VisShop AI was created to change that — to turn silent losses into powerful data."
                : "Nous avons vu des technologies incroyables partout — sauf dans les magasins physiques. Les caméras étaient omniprésentes, mais aucune donnée n’était exploitée. VisShop AI a été créé pour changer cela — pour transformer les pertes silencieuses en données puissantes."}
            </p>
          </div>
          <div className="frustration-visual">
            <div className="person-image-container">
              <img
                src={femm || "/placeholder.svg"}
                alt="Shoplifting Detection"
                className="service-detail-image1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grow Together */}
      <section className="grow-together-section">
        <div className="grow-together-container">
          <h2 className="grow-together-title">
            {language === "en" ? "Let's Grow Together" : "Grandissons ensemble"}
          </h2>
          <p className="grow-together-description">
            {language === "en"
              ? "We grow when our clients succeed. Join us in transforming retail."
              : "Nous grandissons quand nos clients réussissent. Rejoignez-nous pour transformer le commerce."}
          </p>
          <button className="demo-button" onClick={handleRequestDemo}>
            {language === "en" ? "Request a Free Demo" : "Demander une démo gratuite"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
