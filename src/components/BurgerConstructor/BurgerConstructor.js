import { useState, useMemo, useContext, useEffect } from "react";
import { useDrop } from "react-dnd";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector, useDispatch } from 'react-redux';
import { addConstructorIngredientsAction } from "../../services/reducers/burgerConstructorReducer";
import { orderNumberAsync } from "../../services/asyncActions/order";

function BurgerConstructor() {
    const [isOpen, setIsOpen] = useState(false);

    const [{isHover}, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item) {
            dispatch(addConstructorIngredientsAction(item.item));
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });
    const orderNumber = useSelector(store => store.orderReducer.order)
    const dispatch = useDispatch();
    const ingredients = useSelector(store => (store.burgerConstructorReducer.constructorIngredients))

    const handleSubmit = (evt) => {
        evt.preventDefault()

        // const allIngredientsArray = [];
        // allIngredientsArray.push(...currentBun)
        // allIngredientsArray.push(...ingredientsWithoutBuns);
        // allIngredientsArray.push(...currentBun)
        // dispatch(addConstructorIngredientsAction(allIngredientsArray));

        const idArray = ingredients.map(item => item._id)

        dispatch(orderNumberAsync(idArray))
        setIsOpen(true)
    }

    function onClose() {
        setIsOpen(false)
    }

    const currentBun = useMemo(() => ingredients[ingredients.findLastIndex(item => item.type === 'bun')], [ingredients]);

    const ingredientsWithoutBuns = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients])

    const priceCount = useMemo(() => ingredients.reduce((total, item) => {
        if (item.type !== 'bun') {
            return total + item.price
        } else if (currentBun._id === item._id) return total + (item.price * 2)
        else return total;
    }, 0), [ingredients])

    return (
        <form className={styles.burgerConstructor} onSubmit={handleSubmit} ref={dropTarget}>
            
            <div className={styles.burgerBunTop} >
                {currentBun &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />}
            </div>
            <ul className={styles.ingredientsList} >
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
            <div className={styles.burgerBunBottom} >
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
            {isOpen && orderNumber !== null &&
                <Modal onClose={onClose}>
                    <OrderDetails orderNumber={ orderNumber } />
                </Modal>
            }
        </form>
    )
}


export default BurgerConstructor;