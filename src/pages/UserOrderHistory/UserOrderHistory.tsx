import { FunctionComponent, useMemo } from "react";
import styles from "./UserOrderHistory.module.scss";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../services/reducers/rootReducer";
import { TOrdersItem } from "../../utils/tsUtils";
import { WS_CONNECTION_USER_START, WS_CONNECTION_USER_CLOSED } from '../../services/actions/wsUserActions';
import OrderElement from "../../components/OrderElement/OrderElement";
const UserOrderHistory:FunctionComponent = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector((store: IRootState) => store.authReducer.accessToken);
    const userWsConnected = useSelector((store: IRootState) => store.wsUserOrdersReducer);
    const orders = useSelector((store: IRootState) => store.wsUserOrdersReducer.orders)
    useMemo(() => {
        const token = accessToken?.slice(7)

        dispatch({type: WS_CONNECTION_USER_START, payload: `wss://norma.nomoreparties.space/orders?token=${token}`})
  
      if(userWsConnected.orders !== null) {
        dispatch({type: WS_CONNECTION_USER_CLOSED})
      }
    },[])
        
    return (
        <main className={styles.main}>
            <ProfileNavigation />
            <ul className={styles.ordersList}>
                    {orders !== null &&
                        orders?.map((item: TOrdersItem) => {
                            return <li key={item._id}>
                                <OrderElement item={item} />
                            </li>
                        })
                    }
                </ul>
        </main>
    )
} 

export default UserOrderHistory;