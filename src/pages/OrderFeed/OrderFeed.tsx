import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";

import styles from "./OrderFeed.module.scss";
import { FunctionComponent } from 'react';


const OrderFeed: FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <OrdersList />

        <OrdersStatus />
        </main>
    )
}

export default OrderFeed