import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Tentang Saya</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hai! Saya Rizki Hidayah. Saya adalah seorang Junior Web Developer yang memiliki ketertarikan mendalam pada pengembangan antarmuka pengguna yang interaktif dan dinamis.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Meskipun masih di awal perjalanan karir saya, saya terus belajar teknologi terbaru seperti React, Tailwind CSS, dan animasi web untuk menciptakan pengalaman digital yang memukau.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-gray-700 rounded-lg text-cyan-400 font-bold shadow-md hover:bg-gray-600 transition-colors cursor-default">Problem Solver</div>
            <div className="px-4 py-2 bg-gray-700 rounded-lg text-purple-400 font-bold shadow-md hover:bg-gray-600 transition-colors cursor-default">Creative</div>
            <div className="px-4 py-2 bg-gray-700 rounded-lg text-green-400 font-bold shadow-md hover:bg-gray-600 transition-colors cursor-default">Fast Learner</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
