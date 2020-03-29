import React, { useState } from 'react';

import Header from './Header';

function App() {
  // Utilizando state
  const [counter, setCounter] = useState(0);

  function increment() {
    // Respeitando o principio da imutabilidade
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>Incrimentar</button>
    </div>
  );
}

export default App;
