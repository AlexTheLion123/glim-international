import React from 'react';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative bg-gradient-to-b from-glim-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
             {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-glim-gold rounded-full transform rotate-3 scale-105 opacity-30"></div>
            <div className="absolute inset-0 border-2 border-glim-purple rounded-full transform -rotate-3 scale-105 opacity-30"></div>
            
            {/* Placeholder for the image in the flyer - using a high quality stock generic for now as per instructions to not use external raw images unless unsplash */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-glim-purple/20 aspect-[4/5] bg-gray-800">
               <img 
                 src="/seun-ogundipe.jpg" 
                 alt="Evang. Seun & Dr. Tejumade Ogundipe" 
                 className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-glim-dark via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                 <h3 className="text-2xl font-bold text-white mb-1">Evang. Seun & Dr. Tejumade Ogundipe</h3>
                 <p className="text-glim-gold font-medium tracking-wider uppercase text-sm">Hosts & Visionaries</p>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Shepherding with <br/>
              <span className="text-glim-orchid">Love & Truth</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              "We believe in the holistic spiritual care of every individual. Our mission is to guide you into a transformative experience with Christ's light, empowering you through sound biblical teaching and community outreach."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <h4 className="text-glim-gold font-bold mb-2">Bible Teaching</h4>
                 <p className="text-gray-400 text-sm">Sound doctrine rooted in scripture.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <h4 className="text-glim-orchid font-bold mb-2">Counseling</h4>
                 <p className="text-gray-400 text-sm">Educational and counselling programmes.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <h4 className="text-glim-blue font-bold mb-2">Worship</h4>
                 <p className="text-gray-400 text-sm">Interdenominational national worship.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                 <h4 className="text-glim-violet font-bold mb-2">Outreach</h4>
                 <p className="text-gray-400 text-sm">Community focused holistic care.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
