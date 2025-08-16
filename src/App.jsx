import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import ProjectMosaic from './components/ProjectMosaic';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

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
          <Testimonials />
          <Results />
          {/*        <CapabilitiesSlider />
                <About />
                <Contact /> */}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
