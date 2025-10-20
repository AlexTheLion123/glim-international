import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Heart,
  Users,
  Book,
  Music,
  Menu,
  X,
  ArrowRight,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'ministries', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Ministries', id: 'ministries' },
    { name: 'Events', id: 'events' },
    { name: 'Contact', id: 'contact' },
  ];

  const ministries = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Interdenominational Worship",
      description: "We provide a warm, welcoming environment where individuals can connect and grow in faith across denominations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healing & Deliverance",
      description: "Committed to holistic spiritual care, providing healing and deliverance ministries for total well-being."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Outreach",
      description: "Spreading Christ's light through community programs and outreach across communities and around the world."
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Educational & Counseling",
      description: "Equipping believers with biblical truth and providing spiritual counseling for purposeful, impactful living."
    }
  ];

  const upcomingEvents = [
    {
      date: "Every Sunday",
      title: "🙌 Sunday Worship Service",
      time: "13:00 (GMT+2)",
      description: "Join us every Sunday at Ubuntu Centre, 3 Wherry Road, Muizenberg, Cape Town for vibrant worship and spiritual growth."
    },
    {
      date: "Every Tuesday",
      title: "📖 Discipleship Classes",
      time: "20:00 (GMT+2)",
      description: "Grow in the Word through our discipleship classes. Connect with us live on Zoom for biblical teaching and fellowship."
    },
    {
      date: "Monthly",
      title: "🙏 7 Days Fasting & Prayer",
      time: "21:00–22:00 (GMT+2)",
      description: "Join us every month for 7 days of fasting and prayer. Live on Zoom for spiritual renewal and intercession."
    }
  ];

  const testimonials = [
    {
      name: "Community Member",
      text: "GLIM International has been a beacon of hope in my life. The interdenominational approach makes everyone feel welcome and valued.",
      role: "Active Member"
    },
    {
      name: "Ministry Participant",
      text: "The healing and deliverance ministries have transformed my life. I've experienced God's power in ways I never thought possible.",
      role: "Testimony of Faith"
    },
    {
      name: "Discipleship Student",
      text: "The discipleship classes have equipped me with biblical truth and helped me grow in my faith journey. The teaching is powerful and practical.",
      role: "Growing in Faith"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GLIM International</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8468736/pexels-photo-8468736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to GLIM International!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            We are delighted to have you here. GLIM International (The Great Light Interdenominational Ministries International) is a vibrant, Christ-centered community committed to spiritual growth, fellowship, and service. Join us as we celebrate God's grace, embrace His calling, and shine His light together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Join Us This Sunday
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About GLIM International</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GLIM International is a Christian organization committed to spreading the message of Christ's light and salvation across communities, denominations, and around the world. We emphasize healing, deliverance, and the overall spiritual well-being of our members and the wider community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8468743/pexels-photo-8468743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Church interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To bring the great light of Christ—spiritual enlightenment, hope, and the transformative power of God's presence—to those in spiritual darkness, reaching people worldwide.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                GLIM International - Where Christ's Light Shines.
              </p>
              
              <h3 className="text-3xl font-bold text-gray-900">Our Values</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Faith in Christ</span>
                    <p className="text-gray-600">We believe in the saving power of Jesus Christ and His light that transforms lives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Interdenominational Unity</span>
                    <p className="text-gray-600">We embrace all believers, fostering fellowship across denominations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Love and Compassion</span>
                    <p className="text-gray-600">We extend Christ's love through care, outreach, and service to others.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Holistic Spiritual Care</span>
                    <p className="text-gray-600">We are committed to healing, deliverance, and nurturing the total well-being of individuals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Integrity and Excellence</span>
                    <p className="text-gray-600">We serve with honesty, accountability, and a pursuit of excellence in ministry.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Book className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Empowerment through the Word</span>
                    <p className="text-gray-600">We equip believers with biblical truth for purposeful and impactful living.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Service Times & Location</h2>
            <p className="text-xl text-gray-600">
              Join us for worship, fellowship, and spiritual growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg text-center">
              <Music className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🙌 Sunday Worship</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">Every Sunday</p>
                <p className="text-lg text-gray-700">13:00 (GMT+2)</p>
                <p className="text-sm text-gray-600 mt-4">📍 Ubuntu Centre</p>
                <p className="text-sm text-gray-600">3 Wherry Road, Muizenberg</p>
                <p className="text-sm text-gray-600">Cape Town</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg text-center">
              <Book className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📖 Discipleship Classes</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">Grow in the Word</p>
                <p className="text-lg text-gray-700">Every Tuesday</p>
                <p className="text-lg text-gray-700">20:00 (GMT+2)</p>
                <p className="text-sm text-gray-600 mt-4">💻 Live on Zoom</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg text-center">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🙏 Fasting & Prayer</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">7 Days Each Month</p>
                <p className="text-lg text-gray-700">21:00 (GMT+2)</p>
                <p className="text-sm text-gray-600 mt-4">💻 Live on Zoom</p>
                <p className="text-sm text-gray-600 mt-2">Monthly gathering for spiritual renewal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">
              At GLIM International, our services are designed to inspire, encourage, and nurture spiritual growth in an interdenominational setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {ministry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.title}</h3>
                <p className="text-gray-600">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Regular Services</h2>
            <p className="text-xl text-gray-600">
              Connect with us through worship, discipleship, and prayer
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-blue-600 text-white p-4 rounded-lg text-center min-w-[120px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-sm">{event.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-lg">{event.description}</p>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Testimonies of Faith</h2>
            <p className="text-xl text-gray-600">
              Hear from members experiencing Christ's transforming light
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              We'd love to hear from you and answer any questions you might have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Ubuntu Centre, 3 Wherry Road, Muizenberg, Cape Town</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+27 12 755 440</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>info.gliminternational@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📧 Email us your questions or prayer requests</p>
                  <p>📞 Call us for more information</p>
                  <p>🙏 We'd love to hear from you!</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GLIM International</span>
            </div>
            <p className="text-sm">
              © 2025 GLIM International. All rights reserved. | Where Christ's Light Shines.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;