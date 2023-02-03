import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';


function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = React.useState('one');


    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Соберите бургер</h1>


            <nav className={styles.navigation}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>
            <h2 className={styles.ingredientsTitle}>Булки</h2>
            <ul className={styles.ingredientsList}>
                {ingredients.map((item, index) => {
                    return(
                        <li key={index} className={styles.ingredient}>
                        <Ingredient item={ item } index={ index } />
                        </li>
                    )
                })}
                
            </ul>
        </section>
    )
}

const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes)
}
export default BurgerIngredients;