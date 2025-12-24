import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section id="about" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative group cursor-pointer"
          >
            {/* Floating 3D Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-xl shadow-lg z-20"
              style={{ translateZ: 50 }}
            >
              &lt;/&gt;
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-bold text-xl shadow-lg z-20"
              style={{ translateZ: 40 }}
            >
              JS
            </motion.div>

            {/* Main Image Container */}
            <div className="relative" style={{ translateZ: 30 }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-gray-800 p-2 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tight"
          >
            Tentang Saya
          </motion.h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Hai! Saya <span className="text-white font-bold">Rizki Hidayah</span>. Saya adalah seorang Junior Web Developer yang memiliki ketertarikan mendalam pada pengembangan antarmuka pengguna yang interaktif dan dinamis.
            </p>
            <p>
              Meskipun masih di awal perjalanan karir saya, saya terus belajar teknologi terbaru seperti <span className="text-cyan-400">React</span>, <span className="text-purple-400">Tailwind CSS</span>, dan animasi web untuk menciptakan pengalaman digital yang memukau.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            {['Problem Solver', 'Creative', 'Fast Learner'].map((skill, index) => (
              <motion.div 
                key={skill}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`px-6 py-2 bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-full text-sm font-bold shadow-xl cursor-default
                  ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-purple-400' : 'text-green-400'}`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
