import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="kontakt"
      className="py-20 md:py-28 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Skontaktuj się z Nami</h2>
          <p className="text-lg text-gray-600">
            Masz pytania lub chcesz otrzymać wycenę? Wypełnij formularz lub zadzwoń - chętnie pomożemy.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Imię i Nazwisko</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Jan Kowalski" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="jan.kowalski@example.com" />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Temat</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Zapytanie o wycenę" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Wiadomość</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Treść Twojej wiadomości..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-brand-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg">
                  Wyślij Wiadomość
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-brand-blue text-white p-8 rounded-lg shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">Dane Kontaktowe</h3>
                <p className="text-lg mb-3"><strong>Adres:</strong> ul. Budowlana 1, 00-001 Warszawa</p>
                <p className="text-lg mb-3"><strong>Telefon:</strong> +48 123 456 789</p>
                <p className="text-lg mb-8"><strong>Email:</strong> biuro@tranzwik.com</p>
              </div>
              <div className="w-full h-64 md:h-80 rounded-lg shadow-lg overflow-hidden mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.774497507917!2d21.01222811579639!3d52.22967567975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f61%3A0x78df0b6d0e9de456!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1678886134011!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;