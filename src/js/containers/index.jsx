import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import groupBy from 'lodash.groupby'

import Header from './../components/header.jsx'
import Recipes from './../components/recipes.jsx'

class Index extends React.Component {
    render() {
        return (
            <div className="px2">
                <Header />
                <Recipes recipes={this.props.recipes} />
            </div>
        )
    }
}

Index.propTypes = {
    recipes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        recipes: groupBy(state.recipesState.recipes, 'meal_tag')
    }
}

export default connect(mapStateToProps, null)(Index)
