import React from 'react';
import { Facebook, Twitter, Twitch, Youtube, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">GameZone Esports</h2>
            <p className="text-sm">Your premier destination for competitive gaming news, tournaments, and community.</p>
            <div className="flex space-x-4">
              <Twitch className="w-5 h-5 hover:text-purple-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-red-500 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teams</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rankings</a></li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Games</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">League of Legends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VALORANT</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CS:GO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dota 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rocket League</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertise with Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 GameZone Esports. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Globe className="w-4 h-4" />
              <select className="bg-gray-800 text-sm rounded px-2 py-1 outline-none">
                <option>English</option>
                <option>Español</option>
                <option>한국어</option>
                <option>日本語</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;