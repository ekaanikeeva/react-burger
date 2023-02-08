import React from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';

function IngredientsList({ title, currentType, ingredients, setIsOpen, setCurrentIngredient }) {
    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList}>
                {ingredients.map((item, index) => {
                    if (item.type === currentType) {
                        return (
                            <li key={index} className={styles.ingredient} onClick={() => {
                                openModal();
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

const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
});

IngredientsList.propTypes = {
    title: PropTypes.string.isRequired,
    currentType: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientsList