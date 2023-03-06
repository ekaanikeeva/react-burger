import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./ConstructorIngredient.module.scss";
import { moveConstructorIngredientAction, getMovedIngredientAction, removeConstructorIngredientAction } from "../../services/reducers/burgerConstructorReducer";


function ConstructorIngredient({ item, index }) {
    const dispatch = useDispatch();
    // const movedItem = useSelector(store => store.burgerConstructorReducer.movedItem);
    function dragStartHandler(e, index, item) {
        dispatch(getMovedIngredientAction(index))
        console.log('drag', item)
    }

    function dragEndHandler(e) {
        e.target.style.opacity = 1
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.opacity = .8;
    }

    function dropHandler(e, index, item) {
        e.preventDefault();
        dispatch(moveConstructorIngredientAction(index))
        console.log('drop', item)
    }

    function removeIngredient (item) {
        return dispatch(removeConstructorIngredientAction(item.constructorId))
    }

    return (
        <li draggable={true} key={index} 
        className={styles.ingredient} 
        onDragStart={(e) => dragStartHandler(e, index, item)}
        onDragLeave={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e, index, item)}
        >
            <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={(e) => removeIngredient(item)}
                
            />
        </li>
    )
}

export default ConstructorIngredient;