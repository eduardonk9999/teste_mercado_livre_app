import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();



  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data));
  }, [id]);

  if (!productDetails) {
    return <p>Carregando...</p>;
  }

  return(
    <div>
      <h1>{console.log(productDetails)}</h1>
    </div>
  );
} 

export default Product;
