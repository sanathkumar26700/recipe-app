import React ,{useState,useEffect} from 'react';
import RecipeList from './RecipeList';
import '../CSS/App.css';
import {v4 as uuidv4} from 'uuid'
import RecipeEdit from './Recipe-edit';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'recipeapp.recipes'

function App() {

  const [recipes,setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId,setSelectedRecipeId] = useState()

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() =>{
    const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJson !== null) setRecipes(JSON.parse(recipeJson))
  },[])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  },[recipes])
  
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.indexOf(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  
  function handleRecipeAdd(){
    const newRecipe = {
        id: uuidv4(), 
        name: 'Sambar',
        servings: 10, 
        instructions: "1. put salt\n2. Vegetables\n3.Add Masala",
        ingredients : [{
          id: uuidv4(),
          name: "Tomato",
          amount: "500 g"
        },{
          id: uuidv4(),
          name: "Garam masala",
          amount: "2 teaspoon"
        }]
      }
    setRecipes([...recipes,newRecipe])
  }
function handleRecipeDelete(id){
  setRecipes(recipes.filter(recipe => recipe.id !== id))
}

  return (
    <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList recipes ={recipes}/>
    {selectedRecipe && <RecipeEdit recipe ={selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  { 
    id: uuidv4(), 
    name: 'Chicken',
    servings: 3, 
    cookTime: '1:45',
    instructions: "1. put salt\n2. put chicken in oven\n3.eat chicken",
    ingredients : [{
      id: uuidv4(),
      name: "chicken",
      amount: "2kg"
    },{
      id: uuidv4(),
      name: "Garam masala",
      amount: "4 teaspoon"
    },{
      id: uuidv4(),
      name: "salt",
      amount: "2 teaspoon"
    }]       
  },
  {
    id: uuidv4(), 
    name: 'Chicken kurma',
    servings: 4, 
    cookTime: '2:00',
    instructions: "1. put salt\n2. put chicken in oven\n3.eat chicken",
    ingredients : [{
      id: uuidv4(),
      name: "chicken",
      amount: "1kg"
    },{
      id: uuidv4(),
      name: "Salt",
      amount: "2 teaspoon"
    }]        
  }
]
  

export default App;
