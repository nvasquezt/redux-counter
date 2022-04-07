import './App.css';
import React from 'react';
import ButtonDecrement from './Components/ButtonDecrement';
import ButtonIncrement from './Components/ButtonIncrement';
import Counter from './Components/Counter';
import ButtonReset from './Components/ButtonReset';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <div className='buttons'>
        <ButtonIncrement />
        <ButtonDecrement />
        <ButtonReset />
      </div>
    </div>
  );
}

export default App;
