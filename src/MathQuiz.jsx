import { useState } from 'react';
import Answer from './Answer.jsx';

const randomNumber = () => Math.floor(Math.random() * 10) + 1;

function MathQuiz() {
  const [points, setPoints] = useState(0);
  const [a, setA] = useState(randomNumber);
  const [b, setB] = useState(randomNumber);
  const [message, setMessage] = useState('');

  const updatePoints = (userAnswer) => {
    if (userAnswer === a + b) {
      setPoints(points + 1);
      setMessage('Верно! +1 балл');
    } else {
      setPoints(points - 1);
      setMessage(`Неверно, правильный ответ ${a + b}. −1 балл`);
    }
    // новая задача
    setA(randomNumber());
    setB(randomNumber());
  };

  return (
    <div className="math-quiz">
      <h2>Math Quiz</h2>
      <p className="score">Счёт: {points}</p>
      <p className="task">
        {a} + {b} = ?
      </p>
      <Answer updatePoints={updatePoints} />
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default MathQuiz;
