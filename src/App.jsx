import { useState } from 'react';
import CitySelector, { citiesData } from './CitySelector.jsx';
import CityCard from './CityCard.jsx';
import MathQuiz from './MathQuiz.jsx';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  return (
    <div className="app">
      <section className="block">
        <h1>City Cards</h1>
        <CitySelector selectedCity={selectedCity} onSelect={setSelectedCity} />
        <CityCard city={selectedCity} />
      </section>

      <section className="block">
        <MathQuiz />
      </section>
    </div>
  );
}

export default App;
