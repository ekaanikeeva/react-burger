import React from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';

function IngredientsList({ title, currentType, ingredients }) {
    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList}>
                {ingredients.map((item, index) => {
                    if (item.type === currentType) {
                        return (
                            <li key={index} className={styles.ingredient}>
                                <Ingredient item={item} index={index} />
                            </li>
                        )
                    }

                })}
            </ul>
        </>
    )
}

const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
});

IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientsList