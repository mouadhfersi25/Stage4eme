import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Home from './Home'; 
import Services from './Services';
import Solutions from './Solutions';
import Privacy from './privacy';
 // This is your imported Solutions component
 // This is your imported Home component

// Remove these duplicate declarations:
// const Home = () => <div className="page-content">Contenu de la page d'accueil</div>;



function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;