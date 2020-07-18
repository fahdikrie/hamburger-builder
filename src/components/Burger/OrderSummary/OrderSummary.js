import React from 'react';

import Aux from '../../../hoc/Auxiliary'
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{textTransform:'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>);
    });

  return (
    <Auxiliary>
      <h3>Order</h3>
      <p>Bruh ini burgernya hihihihihihihi</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Checkout</p>
    </Auxiliary>
  )
  };

export default orderSummary;