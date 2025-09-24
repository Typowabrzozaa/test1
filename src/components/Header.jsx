import React from 'react';

const Header = () => {
  const navLinks = ['Usługi', 'O nas', 'Realizacje', 'Kontakt'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-brand-blue">
          <a href="#home">Tranzwik</a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-brand-blue font-semibold transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
