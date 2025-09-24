import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Instalacja Fotowoltaiczna',
    category: 'Fotowoltaika',
    imageUrl: 'https://images.unsplash.com/photo-1508921340878-ba53e1f416ec?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Nowoczesna Klimatyzacja',
    category: 'Klimatyzacja',
    imageUrl: 'https://images.unsplash.com/photo-1627993290833-2218c39548a0?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Dom z Pompą Ciepła',
    category: 'Pompy Ciepła',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Wykończenie Wnętrza',
    category: 'Budownictwo',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
   {
    title: 'Serwis Systemu HVAC',
    category: 'Serwis',
    imageUrl: 'https://images.unsplash.com/photo-1533059242820-5af902f852f8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Budowa Domu Jednorodzinnego',
    category: 'Budownictwo',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="realizacje"
      className="py-20 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nasze Realizacje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
