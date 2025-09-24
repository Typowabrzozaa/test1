import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="h-full w-full bg-black bg-opacity-30 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">
              Solidne Fundamenty, Nowoczesne Rozwiązania.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Kompleksowe usługi w zakresie budownictwa, odnawialnych źródeł energii i transportu. Zaufaj naszemu doświadczeniu.
            </p>
            <a
              href="#usługi"
              className="bg-brand-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
            >
              Zobacz Ofertę
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;