import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const api = require('../api.js');

function ProductDetails(){
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  function fetchApi(){
    const totalProducts = api.products;
    const productsID = totalProducts.filter((element) => element.id == id)
    setProduct(productsID[0]);
    }
  
    useEffect(() => {
      fetchApi();
    },[])

    const { title, brand, chipType, description, memory, picture, quantity } = product;
    const price = `R$ ${product.price},00`

  return(
    <div>
      <h1>{title}</h1>
      <img src={picture} />
      <p>{brand}</p>
      <p>{chipType}</p>
      <p>{description}</p>
      <p>{memory}</p>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductDetails;