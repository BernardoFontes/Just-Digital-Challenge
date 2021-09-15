import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartDetails({ items, increaseButton, decreaseButton }){

  return(
    <div className="cartDet">
        {items.map((elem) =>
        <div className="itemCart">
        <p className="nomesProdutos"> Item: {elem.title}</p>
        <p className="quantidadesProdutos">Quantidade: {elem.prodQuan}</p>
        <p className="totalProduto">Valor total do produto: {(elem.price * elem.prodQuan).toFixed(2).toString().replace(".", ",")}</p>
        <button className="buttonAddRemove" onClick={() => decreaseButton(elem.price, elem)}>-</button>
        <button className="buttonAddRemove" onClick={() => increaseButton(elem.price, elem)}>+</button>
        </div>
        )}
    </div>
  )
}
export default CartDetails;