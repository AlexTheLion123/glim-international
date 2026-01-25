import React, { useState } from 'react';
import { Sparkles, RefreshCw, Quote } from 'lucide-react';
import { generateDailyInspiration } from '../services/geminiService';
import { InspirationResponse } from '../types';

const DailyInspiration: React.FC = () => {
  const [inspiration, setInspiration] = useState<InspirationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const fetchInspiration = async () => {
    setLoading(true);
    const data = await generateDailyInspiration();
    setInspiration(data);
    setLoading(false);
    setHasLoadedOnce(true);
  };

  return (
    <section id="inspiration" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-glim-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-glim-honey/20 via-glim-dark to-glim-dark"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glim-gold/10 text-glim-gold text-sm font-bold tracking-wider mb-4 border border-glim-gold/20">
                <Sparkles className="w-4 h-4" />
                SPIRITUAL COMPANION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Receive a Word of Light</h2>
            <p className="mt-4 text-gray-400">
                Need a quick spiritual lift? Let our ministry generate a personalized scripture and encouraging thought for you today.
            </p>
        </div>

        {!hasLoadedOnce ? (
            <button 
                onClick={fetchInspiration}
                disabled={loading}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-glim-purple to-glim-blue font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
                {loading ? (
                    <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                ) : (
                    <Sparkles className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                )}
                {loading ? "Receiving..." : "Receive Inspiration"}
            </button>
        ) : (
            <div className="animate-fade-in-up">
                 <div className="glass-panel p-8 md:p-12 rounded-3xl border border-glim-gold/30 shadow-[0_0_50px_rgba(222,171,77,0.1)] relative">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-glim-gold/20" />
                    
                    {loading ? (
                         <div className="flex justify-center py-12">
                             <RefreshCw className="w-10 h-10 text-glim-gold animate-spin" />
                         </div>
                    ) : (
                        <>
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-relaxed italic">
                                "{inspiration?.verse}"
                            </h3>
                            <p className="text-glim-gold font-bold text-lg mb-8">— {inspiration?.reference}</p>
                            
                            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-glim-orchid">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {inspiration?.message}
                                </p>
                            </div>

                            <button 
                                onClick={fetchInspiration}
                                className="mt-8 text-sm text-gray-400 hover:text-white flex items-center justify-center mx-auto gap-2 transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" /> Generate Another
                            </button>
                        </>
                    )}
                 </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default DailyInspiration;
