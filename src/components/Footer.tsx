export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              MAGICAL LIFE
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Центр творчества и фитнеса — место, где царит атмосфера творчества и волшебства. 
              Более 25 направлений для детей и взрослых.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Направления</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>🏊 Плавание</li>
              <li>💃 Бальные танцы</li>
              <li>🥊 Единоборства</li>
              <li>♟️ Шахматы</li>
              <li>🎵 Музыкальная студия</li>
              <li>🎨 Художественная студия</li>
              <li>🤖 Робототехника</li>
              <li>🧘 Йога и фитнес</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 г. Тюмень, ул. 50 лет Октября, д. 19, стр. 1</li>
              <li>🕐 Пн-Вс: 9:00 - 21:00</li>
              <li>🌐 <a href="http://magical.life" className="text-green-400 hover:underline">magical.life</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2012–2026 Центр творчества и фитнеса «MagicalLife». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
