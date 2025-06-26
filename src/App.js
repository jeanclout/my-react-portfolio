// src/App.js
import React from 'react';
// Импортируем компоненты для маршрутизации
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импортируем остальные компоненты вашего портфолио
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    // Оборачиваем все приложение в BrowserRouter. Это позволяет React Router
    // управлять URL-адресами в вашем браузере.
    <Router>
      {/* Header и Footer будут отображаться на всех "страницах" */}
      <Header />

      {/* Main-контент, где будут отображаться разделы в зависимости от маршрута */}
      <main>
        {/* Routes определяет набор маршрутов. Только первый совпавший маршрут будет отрендерен. */}
        <Routes>
          {/* Маршрут для главной страницы. Здесь отображаются все секции одновременно. */}
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Experience />
              <Contact />
            </>
          } />

          {/* Отдельные маршруты для каждой секции.
              Когда URL будет /about, будет показан только компонент About. */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer также отображается на всех "страницах" */}
      <Footer />
    </Router>
  );
}

export default App;