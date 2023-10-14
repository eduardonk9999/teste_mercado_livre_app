import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; 

import './Products.scss';
import fetchProducts from '../../server/products';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../context/Context';
import { Link } from 'react-router-dom';


function Products({ productList }) {

  const {products, setProducts } = useContext(AppContext);



  useEffect(() => {
    if(productList) {
      fetchProducts(productList).then((response) => {
        setProducts(response);
      });
    }
  }, [productList, setProducts]);


  useEffect(() => {
    setProducts(products);

  }, [products]);


  return(
    <section className="products container">
      <div className="wrapper content_text">
        {
          products.map((product) => 
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard 
                data={product}
              />
            </Link>
          )
        }
      </div>
     
    </section>
  );
}

export default Products;

Products.propTypes = {
  productList: PropTypes.string,
};
