import { FunctionComponent } from 'react';
import { useDrag } from "react-dnd";
import styles from './Ingredient.module.scss';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch } from '../../services/hooks';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../utils/tsUtils";

type TItem = {
    item: IIngredient
}

const Ingredient:FunctionComponent<TItem> = ({ item }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const ingredientId = item['_id'];

    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: { item },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        <li draggable={true} className={styles.ingredient} ref={dragRef} data-item="data-item"
            onClick={() => dispatch(getCurrentIngredientAction(item))}>
            <Link to={`/ingredients/${ingredientId}`} state={{ background: location }} className={styles.wrapLink}>
                <Counter count={item.count} size="default" extraClass="m-1"/>
                <img src={item.image} alt={item.name} />
                <span className={styles.price}>
                    <span>{item.price}</span>
                    <CurrencyIcon type="primary" /></span>
                    <h3 data-item="data-item-name">{item.name}</h3>
            </Link>
        </li >
    )
}


export default Ingredient;