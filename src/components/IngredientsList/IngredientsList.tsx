import React, {FunctionComponent, LegacyRef} from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import { IIngredient } from "../../utils/tsUtils";

type TProps = {
    title: string,
    currentType: string,
    ingredients: null | IIngredient[],
    currentRef: LegacyRef<HTMLUListElement>
}


const IngredientsList: FunctionComponent<TProps> = ({ title, currentType, ingredients, currentRef }) => {
    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList} ref={currentRef} id={currentType + "List"}>
                {ingredients !== null && ingredients.map((item) => {
                    if (item.type === currentType) {
                        return (
                            <Ingredient key={item._id} item={item}/>
                        )
                    }

                })}
            </ul>
        </>
    )
}


export default IngredientsList