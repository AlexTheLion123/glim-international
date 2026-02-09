import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Twitter, Music2 } from 'lucide-react';
import { CONTACT_INFO, CHURCH_NAME } from '../constants';

const ContactFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">{CHURCH_NAME}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing holistic spiritual care through sound bible teaching, national worship, and community outreach.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/glimintl"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-glim-blue flex items-center justify-center text-white hover:bg-white hover:text-glim-blue transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/glimintl"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-glim-dark/70 flex items-center justify-center text-white hover:bg-white hover:text-glim-dark transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@gliminternational"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <Music2 className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@GLIMInternational"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-glim-red flex items-center justify-center text-white hover:bg-white hover:text-glim-red transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/gliminternational"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-glim-purple flex items-center justify-center text-white hover:bg-white hover:text-glim-purple transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-glim-gold mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-glim-gold flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-glim-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Send a Prayer Request</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-glim-purple transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows={3} 
                  placeholder="How can we pray for you?" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-glim-purple transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-glim-gold text-glim-dark font-bold py-3 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 
                 status === 'success' ? '✓ Sent!' : 
                 status === 'error' ? 'Failed - Try Again' : 
                 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {CHURCH_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
