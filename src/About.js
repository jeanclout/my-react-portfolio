// src/About.js
// Компонент секции "Обо мне" с фотографией и краткой биографией.
import React from 'react';

function About() {
  return (
    <section id="about" className="bg-white p-8 rounded-xl shadow-md mb-8">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Обо мне</h3>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/1836913203201026080/11A78ED0E918C5C25CB15A344D50568F5AA72F16/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" // Заменил на placeholder
          alt="Мои фоты"
          className="max-w-[150px] w-full h-[150px] rounded-full object-cover shadow-lg border-4 border-blue-300"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/ccc/000?text=Ошибка+загрузки"; }}
        />
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          Я темщик с опытом более 3 лет. Закончил дворовую школу.
        </p>
      </div>
    </section>
  );
}

export default About;
