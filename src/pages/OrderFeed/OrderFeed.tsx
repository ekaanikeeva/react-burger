import OrderElement from "../../components/OrderElement/OrderElement";
import { IRootState } from "../../services/reducers/rootReducer";
import { TOrdersItem } from "../../utils/tsUtils";
import styles from "./OrderFeed.module.scss";
import { FunctionComponent, useMemo, useState } from 'react';
import { useSelector } from "react-redux";

const OrderFeed: FunctionComponent = () => {
    const orders = useSelector((store: IRootState) => store.wsReducer.orders);

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Лента заказов</h1>

            <ul className={styles.ordersList}>
                {orders !== null &&
                    orders?.map((item:TOrdersItem) => {
                        return <li key={item._id}>
                                    <OrderElement item={item}/>
                                </li>
                    })
                }


            </ul>
        </section>
    )
}

export default OrderFeed