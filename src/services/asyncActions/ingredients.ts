import { addIngredientsAction, getIngredientsSuccessAction, getIngredientsErrorAction } from "../actions/ingredientsActions";
import { getIngredientsApi } from "../../utils/ingredientsApi";
import { IIngredient, TAppDispatch } from "../../utils/tsUtils";

export const ingredientsAsync = () => {
    return function (dispatch:TAppDispatch) {
        getIngredientsApi()
        .then(res => {
            const ingredientsList = res.data.map((item:IIngredient) => {
                item.count = 0;
                return item;
            })
            return dispatch(addIngredientsAction(ingredientsList))
        })
        .then(() => dispatch(getIngredientsSuccessAction()))
        .catch((err) => {
            dispatch(getIngredientsErrorAction());
            console.log(err);
        })
    }
}