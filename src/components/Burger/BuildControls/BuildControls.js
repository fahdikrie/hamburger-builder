import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Total Price: <strong>{props.totalPrice} Ringgit</strong></p>

    {controls.map(control => (
      <BuildControl 
        key={control.label} 
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)} 
        disabled={props.disabled[control.type]}/>
    ))}

    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>Order</button>
  </div>
);

export default buildControls;