import styles from './IngredientPage.module.scss';
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function IngredientPage () {
    return (
        <section className={styles.ingredientSection}>
            <IngredientDetails />
        </section>
    )
}

export default IngredientPage;