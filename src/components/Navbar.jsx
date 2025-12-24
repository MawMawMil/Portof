import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-gray-900/80 backdrop-blur-md z-50 flex justify-between items-center px-6 lg:px-12 text-white border-b border-gray-800">
      <div className="text-2xl font-bold text-cyan-400 tracking-wider font-mono">
        Rizki<span className="text-white">.dev</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.to} className="hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="absolute top-20 right-0 w-2/3 h-screen bg-gray-900/95 flex flex-col items-center justify-start pt-16 gap-8 md:hidden border-l border-gray-800"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.to} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
