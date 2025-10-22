import { BarChart, LineChart, Brain, CheckCircle, PlayCircle } from "lucide-react"
import "./Home.css"
import women from './assets/women.png';
import Homee from './assets/home.png';
import { useLanguage } from "./LanguageContext"; // ✅ import du contexte
import SalesChart from "./SalesChart";

const Home = () => {
  const { language } = useLanguage();

  const handleViewAllServices = () => {
    window.location.href = "/services"
  }

  const handleTryDemo = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>
              {language === "en"
                ? "Transforming In-Store Retail with AI-Powered Behavioral Intelligence"
                : "Transformer le commerce en magasin grâce à l’intelligence comportementale alimentée par l’IA"}
            </h1>
            <p className="tagline">
              {language === "en"
                ? "We help traditional retailers detect theft, decode shopper behavior, and optimize shelf performance — all through advanced AI and computer vision."
                : "Nous aidons les détaillants traditionnels à détecter le vol, à décrypter le comportement des acheteurs et à optimiser la performance des rayons — grâce à l’IA avancée et à la vision par ordinateur."}
            </p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={handleTryDemo}>
                {language === "en" ? "Try Live Demo" : "Essayer la démo"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <p className="subtitle">{language === "en" ? "SERVICES" : "SERVICES"}</p>
        <h2 className="section-title">
          {language === "en" ? "Smarter Retail Starts Here" : "Un commerce plus intelligent commence ici"}
        </h2>
        <p className="section-description">
          {language === "en"
            ? "Designed to reduce loss, increase sales, and decode in-store behavior in real time."
            : "Conçu pour réduire les pertes, augmenter les ventes et analyser le comportement en magasin en temps réel."}
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <BarChart className="service-icon" />
              <h3>{language === "en" ? "Shoplifting Detection" : "Détection de vol à l’étalage"}</h3>
              <p>
                {language === "en"
                  ? "Detect suspicious behavior in real time and alert staff instantly. Prevent silent losses with AI-powered in-store surveillance."
                  : "Détectez les comportements suspects en temps réel et alertez immédiatement le personnel. Prévenez les pertes discrètes grâce à une surveillance en magasin alimentée par l’IA."}
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <LineChart className="service-icon" />
              <h3>{language === "en" ? "Retail Analytics" : "Analyse du commerce de détail"}</h3>
              <p>
                {language === "en"
                  ? "Understand customer movement, optimize store layout, and make data-driven decisions. Turn foot traffic into actionable insights that boost sales."
                  : "Comprenez les mouvements des clients, optimisez l’aménagement du magasin et prenez des décisions basées sur les données. Transformez le flux de visiteurs en informations exploitables qui augmentent les ventes."}
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="p-6 flex flex-col items-center text-center">
              <Brain className="service-icon" />
              <h3>{language === "en" ? "Smart Stock AI" : "Stockage intelligent par IA"}</h3>
              <p>
                {language === "en"
                  ? "Monitor shelf stock automatically using existing cameras. Reduce out-of-stocks, speed up restocking, and increase revenue."
                  : "Surveillez automatiquement les stocks en rayon avec les caméras existantes. Réduisez les ruptures, accélérez le réapprovisionnement et augmentez les revenus."}
              </p>
            </div>
          </div>
        </div>
        <button className="view-all-services-button" onClick={handleViewAllServices}>
          {language === "en" ? "View All Our Services" : "Voir tous nos services"}
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-content">
          <p className="subtitle">{language === "en" ? "WHY CHOOSE US" : "POURQUOI NOUS CHOISIR"}</p>
          <h2 className="section-title">
            {language === "en" ? "Why Top Retailers Choose VisShop AI" : "Pourquoi les plus grands détaillants choisissent VisShop AI"}
          </h2>
          <ul className="feature-list">
            <li>
              <CheckCircle className="check-icon" /> {language === "en" ? "Real-time analysis powered by artificial intelligence" : "Analyse en temps réel alimentée par l’intelligence artificielle"}
            </li>
            <li>
              <CheckCircle className="check-icon" /> {language === "en" ? "Significant reduction in losses caused by shoplifting" : "Réduction significative des pertes causées par le vol à l’étalage"}
            </li>
            <li>
              <CheckCircle className="check-icon" /> {language === "en" ? "Deeper understanding of in-store customer behavior" : "Meilleure compréhension du comportement des clients en magasin"}
            </li>
            <li>
              <CheckCircle className="check-icon" /> {language === "en" ? "Modular and easy-to-integrate solution" : "Solution modulaire et facile à intégrer"}
            </li>
          </ul>
        </div>
        <div className="why-choose-us-image-container">
          <img src={women} alt="Woman using tablet" className="why-choose-us-image" />
        </div>
      </section>

      {/* Performance Insight Section */}
      <section className="performance-section">
        <div className="performance-content">
          <p className="subtitle">{language === "en" ? "KEY INSIGHTS" : "APERÇUS CLÉS"}</p>
          <h2 className="section-title">{language === "en" ? "Performance Insight in Action" : "Perspectives de performance en action"}</h2>
          <p className="section-description">
            {language === "en"
              ? "A real example of how VisShop AI drives measurable results."
              : "Un exemple concret de la façon dont VisShop AI génère des résultats mesurables."}
          </p>
          <p className="performance-text">
            {language === "en"
              ? "After relocating 'Honey Oat Bars' to the Snacks aisle, sales increased by 66% in just one month. This adjustment was based on AI behavior analysis from VisShop AI."
              : "Après avoir déplacé les « Honey Oat Bars » dans le rayon Snacks, les ventes ont augmenté de 66 % en seulement un mois. Cet ajustement s’est basé sur l’analyse comportementale IA de VisShop AI."}
          </p>
        </div>
        <div className="chart-container-wrapper">
          <div className="chart-card">
            <div className="p-6">
              <SalesChart />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <p className="subtitle">{language === "en" ? "EXPLAINER" : "DÉMONSTRATION"}</p>
        <h2 className="section-title">
          {language === "en" ? "Watch how VisShop AI stops theft and increases sales." : "Découvrez comment VisShop AI empêche le vol et augmente les ventes."}
        </h2>
        <div className="video-placeholder-container">
          <img src={Homee} alt="Video thumbnail" className="video-thumbnail" />
          <PlayCircle className="play-icon" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <h2 className="section-title">
          {language === "en" ? "Ready to bring AI into your store?" : "Prêt à introduire l’IA dans votre magasin ?"}
        </h2>
        <button className="request-demo-button" onClick={handleTryDemo}>
          {language === "en" ? "Request a Free Demo" : "Demander une démo gratuite"}
        </button>
      </section>
    </div>
  )
}

export default Home;
