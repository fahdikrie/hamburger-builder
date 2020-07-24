import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

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
      <p><strong>Total Price: {props.totalPrice}</strong></p>
      <Button btnType="Success" clicked={props.purchaseContinued}>Checkout</Button>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
    </Auxiliary>
  )
  };

export default orderSummary;