import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { bun, mainIngredient, sauce, one, two, three } from '../../utils/constants';
import IngredientsList from '../IngredientsList/IngredientsList';

function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Соберите бургер</h1>

            <nav className={styles.navigation}>
                <Tab value="one" active={current === one} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === two} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === three} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>
            
            <ul className={styles.ingredientsList}>
                <li>
                    <IngredientsList title="Булки" currentType={bun} ingredients={ingredients} />
                </li>
                <li>
                    <IngredientsList title="Соусы" currentType={sauce} ingredients={ingredients} />
                </li>
                <li>
                    <IngredientsList title="Начинки" currentType={mainIngredient} ingredients={ingredients} />
                </li>

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
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}
export default BurgerIngredients;