import OrderItem from "../../components/OrderItem/OrderItem";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsAction";
import { WS_CONNECTION_USER_START, WS_CONNECTION_USER_CLOSED } from '../../services/actions/wsUserActions';
import styles from "./OrderPage.module.scss";
import { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TOrdersItem } from "../../utils/tsUtils";

interface IProps {
    orders: TOrdersItem[],
    isOrderName: string
}

const OrderPage: FunctionComponent<IProps> = ({ orders, isOrderName }) => {
    const dispatch = useAppDispatch()
    const accessToken = useAppSelector(store => store.authReducer.accessToken);
    useEffect(() => {
        if (isOrderName === 'feed') {
            dispatch({ type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders/all' });

            return () => {
                dispatch({ type: WS_CONNECTION_CLOSED })
            }
        } else if (isOrderName === 'user' && accessToken !== null) {
            const token = accessToken.slice(7)
    
          dispatch({ type: WS_CONNECTION_USER_START, payload: `wss://norma.nomoreparties.space/orders?token=${token}` })
    
          return () => {
            dispatch({ type: WS_CONNECTION_USER_CLOSED })
          }
        }
    }, [dispatch])
    return (
        <main className={styles.main}>
            <OrderItem orders={orders} />
        </main>
    )
}

export default OrderPage;