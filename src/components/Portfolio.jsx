import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nowoczesne Domy',
    category: 'Budownictwo',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Instalacja Fotowoltaiczna',
    category: 'Fotowoltaika',
    imageUrl: 'https://images.unsplash.com/photo-1629339327341-a0a7b43a3c99?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Eleganckie Wnętrza',
    category: 'Wykończenia',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Systemy Klimatyzacji',
    category: 'Klimatyzacja',
    imageUrl: 'https://images.unsplash.com/photo-1617933623824-523235334701?q=80&w=1932&auto=format&fit=crop',
  },
   {
    title: 'Transport Kruszywa',
    category: 'Transport',
    imageUrl: 'https://images.unsplash.com/photo-1519901334006-f5b441f32a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Profesjonalny Serwis',
    category: 'Serwis',
    imageUrl: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="realizacje"
      className="py-20 md:py-28 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Nasze Realizacje</h2>
          <p className="text-lg text-gray-600">
            Jesteśmy dumni z naszych projektów. Zobacz wybrane realizacje, które świadczą o naszym doświadczeniu i dbałości o detale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#usługi"
            className="bg-brand-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
          >
            Zobacz Więcej Realizacji
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;