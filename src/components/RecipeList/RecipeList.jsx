import PropTypes from 'prop-types'
import { Recipe } from '../Recipe'
import { List } from './RecipeList.styled'

export const RecipeList = ({ recipes }) => {
    return (
        <List >
        {recipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
        ))}
        </List>
    );
}

// props описуємо лише id ттому що сюди приходить лише це!!!
RecipeList.proTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
        })
    ).isRequired
}

