import { FunctionComponent, useMemo } from "react";
import styles from "./UserOrderHistory.module.scss";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../services/reducers/rootReducer";
import { TOrdersItem } from "../../utils/tsUtils";

import OrderElement from "../../components/OrderElement/OrderElement";
const UserOrderHistory:FunctionComponent = () => {
    const dispatch = useDispatch()

    const orders = useSelector((store: IRootState) => store.wsUserOrdersReducer.orders)
    
        
    return (
        <main className={styles.main}>
            <ProfileNavigation />
            <ul className={styles.ordersList}>
                    {orders !== null &&
                        orders?.map((item: TOrdersItem) => {
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