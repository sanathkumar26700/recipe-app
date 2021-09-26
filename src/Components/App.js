import RecipeList from './RecipeList';
import '../CSS/App.css';

function App() {
  return (
    <RecipeList recipes ={sampleRecipes}/>
  )
}

const sampleRecipes = [
  { 
    id: 1, 
    name: 'Chicken',
    servings: 3, 
    cookTime: '1:45',
    instructions: "1. put salt\n2. put chicken in oven\n3.eat chicken",
    ingredients : [{
      id: 1,
      name: "chicken",
      amount: "2kg"
    },{
      id: 2,
      name: "Garam masala",
      amount: "2 teaspoon"
    }]       
  },
  {
    id: 2, 
    name: 'Chicken kurma',
    servings: 4, 
    cookTime: '2:00',
    instructions: "1. put salt\n2. put chicken in oven\n3.eat chicken",
    ingredients : [{
      id: 1,
      name: "chicken",
      amount: "1kg"
    },{
      id: 2,
      name: "Salt",
      amount: "2 teaspoon"
    }]        
  }
]
  

export default App;
