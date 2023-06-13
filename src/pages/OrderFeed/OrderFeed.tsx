import OrderElement from "../../components/OrderElement/OrderElement";
import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import { IRootState } from "../../services/reducers/rootReducer";
import { TOrdersItem } from "../../utils/tsUtils";
import styles from "./OrderFeed.module.scss";
import { FunctionComponent, useMemo, useState } from 'react';
import { useSelector } from "react-redux";

const OrderFeed: FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <OrdersList />

        <OrdersStatus />
        </main>
    )
}

export default OrderFeed