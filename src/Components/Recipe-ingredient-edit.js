import React from 'react'

function RecipeIngredientEdit(props) {
    const {recipe, handleIngredientChange, handleIngredientDelete} = props;
function handleChange(changes){
    handleIngredientChange(recipe.id,{...recipe,...changes})
}

    return (
        <>
         <input type="text" 
            value = {recipe.name} 
            onChange = {(e) =>handleChange({name : e.target.value})} 
        />
         <input 
            type="text" 
            value = {recipe.amount}
            onChange = {(e) =>handleChange({amount : e.target.value})}     
        />
         <button 
            onClick = {() => handleIngredientDelete(recipe.id)}
            className= " btn btn--delete">
            &times;
            </button>
        </>
    )
}

export default RecipeIngredientEdit
