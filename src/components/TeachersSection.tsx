const teachers = [
  {
    name: 'Тычкин Роман Витальевич',
    description: 'Тренер по спортивным бальным танцам, КМС по спортивным бальным танцам',
    image: 'http://magical.life/uploads/tychkin-rv.jpg?w=500&h=500',
    title: 'Тычкин Р.В., КМС, тренер по спортивным бальным танцам',
  },
  {
    name: 'Титлянов Юрий Викторович',
    description: 'Тренер по шахматам, МС СССР, автор пособия по шахматам "Уроки шахматного мастерства"',
    image: 'http://magical.life/uploads/titlyanov%20yu.jpg?w=500&h=500',
    title: 'Титлянов Ю.В., МС СССР, автор пособия по шахматам',
  },
  {
    name: 'Горынина Анна Александровна',
    description: 'Преподаватель английского и французского языков',
    image: 'http://magical.life/uploads/gorynina-anna-aleksandrovna.jpeg?w=500&h=500',
    title: 'Горынина А.А., преподаватель английского и французского языков',
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Наши педагоги
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.title}
                  title={teacher.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-800 uppercase mb-2">
                  {teacher.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="http://magical.life/Page/teachers-photo"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Все педагоги →
          </a>
        </div>
      </div>
    </section>
  );
}
