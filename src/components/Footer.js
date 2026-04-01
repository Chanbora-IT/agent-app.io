import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-2xl font-bold">AgentWeb</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building the future of web development with AI technology and innovative solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: '𝕏', label: 'Twitter' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '📱', label: 'Instagram' },
                { icon: '🐙', label: 'GitHub' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#social"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'Development', 'Mobile Apps', 'AI Integration', 'E-Commerce', 'Consulting'].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:hello@agentweb.com" className="text-white hover:text-blue-400 transition">
                    krizy2024@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📞</span>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition">
                    (+855) 17 722 170
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">
                    Phnom Penh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2026 AgentWeb. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
