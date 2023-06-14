import styles from "./OrderItem.module.scss";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FunctionComponent, useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from "../../services/hooks";
import { IIngredient, TOrdersItem } from '../../utils/tsUtils';

interface IProps {
    orders: TOrdersItem[]
}

const OrderItem: FunctionComponent<IProps> = ({orders}) => {
    const { orderId } = useParams();
    const allIngredients = useAppSelector(store => store.ingredientsReducer.ingredients)

    const currentOrder = useMemo(() => orders?.find((order: TOrdersItem) => order._id === orderId), [orders])

    const ingredients = useMemo(() => {
        if (currentOrder !== undefined) {
            return JSON.parse(JSON.stringify(allIngredients.filter(el => currentOrder?.ingredients.some((id: string) => id === el._id) === true)))
        }
    }, [currentOrder])

    useMemo(() => {
        ingredients?.forEach((item: IIngredient) => item.count = 0);
        currentOrder?.ingredients.forEach((id: string) => {
            const current = ingredients?.find((item: IIngredient) => item._id === id)
            if (current !== undefined) {
                current.count += 1
            }

        })

    }, [ingredients])

    const priceCount = useMemo(() => ingredients?.reduce((total: number, item: IIngredient) => {
        return total + (item.price * item.count)
    }, 0), [ingredients])

    const currentOrderDate = useMemo(() => currentOrder ? new Date(currentOrder.createdAt).toLocaleString() : new Date().getDate() ,[currentOrder])

    return (
        <div>
            {currentOrder &&
                <div className={styles.orders}>
                    <span className={styles.number}>#{currentOrder.number}</span>
                    <h1 className={styles.name}>{currentOrder.name}</h1>
                    <span className={styles.status}>{currentOrder.status === 'done' ? 'Выполнен' : currentOrder.status === 'pending' ? 'Готовится' : currentOrder.status}</span>
                    <h2 className={styles.structure__title}>Состав:</h2>

                    <ul className={styles.ingredientsList}>
                        {ingredients?.map((item: IIngredient) => {
                            return (
                                <li key={item._id} className={styles.ingredient}>
                                    <img src={item.image} alt={item.name} />
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <div className={styles.price}>
                                        <span>{item.count} x {item.price}</span>
                                        <CurrencyIcon type="primary" /></div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.dateProceContainer}>
                        <span className={styles.currentDate}>{currentOrderDate}</span>
                        <div className={styles.fullPrice}>
                            <span>{priceCount}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default OrderItem;