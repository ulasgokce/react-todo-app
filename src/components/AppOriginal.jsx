import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import Another from './Another';
function App() {
  const [count, setCount] = useState(0);

  const someStyle = {
    color: 'red',
    backgroundColor: 'black',
    fontSize: '50px',
  };
  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <Another name="my name" />
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true && <p style={someStyle}>{3 + 2}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
