const newsItems = [
  {
    title: 'бальные танцы',
    content: (
      <>
        <p className="text-base leading-relaxed">
          12 апреля в Тюмени прошли соревнования по спортивным бальным танцам.{' '}
          <strong>Поздравляем</strong> Лущикову Ольгу, занявшую <strong>три 1 места</strong> в
          Европейской и <strong>3 место</strong> в Латино-американской программах!
        </p>
      </>
    ),
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'танцевальная карусель',
    content: (
      <>
        <p className="text-base leading-relaxed">
          21 марта прошёл VII Всероссийский фестиваль-конкурс детского хореографического творчества
          "Танцевальная карусель". На нём выступили два наших коллектива. <br />
          <strong>Поздравляем</strong>:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Силову Альвину,</li>
          <li>Шаборонокую Анну,</li>
          <li>Кузьмук Юлию, удостоившихся диплома лауреата III степени!</li>
        </ul>
        <p className="mt-2">
          <strong>Поздравляем</strong>:
        </p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Худышкину Елизавету,</li>
          <li>Булатову Эвелина,</li>
          <li>Шайхинурову Алису,</li>
          <li>Ваганову Викторию, удостоившихся диплома лауреата I степени!</li>
        </ul>
      </>
    ),
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'плавание',
    content: (
      <>
        <p className="text-base leading-relaxed">
          25 апреля в "Центре спорта" прошли традиционные соревнования по плаванию. Поздравляем:
        </p>
        <div className="mt-2 space-y-2">
          <div>
            <p className="font-semibold">Группа 1:</p>
            <ul className="list-disc pl-5">
              <li>Страхова Полина - 1 место</li>
              <li>Санжаров Константин - 2 место</li>
              <li>Яковлев Егор - 3 место</li>
              <li>Филатова Дарья - 3 место</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Группа 2:</p>
            <ul className="list-disc pl-5">
              <li>Попова Злата - 1 место</li>
              <li>Гатауллина Вероника - 2 место</li>
              <li>Сахаров Дмитрий - 3 место</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Группа 3:</p>
            <ul className="list-disc pl-5">
              <li>Пишукова Елизавета - 1 место</li>
              <li>Кипяткова Полина - 2 место</li>
            </ul>
          </div>
        </div>
      </>
    ),
    gradient: 'from-teal-600 to-blue-500',
  },
];

export default function NewsBanners() {
  return (
    <section id="news" className="relative -mt-14 z-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase">{item.title}</h2>
              <div className="text-gray-700">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
