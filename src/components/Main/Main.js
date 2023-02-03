import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function Main({ ingredients }) {
    return (
    <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
    </main>
    )
}

const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });

Main.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes)
}

export default Main