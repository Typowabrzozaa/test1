import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Tranzwik. Wszelkie prawa zastrzeżone.</p>
        <p className="text-sm text-gray-400 mt-2">
          Strona stworzona przez Jules.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
