import React from 'react'

function RecipeIngredientEdit({recipe}) {
    return (
        <>
         <input type="text" value = {recipe.name}/>
         <input type="text" value = {recipe.amount}/>
         <button className= " btn btn--delete">&times;</button>
        </>
    )
}

export default RecipeIngredientEdit
