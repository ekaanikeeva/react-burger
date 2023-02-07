import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredient.module.scss';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ item }) {
    return (
        <>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={item.image} alt={item.name} />
            <a className={styles.price}>
                <span>{item.price}</span>
                <CurrencyIcon type="primary" /></a>
            <h3>{item.name}</h3>
        </>
    )
}

Ingredient.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,

      }),
}
export default Ingredient;