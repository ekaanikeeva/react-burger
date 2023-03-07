import { GET_BURGER_INGREDIENTS, INCREASE_INGREDIENT_COUNT, DECREASE_INGREDIENT_COUNT, GET_BURGER_INGREDIENTS_SUCCESS, GET_BURGER_INGREDIENTS_ERROR } from "../actions/ingredientsActions";

const initialState = {
  ingredients: [],
  isSuccess: false,
};


export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS: {
      return { ...state, ingredients: action.payload }
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return { ...state, isSuccess: true }
    }
    case GET_BURGER_INGREDIENTS_ERROR: {
      return { ...state, isSuccess: false, ingredients: [] }
    }
    case INCREASE_INGREDIENT_COUNT: {
      return {
        ...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.payload) {
            item.count += 1
            return item;
          } else return item;
        })]
      }
    }
    case DECREASE_INGREDIENT_COUNT: {
      return {
        ...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.payload) {
            item.count > 0 ? item.count -= 1 : item.count = 0;
            return item;
          } else return item;
        })]
      }
    }
    default: {
      return state;
    }
  }
};
