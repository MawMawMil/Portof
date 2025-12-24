import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Aplikasi Cuaca',
    description: 'Aplikasi ramalan cuaca realtime menggunakan OpenWeatherMap API dan geolokasi.',
    tech: ['React', 'Tailwind', 'API'],
    github: 'https://mawmawmil.github.io/PTPN-RZ/',
    demo: '#',
    color: 'from-blue-400 to-blue-600',
    icon: '🌤️'
  },
  {
    title: 'To-Do List Modern',
    description: 'Aplikasi manajemen tugas dengan fitur drag-and-drop, kategori, dan local storage.',
    tech: ['React', 'Framer Motion', 'Local Storage'],
    github: '#',
    demo: '#',
    color: 'from-purple-400 to-purple-600',
    icon: '📝'
  },
  {
    title: 'Landing Page Startup',
    description: 'Desain landing page responsif dengan animasi scroll yang halus dan performa tinggi.',
    tech: ['HTML', 'Tailwind', 'AOS'],
    github: '#',
    demo: '#',
    color: 'from-green-400 to-green-600',
    icon: '🚀'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white perspective-1000">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-cyan-400"
        >
          Proyek Saya
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt 
              key={index} 
              glareEnable={true} 
              glareMaxOpacity={0.3} 
              glareColor="#ffffff" 
              glarePosition="all" 
              glareBorderRadius="12px"
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 h-full flex flex-col transform-style-3d group"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full flex flex-col"
              >
                {/* 3D Floating Header / Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center transform-style-3d`}>
                   <div className="transform translate-z-12 group-hover:translate-z-20 transition-transform duration-300">
                      <span className="text-6xl drop-shadow-lg filter">{project.icon}</span>
                   </div>
                </div>
                
                <div className="p-6 relative z-10 bg-gray-900 flex-grow flex flex-col transform-style-3d">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors transform translate-z-8 group-hover:translate-z-12">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow transform translate-z-4 group-hover:translate-z-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 transform translate-z-6 group-hover:translate-z-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700 text-gray-300 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto transform translate-z-8 group-hover:translate-z-16">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 px-4 py-2 rounded-lg hover:bg-cyan-500/20">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
