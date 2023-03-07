import { addIngredietntsAction, getIngredientsSuccessAction, getIngredientsErrorAction } from "../actions/ingredientsActions";
import { getIngredientsApi } from "../../utils/ingredientsApi";

export const ingredientsAsync = () => {
    return function (dispatch) {
        getIngredientsApi()
        .then(res => {
            const ingredientsList = res.data.map((item) => {
                item.count = 0;
                return item;
            })
            return dispatch(addIngredietntsAction(ingredientsList))
        })
        .then(() => dispatch(getIngredientsSuccessAction()))
        .catch(() => getIngredientsErrorAction())
        .catch(err => console.log(err))
    }
}