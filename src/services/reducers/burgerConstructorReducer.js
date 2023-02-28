const GET_CONSTRUCTOR_INGREDIENTS  = 'GET_CONSTRUCTOR_INGREDIENTS';
const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENTS';

const initialState = {
    constructorIngredients: [],
  };

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONSTRUCTOR_INGREDIENTS: {
            return {...state, constructorIngredients: action.payload}
        }

        case ADD_CONSTRUCTOR_INGREDIENTS: {
            return {...state, constructorIngredients: [...state.constructorIngredients, action.payload]}
        }

        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            return {...state, constructorIngredients: action.payload.filter(item => item._id !== action.payload)}
        }
        default: {
            return state;
        }
    }
}

export const getConstructorIngredientsAction = (payload) => ({type: GET_CONSTRUCTOR_INGREDIENTS, payload});
export const addConstructorIngredientsAction = (payload) => ({type: ADD_CONSTRUCTOR_INGREDIENTS, payload});
export const removeConstructorIngredientAction = (payload) => ({type: REMOVE_CONSTRUCTOR_INGREDIENT, payload});