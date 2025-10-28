import { Mail, Phone, MapPin, Twitter, Youtube, Facebook, Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              JEDD'S
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses with innovative byte solutions. We transform ideas into digital excellence.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@jedds.com"
                className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                info@jedds.com
              </a>
              <a
                href="tel:0769846063"
                className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                0769 846 063
              </a>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                123 Tech Street, Digital City
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">About Us</Link>
              <Link to="/services" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Our Services</Link>
              <Link to="/portfolio" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Portfolio</Link>
              <Link to="/blog" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Blog</Link>
              <Link to="/careers" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Careers</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/docs" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Documentation</Link>
              <Link to="/help" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Help Center</Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">Contact Support</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} <span className="font-semibold text-gray-400">JEDDS Byte Solutions</span>. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


