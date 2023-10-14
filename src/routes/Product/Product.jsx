import React, { useEffect, useState } from 'react';
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
  return(
    <>
      <Header />
      <section className="productDetail wrapper">
        {console.log(productDetails)}
        { <img src={productInterno.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} /> }
        <div className="price_container">
          <h2>
            
            
          </h2>
          <h3>{productInterno.title}</h3>

        </div>
        
      </section>
      <div className="wrapper">
        {/* <p>{productDetails.plain_text}</p> */}
      </div>
    </>
  );
}

export default Product;
