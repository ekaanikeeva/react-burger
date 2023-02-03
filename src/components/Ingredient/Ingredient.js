import React from 'react';
import styles from './Ingredient.module.scss';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ item, index }) {
    return (
        <li key={index} className={styles.ingredient}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={item.image} alt={item.name} />
            <a className={styles.price}>
                <span>{item.price}</span>
                <CurrencyIcon type="primary" /></a>
            <h3>{item.name}</h3>
        </li>
    )
}

export default Ingredient;