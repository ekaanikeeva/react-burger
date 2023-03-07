import { addIngredietntsAction } from "../reducers/ingredientsReducer";
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
        .catch(err => console.log(err))
    }
}