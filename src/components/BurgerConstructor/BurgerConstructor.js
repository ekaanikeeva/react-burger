import { useState, useMemo, useContext, useEffect } from "react";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { IngredientsContext } from "../../services/ingredientsContext";
import { postOrderApi } from "../../utils/ingredientsApi";
import { useSelector, useDispatch } from 'react-redux';
import { addConstructorIngredientsAction, removeConstructorIngredientAction } from "../../services/reducers/burgerConstructorReducer";

function BurgerConstructor() {
    const [isOpen, setIsOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null)
    const ingredients = useContext(IngredientsContext);

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const allIngredientsArray = [];
        allIngredientsArray.push(currentBun)
        allIngredientsArray.push(...ingredientsWithoutBuns);
        allIngredientsArray.push(currentBun)
        dispatch(addConstructorIngredientsAction(allIngredientsArray));

        const idArray = allIngredientsArray.map(item => item._id)
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
            <div className={styles.burgerBunTop} draggable>
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
                                isLocked={false}
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