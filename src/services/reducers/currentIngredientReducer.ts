import { IIngredient } from "../../utils/tsUtils";
import { GET_CURRENT_INGREDIENT, IGetCurrentIngredient } from "../actions/currentIngredientActions";

interface IState {
    currentIngredient: IIngredient | null
}
const initialState:IState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action:IGetCurrentIngredient) => {
    switch (action.type) {
        case GET_CURRENT_INGREDIENT: {
            return {...state, currentIngredient: action.currentIngredient}
        }
        default: {
            return state;
        }
    }
}

