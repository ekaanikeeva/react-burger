import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { IngredientsContext } from '../../services/ingredientsContext';

function Main({ ingredients }) {
    return (
        <main className={styles.main}>
            <BurgerIngredients />
            <IngredientsContext.Provider value={ingredients}>
                <BurgerConstructor />
            </IngredientsContext.Provider>
        </main>
    )
}


Main.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default Main