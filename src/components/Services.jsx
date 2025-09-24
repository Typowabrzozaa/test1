import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for icons. In a real project, we would use an icon library like Heroicons.
const IconPlaceholder = () => <div className="w-12 h-12 bg-brand-blue rounded-full mb-4"></div>;

const services = [
  {
    name: 'Klimatyzacja',
    description: 'Instalacja i serwis nowoczesnych systemów klimatyzacji dla domu i biura.',
  },
  {
    name: 'Pompy Ciepła',
    description: 'Ekologiczne i wydajne rozwiązania grzewcze dopasowane do Twoich potrzeb.',
  },
  {
    name: 'Fotowoltaika',
    description: 'Zainwestuj w odnawialne źródła energii i obniż swoje rachunki za prąd.',
  },
  {
    name: 'Budownictwo',
    description: 'Kompleksowe usługi budowlane, od fundamentów aż po wykończenie wnętrz.',
  },
  {
    name: 'Serwis',
    description: 'Profesjonalny serwis gwarancyjny i pogwarancyjny klimatyzacji oraz pomp ciepła.',
  },
];

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="usługi"
      className="py-20 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nasze Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <IconPlaceholder />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
