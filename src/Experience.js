// src/Experience.js
// Компонент секции "Опыт работы и образование".
import React from 'react';

function Experience() {
  const experienceData = [
    { type: 'Опыт работы', title: 'Frontend Developer', company: 'Creative Solutions Inc.', years: '2024 – настоящее время', description: 'Разработка и поддержка пользовательских интерфейсов для веб-приложений с использованием React и Tailwind CSS.' },
    { type: 'Опыт работы', title: 'Арбитражник', company: 'TechCorp', years: '2022–2024', description: 'Оптимизация рекламных кампаний и управление трафиком.' },
    { type: 'Образование', title: 'Среднее образование', company: 'Дворовая школа №17', years: '2018–2022', description: 'Углубленное изучение математики и информатики.' },
  ];

  return (
    <section id="experience" className="bg-white p-8 rounded-xl shadow-md mb-8">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Опыт и образование</h3>
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-bold text-blue-700 mb-1">{item.title}</h4>
            <p className="text-lg text-gray-800 mb-1">{item.company} <span className="font-light text-gray-500">— {item.years}</span></p>
            <p className="text-gray-600 italic">{item.type}</p>
            <p className="text-gray-700 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

