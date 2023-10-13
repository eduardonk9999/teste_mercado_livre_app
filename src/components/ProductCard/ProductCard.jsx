import React from 'react';
import propTypes from 'prop-types';
import shipping from '../../assets/ic_shipping.png';

import format from '../../utils/format';

import './ProductCard.scss';


function ProductCard({ data }) {

  const {title, thumbnail, price} = data;


  return(
    <>
      <section className="product">
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} />
        <div className="price_container">
          <h2>
            {
              format(price, 'ARS')
            }
            <span>
              {
                data.shipping.free_shipping ? (
                  <img src={shipping} />
                ):
                  (
                    ''
                  )
              }
            </span>
          </h2>
          <h3>{title}</h3>
          
        </div>
      </section>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
