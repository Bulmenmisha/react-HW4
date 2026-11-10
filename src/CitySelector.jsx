export const citiesData = [
  {
    name: 'Токио',
    description:
      'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
    imageUrl: 'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',
    facts: [
      'Токио - самый населенный мегаполис в мире.',
      'Здесь расположена самая высокая башня в Японии - Токийская башня.',
      'В Токио проходят множество культурных событий и фестивалей.',
    ],
  },
  {
    name: 'Киото',
    description:
      'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kinkaku-ji%20the%20Golden%20Temple%20in%20Kyoto%20overlooking%20the%20lake%20-%20high%20rez.JPG?width=1000',
    facts: [
      'В Киото насчитывается более 1600 буддийских храмов.',
      'Этот город был столицей Японии более тысячи лет.',
    ],
  },
  {
    name: 'Осака',
    description:
      'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20Castle%2002bs3200.jpg?width=1000',
    facts: [
      'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
      'Город является кулинарной столицей Японии.',
    ],
  },
  {
    name: 'Хоккайдо',
    description:
      'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Mashu.jpg?width=1000',
    facts: [
      'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',
      'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
    ],
  },
  {
    name: 'Нагоя',
    description:
      'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nagoya%20Castle%28Edit2%29.jpg?width=1000',
    facts: [
      'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',
      'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.',
    ],
  },
];

function CitySelector({ selectedCity, onSelect }) {
  const handleChange = (event) => {
    const city = citiesData.find((c) => c.name === event.target.value);
    onSelect(city);
  };

  return (
    <form className="city-selector" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="city">Выберите город: </label>
      <select id="city" value={selectedCity.name} onChange={handleChange}>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;
