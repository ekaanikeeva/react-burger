import { 
  GET_BURGER_INGREDIENTS, 
  INCREASE_INGREDIENT_COUNT, 
  DECREASE_INGREDIENT_COUNT, 
  GET_BURGER_INGREDIENTS_SUCCESS, 
  GET_BURGER_INGREDIENTS_ERROR,
  CLEAR_ALL_INGREDIENTS_COUNT 
} from "../actions/ingredientsActions";

const initialState = {
  ingredients: [],
  isSuccess: false,
};


export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS: {
      return { ...state, ingredients: action.ingredients }
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
          if (item._id === action.id) {
            item.count += 1
            return item;
          } else return item;
        })]
      }
    }
    case DECREASE_INGREDIENT_COUNT: {
      return {
        ...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.id) {
            item.count > 0 ? item.count -= 1 : item.count = 0;
            return item;
          } else return item;
        })]
      }
    }
    case CLEAR_ALL_INGREDIENTS_COUNT: {
      return {
        ...state, ingredients: [...state.ingredients.map((item) => {
          item.count = 0;
          return item;
        } )]
      }
    }
    default: {
      return state;
    }
  }
};
