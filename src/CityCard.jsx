function CityCard({ city }) {
  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} />
      <h2>{city.name}</h2>
      <p>{city.description}</p>
      <h3>Интересные факты</h3>
      <ul>
        {city.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
