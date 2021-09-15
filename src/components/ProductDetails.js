import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    const { title, brand, chipType, description, memory, picture } = product;
    const price = `R$ ${product.price},00`

  return(
    <div className="dets">
      <h1>{title}</h1>
      <img src={picture} className="imgDetail" />
      <div className="row">
      <p className="col-md-3"><b>Marca:</b> {brand}</p>
      <p className="col-md-3"><b>Chip:</b> {chipType}</p>
      <p className="col-md-3"><b>Memória:</b> {memory}</p>
      <p className="col-md-3"><b>Valor:</b> {price}</p>
      </div>
      <p>{description}</p>
      <Link to="/">
        <button className="linkVoltar">Voltar</button>
      </Link>
    </div>
  )
}

export default ProductDetails;