export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-green-500 pb-3 inline-block">
          О Центре
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="text-justify leading-relaxed">
            Предприятие <strong>«ЦЕНТР СПОРТА»</strong> (прежнее название "Центр творчества и фитнеса «MAGICAL LIFE») 
            открыл свои двери в 2012 году. Более 10 лет наш Центр занимается развитием, увеличением и 
            совершенствованием имеющихся направлений. Центр оборудован специализированными кабинетами: 
            музыкальной студией, робототехникой, кабинетом английского языка, логопедическим кабинетом, 
            кабинетом по подготовке к школе, художественной студией, шахматным кабинетом. В Центре имеются залы: 
            по единоборствам, спортивным бальным танцам, художественной гимнастике, хореографии и йоге с фитнесом. 
            В Центре имеется стационарный бассейн с постоянной фильтрацией и температурой воды +30С. 
            В Центре имеются мужская и женская раздевалки, душевая, несколько туалетов. 
            В Центре просторные холлы и коридоры с высотой потолков 3,5 метра.
          </p>

          <p className="text-justify leading-relaxed">
            <strong>«ЦЕНТР СПОРТА»</strong> – это место, где царит атмосфера творчества и волшебства, 
            в котором каждый найдет себе занятие по душе. Это место, где каждого желающего научат 
            декоративно-прикладному искусству, изготовлению всевозможных поделок и подарков, 
            необычных вещей ручной работы для себя, для родных и близких.
          </p>

          <p className="text-justify leading-relaxed">
            Педагоги <strong>«ЦЕНТРА СПОРТА»</strong> научат мастерству, подскажут идею и помогут ее реализовать, 
            дадут советы по декору и рукоделию, помогут сделать мир вокруг Вас ярче, веселее и душевнее! 
            Тренера укрепят тело и Ваш дух, помогут стать выносливей и сильней! Дети в Центре смогут 
            приобрести навыки мастерства, научатся организовывать свой досуг, на несложных, но увлекательных 
            мастер-классах, воплощать интересные идеи в жизнь!
          </p>

          <p className="text-justify leading-relaxed">
            Педагоги Центра научат смотреть на мир широко раскрытыми глазами, воспринимать его в 
            многообразии красок и быть счастливыми. А когда человек счастлив, он излучает энергию, 
            приносящую окружающим радость, красоту и гармонию.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            Почему «ЦЕНТР СПОРТА» один из лучших:
          </h3>

          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>у нас <strong>разумные цены</strong>;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                в Центре действует <strong>семейная скидка</strong>,{' '}
                <strong>накопительная скидка</strong> (<strong>10, 20 и 30%</strong>) для наших постоянных гостей;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>мы принимаем оплату как <strong>наличными</strong>, так и по <strong>картам</strong>;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>нас посещают <strong>более 200 гостей</strong> (детей и взрослых) <strong>ежедневно</strong>;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                с 1 января 2023 года наш Центр внесён в <strong>Перечень спортивных организаций РФ.</strong>{' '}
                Таким образом, наши гости могут получать <strong>налоговый вычет на спорт до 13%</strong>;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                в нашем Центре <strong>огромный выбор занятий</strong> для детей и взрослых - более{' '}
                <strong>25 направлений</strong>: от <strong>спортивных</strong> и <strong>обучающих</strong> до{' '}
                <strong>творческих</strong>;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                у нас <strong>опытные и приветливые педагоги</strong>, способные заинтересовать самых неусидчивых детишек;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                <strong>мы не экономим</strong> на организации занятий, для каждого урока и каждому ребенку{' '}
                <strong>предоставляется всё необходимое</strong> для их проведения
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                для вновь пришедших детей <strong>предоставляется возможность присутствия родителей</strong> на занятиях, 
                кроме этого - первое занятие <strong>совершенно бесплатно</strong>;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                все классы оборудованы <strong>камерами видеонаблюдения</strong>. Ожидающие детей родители,{' '}
                <strong>могут наблюдать</strong> за своим ребёнком, <strong>не отвлекая его</strong> от занятия по{' '}
                <strong>двум большим мониторам</strong>;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                <strong>дети</strong>, посещавшие <strong>«ЦЕНТР СПОРТА»</strong> на протяжении 3-х и более месяцев,{' '}
                <strong>легче проходят период адаптации</strong> к школе или детскому садику;
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span>
                и самое главное, <strong>в нашем Центре царит атмосфера творчества</strong> и{' '}
                <strong>волшебства, где всегда рады</strong>, пришедшим к нам <strong>детям</strong> и их <strong>родителям!</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
