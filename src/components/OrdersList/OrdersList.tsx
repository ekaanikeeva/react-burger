import { FunctionComponent } from 'react';
import { useAppSelector } from '../../services/hooks';
import OrderElement from '../OrderElement/OrderElement';
import { TOrdersItem } from '../../utils/tsUtils';
import { IRootState } from '../../services/reducers/rootReducer';
import styles from "./OrdersList.module.scss";

const OrdersList:FunctionComponent = () => {
    const orders = useAppSelector(store => store.wsReducer.orders);
    return (
        <section className={styles.section}>
                <h1 className={styles.title}>Лента заказов</h1>

                <ul className={styles.ordersList}>
                    {orders !== null &&
                        orders?.map((item: TOrdersItem) => {
                            return <li key={item._id}>
                                <OrderElement item={item} link='/feed/'/>
                            </li>
                        })
                    }
                </ul>
            </section>
    )
}

export default OrdersList;