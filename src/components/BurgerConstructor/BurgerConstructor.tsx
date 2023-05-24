import { useState, useMemo, useContext, useEffect, FunctionComponent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector, useDispatch } from 'react-redux';
import { addConstructorIngredientsAction, removeConstructorIngredientAction } from "../../services/actions/burgerConstructorActions";
import { orderNumberAsync } from "../../services/asyncActions/order";
import { increaseIngredientCountAction, decreaseIngredientCountAction } from "../../services/actions/ingredientsActions";
import ConstructorIngredient from "../constructorIngredient/ConstructorIngredient";
import { useCookies } from 'react-cookie';

import { IRootState } from '../../services/reducers/rootReducer';
import { IIngredient, TAppDispatch } from "../../utils/tsUtils";

const BurgerConstructor: FunctionComponent = () => {
    type itemI = {
        item: IIngredient
    }


    const dispatch: TAppDispatch = useDispatch();
    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies<string>(['stellarBurger']);
    const [isOpen, setIsOpen] = useState(false);
    const orderNumber = useSelector((store: IRootState) => store.orderReducer.order);
    const ingredients = useSelector((store: IRootState) => (store.burgerConstructorReducer.constructorIngredients));
    const isAuth = useSelector((store: IRootState) => store.authReducer.isUserAuth);

    const [movedIngredient, setMovedIngredient] = useState(null)
    const [{ isHover }, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item: itemI) {
            const itemCopy:IIngredient = JSON.parse(JSON.stringify(item.item));

            const burgerBun = ingredients?.find((el:IIngredient) => el.type === 'bun')
            if (burgerBun !== undefined && itemCopy.type === 'bun') {
                dispatch(removeConstructorIngredientAction(burgerBun.constructorId))
                dispatch(decreaseIngredientCountAction(burgerBun._id))
                dispatch(addConstructorIngredientsAction(itemCopy));
                dispatch(increaseIngredientCountAction(itemCopy._id));
            } else {
                dispatch(addConstructorIngredientsAction(itemCopy));
                dispatch(increaseIngredientCountAction(itemCopy._id));
            }

        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });


    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        if (isAuth) {
            const allIngredientsArray = [];
            allIngredientsArray.push(currentBun, ...ingredientsWithoutBuns, currentBun)

            const idArray = allIngredientsArray.map((item: IIngredient) => item._id)

            dispatch(orderNumberAsync(idArray, cookies.accessToken))
            setIsOpen(true)
        } else navigate('/login')

    }

    function onClose() {
        setIsOpen(false)
    }

    const currentBun = useMemo(() => ingredients.find((item:IIngredient) => item.type === 'bun'), [ingredients]);

    const ingredientsWithoutBuns = useMemo(() => ingredients.filter((item:IIngredient) => item.type !== 'bun'), [ingredients])

    const priceCount = useMemo(() => ingredients.reduce((total:number, item:IIngredient) => {
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
                        text={`${currentBun.name} (верх)`}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />}
            </div>
            <ul className={styles.ingredientsList} >
                {ingredientsWithoutBuns.map((item: IIngredient, index:number) => {
                    return (
                        <ConstructorIngredient key={item.constructorId} item={item} index={index} movedIngredient={movedIngredient} setMovedIngredient={setMovedIngredient} />
                    )
                })}
            </ul>
            <div className={styles.burgerBunBottom} >
                {currentBun &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${currentBun.name} (низ)`}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />}
            </div>
            <div className={styles.burgerPrice}>
                <span>{priceCount}</span>
                <CurrencyIcon type="primary" />
            </div>
            <button type="submit" className={styles.submitButton}
                disabled={currentBun !== undefined ? false : true}
                title={currentBun !== undefined ? "Оформить заказ" : "Необходимо добавить булку"}>Оформить заказ</button>
            {isOpen && orderNumber !== null &&
                <Modal onClose={onClose}>
                    <OrderDetails orderNumber={orderNumber} />
                </Modal>
            }
        </form>
    )
}


export default BurgerConstructor;