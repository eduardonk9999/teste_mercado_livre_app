import React, { useContext, useEffect } from 'react';


import './Products.scss';
import fetchProducts from '../../server/products';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../context/Context';

function Products() {
  
  const {products, setProducts } = useContext(AppContext);

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

