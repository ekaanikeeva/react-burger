import { GET_BURGER_INGREDIENTS, UPDATE_INGREDIENT_COUNT, ADD_INGREDIENT_COUNT } from "../actions/actions";

const initialState = {
    ingredients: [],
  };


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BURGER_INGREDIENTS: {
        return {...state, ingredients: action.payload}
      }
      case UPDATE_INGREDIENT_COUNT: {
        return {...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.payload) {
            item.count = item.count + 1
          }
        })]}
      }
      default: {
        return state;
      }
    }
  };
  
  export const addIngredietntsAction = (payload) => ({type:GET_BURGER_INGREDIENTS, payload})