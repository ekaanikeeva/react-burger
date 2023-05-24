import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FunctionComponent } from 'react';
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import styles from './Main.module.scss';
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

const Main:FunctionComponent = () => {
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