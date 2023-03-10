export const GET_CONSTRUCTOR_INGREDIENTS = 'GET_CONSTRUCTOR_INGREDIENTS';
export const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENTS';
export const GET_MOVED_INGREDIENT = 'GET_MOVED_INGREDIENT';
export const MOVE_CONSTRUCTOR_INGREDIENT = 'MOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR_INGREDIENTS = 'CLEAR_CONSTRUCTOR_INGREDIENTS';

export const getConstructorIngredientsAction = (payload) => ({ type: GET_CONSTRUCTOR_INGREDIENTS, payload });
export const addConstructorIngredientsAction = (payload) => ({ type: ADD_CONSTRUCTOR_INGREDIENTS, payload });
export const removeConstructorIngredientAction = (payload) => ({ type: REMOVE_CONSTRUCTOR_INGREDIENT, payload });
export const moveConstructorIngredientAction = (payload) => ({ type: MOVE_CONSTRUCTOR_INGREDIENT, payload });
export const getMovedIngredientAction = (payload) => ({ type: GET_MOVED_INGREDIENT, payload });
export const clearConstructorAction = () => ({type: CLEAR_CONSTRUCTOR_INGREDIENTS})