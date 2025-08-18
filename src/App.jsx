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

function App() {
  return (
    <Router>
      <div className="App relative">
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        <Navbar />
        <main className="relative">
          <Hero />
          <Services />
          <ProcessTimeline />
          <ProjectMosaic />
          <Pricing />
          <Team />
          <Results />
          {/*        <CapabilitiesSlider />
                <About />
                <Contact /> */}
        </main>
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
