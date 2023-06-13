import { FunctionComponent, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from "./OrdersStatus.module.scss";
import { IRootState } from '../../services/reducers/rootReducer';
import { TOrdersItem } from '../../utils/tsUtils';

const OrdersStatus: FunctionComponent = () => {
    const orders = useSelector((store: IRootState) => store.wsReducer.orders);
    const total = useSelector((store: IRootState) => store.wsReducer.total);
    const totalToday = useSelector((store: IRootState) => store.wsReducer.totalToday);
    const doneOrders = useMemo(() => {
        if (orders?.some((order: TOrdersItem) => order.status === 'done')) {
            return orders?.filter((item: TOrdersItem) => item.status === 'done')
        } else return null

    }, [orders])

    const pendingOrders = useMemo(() => {
        if (orders?.some((order: TOrdersItem) => order.status !== 'done')) {
            return orders?.filter((item: TOrdersItem) => item.status !== 'done')
        } else return null
    }, [orders])

    return (
        <section className={styles.section}>

            <ul className={styles.statusList}>
                <li>
                    <h2 className={styles.statusList__title}>Готовы:</h2>
                    <ul className={styles.doneList}>
                        {doneOrders !== null && doneOrders.map((item: TOrdersItem, index: number) => {
                            if (index < 14) {
                                return (
                                    <li key={item._id}>{item.number}</li>
                                )
                            }

                        })}
                    </ul>
                </li>
                <li>
                    <h2 className={styles.statusList__title}>В работе:</h2>
                    <ul className={styles.numberList}>
                        {pendingOrders !== null && pendingOrders.map((item: TOrdersItem, index: number) => {
                            if (index < 14) {
                                return (
                                    <li key={item._id}>{item.number}</li>
                                )
                            }

                        })}
                    </ul>
                </li>
            </ul>
            <div className={styles.total__container}>
                <h3>Выполнено за все время:</h3>
                <p>{total}</p>
            </div>
            <div className={styles.total__container}>
                <h3>Выполнено за сегодня:</h3>
                <p>{totalToday}</p>
            </div>
            
        </section>
    )
}

export default OrdersStatus;