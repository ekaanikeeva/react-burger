import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function Main({ ingredients }) {
    return (
    <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
    </main>
    )
}


Main.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default Main