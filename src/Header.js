// src/Header.js
// Компонент шапки страницы с навигацией.
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Lightbulb, Briefcase, Mail } from 'lucide-react'; // Иконки из lucide-react

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg rounded-b-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-1">Бойко Егор</h1>
          <h2 className="text-xl font-light opacity-90">По жизни бездарь</h2>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg">
          <Link to="/about" className="hover:text-blue-200 transition duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700">
            <User size={20} />
            <span>Обо мне</span>
          </Link>
          <Link to="/skills" className="hover:text-blue-200 transition duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700">
            <Lightbulb size={20} />
            <span>Навыки</span>
          </Link>
          <Link to="/experience" className="hover:text-blue-200 transition duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700">
            <Briefcase size={20} />
            <span>Опыт</span>
          </Link>
          <Link to="/contact" className="hover:text-blue-200 transition duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700">
            <Mail size={20} />
            <span>Контакты</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
