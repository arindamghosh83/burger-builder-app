import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'
import Modal from '../../components/UI/modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 0.5,
    bacon: 0.4
}
class BurgerBuilder extends Component {
    state = {
        ingredients:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum,item) => sum+item, 0);
        this.setState({purchasable: sum > 0});

    }

    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type] <= 0)
        return;
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => this.setState({purchasing: true})
    // cancelPurchaseHandler = () => this.setState({purchasing: false})
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
            <Modal show={this.state.purchasing} 
            // modalClosed={this.cancelPurchaseHandler}
            >
                <OrderSummary ingredients={this.state.ingredients}/>
            </Modal>
            <div>
            <Burger ingredients={this.state.ingredients}/>
            </div>
            <BuildControls ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo} price={this.state.totalPrice}
                purchasable={this.state.purchasable} ordered={this.purchaseHandler} />
            </Aux>

        )
    }
}

export default BurgerBuilder