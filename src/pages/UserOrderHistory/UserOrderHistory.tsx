import { FunctionComponent, useEffect } from "react";
import styles from "./UserOrderHistory.module.scss";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TOrdersItem } from "../../utils/tsUtils";
import { WS_CONNECTION_USER_START, WS_CONNECTION_USER_CLOSED } from '../../services/actions/wsUserActions';
import OrderElement from "../../components/OrderElement/OrderElement";
import { Outlet } from "react-router-dom";

const UserOrderHistory:FunctionComponent = () => {
    const accessToken = useAppSelector(store => store.authReducer.accessToken);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (accessToken !== null) {
          const token = accessToken.slice(7)
    
          dispatch({ type: WS_CONNECTION_USER_START, payload: `wss://norma.nomoreparties.space/orders?token=${token}` })
    
          return () => {
            dispatch({ type: WS_CONNECTION_USER_CLOSED })
          }
        }
      }, [dispatch])
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
                <Outlet />
        </main>
    )
} 

export default UserOrderHistory;