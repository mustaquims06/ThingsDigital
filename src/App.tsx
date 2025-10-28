import React from 'react';
import EnhancedHeader from './components/EnhancedHeader';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import OptimizedPortfolio from './components/OptimizedPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OptimizedStarField from './components/OptimizedStarField';
import EnhancedAnimatedBackground from './components/EnhancedAnimatedBackground';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-github-dark text-github-text overflow-x-hidden">
      <OptimizedStarField />
      <EnhancedHeader />
      <main className="relative z-10">
        <EnhancedAnimatedBackground />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <OptimizedPortfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="919145600072" message="Hello! I would like to know more about your services." />
    </div>
  );
}

export default App;
