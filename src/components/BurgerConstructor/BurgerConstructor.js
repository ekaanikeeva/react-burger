import { useState, useMemo, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { IngredientsContext } from "../../services/ingredientsContext";
import { postOrderApi } from "../../utils/ingredientsApi";

function BurgerConstructor() {
    const [isOpen, setIsOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null)
    const ingredients = useContext(IngredientsContext);
    const handleSubmit = (evt) => {
        evt.preventDefault()

        const idArray = ingredients.map(item => item._id).concat(currentBun._id)
        postOrderApi(idArray)
        .then((res) => {
            setOrderNumber(res.order.number)
            setIsOpen(true)
        } )
   
    }

    function onClose() {
        setIsOpen(false)
    }

    const currentBun = useMemo(() => ingredients.find(item => item.type === 'bun'), [ingredients]);

    const ingredientsWithoutBuns = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients])

    const priceCount = useMemo(() => ingredients.reduce((total, item) => {
        if (item.type !== 'bun') {
            return total + item.price
        } else if (currentBun._id === item._id) return total + (item.price * 2)
        else return total;
    }, 0), [ingredients])


    return (
        <form className={styles.burgerConstructor} onSubmit={handleSubmit}>
            <div className={styles.burgerBunTop}>
                {currentBun &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />}
            </div>
            <ul className={styles.ingredientsList}>
                {ingredientsWithoutBuns.map((item, index) => {
                    return (
                        <li key={index} className={styles.ingredient}>
                            <ConstructorElement
                                isLocked={index === 0 || index === ingredients.length - 1 ? true : false}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                        </li>)
                })}
            </ul>
            <div className={styles.burgerBunBottom}>
                {currentBun &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />}
            </div>
            <div className={styles.burgerPrice}>
                <span>{priceCount}</span>
                <CurrencyIcon type="primary" />
            </div>
            <button type="submit" className={styles.submitButton}>Оформить заказ</button>
            {isOpen &&
                <Modal onClose={onClose}>
                    <OrderDetails orderNumber={ orderNumber } />
                </Modal>
            }
        </form>
    )
}


export default BurgerConstructor;