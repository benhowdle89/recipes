import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import groupBy from 'lodash.groupby'

import Header from './../components/header.jsx'
import Footer from './../components/footer.jsx'
import Recipes from './../components/recipes.jsx'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Recipes recipes={this.props.recipes} />
                <Footer />
            </div>
        )
    }
}

Index.propTypes = {
    recipes: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        recipes: state.recipesState.recipes
    }
}

export default connect(mapStateToProps, null)(Index)
