import React, { useEffect } from 'react';
import { useDrag } from "react-dnd";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import styles from './Ingredient.module.scss';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from "react-redux";
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { Link, useLocation } from "react-router-dom";

function Ingredient({ item }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const ingredientId = item['_id'];
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
            <Link to={{ state: { background: location }, pathname: `/ingredients/${ingredientId}` }} className={styles.wrapLink}>
                <Counter count={item.count} size="default" extraClass="m-1" />
                <img src={item.image} alt={item.name} />
                <span className={styles.price}>
                    <span>{item.price}</span>
                    <CurrencyIcon type="primary" /></span>
                <h3>{item.name}</h3>
            </Link>
        </li >

    )
}

Ingredient.propTypes = {
    item: ingredientPropTypes
}

export default Ingredient;