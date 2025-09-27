import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import LegendarySkills from './pages/LegendarySkills';
import AIAnalysis from './pages/AIAnalysis';
import LevelExam from './pages/LevelExam';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legendary-skills" element={<LegendarySkills />} />
            <Route path="/ai-analysis" element={<AIAnalysis />} />
            <Route path="/exam/:level/:position" element={<LevelExam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;