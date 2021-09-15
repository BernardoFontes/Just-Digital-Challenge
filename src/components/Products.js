import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';
// import Products from './Products';

const api = require('../api.js');

function Products(){
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  function fetchApi(){
  setData(api.products);
  }

  function increaseButton(price, item){
    let newTotal = total + price;
    let newQuantity = quantity + 1;
    if (!items.includes(item) && item.quantity != 0){
      items.push(item)
      item.prodQuan = 1;
      item.quantity -= 1;
      setTotal(newTotal);
      setQuantity(newQuantity);
    } else if (items.includes(item) && item.quantity != 0) {
      item.prodQuan += 1;
      item.quantity -= 1;
      setTotal(newTotal);
      setQuantity(newQuantity);
    } else {
      alert("Produto em falta no estoque, não foi possível concluir sua compra")
    }
  }

  function decreaseButton(price, item){
    let newTotal = total - price;
    let newQuantity = quantity - 1;
    setTotal(newTotal);
    setQuantity(newQuantity);
    if (item.prodQuan === 1){
      items.splice(items.indexOf(item), 1);
      item.quantity += 1;
    } else {
      item.prodQuan -= 1;
      item.quantity += 1;
    }
  }

  useEffect(() => {
    fetchApi();
  },[])

  return(
    <div className="divInit">
      {console.log(data)}
      {data.map((products) => (
         <div className = "productDiv">
         <Link to={`/ProductDetails/${products.id}`}>
         <h6 className="productTitle">{products.title}</h6>
         <img src={products.picture} />
         <p className="productPrice">{`R$ ${products.price.toString().replace(".", ",")}`}</p>
         </Link>
         <button type="button" className="buyButton" onClick={() => increaseButton(products.price, products)}>Comprar</button>
       </div>
        ))
      }
      <div className="divCarrinho">
      <Cart total={total} quantity={quantity} items={items} increaseButton={increaseButton} decreaseButton={decreaseButton} />
      </div>
    </div>
  )

}

export default Products