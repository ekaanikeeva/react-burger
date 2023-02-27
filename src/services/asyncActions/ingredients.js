import { addIngredietntsAction } from "../reducers/ingredientsReducer";
import { getIngredientsApi } from "../../utils/ingredientsApi";

export const ingredientsAsync = () => {
    return function (dispatch) {
        getIngredientsApi()
        .then(res => {
            return dispatch(addIngredietntsAction(res.data))
        })
    }
}