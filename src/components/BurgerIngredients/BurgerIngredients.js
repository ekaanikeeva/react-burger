import { useState, useMemo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
    const [current, setCurrent] = useState('bun');

    const [bonsRef, inViewBons] = useInView({
        threshold: 0
    })
    const [mainsRef, inViewMains] = useInView({
        threshold: 0
    })
    const [soucesRef, inViewSouces] = useInView({
        threshold: 0
    })

    useEffect(() => {
        if (inViewBons) {
            setCurrent('bun')
        } else if (inViewSouces) {
            setCurrent('main')
        } else if (inViewMains) {
            setCurrent('sauce')
        }
    }, [inViewBons, inViewMains, inViewSouces])

    const ingredientsSelector = useSelector(store => store.ingredientsReducer);
    const isSuccessIngredients = useSelector(store => store.ingredientsReducer.isSuccess)
    const [ingredientsArray, setIngredientsArray] = useState(null)
    const dispatch = useDispatch();
    const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
    useMemo(() => {
        dispatch(ingredientsAsync())
    }, [])

    useMemo(() => {
        setIngredientsArray(ingredientsSelector?.ingredients)
    }, [ingredientsSelector])


    function onClose() {
        dispatch(getCurrentIngredientAction(null))
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Соберите бургер</h1>

            <nav className={styles.navigation}>
                <div id="bun">
                    <Tab value='bun' active={current === 'bun'}>
                        Булки
                    </Tab>
                </div>
                <div id="main">
                    <Tab value='main' active={current === 'main'}>
                        Соусы
                    </Tab>
                </div>
                <div id="sauce">
                    <Tab id="sauce" value='sauce' active={current === 'sauce'}>
                        Начинки
                    </Tab>
                </div>
            </nav>

            <ul className={styles.ingredientsList}>
                <li>
                    <IngredientsList title="Булки" currentType={bun} ingredients={ingredientsArray} currentRef={bonsRef}/>
                </li>
                <li>
                    <IngredientsList title="Соусы" currentType={sauce} ingredients={ingredientsArray} currentRef={soucesRef}/>
                </li>
                <li>
                    <IngredientsList title="Начинки" currentType={mainIngredient} ingredients={ingredientsArray} currentRef={mainsRef}/>
                </li>

            </ul>
            {currentIngredient !== null &&
                <Modal title="Детали ингредиента" onClose={onClose}>
                    <IngredientDetails currentIngredient={currentIngredient} />
                </Modal>
            }

        </section>
    )
}

export default BurgerIngredients;