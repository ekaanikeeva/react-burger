import { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

function BurgerConstructor({ ingredients }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault()

        setIsOpen(true)
    }

    const priceCount = useMemo(() => ingredients.reduce((total, item) => total + item.price, 0), [ingredients])

    return (
        <form className={styles.burgerConstructor} onSubmit={handleSubmit}>
            <ul className={styles.ingredientsList}>
            {ingredients.map((item, index) => {
                return (
                    <li key= { index } className={ styles.ingredient }>
                        <ConstructorElement
                            type={index === 0 ? "top" : index === ingredients.length - 1 ? "bottom" : undefined}
                            isLocked={index === 0 || index === ingredients.length - 1 ? true : false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </li>

                )
            })}
    </ul>
            <div className={styles.burgerPrice}>
                <span>{priceCount}</span>
                <CurrencyIcon type="primary" />
            </div>
            <button type="submit" className={styles.submitButton}>Оформить заказ</button>
            { isOpen && 
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <OrderDetails />
            </Modal>
            }
        </form>
    )
}

const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default BurgerConstructor;