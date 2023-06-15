import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsAction";
import styles from "./OrderFeed.module.scss";
import { FunctionComponent, useMemo } from 'react';
import { useAppDispatch } from "../../services/hooks";
import { Outlet } from "react-router-dom";

const OrderFeed: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  useMemo(() => {
    dispatch({ type: WS_CONNECTION_START, payload: 'wss://norma.nomoreparties.space/orders/all' });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED })
    }

  }, [dispatch])
  return (
    <main className={styles.main}>
      <OrdersList />

      <OrdersStatus />
      <Outlet />
    </main>
  )
}

export default OrderFeed