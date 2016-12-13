import React from 'react'

const makeImageLink = name => `/dist/images/recipes/${name.replace(/\s/g, '-')}.jpg`

const Recipes = ({ recipes }) => {
    return (
        <div className="grid flex items-center flex-wrap pb4">
            {recipes.map(recipe => {
                return <figure className="col-6 effect-duke">
                    <img src={makeImageLink(recipe.name)} />
                    <figcaption>
                        <h2>
                            <span>{ recipe.chef }</span>
                            <span className="recipe-name ml1">{ recipe.name }</span>
                        </h2>
            			<p>
                            <a href={ recipe.link }>{ recipe.buy ? 'Buy book' : 'View recipe' }</a>
                        </p>
                    </figcaption>
                </figure>
            })}
        </div>
    )
}

export default Recipes
