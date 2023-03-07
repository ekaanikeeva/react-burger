import { GET_BURGER_INGREDIENTS, INCREASE_INGREDIENT_COUNT, DECREASE_INGREDIENT_COUNT, GET_BURGER_INGREDIENTS_SUCCESS } from "../actions/actions";

const initialState = {
    ingredients: [],
    isSuccess: false,
  };


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BURGER_INGREDIENTS: {
        return {...state, ingredients: action.payload}
      }
      case GET_BURGER_INGREDIENTS_SUCCESS: {
          return {...state, isSuccess: true}
      }
      case INCREASE_INGREDIENT_COUNT: {
        return {...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.payload) {
            item.count += 1
            return item;
          } else return item;
        })]}
      }
      case DECREASE_INGREDIENT_COUNT: {
        return {...state, ingredients: [...state.ingredients.map((item) => {
          if (item._id === action.payload) {
            item.count > 0 ? item.count -= 1 : item.count = 0;
            return item;
          } else return item;
        })]}
      }
      default: {
        return state;
      }
    }
  };
  
  export const addIngredietntsAction = (payload) => ({type:GET_BURGER_INGREDIENTS, payload})
  export const increaseIngredientCountAction = (payload) => ({type: INCREASE_INGREDIENT_COUNT, payload})
  export const decreaseIngredientCountAction = (payload) => ({type: DECREASE_INGREDIENT_COUNT, payload})
  export const getIngredientsSuccessAction = () => ({type: GET_BURGER_INGREDIENTS_SUCCESS})