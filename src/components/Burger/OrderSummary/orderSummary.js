import React from 'react'
import Aux from '../../../hoc/aux'
const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>)

    return (<Aux>
        <h3>Your orders</h3>
        <p>Delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to checkout</p>
    </Aux>)
}

export default orderSummary;