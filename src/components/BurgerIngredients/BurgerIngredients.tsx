import { useState, useMemo, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { bun, mainIngredient, sauce, one, two, three } from '../../utils/constants';
import IngredientsList from '../IngredientsList/IngredientsList';
import { useSelector, useDispatch } from 'react-redux';
import { ingredientsAsync } from '../../services/asyncActions/ingredients';
import { getCurrentIngredientAction } from "../../services/actions/currentIngredientActions";
import { IIngredient, TAppDispatch } from '../../utils/tsUtils';
import { IRootState } from '../../services/reducers/rootReducer';

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

    const ingredientsSelector = useSelector((store: IRootState) => store.ingredientsReducer);
    const isSuccessIngredients = useSelector((store: IRootState) => store.ingredientsReducer.isSuccess)
    const [ingredientsArray, setIngredientsArray] = useState<null | IIngredient[]>(null)
    const dispatch: TAppDispatch = useDispatch();
    
    useMemo(() => {
        setIngredientsArray(ingredientsSelector?.ingredients)
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

            <ul className={styles.ingredientsList}>
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