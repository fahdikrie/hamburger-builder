import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.7,
  meat: 1,
  bacon: 0.8
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      'bacon': 0,
      'cheese': 0,
      'meat': 0,
      'salad': 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

      console.log(sum)

    this.setState({
      purchasable: sum > 0
    })
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  }

  purchaseCancleHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueHandler = () => {
    alert('you continued!');
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    // console.log(disabledInfo)
    console.log(this.state.purchasable)

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancleHandler}>
          <OrderSummary 
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancleHandler}
            purchaseContinued={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler} />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder;