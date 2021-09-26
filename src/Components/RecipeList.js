import React from 'react'
import Recipes from './Recipes'

export default function RecipeList({recipes}) {
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
            <div className = 'recipe-list__add-recipe--btn-container'></div>
            <button className= 'btn btn--primary'>Add Recipe</button>
        </div>
    )
}
