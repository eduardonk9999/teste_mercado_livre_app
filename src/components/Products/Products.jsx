import React, { useEffect, useState } from 'react';


import './Products.scss';
import fetchProducts from '../../server/products';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  return(
    <section className="products container">
      <div className="wrapper content_text">
        {
          products.map((product) => 
            <ProductCard 
              key={product.id}
              data={product}
            />
          )
        }
      </div>
    </section>
  );
}

export default Products;

