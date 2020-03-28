import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
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
