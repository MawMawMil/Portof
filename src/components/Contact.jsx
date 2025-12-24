import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-cyan-400"
        >
          Hubungi Saya
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Mari Bekerja Sama!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan proyek web, ide-ide kreatif, atau sekadar bertegur sapa. Jangan ragu untuk menghubungi saya!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-cyan-400 text-xl font-bold group-hover:bg-cyan-500/20 transition-colors">
                  @
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">rizki@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-green-400 text-xl font-bold group-hover:bg-green-500/20 transition-colors">
                  WA
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-green-400 transition-colors">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nama</label>
              <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Pesan</label>
              <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white h-32 focus:border-cyan-400 focus:outline-none transition-colors resize-none" placeholder="Tulis pesan anda..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105 shadow-lg active:scale-95">
              Kirim Pesan
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
