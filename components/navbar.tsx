'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LoginButton from './ui/login-btn';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Evaluation', href: '#evaluation' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent w-full max-w-6xl mx-auto">
      {/* Left: Nav Links with translucent background */}
      <div className="flex items-center space-x-3 relative bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <div
              className="relative px-3 py-1 text-sm font-medium cursor-pointer"
              onClick={() => setActiveLink(link.name)}
            >
              {/* Animated background */}
              {activeLink === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#FEFFFC]/41 rounded-md z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeLink === link.name ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-3">
        <button className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-md hover:bg-gray-600 transition">
          Sign Up
        </button>
        
          <LoginButton text="Login" className="w-40 h-12 bg-white" />
          {/* <span className="text-gray-900">Get Started</span>
          <ArrowRight size={16} className="text-gray-900" /> */}
        
      </div>
    </nav>
  );
};

export default NavBar;