import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="o-nas"
      className="py-20 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Kim Jesteśmy?</h2>
          <p className="text-gray-600 mt-2">Poznaj historię i misję firmy Tranzwik</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1558995352-a47649553363?q=80&w=1932&auto=format&fit=crop"
              alt="Zespół Tranzwik przy pracy"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-brand-blue">Doświadczenie, na którym możesz polegać.</h3>
            <p className="text-gray-700 mb-4">
              Firma Tranzwik to zespół wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży budowlanej i energetycznej. Naszą misją jest dostarczanie klientom niezawodnych i nowoczesnych rozwiązań, które podnoszą komfort życia i dbają o środowisko.
            </p>
            <p className="text-gray-700">
              Stawiamy na jakość, terminowość i indywidualne podejście do każdego zlecenia. Od klimatyzacji, przez pompy ciepła i fotowoltaikę, aż po kompleksowe usługi budowlane - gwarantujemy najwyższy standard wykonania. Zaufaj profesjonalistom.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
