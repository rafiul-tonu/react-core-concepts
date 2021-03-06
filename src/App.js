import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['sakib', 'jafor', 'Alogir', 'Salman', 'kobir khan']
  const products = [
    {name:'photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$40.99'},
    {name:'PDF', price:'$35.99'},
    {name:'Zdf', price:'$20.50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li> {product.name}: {product.price} </li>)
          }

        </ul>

        {
            products.map(pd => <Product product={pd} ></Product> )
        }
        

      </header>
    </div>
  );
}

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

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3> {name} </h3>
      <h5> {price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
