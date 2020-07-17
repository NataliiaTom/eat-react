import React, { useState, useEffect } from 'react';
import Recipes from './Recipes'
import './App.css';

function App() {

  const Application_ID = 'cb89d83f';
  const Application_Keys = '51a6fbaf457ec519ee9ea9c0df2b3aa0	'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('banana')

  useEffect(() => {
    fetchData();
  }, [query])

  const fetchData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Application_ID}&app_key=${Application_Keys}`)
    const data = await response.json()
    setRecipes(data.hits)
    // console.log(data)
  }
  const searchHandler = (event) => {
    setSearch(event.target.value)
    // console.log("searchHandler: ", search)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler: ", search)
    setQuery(search)
    setSearch("")
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input type='text' value={search} onChange={searchHandler}></input>
        <button  >Search</button>
        {recipes.map(reciip => <Recipes
          title={reciip.recipe.label}
          image={reciip.recipe.image}
          calories={reciip.recipe.calories}
          ingredients={reciip.recipe.ingredients} />)}
      </form>
    </div>
  )
}

export default App;
