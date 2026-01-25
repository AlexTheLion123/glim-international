import React from 'react';
import { Video, MapPin, Copy, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ServiceDetails: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, would show a toast here
    alert("Copied to clipboard!");
  };

  return (
    <section id="services" className="py-20 bg-glim-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Worship With Us</h2>
          <div className="w-24 h-1 bg-glim-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Whether you are in Cape Town or halfway across the world, there is a seat for you in our service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Physical Location */}
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin className="w-32 h-32 text-glim-blue" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="p-2 bg-glim-blue rounded-lg"><MapPin className="w-5 h-5 text-white" /></span>
                In-Person Service
              </h3>
              <p className="text-gray-400 mb-6">Experience the fellowship of the saints at our physical location.</p>
              
              <div className="space-y-4">
                <div className="bg-glim-dark/50 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-glim-gold font-bold uppercase">Venue</p>
                  <p className="text-lg text-white font-semibold">{CONTACT_INFO.address}</p>
                </div>
                <div className="bg-glim-dark/50 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-glim-gold font-bold uppercase">Time</p>
                  <p className="text-lg text-white font-semibold">Sundays @ 1:00 PM (GMT+2)</p>
                </div>
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-glim-blue hover:text-white transition-colors font-semibold"
              >
                Get Directions <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Zoom Location */}
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300 border-glim-purple/30">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Video className="w-32 h-32 text-glim-purple" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="p-2 bg-glim-purple rounded-lg"><Video className="w-5 h-5 text-white" /></span>
                Online Zoom Service
              </h3>
              <p className="text-gray-400 mb-6">Join our global family from the comfort of your home.</p>
              
              <div className="space-y-4">
                <div className="bg-glim-dark/50 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-glim-orchid font-bold uppercase">Meeting ID</p>
                    <p className="text-2xl text-white font-mono font-bold tracking-wider">{CONTACT_INFO.zoomId}</p>
                  </div>
                  <button onClick={() => copyToClipboard(CONTACT_INFO.zoomId)} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="bg-glim-dark/50 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-glim-orchid font-bold uppercase">Passcode</p>
                    <p className="text-2xl text-white font-mono font-bold tracking-wider">{CONTACT_INFO.zoomPasscode}</p>
                  </div>
                  <button onClick={() => copyToClipboard(CONTACT_INFO.zoomPasscode)} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white">
                     <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <a 
                href={`https://zoom.us/j/${CONTACT_INFO.zoomId.replace(/\s/g, '')}?pwd=${CONTACT_INFO.zoomPasscode}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full py-3 bg-gradient-to-r from-glim-purple to-glim-violet rounded-xl text-white font-bold shadow-lg hover:shadow-glim-purple/50 transition-all block text-center"
              >
                Launch Zoom Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
