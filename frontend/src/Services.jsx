import { Rocket, Lock, Truck, Hash, Store, Pill, Shirt, Laptop, ShoppingBag, Building } from "lucide-react";
import "./Services.css";
import shoppp from "./assets/shoplifting.png";
import retailll from "./assets/retail.jpg";
import stockk from "./assets/stock.png";
import { useLanguage } from "./LanguageContext"; // ✅ import du contexte

const Services = () => {
  const { language } = useLanguage(); // ✅ récupération de la langue

  const handleRequestDemo = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-content">
          <h1>
            {language === "en"
              ? "AI Solutions Built for Physical Retail"
              : "Solutions IA conçues pour le commerce physique"}
          </h1>
          <p>
            {language === "en"
              ? "Three powerful services, one seamless platform — all powered by your existing store cameras."
              : "Trois services puissants, une plateforme fluide — alimentée par vos caméras de magasin existantes."}
          </p>
        </div>
      </section>

      {/* Shoplifting Detection Section */}
      <section className="service-detail-section">
        <div className="service-detail-content">
          <p className="service-subtitle">{language === "en" ? "SERVICE" : "SERVICE"}</p>
          <h2 className="service-detail-title">
            {language === "en" ? "Shoplifting Detection" : "Détection du vol à l'étalage"}
          </h2>
          <p className="service-detail-description">
            {language === "en"
              ? "Our AI-powered surveillance system monitors store activity in real time, detecting suspicious behavior the moment it happens. By identifying potential theft early, VisShop AI empowers your team to act fast — reducing losses and increasing peace of mind across all locations."
              : "Notre système de surveillance basé sur l'IA surveille l'activité en temps réel, détectant les comportements suspects dès qu'ils se produisent. En identifiant rapidement un vol potentiel, VisShop AI permet à votre équipe d'agir vite — réduisant les pertes et renforçant la tranquillité dans tous vos magasins."}
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={shoppp || "/placeholder.svg"} alt="Shoplifting Detection" className="service-detail-image1" />
        </div>
      </section>

      {/* Retail Analytics Section */}
      <section className="service-detail-section reverse">
        <div className="service-detail-content">
          <p className="service-subtitle">{language === "en" ? "SERVICE" : "SERVICE"}</p>
          <h2 className="service-detail-title">
            {language === "en" ? "Retail Analytics" : "Analyse du commerce de détail"}
          </h2>
          <p className="service-detail-description">
            {language === "en"
              ? "Gain unmatched insights into how customers interact with your space. From tracking foot traffic and dwell time to identifying high-activity zones, our behavioral analytics turn raw movement into data-driven decisions that improve layout, staffing, and sales performance."
              : "Obtenez des informations uniques sur la façon dont les clients interagissent avec votre espace. Du suivi du trafic et du temps passé à l’identification des zones d’activité élevée, nos analyses comportementales transforment les mouvements bruts en décisions basées sur les données pour améliorer l’agencement, le personnel et les ventes."}
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={retailll || "/placeholder.svg"} alt="Retail Analytics" className="service-detail-image2" />
        </div>
      </section>

      {/* Smart Stock AI Section */}
      <section className="service-detail-section">
        <div className="service-detail-content">
          <p className="service-subtitle">{language === "en" ? "SERVICE" : "SERVICE"}</p>
          <h2 className="service-detail-title">
            {language === "en" ? "Smart Stock AI" : "Stockage intelligent IA"}
          </h2>
          <p className="service-detail-description">
            {language === "en"
              ? "Stop guessing what's happening on your shelves. Our smart stock system monitors shelf levels using real-time video intelligence, alerting staff before a product runs out. No more blind spots — just faster restocking and fewer missed sales."
              : "Arrêtez de deviner ce qui se passe dans vos rayons. Notre système intelligent surveille les niveaux de stock en temps réel grâce à la vidéo, alertant le personnel avant qu’un produit ne s’épuise. Plus de zones d’ombre — juste un réapprovisionnement plus rapide et moins de ventes manquées."}
          </p>
        </div>
        <div className="service-detail-image-container">
          <img src={stockk || "/placeholder.svg"} alt="Smart Stock AI" className="service-detail-image3" />
        </div>
      </section>

      {/* Problem Solver */}
      <section className="problem-solver-section">
        <p className="problem-solver-subtitle">{language === "en" ? "PROBLEM SOLVER" : "RÉSOLUTION DE PROBLÈMES"}</p>
        <h2 className="problem-solver-title">
          {language === "en" ? "Built to Solve Real Retail Pain" : "Conçu pour résoudre les vrais problèmes du commerce"}
        </h2>
        <p className="problem-solver-description">
          {language === "en"
            ? "Every feature we built comes from listening to real store managers, not just writing code."
            : "Chaque fonctionnalité a été créée en écoutant de vrais responsables de magasins, pas seulement en écrivant du code."}
        </p>
        <div className="problem-solver-grid">
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Rocket className="problem-solver-icon" />
            </div>
            <h3>{language === "en" ? "+7% revenue growth" : "+7% de croissance du chiffre d’affaires"}</h3>
            <p>
              {language === "en"
                ? "Retailers increase sales through better shelf and campaign visibility."
                : "Les détaillants augmentent leurs ventes grâce à une meilleure visibilité des rayons et des campagnes."}
            </p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Lock className="problem-solver-icon" />
            </div>
            <h3>{language === "en" ? "Up to 60% less theft" : "Jusqu’à 60% de vols en moins"}</h3>
            <p>
              {language === "en"
                ? "Stop losses before they happen with real-time detection."
                : "Stoppez les pertes avant qu’elles ne surviennent grâce à la détection en temps réel."}
            </p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Truck className="problem-solver-icon" />
            </div>
            <h3>{language === "en" ? "4.5x faster restocking" : "Réapprovisionnement 4,5x plus rapide"}</h3>
            <p>
              {language === "en"
                ? "Improve team speed and reduce manual shelf checks."
                : "Améliorez la rapidité de l’équipe et réduisez les vérifications manuelles des rayons."}
            </p>
          </div>
          <div className="problem-solver-card">
            <div className="problem-solver-icon-wrapper">
              <Hash className="problem-solver-icon" />
            </div>
            <h3>{language === "en" ? "Smarter decisions" : "Décisions plus intelligentes"}</h3>
            <p>
              {language === "en"
                ? "Use AI insights instead of guesswork."
                : "Utilisez les informations de l’IA au lieu de deviner."}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="sectors-section">
        <p className="sectors-subtitle">{language === "en" ? "COVER ALL SECTORS" : "COUVRIR TOUS LES SECTEURS"}</p>
        <h2 className="sectors-title">
          {language === "en" ? "Perfect For All Types of Physical Retail" : "Parfait pour tous types de commerces"}
        </h2>
        <p className="sectors-description">
          {language === "en"
            ? "Whether you manage one shop or hundreds, VisShop AI is designed to scale with your retail needs."
            : "Que vous gériez une boutique ou des centaines, VisShop AI est conçu pour s’adapter à vos besoins."}
        </p>
        <div className="sectors-grid">
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Store className="sector-icon" />
            </div>
            <span>{language === "en" ? "Supermarkets & Hypermarkets" : "Supermarchés & Hypermarchés"}</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Pill className="sector-icon" />
            </div>
            <span>{language === "en" ? "Pharmacies" : "Pharmacies"}</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Shirt className="sector-icon" />
            </div>
            <span>{language === "en" ? "Fashion & Apparel" : "Mode & Vêtements"}</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Laptop className="sector-icon" />
            </div>
            <span>{language === "en" ? "Electronics Retailers" : "Commerces d’électronique"}</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <ShoppingBag className="sector-icon" />
            </div>
            <span>{language === "en" ? "Beauty & Cosmetics" : "Beauté & Cosmétiques"}</span>
          </div>
          <div className="sector-card">
            <div className="sector-icon-wrapper">
              <Building className="sector-icon" />
            </div>
            <span>{language === "en" ? "Franchise Chains & Malls" : "Chaînes & Centres commerciaux"}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta-section">
        <h2 className="section-title">
          {language === "en" ? "Ready to Transform Your Store with AI?" : "Prêt à transformer votre magasin avec l’IA ?"}
        </h2>
        <p className="section-description">
          {language === "en"
            ? "Let us show you how VisShop AI can secure, optimize, and grow your retail business — starting today."
            : "Découvrez comment VisShop AI peut sécuriser, optimiser et développer votre commerce dès aujourd’hui."}
        </p>
        <button className="request-demo-button" onClick={handleRequestDemo}>
          {language === "en" ? "Request a Free Demo" : "Demander une démo gratuite"}
        </button>
      </section>
    </div>
  );
};

export default Services;
