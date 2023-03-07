import { useDispatch, useSelector } from "react-redux";
import styles from "./ConstructorIngredient.module.scss";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { moveConstructorIngredientAction, getMovedIngredientAction, removeConstructorIngredientAction } from "../../services/actions/burgerConstructorActions";
import { decreaseIngredientCountAction } from "../../services/actions/ingredientsActions";

function ConstructorIngredient({ item, index, movedIngredient, setMovedIngredient }) {
    const dispatch = useDispatch();

    function dragStartHandler(e, index, item) {
        dispatch(getMovedIngredientAction(index))
        setMovedIngredient({item: item, index: index})
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
        if (movedIngredient !== null) {
            dispatch(moveConstructorIngredientAction({dropitem: item, dropindex: index, moveditem: movedIngredient}))
            setMovedIngredient(null)
        }
        
    }

    function removeIngredient (item) {
        dispatch(removeConstructorIngredientAction(item.constructorId))
        dispatch(decreaseIngredientCountAction(item._id))
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

ConstructorIngredient.propTypes = {
    item: ingredientPropTypes,
    index: PropTypes.number.isRequired,

    setMovedIngredient: PropTypes.func.isRequired
}

export default ConstructorIngredient;