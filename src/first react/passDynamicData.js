import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /*
  var person = {
    name: "mahfuz",
    job: "singer"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }*/
  const nayoks = ['Anwar', 'jafor', 'Alogir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="cricket"> </Person>

      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style={{border:'2px solid yellow' , width:'400px', margin:'10px'}}>
      <h2>My Name: {props.name} </h2>
      <p>My Job: {props.job} </p>
    </div>
  )
}

export default App;
