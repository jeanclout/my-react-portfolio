// src/Footer.js
// Компонент подвала страницы.
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center rounded-t-xl mt-8">
      <div className="container mx-auto">
        <p className="text-sm mb-4">&copy; 2025 Бойко Егор. Все права защищены.</p>
        <nav className="flex justify-center space-x-6 text-md">
          <Link to="/about" className="hover:text-gray-400 transition duration-300">Обо мне</Link>
          <Link to="/contact" className="hover:text-gray-400 transition duration-300">Контакты</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
