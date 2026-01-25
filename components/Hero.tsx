import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat transform scale-105"></div>
      {/* Tint Overlay: Gradient from dark branding colors to purple, semi-transparent to show image */}
      <div className="absolute inset-0 bg-gradient-to-br from-glim-dark/95 via-glim-dark/80 to-glim-purple/70"></div>
      
      {/* Decorative blurred orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-glim-blue rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-glim-violet rounded-full filter blur-[120px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-0">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-glim-gold/20 border border-glim-gold text-glim-gold font-semibold tracking-wider text-sm mb-6 backdrop-blur-sm">
            WELCOME TO GLIM INTERNATIONAL
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            <span className="drop-shadow-lg">Experience the</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glim-gold to-white">
              Transformative Power
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Come and experience the transformative power of Christ's light and salvation through sound bible teaching, interdenominational worship, and community outreach.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#services" className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-glim-purple to-glim-violet rounded-full text-white font-bold text-lg shadow-lg hover:shadow-glim-violet/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Join Sunday Worship
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noreferrer" className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Find Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
             <div className="glass-panel p-6 rounded-2xl border-l-4 border-glim-gold shadow-lg">
                <p className="text-glim-gold text-sm font-bold uppercase mb-1">When</p>
                <p className="text-xl font-bold text-white">Every Sunday</p>
                <p className="text-gray-300">1:00 PM (GMT+2)</p>
             </div>
             <div className="glass-panel p-6 rounded-2xl border-l-4 border-glim-blue shadow-lg">
                <p className="text-glim-blue text-sm font-bold uppercase mb-1">Where</p>
                <p className="text-xl font-bold text-white">Ubuntu Centre</p>
                <p className="text-gray-300 text-sm truncate">{CONTACT_INFO.address}</p>
             </div>
             <div className="glass-panel p-6 rounded-2xl border-l-4 border-glim-orchid shadow-lg">
                <p className="text-glim-orchid text-sm font-bold uppercase mb-1">Online</p>
                <p className="text-xl font-bold text-white">Zoom Live</p>
                <p className="text-gray-300 text-sm">ID: {CONTACT_INFO.zoomId}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;