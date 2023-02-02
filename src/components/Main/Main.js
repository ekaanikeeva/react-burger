import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';

function Main({ ingredients }) {
    return (
    <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients}/>
    </main>
    )
}

export default Main