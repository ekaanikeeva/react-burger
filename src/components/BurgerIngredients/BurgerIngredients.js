import React from 'react';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Соберите бургер</h2>


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

        </section>
    )
}

export default BurgerIngredients;