import React from 'react'
import './burger.css'
import BurgerIngredient from  './BurgerIngredient/burgerIngredient'
const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])]
    .map((_,i) => <BurgerIngredient type={ingKey} key={ingKey+i}/>)
    }).reduce((arr,element, index) => [...arr, ...element], [])
    if(transformedIngredients.length === 0)
    transformedIngredients = <p>Please start adding ingredients!</p>
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
                {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>

    )
}

export default burger