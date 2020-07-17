import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // };

  state = {
    ingredients: {
      'bacon': 1,
      'cheese': 1,
      'meat': 1,
      'salad': 1,
    }
  }

  render () {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </Auxiliary>
    )
  }
}

export default BurgerBuilder;