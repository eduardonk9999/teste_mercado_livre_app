import React, {  useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';


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
      <section className="productDetail wrapper">
        <img src={productInterno.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={productInterno.title} />
        <div className="price_container">
          <h2>Preço: {productInterno.price}</h2>
          <h3>{productInterno.title}</h3>
        </div>
      </section>
      <div className="wrapper">
        <p>{productDescription}</p>
      </div>
    </>
  );
}

export default Product;
