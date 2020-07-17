import React from 'react'


const Recipes = ({ title, image, ingredients,calories }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image}></img>
            <ol>
    { ingredients.map(ingredient=>( <li>{ingredient.text}</li>))}
            </ol>

        </div>
    )
}

export default Recipes;