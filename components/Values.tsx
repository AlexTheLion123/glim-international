import React from 'react';
import { Sparkles, Heart, Users, Shield } from 'lucide-react';

const values = [
  {
    letter: 'G',
    title: 'Grace & Growth in Faith',
    description:
      'We believe in the saving power of Jesus Christ, His transforming light, and the spiritual growth that comes from daily walking in faith, nurtured through sound Bible teaching.',
    icon: Sparkles,
    color: 'glim-gold',
  },
  {
    letter: 'L',
    title: 'Love, Compassion & Service',
    description:
      "We extend Christ's love through care, outreach, and service to others, reflecting His heart in all we do.",
    icon: Heart,
    color: 'glim-orchid',
  },
  {
    letter: 'I',
    title: 'Interdenominational Unity & Integrity',
    description:
      'We embrace all Bible-believing believers, fostering fellowship across denominations while serving with honesty, accountability, and excellence in ministry.',
    icon: Users,
    color: 'glim-blue',
  },
  {
    letter: 'M',
    title: 'Ministry of Holistic Care & Empowerment',
    description:
      'We are committed to healing, deliverance, and nurturing the total well-being of individuals, equipping believers with biblical truth for purposeful and impactful living.',
    icon: Shield,
    color: 'glim-violet',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; borderLeft: string }> = {
  'glim-gold': {
    bg: 'bg-glim-gold/10',
    border: 'border-glim-gold/20',
    text: 'text-glim-gold',
    borderLeft: 'border-l-glim-gold',
  },
  'glim-orchid': {
    bg: 'bg-glim-orchid/10',
    border: 'border-glim-orchid/20',
    text: 'text-glim-orchid',
    borderLeft: 'border-l-glim-orchid',
  },
  'glim-blue': {
    bg: 'bg-glim-blue/10',
    border: 'border-glim-blue/20',
    text: 'text-glim-blue',
    borderLeft: 'border-l-glim-blue',
  },
  'glim-violet': {
    bg: 'bg-glim-violet/10',
    border: 'border-glim-violet/20',
    text: 'text-glim-violet',
    borderLeft: 'border-l-glim-violet',
  },
};

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-glim-dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glim-purple/5 rounded-full filter blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Values</h2>
          <div className="w-24 h-1 bg-glim-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            At GLIM International, our values guide everything we do as we share Christ's light and love with the world.
          </p>
        </div>

        {/* G.L.I.M. Acronym Header */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {['G', 'L', 'I', 'M'].map((letter, i) => {
            const colors = [colorMap['glim-gold'], colorMap['glim-orchid'], colorMap['glim-blue'], colorMap['glim-violet']];
            return (
              <React.Fragment key={letter}>
                <span className={`text-3xl md:text-4xl font-serif font-bold ${colors[i].text}`}>{letter}</span>
                {i < 3 && <span className="text-2xl text-gray-600 font-light">.</span>}
              </React.Fragment>
            );
          })}
          <span className="ml-3 text-gray-400 text-lg md:text-xl font-light tracking-wide">— Our Guiding Values</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => {
            const colors = colorMap[value.color];
            const Icon = value.icon;
            return (
              <div
                key={value.letter}
                className={`glass-panel rounded-3xl p-8 border-l-4 ${colors.borderLeft} relative overflow-hidden group hover:bg-white/10 transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex-shrink-0`}
                    >
                      <span className={`text-2xl font-serif font-bold ${colors.text}`}>{value.letter}</span>
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        {value.title}
                        <Icon className={`w-5 h-5 ${colors.text} opacity-60`} />
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-16">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
