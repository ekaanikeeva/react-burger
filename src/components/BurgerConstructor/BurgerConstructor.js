import React from "react";
import PropTypes from 'prop-types';
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ ingredients }) {
    return (
        <form className={styles.burgerConstructor}>
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
            <div className={styles.burgerPrice}>
                <span>610</span>
                <CurrencyIcon type="primary" />
            </div>
            <button type="submit" className={styles.submitButton}>Оформить заказ</button>
        </form>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerConstructor;