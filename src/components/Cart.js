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
      {quantity}
      <p>Valor Total: {total.toFixed(2).toString().replace(".", ",")}</p>
      <button type="button" onClick={() => renderDetails()}>Expandir</button>
      {details ? <CartDetails items = {items} increaseButton = {increaseButton} decreaseButton = {decreaseButton} /> : ''}
      
    </div>
  )
}

export default Cart