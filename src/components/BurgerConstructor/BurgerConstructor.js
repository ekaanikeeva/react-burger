import React from "react";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ ingredients }) {
    return (
        <section className={styles.burgerConstructor}>
            <ul className={styles.ingredientsList}>
            {ingredients.map((item, index) => {
                return (
                    <li key= { index } className={ styles.ingredient }>
                        <ConstructorElement
                            type={index === 0 ? "top" : index === ingredients.length - 1 ? "bottom" : undefined}
                            isLocked={index === 0 || index === ingredients.length - 1 ? true : false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </li>

                )
            })}
    </ul>

        </section>
    )
}

export default BurgerConstructor;