import { useState, useMemo } from 'react';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { bun, mainIngredient, sauce, one, two, three } from '../../utils/constants';
import IngredientsList from '../IngredientsList/IngredientsList';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useSelector, useDispatch } from 'react-redux';
import { ingredientsAsync } from '../../services/asyncActions/ingredients';
import { getCurrentIngredientAction } from "../../services/reducers/currentIngredientReducer";

function BurgerIngredients() {
    const [current, setCurrent] = useState('one');

    const ingredientsSelector = useSelector(store => store.ingredientsReducer);
    const [ingredientsArray, setIngredientsArray] = useState(null)
    const dispatch = useDispatch();
    const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
    useMemo(() => {
        dispatch(ingredientsAsync())
    }, [])

    useMemo(() => {
        setIngredientsArray(ingredientsSelector?.ingredients)
    }, [ingredientsSelector])


    function onClose () {
        dispatch(getCurrentIngredientAction(null))
    }
    
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Соберите бургер</h1>

            <nav className={styles.navigation}>
                <Tab value="one" active={current === one} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === two} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === three} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>

            <ul className={styles.ingredientsList}>
                <li>
                    <IngredientsList title="Булки" currentType={bun} ingredients={ingredientsArray} />
                </li>
                <li>
                    <IngredientsList title="Соусы" currentType={sauce} ingredients={ingredientsArray} />
                </li>
                <li>
                    <IngredientsList title="Начинки" currentType={mainIngredient} ingredients={ingredientsArray} />
                </li>

            </ul>
            { currentIngredient !== null &&
                <Modal title="Детали ингредиента" onClose={onClose}>
                    <IngredientDetails currentIngredient={currentIngredient} />
                </Modal>
            }

        </section>
    )
}

export default BurgerIngredients;