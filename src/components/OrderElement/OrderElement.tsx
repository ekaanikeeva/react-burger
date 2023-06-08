import { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from "./OrderElement.module.scss";
import { IIngredient, TAppDispatch, TOrdersItem } from '../../utils/tsUtils';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from "../../services/reducers/rootReducer";
import { ingredientsAsync } from '../../services/asyncActions/ingredients';

interface IProps {
    item: TOrdersItem
}

const OrderElement: FunctionComponent<IProps> = ({ item }) => {
    const dispatch: TAppDispatch = useDispatch();
    const [currentIngredients, setCurrentIngredients] = useState(null)
    const allIngredients = useSelector((store: IRootState) => store.ingredientsReducer.ingredients)
    useMemo(() => {
        dispatch(ingredientsAsync())
    }, [])

    const orderIngredients = allIngredients.filter(el => item.ingredients.some(id => id === el._id) === true)

    return (
        <Link to={`/feed/:${item._id}`} className={styles.item}>
            <span className={styles.number}>#{item.number}</span>
            <h2 className={styles.name}>{item.name}</h2>
            <div className={styles.ingredientsContainer}>
                <ul className={styles.ingredientsList}>
                    {
                        orderIngredients.map((element, index) => {
                                return (
                                    <li className={index<6 ? styles.ingredient : styles.ingredient_count}>
                                        <img src={element.image} alt={element.name} />
                                    </li>
                                )
                        })
                    }
                </ul>
            </div>
        </Link>
    )
}

export default OrderElement;