// src/Skills.js
// Компонент секции "Навыки" с индикаторами уровня.
import React from 'react';

function Skills() {
  const skillsData = [
    { name: 'HTML', value: 90, color: 'blue' },
    { name: 'CSS (Tailwind CSS)', value: 85, color: 'indigo' },
    { name: 'JavaScript', value: 80, color: 'yellow' },
    { name: 'React', value: 95, color: 'cyan' },
    { name: 'Git', value: 70, color: 'red' },
    { name: 'UI/UX Design', value: 65, color: 'purple' },
  ];

  return (
    <section id="skills" className="bg-white p-8 rounded-xl shadow-md mb-8">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Навыки</h3>
      <div className="space-y-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              <span className="text-sm font-semibold text-gray-600">{skill.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600`}
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
