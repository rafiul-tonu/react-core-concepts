import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>

        



function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {
          users.map(user => <li> {user.name} </li>)
        }
      </ul>
    </div>
  )
}



export default App;
