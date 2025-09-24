import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="o-nas"
      className="py-20 md:py-28 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Poznaj Naszą Firmę</h2>
          <p className="text-lg text-gray-600">
            Jesteśmy zespołem z pasją, który od lat realizuje projekty na najwyższym poziomie, łącząc tradycję z nowoczesnością.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Zespół Tranzwik dyskutuje nad projektem"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
          {/* Text Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-brand-blue">Doświadczenie, na którym możesz polegać.</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Firma Tranzwik to zespół wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży budowlanej i energetycznej. Naszą misją jest dostarczanie klientom niezawodnych i nowoczesnych rozwiązań, które podnoszą komfort życia i dbają o środowisko.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stawiamy na jakość, terminowość i indywidualne podejście do każdego zlecenia. Od klimatyzacji, przez pompy ciepła i fotowoltaikę, aż po kompleksowe usługi budowlane - gwarantujemy najwyższy standard wykonania. Zaufaj profesjonalistom.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;