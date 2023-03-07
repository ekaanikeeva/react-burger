import { GET_CURRENT_INGREDIENT } from "../actions/currentIngredientActions";

const initialState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_INGREDIENT: {
            return {...state, currentIngredient: action.payload}
        }
        default: {
            return state;
        }
    }
}

