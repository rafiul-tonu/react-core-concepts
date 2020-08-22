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
  const products = [
    {name:'photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$40.99'},
    {name:'PDF', price:'$35.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        {/* <Product name={products[1].name} price={products[1].price} ></Product>
        <Product name={products[2].name} price={products[2].price} ></Product> */}

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
