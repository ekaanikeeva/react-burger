import React from 'react';
import { useDrag } from "react-dnd";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import styles from './Ingredient.module.scss';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from "react-redux";
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";

function Ingredient({ item }) {
    const dispatch = useDispatch();

    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: { item },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })
    return (
        <li draggable={true} className={styles.ingredient} ref={dragRef}
            onClick={() => dispatch(getCurrentIngredientAction(item))}>
                <Counter count={item.count} size="default" extraClass="m-1" />
                <img src={item.image} alt={item.name} />
                <a className={styles.price}>
                    <span>{item.price}</span>
                    <CurrencyIcon type="primary" /></a>
                <h3>{item.name}</h3>
        </li>
    )
}

Ingredient.propTypes = {
    item: ingredientPropTypes
}

export default Ingredient;