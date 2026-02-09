import React from 'react';
import { Sun } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-glim-dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-glim-gold/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-glim-purple/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glim-gold/10 text-glim-gold text-sm font-bold tracking-wider mb-4 border border-glim-gold/20">
            <Sun className="w-4 h-4" />
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            About GLIM International
          </h2>
          <div className="w-24 h-1 bg-glim-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {CHURCH_NAME} is a Christian organization committed to spreading the message of Christ's light and salvation across communities, denominations, and around the world. We emphasize healing, deliverance, and the overall spiritual well-being of our members and the wider community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                GLIM International focuses on interdenominational worship, community outreach, and educational and counseling programmes, all with an emphasis on holistic spiritual care. Through these activities, we seek to foster spiritual growth, provide support, and empower individuals to live purpose-driven lives.
              </p>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-xl md:text-2xl font-serif italic text-white">
                  GLIM International — <span className="text-glim-gold">Where Christ's Light Shines.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
