export default function MapSection() {
  return (
    <section id="contacts" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Как нас найти
        </h3>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=65.534100%2C57.152000&z=15&l=map"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            title="Карта расположения центра"
            className="w-full"
          />
        </div>
        <div className="mt-6 text-center text-gray-600">
          <p className="text-lg">
            📍 г. Тюмень, ул. 50 лет Октября, д. 19, стр. 1
          </p>
          <p className="mt-2">
            📞 <a href="tel:+73452000000" className="text-green-600 hover:underline">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
}
