import React from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";

function IngredientsList({ title, currentType, ingredients, setCurrentIngredient }) {
    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList}>
                {ingredients.map((item, index) => {
                    if (item.type === currentType) {
                        return (
                            <li key={index} className={styles.ingredient} onClick={() => {
                                setCurrentIngredient(item)
                            }}>
                                <Ingredient item={item} />
                            </li>
                        )
                    }

                })}
            </ul>
        </>
    )
}

IngredientsList.propTypes = {
    title: PropTypes.string.isRequired,
    currentType: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
    setCurrentIngredient: PropTypes.func.isRequired
}

export default IngredientsList