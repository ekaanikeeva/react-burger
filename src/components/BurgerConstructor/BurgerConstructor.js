import { useState, useMemo, useContext } from "react";
import PropTypes from 'prop-types';
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import { IngredientsContext } from "../../services/ingredientsContext";

function BurgerConstructor() {
    const [isOpen, setIsOpen] = useState(false);
    const ingredients = useContext(IngredientsContext);
    const handleSubmit = (evt) => {
        evt.preventDefault()

        setIsOpen(true)
    }

    function onClose() {
        setIsOpen(false)
    }

    const priceCount = useMemo(() => ingredients.reduce((total, item) => total + item.price, 0), [ingredients])

    const currentBun = useMemo(() => ingredients.find((item) => {
        return item.type === 'bun'
    }), [ingredients]);


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
                {ingredients.map((item, index) => {
                    return (item.type !== 'bun' &&
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
                    <OrderDetails />
                </Modal>
            }
        </form>
    )
}


// BurgerConstructor.propTypes = {
//     ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
// }

export default BurgerConstructor;