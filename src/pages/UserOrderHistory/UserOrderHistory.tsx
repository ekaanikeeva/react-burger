import { FunctionComponent, useMemo } from "react";
import styles from "./UserOrderHistory.module.scss";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { IRootState } from "../../services/reducers/rootReducer";
import { TOrdersItem } from "../../utils/tsUtils";

import OrderElement from "../../components/OrderElement/OrderElement";
const UserOrderHistory:FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const orders = useAppSelector(store => store.wsUserOrdersReducer.orders)
    
    const reverseOrders = [...orders].reverse();

    return (
        <main className={styles.main}>
            <ProfileNavigation />
            <ul className={styles.ordersList}>
                    {orders !== null &&
                        reverseOrders?.map((item: TOrdersItem) => {
                            return <li key={item._id}>
                                <OrderElement item={item} link='/profile/orders/' />
                            </li>
                        })
                    }
                </ul>
        </main>
    )
} 

export default UserOrderHistory;