import styles from './IngredientPage.module.scss';
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

function IngredientPage () {
    return (
        <section className={styles.ingredientSection}>
            <IngredientDetails />
        </section>
    )
}

export default IngredientPage;