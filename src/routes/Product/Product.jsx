import React, {  useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

import format from '../../utils/format';

import './Product.scss';

function Product() {
  const { id } = useParams();
 
  const [productInterno, setProductInterno] = useState(null);
  const [productDetails, setProductDetails] = useState('');

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProductInterno(data));


    fetch(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data));

   
  }, [id]);

  if (!productInterno) {
    return <p>Carregando...</p>;
  }

  const productDescription = typeof productDetails === 'object' ? productDetails.plain_text : productDetails;
  return(
    <>
      <Header />
      <div className="wrapper">
        <section className="productDetail">
          <img src={productInterno.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={productInterno.title} />
          <div className="price_container">
            {/* 
            CRIAR UM FILTRO PRA PEGAR O NEOVO
            
            <p>${productInterno.attributes[0].value_name}</p> */}
            <p>
              {`
              
              -
               ${productInterno.sold_quantity}
               vendidos
              `
              }
            </p>
            <h1>{productInterno.title}</h1>
         
            <h2>
              {
                format(productInterno.price, 'ARS')
              }
            </h2>
            <a href="#">
            Comprar
            </a>
            {console.log(productInterno)}
          </div>
        </section>
        <section className="desctiption">
       
          <h3>{productInterno.title}</h3>
          <p>{productDescription}</p>
       
        </section>
      </div>
    </>
  );
}

export default Product;
