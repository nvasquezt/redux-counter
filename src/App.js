import './App.css';
import React from 'react';
import ButtonDecrement from './Components/ButtonDecrement';
import ButtonIncrement from './Components/ButtonIncrement';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <ButtonIncrement />
      <ButtonDecrement />
    </div>
  );
}

export default App;
