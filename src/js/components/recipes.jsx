import React from 'react'

const makeImageLink = name => `/dist/images/recipes/${name.replace(/\s/g, '-')}.jpg`

const Recipes = ({ recipes }) => {
    return (
        <div className="list flex items-center pb4">
            {recipes.map(recipe => {
                return <div>
                    <img src={makeImageLink(recipe.name)} />
                </div>
            })}
        </div>
    )
}

export default Recipes
