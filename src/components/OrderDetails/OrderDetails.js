import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails() {
    return (
        <>
            <p className="text text_type_digits-large">038457</p>
            <h3>идентификатор заказа</h3>
            <CheckMarkIcon type="primary" />
            <div className="p-7"></div>
            <span className="text text_type_main-default">
                Ваш заказ начали готовить
            </span>
            <div className="p-1"></div>
            <span className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </span>
            <div className="p-8"></div>
        </>
    )
}

export default OrderDetails;