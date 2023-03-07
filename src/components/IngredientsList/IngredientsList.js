import React from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";

function IngredientsList({ title, currentType, ingredients, currentRef }) {
    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList} ref={currentRef}>
                {ingredients.map((item, index) => {
                    if (item.type === currentType) {
                        return (
                            <div key={index}>
                                <Ingredient item={item} index={index}/>
                                </div>
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
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired),
    currentRef: PropTypes.func.isRequired
}

export default IngredientsList