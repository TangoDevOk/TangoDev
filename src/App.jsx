import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Results from './components/Results';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

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
          <Projects />
          <Pricing />
          <Results />
   {/*        <CapabilitiesSlider />
          <About />
          <Contact /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
