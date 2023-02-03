import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function Main({ ingredients }) {
    return (
    <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
    </main>
    )
}

export default Main