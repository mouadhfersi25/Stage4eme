"use client";

import {
  DollarSign,
  Eye,
  Package,
  TrendingDown,
  Check,
  Shield,
  UserCheck,
  PackageCheck,
} from "lucide-react";
import "./Solutions.css";
import aaaa from "./assets/aaaa.png";
import { useLanguage } from "./LanguageContext"; // ✅ import du contexte

const Solutions = () => {
  const { language } = useLanguage(); // ✅ récupération de la langue

  const handleRequestDemo = () => {
    window.location.href = "/contact"
  }

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">
            {language === "en"
              ? "Smarter Stores Start with Smarter AI"
              : "Des magasins plus intelligents commencent par une IA plus intelligente"}
          </h1>
          <p className="solutions-hero-description">
            {language === "en"
              ? "We solve the biggest challenges in physical retail — using the power of real-time, camera-based AI."
              : "Nous résolvons les plus grands défis du commerce physique grâce à la puissance de l’IA en temps réel et basée sur les caméras."}
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <p className="problems-subtitle">
          {language === "en" ? "PROBLEM" : "PROBLÈME"}
        </p>
        <h2 className="problems-title">
          {language === "en"
            ? "The Problems Physical Retailers Face Every Day"
            : "Les problèmes que rencontrent les commerçants physiques au quotidien"}
        </h2>

        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <DollarSign className="problem-icon" />
            </div>
            <h3>{language === "en" ? "Revenue Leakage" : "Fuites de revenus"}</h3>
            <p>
              {language === "en"
                ? "Hidden theft and fraud eat into profits without detection."
                : "Les vols et fraudes cachés grignotent les profits sans être détectés."}
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <Eye className="problem-icon" />
            </div>
            <h3>
              {language === "en" ? "Customer Blind Spots" : "Zones d’ombre clients"}
            </h3>
            <p>
              {language === "en"
                ? "No clear understanding of how shoppers move or decide."
                : "Aucune compréhension claire des déplacements ou décisions des clients."}
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <Package className="problem-icon" />
            </div>
            <h3>{language === "en" ? "Stockouts" : "Ruptures de stock"}</h3>
            <p>
              {language === "en"
                ? "Empty shelves hurt sales and damage brand trust."
                : "Les rayons vides nuisent aux ventes et à la confiance dans la marque."}
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrapper">
              <TrendingDown className="problem-icon" />
            </div>
            <h3>{language === "en" ? "Failed Campaigns" : "Campagnes ratées"}</h3>
            <p>
              {language === "en"
                ? "Promotions flop without knowing what really works."
                : "Les promotions échouent faute de savoir ce qui fonctionne réellement."}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <p className="solution-subtitle">
          {language === "en" ? "WE PROVIDE SOLUTION" : "NOTRE SOLUTION"}
        </p>
        <div className="solution-content">
          <div className="solution-text">
            <h2 className="solution-title">
              {language === "en"
                ? "How VisShop AI Fixes It"
                : "Comment VisShop AI résout ces problèmes"}
            </h2>
            <div className="solution-list">
              <div className="solution-item">
                <Check className="check-icon" />
                <span>
                  {language === "en"
                    ? "Detect suspicious behavior before loss happens"
                    : "Détecter les comportements suspects avant que la perte n’arrive"}
                </span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>
                  {language === "en"
                    ? "Get real-time insights into customer movement and decisions"
                    : "Obtenez des informations en temps réel sur les déplacements et décisions des clients"}
                </span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>
                  {language === "en"
                    ? "Track stock levels and fix shelf issues before customers notice"
                    : "Surveillez les niveaux de stock et corrigez les problèmes avant que les clients ne s’en rendent compte"}
                </span>
              </div>
              <div className="solution-item">
                <Check className="check-icon" />
                <span>
                  {language === "en"
                    ? "Optimize store layout and product placement with AI"
                    : "Optimisez l’agencement du magasin et le placement des produits grâce à l’IA"}
                </span>
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
        <p className="features-subtitle">
          {language === "en" ? "INSIDE" : "À L’INTÉRIEUR"}
        </p>
        <h2 className="features-title">
          {language === "en"
            ? "What You Get with VisShop AI"
            : "Ce que vous obtenez avec VisShop AI"}
        </h2>
        <p className="features-description">
          {language === "en"
            ? "Three powerful AI capabilities — integrated, automated, and built for your store."
            : "Trois puissantes capacités IA — intégrées, automatisées et conçues pour votre magasin."}
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3>
              {language === "en"
                ? "Stop Theft Before It Happens"
                : "Stopper le vol avant qu’il n’arrive"}
            </h3>
            <p>
              {language === "en"
                ? "AI monitors in real-time and alerts staff to unusual behavior."
                : "L’IA surveille en temps réel et alerte le personnel en cas de comportement inhabituel."}
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <UserCheck className="feature-icon" />
            </div>
            <h3>
              {language === "en" ? "Know Your Shoppers" : "Connaissez vos clients"}
            </h3>
            <p>
              {language === "en"
                ? "See how customers move, where they dwell, and what influences purchase."
                : "Voyez comment les clients se déplacent, où ils s’attardent et ce qui influence leurs achats."}
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PackageCheck className="feature-icon" />
            </div>
            <h3>
              {language === "en"
                ? "Stay Ahead of Stockouts"
                : "Anticipez les ruptures de stock"}
            </h3>
            <p>
              {language === "en"
                ? "Monitor shelf levels and restock faster — without manual checks."
                : "Surveillez les niveaux de rayons et réapprovisionnez plus vite — sans vérifications manuelles."}
            </p>
          </div>
        </div>

        <div className="features-cta">
          <button className="cta-button" onClick={handleRequestDemo}>
            {language === "en"
              ? "Request a Free Demo"
              : "Demander une démo gratuite"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
