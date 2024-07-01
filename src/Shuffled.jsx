import React, { useState } from 'react';

// shuffling an array Of Items:

const ShuffleComponent = () => {
  const [items, setItems] = useState([
    'Orange',
    'Mango',
    'Grapes',
    'Banana',
    'Apple',
    'PineAple',
  ]);

  const handleShuffle = () => {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
  };
  return (
    <div>
      <h2>List Items</h2>
      {items.map((el, index) => (
        <ul>
          <li key={index}>{el}</li>
        </ul>
      ))}

      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};

export default ShuffleComponent;
