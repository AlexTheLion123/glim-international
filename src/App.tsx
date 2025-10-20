import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Clock, 
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
      icon: <Heart className="w-8 h-8" />,
      title: "Community Outreach",
      description: "Serving our local community through food drives, homeless support, and volunteer programs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Youth Ministry",
      description: "Engaging young people through fun activities, mentorship, and spiritual growth programs."
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Bible Study",
      description: "Weekly small group sessions exploring God's word and building deeper relationships."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Worship Ministry",
      description: "Leading the congregation in praise through contemporary and traditional worship music."
    }
  ];

  const upcomingEvents = [
    {
      date: "March 15",
      title: "Community Easter Egg Hunt",
      time: "2:00 PM - 4:00 PM",
      description: "Family-friendly event with games, prizes, and refreshments for all ages."
    },
    {
      date: "March 22",
      title: "Youth Retreat Weekend",
      time: "Friday - Sunday",
      description: "A weekend of fellowship, worship, and spiritual growth for teens and young adults."
    },
    {
      date: "March 29",
      title: "Special Guest Speaker",
      time: "10:30 AM Service",
      description: "Join us for an inspiring message from renowned author and speaker Dr. Sarah Johnson."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "This church has become my spiritual home. The community is so welcoming and supportive.",
      role: "Member since 2019"
    },
    {
      name: "David Thompson",
      text: "The youth programs here helped shape my faith journey. I'm grateful for the mentorship I received.",
      role: "Former Youth Member"
    },
    {
      name: "Maria Rodriguez",
      text: "The outreach programs allow us to make a real difference in our community. It's truly rewarding.",
      role: "Volunteer Coordinator"
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
              <span className="text-xl font-bold text-gray-900">Muizenberg Church</span>
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
            Welcome to Muizenberg Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            A place where faith grows, community thrives, and hearts are transformed by God's love
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 30 years, Muizenberg Church has been a beacon of hope and love in our community, 
              welcoming all who seek to grow in faith and fellowship.
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
                We exist to make disciples of Jesus Christ who love God, love others, and serve the world. 
                Through worship, community, and service, we strive to be the hands and feet of Christ in our neighborhood and beyond.
              </p>
              
              <h3 className="text-3xl font-bold text-gray-900">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Love & Compassion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Biblical Truth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Excellence</span>
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
              Join us for worship, fellowship, and spiritual growth every week
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunday Services</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">Traditional Service: 8:30 AM</p>
                <p className="text-lg text-gray-700">Contemporary Service: 10:30 AM</p>
                <p className="text-lg text-gray-700">Evening Service: 6:00 PM</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg text-center">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">123 Faith Avenue</p>
                <p className="text-lg text-gray-700">Springfield, ST 12345</p>
                <p className="text-sm text-gray-600 mt-4">Free parking available</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">(555) 123-HOPE</p>
                <p className="text-lg text-gray-700">info@muizenbergchurch.com</p>
                <p className="text-sm text-gray-600 mt-4">Office Hours: Mon-Fri 9-5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Ministries</h2>
            <p className="text-xl text-gray-600">
              Discover ways to grow in faith and serve our community
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

      {/* Pastor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Pastor</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Pastor Michael Johnson"
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Pastor Michael Johnson</h3>
                  <p className="text-xl text-blue-600 mb-4">Lead Pastor</p>
                  <p className="text-lg text-gray-700 mb-4">
                    Pastor Michael has been leading our congregation with wisdom, compassion, and dedication for over 15 years. 
                    His heart for community outreach and biblical teaching has touched countless lives.
                  </p>
                  <p className="text-gray-600">
                    "My greatest joy is seeing people discover God's love and purpose for their lives." - Pastor Michael
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us for these special gatherings and community events
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-600">
              Hear from members of our church family
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
                  <span>123 Faith Avenue, Springfield, ST 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>(555) 123-HOPE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>info@muizenbergchurch.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: After services</p>
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
              <span className="text-xl font-bold text-white">Muizenberg Church</span>
            </div>
            <p className="text-sm">
              © 2024 Muizenberg Church. All rights reserved. | Built with love and faith.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;