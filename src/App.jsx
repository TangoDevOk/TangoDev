import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import ProjectMosaic from './components/ProjectMosaic';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Results from './components/Results';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';

// Import pages
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import PricingPage from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="App relative">
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        <Navbar />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <main className="relative">
              <Hero />
              <Services />
              <ProcessTimeline />
              <ProjectMosaic />
              <Pricing />
              <Team />
              <Results />
            </main>
          } />
          
          {/* Internal Pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        
        <Footer />
        <ScrollToTop />
        
        {/* Particle Background - Cubre toda la página excepto el Hero */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ top: '100vh' }}>
          <ParticleBackground />
        </div>
      </div>
    </Router>
  );
}

export default App;
