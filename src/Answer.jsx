import { useState } from 'react';

function Answer({ updatePoints }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === '') return;
    updatePoints(Number(value));
    setValue('');
  };

  return (
    <form className="answer" onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ваш ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;
