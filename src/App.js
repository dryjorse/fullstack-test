import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({})

  useEffect(() => {
    fetch('/posts').then(resp => resp.json())
    .then(data => setState(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>{state.name}</span>
          <span>{state.count}</span>
        </p>
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
