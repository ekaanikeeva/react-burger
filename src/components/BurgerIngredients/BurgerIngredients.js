import React from 'react';
import styles from './BurgerIngredients.module.scss';
import { Tab,  CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
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
                        <Ingredient item={ item } index={ index } />
                    )
                })}
                
            </ul>
        </section>
    )
}

export default BurgerIngredients;