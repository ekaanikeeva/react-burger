import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';

function Main() {
    return (
    <main className={styles.main}>
        <BurgerIngredients />
    </main>
    )
}

export default Main