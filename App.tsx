
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import ServiceDetails from './components/ServiceDetails';
import Leadership from './components/Leadership';
import DailyInspiration from './components/DailyInspiration';
import Donation from './components/Donation';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-glim-dark font-sans selection:bg-glim-gold selection:text-glim-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <ServiceDetails />
        <Leadership />
        <DailyInspiration />
        <Donation />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
