import React from 'react'
import Ingredient from './Ingredient'

function IngredientsList({ingredients}){
    const ingredientsListElements = ingredients.map((ingredient) =>{
        return (<Ingredient
         key={ingredient.id} 
         {...ingredient}/>)
    });
    return (
        <div className="ingredientList-grid">
            {ingredientsListElements}
        </div>
    )
}

export default IngredientsList
