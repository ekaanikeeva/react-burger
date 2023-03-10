import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function Main() {
    return (
        <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor/>
            </DndProvider>
        </main>
    )
}

export default Main