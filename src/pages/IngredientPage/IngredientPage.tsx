import styles from './IngredientPage.module.scss';
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { FunctionComponent } from 'react';
const IngredientPage:FunctionComponent = () => {
    return (
        <section className={styles.ingredientSection}>
            <IngredientDetails />
        </section>
    )
}

export default IngredientPage;