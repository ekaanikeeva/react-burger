import { FunctionComponent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./OrderElement.module.scss";
import { TOrdersItem } from '../../utils/tsUtils';
import { useAppSelector } from '../../services/hooks';

interface IProps {
    item: TOrdersItem,
    link: string
}

const OrderElement: FunctionComponent<IProps> = ({ item, link }) => {
    const location = useLocation();

    const allIngredients = useAppSelector(store => store.ingredientsReducer.ingredients)

    const orderId = item['_id'];
    const orderIngredients = allIngredients.filter(el => item.ingredients.some(id => id === el._id) === true)

    return (
        <Link to={`${link}${orderId}`} className={styles.item} state={{ background: location }}>
            <span className={styles.number}>#{item.number}</span>
            <h2 className={styles.name}>{item.name}</h2>
            <div className={styles.ingredientsContainer}>
                <ul className={styles.ingredientsList}>
                    {
                        orderIngredients.map((element, index) => {
                                return (
                                    <li key={element._id} className={index<6 ? styles.ingredient : styles.ingredient_count}>
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