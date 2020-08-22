import React from 'react';
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
