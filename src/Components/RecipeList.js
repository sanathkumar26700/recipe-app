import React from 'react'
import Recipes from './Recipes'
import { useContext } from 'react'
import {RecipeContext} from './App'

export default function RecipeList({recipes}) {

    const {handleRecipeAdd} = useContext(RecipeContext)

    return (
        <div  className = 'recipe-list'>
            <div> 
            {recipes.map( recipe =>
                <Recipes 
                key={recipe.id}
                {...recipe}
                /> 
            )}
            </div>
            <div className = 'recipe-list__add-recipe--btn-container'>
            <button className= 'btn btn--primary'
            onClick={handleRecipeAdd}
            >Add Recipe</button>
            </div>
        </div>
    )
}
