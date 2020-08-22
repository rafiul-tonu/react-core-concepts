import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Counter></Counter>

        

function Counter(){
  const [count, setCount ] = useState(11);
  //  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
      <button onClick= {() => setCount(count + 1)} >Increase</button>
    </div>
  )
}



export default App;
