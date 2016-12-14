import React from 'react'

const order = ['breakfast', 'lunch', 'dinner']
const sort = arr => arr.sort((a, b) => order.indexOf(a) > order.indexOf(b))
const makeImageLink = name => `/dist/images/recipes/${name.replace(/\s/g, '-')}.jpg`

const Recipes = ({ recipes }) => {
    const sortedRecipes = sort(Object.keys(recipes))
    return (
        <div className="grid flex items-center flex-wrap pb4">
            {sortedRecipes.map(meal => {
                return <div key={ meal }>
                    <h2 className="left caps h4">{ meal }</h2>
                    <div className="grid flex items-center flex-wrap pb4">
                        {
                            recipes[meal].map(recipe => {
                                return <figure className="col-6 effect-duke" key={ recipe.name }>
                                    <img src={makeImageLink(recipe.name)} />
                                    <figcaption>
                                        <h2>
                                            <span>{ recipe.chef }</span>
                                            <span className="recipe-name ml1">{ recipe.name }</span>
                                        </h2>
                            			<p>
                                            <a href={ recipe.link }>{ recipe.buy ? 'Buy the book' : 'View recipe' }</a>
                                        </p>
                                    </figcaption>
                                </figure>
                            })
                        }
                    </div>
                </div>
            })}
        </div>
    )
}

export default Recipes
