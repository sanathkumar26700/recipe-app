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
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  
  function handleRecipeAdd(){
    const newRecipe = {
        id: uuidv4(), 
        name: '',
        servings: 1, 
        instructions: "",
        ingredients : [{
          id: uuidv4(),
          name: "",
          amount: ""
        },{
          id: uuidv4(),
          name: "",
          amount: ""
        }]
      }
    setRecipes([...recipes,newRecipe])
  }

function handleRecipeDelete(id){
  if(selectedRecipeId != null && selectedRecipeId === id){
    setSelectedRecipeId(undefined)
  }
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
    name: 'White Sauce Pasta',
    servings: 2, 
    cookTime: '15 min',
    instructions: "1. Boil raw pasta in water\n2. Add 1/2 teaspoon salt\n3. Boil them until al-dente",
    ingredients : [{
      id: uuidv4(),
      name: "Penne Pasta",
      amount: "3/4 cups"
    },{
      id: uuidv4(),
      name: "Water",
      amount: "4 teaspoon"
    },{
      id: uuidv4(),
      name: "salt",
      amount: "1/2 teaspoon"
    }]       
  },
  {
    id: uuidv4(), 
    name: 'Potato Sandwich',
    servings: 2, 
    cookTime: '20 min',
    instructions: "1. put salt\n2. put chicken in oven\n3.eat chicken",
    ingredients : [{
      id: uuidv4(),
      name: "Potato",
      amount: "300 gm"
    },{
      id: uuidv4(),
      name: "Bread",
      amount: "8 Slices"
    }]        
  }
]
  

export default App;
