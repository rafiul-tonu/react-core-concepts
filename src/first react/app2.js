import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "mahfuz",
    job: "singer"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My Heading</h1>
        <p>My First React Paragraph: {person.name + " "+ person.job} </p>
        
      </header>
    </div>
  );
}

export default App;
