import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'http://magical.life/uploads/art_02.jpg?width=1400',
    caption: null,
  },
  {
    image: 'http://magical.life/uploads/pool_04.jpg?width=1400',
    caption: { text: 'вода - это жизнь, жизнь - это здоровье, А здоровье - это счастье!', color: 'text-white' },
  },
  {
    image: 'http://magical.life/uploads/chess_01.jpg?width=1400',
    caption: { text: 'шахматы - это борьба, прежде всего, со своими ошибками', color: 'text-white' },
  },
  {
    image: 'http://magical.life/uploads/box_01.jpg?width=1400',
    caption: { text: 'побеждает не тот кто сильнее, а тот, кто готов идти до конца!', color: 'text-white' },
  },
  {
    image: 'http://magical.life/uploads/fitness_021.jpg?width=1400',
    caption: { text: 'измени себя к лучшему!', color: 'text-green-400' },
  },
  {
    image: 'http://magical.life/uploads/forte_06.jpg?width=1400',
    caption: { text: 'МУЗЫКА — ВЫСШЕЕ В МИРЕ ИСКУССТВО!', color: 'text-red-500' },
  },
  {
    image: 'http://magical.life/uploads/aqua_06.jpg?width=1400',
    caption: { text: 'в капле воды - море счастья!', color: 'text-white' },
  },
  {
    image: 'http://magical.life/uploads/voice_01.jpg?width=1400',
    caption: { text: 'маленький шаг к большой сцене!', color: 'text-gray-400' },
  },
  {
    image: 'http://magical.life/uploads/kikboxing-2.jpg?width=1400',
    caption: { text: 'Желание, дисциплина, выносливость, трудолюбие, воля - главные качества бойца!', color: 'text-white' },
  },
  {
    image: 'http://magical.life/uploads/child_02.jpg?width=1400',
    caption: { text: 'волшебно жить, творить и развиваться!', color: 'text-white' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[732px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover ${loaded[index] ? '' : 'hidden'}`}
            onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
          />
          {!loaded[index] && index === current && (
            <div className="w-full h-full bg-gray-800 animate-pulse" />
          )}
          {slide.caption && (
            <div className={`absolute inset-0 flex items-center justify-center p-4 bg-black/30 ${
              index === current ? 'animate-fadeIn' : ''
            }`}>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center ${slide.caption.color} drop-shadow-lg`}>
                {slide.caption.text}
              </h3>
            </div>
          )}
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white text-4xl transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white text-4xl transition-colors"
      >
        ›
      </button>
    </div>
  );
}
