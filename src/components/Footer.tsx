import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-electric-900 to-neon-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-bright-400 to-hot-400 p-2 rounded-full animate-pulse">
                <Target className="h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-bright-300 to-hot-300 bg-clip-text text-transparent">ProEdge</span>
            </div>
            <p className="text-gray-300">
              Elite football training accessible to athletes worldwide through innovative online coaching.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-electric-500 to-cyber-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="bg-gradient-to-r from-cyber-500 to-vibrant-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div className="bg-gradient-to-r from-hot-500 to-neon-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div className="bg-gradient-to-r from-bright-500 to-hot-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Youtube className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-bright-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-bright-300 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-cyber-300 transition-colors">Programs</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-vibrant-300 transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-hot-300 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-300">Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Video-Based Workouts</span></li>
              <li><span className="text-gray-300">1-on-1 Virtual Coaching</span></li>
              <li><span className="text-gray-300">Speed & Agility</span></li>
              <li><span className="text-gray-300">Goalkeeper Training</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-vibrant-300">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-bright-400" />
                <span className="text-gray-300">support@proedge.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-vibrant-400" />
                <span className="text-gray-300">Global Online Platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-electric-800 to-neon-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 ProEdge Online Football Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;