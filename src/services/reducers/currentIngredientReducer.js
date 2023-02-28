const GET_CURRENT_INGREDIENT = 'GET_CURRENT_INGREDIENT';

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

export const getCurrentIngredientAction = (payload) => ({type: GET_CURRENT_INGREDIENT, payload});