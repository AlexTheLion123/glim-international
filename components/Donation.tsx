
import React from 'react';
import { Heart, Copy, CreditCard, Landmark, CheckCircle2 } from 'lucide-react';
import { DONATION_INFO } from '../constants';

const Donation: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(DONATION_INFO.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 relative overflow-hidden bg-glim-dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-glim-gold/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glim-purple/10 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glim-purple/10 text-glim-purple text-sm font-bold tracking-wider mb-4 border border-glim-purple/20">
            <Heart className="w-4 h-4" />
            PARTNER WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Giving & Support</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Your generous contributions enable us to reach more lives through sound bible teaching, 
            holistic spiritual care, and community outreach. Thank you for partnering with the vision of GLIM International.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border-t-4 border-glim-gold shadow-2xl relative overflow-hidden group">
            {/* Background Icon Watermark */}
            <Landmark className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.03] transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-6 flex-1">
                  <div>
                    <p className="text-glim-gold text-xs font-bold uppercase tracking-widest mb-1">Account Holder</p>
                    <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {DONATION_INFO.accountHolder}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-glim-gold text-xs font-bold uppercase tracking-widest mb-1">Bank Name</p>
                      <div className="flex items-center gap-2">
                        {/* <CreditCard className="w-5 h-5 text-glim-purple" /> */}
                        <p className="text-lg text-white font-semibold">{DONATION_INFO.bank}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-glim-gold text-xs font-bold uppercase tracking-widest mb-1">Branch Code</p>
                      <p className="text-lg text-white font-mono font-bold">{DONATION_INFO.branchCode}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center md:min-w-[280px]">
                  <p className="text-glim-gold text-xs font-bold uppercase tracking-widest mb-2">Account Number</p>
                  <p className="text-3xl font-mono font-bold text-white tracking-tighter mb-4">
                    {DONATION_INFO.accountNumber}
                  </p>
                  <button 
                    onClick={copyAccountNumber}
                    className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-glim-gold text-glim-dark hover:bg-white hover:scale-[1.02]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy Account No.
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 italic text-gray-400 text-sm text-center md:text-left">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
