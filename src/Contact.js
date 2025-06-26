// src/Contact.js
// Компонент секции "Контакты" с формой обратной связи.
import React, { useState } from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react'; // Иконки

function Contact() {
  const [messageSent, setMessageSent] = useState(false); // Состояние для показа сообщения об отправке
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    // В реальном приложении здесь был бы вызов API для отправки данных на сервер
    console.log('Данные формы:', formData);
    setMessageSent(true); // Устанавливаем состояние, чтобы показать сообщение
    setFormData({ name: '', email: '', message: '' }); // Очищаем форму
    setTimeout(() => setMessageSent(false), 3000); // Скрываем сообщение через 3 секунды
  };

  return (
    <section id="contact" className="bg-white p-8 rounded-xl shadow-md mb-8">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Связаться со мной</h3>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Форма обратной связи */}
        <div className="flex-1">
          <h4 className="text-xl font-medium text-gray-800 mb-4">Форма обратной связи</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Отправить
            </button>
            {messageSent && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Если не по поводу криптовалюты - я не отвечу.</span>
              </div>
            )}
          </form>
        </div>

        {/* Ссылки на социальные сети */}
        <div className="flex-1 md:w-1/3">
          <h4 className="text-xl font-medium text-gray-800 mb-4">Мои профили</h4>
          <div className="space-y-4">
            <a
              href="https://github.com/your-profile" // Замените на ваш профиль GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
            >
              <Github size={24} className="text-gray-700" />
              <span className="text-gray-700 font-medium">GitHub Профиль</span>
            </a>
            <a
              href="https://linkedin.com/in/your-profile" // Замените на ваш профиль LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
            >
              <Linkedin size={24} className="text-blue-700" />
              <span className="text-gray-700 font-medium">LinkedIn Профиль</span>
            </a>
            {/* Можно добавить другие ссылки */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
