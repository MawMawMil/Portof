import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

  function handleMouseMove(event) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
        ></motion.div>
        
        <motion.div 
          animate={{ 
             x: [0, -80, 0], 
             y: [0, 60, 0],
             scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"
        ></motion.div>

        <motion.div 
          animate={{ 
             x: [0, 50, -50, 0], 
             y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] left-[40%] w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] opacity-30 mix-blend-screen"
        ></motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative perspective-1000">
        <motion.div style={{ rotateX: 0, rotateY: 0 }} className="p-10"> {/* Resetting 3D rotation for text readability on heavily moved mouse, or just use subtle parallax */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-cyan-400 font-mono text-xl mb-6 tracking-wide"
          >
            👋 Halo semua, saya
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500 tracking-tighter drop-shadow-2xl"
          >
            Rizki Hidayah.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-300 mb-10 h-20"
          >
            Seorang{' '}
            <span className="text-cyan-400">
              <Typewriter
                words={['Junior Web Developer', 'React Enthusiast', 'Frontend Coder', 'Creative Thinker']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-light"
          >
            Saya membangun website yang <b>cepat</b>, <b>responsif</b>, dan <b>interaktif</b>. 
            Mengubah ide menjadi kenyataan digital dengan sentuhan modern.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]">
              <span className="relative z-10 flex items-center gap-2">
                Lihat Karya <span className="group-hover:translate-x-1 transition-transform">🚀</span>
              </span>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-gray-600 text-white font-bold hover:bg-white/10 transition-all hover:border-white hover:scale-105 backdrop-blur-sm">
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
