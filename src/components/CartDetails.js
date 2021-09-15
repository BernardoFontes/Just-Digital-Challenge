import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartDetails({ items, increaseButton, decreaseButton }){

  return(
    <div>
        {console.log(items)}
        {items.map((elem) =>
        <div>
        <p className="nomesProdutos"> Itens: {elem.title}</p>
        <p className="quantidadesProdutos">Quantidade: {elem.prodQuan}</p>
        <p className="totalProduto">Valor total do produto: {(elem.price * elem.prodQuan).toFixed(2).toString().replace(".", ",")}</p>
        <button onClick={() => decreaseButton(elem.price, elem)}>Remover</button>
        <button onClick={() => increaseButton(elem.price, elem)}>Adicionar</button>
        </div>
        )}
    </div>
  )
}
export default CartDetails;