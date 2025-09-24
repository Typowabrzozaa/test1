import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="container mx-auto px-4 text-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
          <h1 className="text-5xl font-bold mb-4">Nowoczesne Rozwiązania dla Twojego Domu</h1>
          <p className="text-xl mb-8">Specjalizujemy się w klimatyzacji, pompach ciepła, fotowoltaice i budownictwie.</p>
          <a
            href="#usługi"
            className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Poznaj Nasze Usługi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
