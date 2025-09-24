import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* About Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tranzwik</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Dostarczamy kompleksowe rozwiązania w zakresie budownictwa, nowoczesnych instalacji i odnawialnych źródeł energii. Nasze doświadczenie to gwarancja Twojego zadowolenia.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nawigacja</h4>
            <ul>
              <li className="mb-2"><a href="#home" className="hover:text-brand-blue transition-colors">Strona Główna</a></li>
              <li className="mb-2"><a href="#usługi" className="hover:text-brand-blue transition-colors">Usługi</a></li>
              <li className="mb-2"><a href="#o-nas" className="hover:text-brand-blue transition-colors">O nas</a></li>
              <li className="mb-2"><a href="#realizacje" className="hover:text-brand-blue transition-colors">Realizacje</a></li>
              <li className="mb-2"><a href="#kontakt" className="hover:text-brand-blue transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <p className="text-gray-400 mb-2">ul. Budowlana 1<br/>00-001 Warszawa</p>
            <p className="text-gray-400 mb-2">biuro@tranzwik.com</p>
            <p className="text-gray-400">+48 123 456 789</p>
          </div>

        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tranzwik. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;