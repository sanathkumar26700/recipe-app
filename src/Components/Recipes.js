import React from 'react'
import IngredientsList from './IngredientsList';

function Recipes(props) {
const { 
    name,
    servings, 
    cookTime,
    instructions,
    ingredients} = props;      
  
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button> 
            </div>
            <div>
            <span>Cook Time :</span>
            <span>{cookTime}</span>
            </div>
            <div>
            <span>Servings :</span>
            <span>{servings}</span>
            </div>
            <div>
                <span>Instructions :</span>
                <div>
                    {instructions} 
                </div>
            </div>
            <div>
                <span>Ingredients :</span>
                <div><IngredientsList ingredients = {ingredients}/></div>
            </div>
        </div>    
    )
}

export default Recipes
