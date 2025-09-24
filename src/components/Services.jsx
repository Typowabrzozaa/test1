import React from 'react';
import { motion } from 'framer-motion';

// Mock SVG icons for a cleaner look. In a real project, we'd use a library like Heroicons.
const icons = {
  klimatyzacja: "🌬️",
  pompy: "🌡️",
  fotowoltaika: "☀️",
  budownictwo: "🏗️",
  serwis: "🛠️",
  transport: "🚚",
};

const services = [
  {
    icon: icons.klimatyzacja,
    name: 'Klimatyzacja',
    description: 'Nowoczesne systemy klimatyzacji dla domu i biura.',
  },
  {
    icon: icons.pompy,
    name: 'Pompy Ciepła',
    description: 'Ekologiczne i wydajne rozwiązania grzewcze dla Twojego domu.',
  },
  {
    icon: icons.fotowoltaika,
    name: 'Fotowoltaika',
    description: 'Zainwestuj w energię słoneczną i obniż swoje rachunki.',
  },
  {
    icon: icons.budownictwo,
    name: 'Budownictwo',
    description: 'Kompleksowe usługi budowlane, od fundamentów po dach.',
  },
  {
    icon: icons.serwis,
    name: 'Serwis',
    description: 'Profesjonalna obsługa i konserwacja Twoich instalacji.',
  },
  {
    icon: icons.transport,
    name: 'Transport Kruszywa',
    description: 'Niezawodny i terminowy transport materiałów sypkich na Twoją budowę.',
  },
];

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="usługi"
      className="py-20 md:py-28 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Nasze Usługi</h2>
          <p className="text-lg text-gray-600">
            Specjalizujemy się w dostarczaniu kompleksowych i niezawodnych rozwiązań dla Twojego domu i biznesu.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-2xl hover:border-brand-blue transition-all duration-300"
              variants={cardVariants}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;