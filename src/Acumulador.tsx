import React, { useState } from 'react';

const Acumulador: React.FC = () => {
  const [acumulador, setAccumulator] = useState(5);

  const increment = () => {
    setAccumulator(acumulador + 5);
  };

  const decrement = () => {
    setAccumulator(acumulador - 5);
  };

  return (
    <div>
      <h2 >Acumulador: {acumulador}</h2>
      <button onClick={increment}>+5</button>
      <button onClick={decrement}>-5</button>
    </div>
  );
};

export default Acumulador;