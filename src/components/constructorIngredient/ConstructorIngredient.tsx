import { useAppDispatch } from "../../services/hooks";
import { FunctionComponent,  DragEvent } from "react";
import styles from "./ConstructorIngredient.module.scss";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { moveConstructorIngredientAction, getMovedIngredientAction, removeConstructorIngredientAction } from "../../services/actions/burgerConstructorActions";
import { decreaseIngredientCountAction } from "../../services/actions/ingredientsActions";
import { IIngredient, TMovedItem } from "../../utils/tsUtils";

type TConstructorIngredientProps = {
    item: IIngredient,
    index: number,
    movedIngredient: TMovedItem | null,
    setMovedIngredient: Function
}


const ConstructorIngredient:FunctionComponent<TConstructorIngredientProps> = ({ item, index, movedIngredient, setMovedIngredient }) => {
    const dispatch = useAppDispatch();

    function dragStartHandler(e:DragEvent, index: number, item: IIngredient) {
        dispatch(getMovedIngredientAction(index))
        setMovedIngredient({ item: item, index: index })
    }

    function dragOverHandler(e:DragEvent) {
        e.preventDefault();
    }

    function dropHandler(e:DragEvent, index: number, item: IIngredient) {
        e.preventDefault();
        if (movedIngredient !== null) {
            dispatch(moveConstructorIngredientAction({ dropitem: item, dropindex: index, moveditem: movedIngredient }))
            setMovedIngredient(null)
        }
        
    }

    function removeIngredient(item: IIngredient) {
        dispatch(removeConstructorIngredientAction(item.constructorId))
        dispatch(decreaseIngredientCountAction(item._id))
    }

    return (
        <li draggable={true}
            className={styles.ingredient}
            onDragStart={(e) => dragStartHandler(e, index, item)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, index, item)}
        >
                <DragIcon type="primary" />

            <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => removeIngredient(item)}
                
            />
        </li>
    )
}

export default ConstructorIngredient;