import { IIngredient } from "../../utils/tsUtils";

export const GET_BURGER_INGREDIENTS:'GET_BURGER_INGREDIENTS' = 'GET_BURGER_INGREDIENTS';
export const GET_BURGER_INGREDIENTS_SUCCESS:'GET_BURGER_INGREDIENTS_SUCCESS' = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_ERROR:'GET_BURGER_INGREDIENTS_ERROR' = 'GET_BURGER_INGREDIENTS_ERROR';
export const INCREASE_INGREDIENT_COUNT:'UPDATE_INGREDIENT_COUNT' = 'UPDATE_INGREDIENT_COUNT';
export const DECREASE_INGREDIENT_COUNT:'DECREASE_INGREDIENT_COUNT' = 'DECREASE_INGREDIENT_COUNT';
export const CLEAR_ALL_INGREDIENTS_COUNT:'CLEAR_ALL_INGREDIENTS_COUNT' = 'CLEAR_ALL_INGREDIENTS_COUNT';

export interface IGetBurgerIngredients {
    readonly type: typeof GET_BURGER_INGREDIENTS;
    readonly ingredients: IIngredient[];
}

export interface IIncreaseIngredientCount {
    readonly type: typeof INCREASE_INGREDIENT_COUNT;
    id: string
}

export interface IDecreaseIngredientCount {
    readonly type: typeof DECREASE_INGREDIENT_COUNT;
    id: string
}

export interface IGetBurgerSuccess {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
}

export interface IGetBurgerError {
    readonly type: typeof GET_BURGER_INGREDIENTS_ERROR;
}

export interface IClearIngredientsCount {
    readonly type: typeof CLEAR_ALL_INGREDIENTS_COUNT
}

export const addIngredientsAction = (ingredients:IIngredient[]):IGetBurgerIngredients => ({ type: GET_BURGER_INGREDIENTS, ingredients });
export const increaseIngredientCountAction = (id:string):IIncreaseIngredientCount => ({ type: INCREASE_INGREDIENT_COUNT, id });
export const decreaseIngredientCountAction = (id:string):IDecreaseIngredientCount => ({ type: DECREASE_INGREDIENT_COUNT, id});
export const getIngredientsSuccessAction = ():IGetBurgerSuccess => ({ type: GET_BURGER_INGREDIENTS_SUCCESS });
export const getIngredientsErrorAction = ():IGetBurgerError => ({ type: GET_BURGER_INGREDIENTS_ERROR });
export const clearIngredientsCount = ():IClearIngredientsCount => ({type: CLEAR_ALL_INGREDIENTS_COUNT});