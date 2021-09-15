import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDetails from './CartDetails';

function Cart({ total, quantity, items, increaseButton, decreaseButton }) {
  const [details, setDetails] = useState(false);

  function renderDetails(){
    if (!details) {
      setDetails(true)
    } else {
      setDetails(false)
    }
  }

  return(
    <div>
      Produtos: {quantity}
      <p>Total: {total.toFixed(2).toString().replace(".", ",")}</p>
      <button type="button" className="iconButton" onClick={() => renderDetails()}>+</button>
      <aside className="cartDet">
      {details ? <CartDetails items = {items} increaseButton = {increaseButton} decreaseButton = {decreaseButton} /> : ''}
      </aside>
    </div>
  )
}

export default Cart