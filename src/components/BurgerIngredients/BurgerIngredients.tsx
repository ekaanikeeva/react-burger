import { useState, useMemo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { bun, mainIngredient, sauce } from '../../utils/constants';
import IngredientsList from '../IngredientsList/IngredientsList';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { IIngredient } from '../../utils/tsUtils';

function BurgerIngredients() {

    const [current, setCurrent] = useState(bun);

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
            setCurrent(bun)
        } else if (inViewSouces) {
            setCurrent(mainIngredient)
        } else if (inViewMains) {
            setCurrent(sauce)
        }
    }, [inViewBons, inViewMains, inViewSouces])

    const ingredientsSelector = useAppSelector(store => store.ingredientsReducer);
    const isSuccessIngredients = useAppSelector(store => store.ingredientsReducer.isSuccess)
    const [ingredientsArray, setIngredientsArray] = useState<null | IIngredient[]>(null)
    const dispatch = useAppDispatch();
    
    useMemo(() => {
        setIngredientsArray(ingredientsSelector.ingredients)
    }, [ingredientsSelector])


    function onClose() {
        dispatch(getCurrentIngredientAction(null))
    }

    function scrollIntoCurrent(current: string) {
        (document.querySelector(`${current}`)as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Соберите бургер</h1>

            <nav className={styles.navigation}>
                <div id="bun">
                    <Tab value='bun' active={current === bun} onClick={() => scrollIntoCurrent('#bunList')}>
                        Булки
                    </Tab>
                </div>
                <div id="main">
                    <Tab value='main' active={current === mainIngredient} onClick={() => scrollIntoCurrent('#sauceList')}>
                        Соусы
                    </Tab>
                </div>
                <div id="sauce">
                    <Tab value="sauce" active={current === sauce} onClick={() => scrollIntoCurrent('#mainList')}>
                        Начинки
                    </Tab>
                </div>
            </nav>

            <ul className={styles.ingredientsList} data-ingredients="data-ingredients">
                <li>
                    <IngredientsList title="Булки" currentType={bun} ingredients={ingredientsArray} currentRef={bonsRef} />
                </li>
                <li>
                    <IngredientsList title="Соусы" currentType={sauce} ingredients={ingredientsArray} currentRef={soucesRef} />
                </li>
                <li>
                    <IngredientsList title="Начинки" currentType={mainIngredient} ingredients={ingredientsArray} currentRef={mainsRef} />
                </li>

            </ul>

        </section>
    )
}

export default BurgerIngredients;