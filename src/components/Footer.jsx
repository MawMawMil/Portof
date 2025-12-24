import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 text-center border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"><FaGithub /></a>
        <a href="#" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-300"><FaLinkedin /></a>
        <a href="#" className="hover:text-pink-500 transition-colors hover:scale-110 transform duration-300"><FaInstagram /></a>
        <a href="mailto:rizki@example.com" className="hover:text-red-400 transition-colors hover:scale-110 transform duration-300"><FaEnvelope /></a>
      </div>
      <p className="text-sm">
        Made with <span className="text-red-500">To</span> by Rizki Hidayah &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
