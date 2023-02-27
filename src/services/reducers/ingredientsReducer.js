import { GET_BURGER_INGREDIENTS } from "../actions/actions";

const initialState = {
    ingredients: [],
  };


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BURGER_INGREDIENTS: {
        return {...state, ingredients: action.payload}
      }
      default: {
        return state;
      }
    }
  };
  
  export const addIngredietntsAction = (payload) => ({type:GET_BURGER_INGREDIENTS, payload})