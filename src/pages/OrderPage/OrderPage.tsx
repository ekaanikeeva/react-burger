import { FunctionComponent } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import styles from './OrderPage.module.scss';

const OrderPage:FunctionComponent = () => {
    return(
        <div className={styles.section}>
            <OrderItem />
        </div>
    )
}

export default OrderPage;