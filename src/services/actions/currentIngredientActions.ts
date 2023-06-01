import { IIngredient } from "../../utils/tsUtils";

export const GET_CURRENT_INGREDIENT:'GET_CURRENT_INGREDIENT' = 'GET_CURRENT_INGREDIENT';

export interface IGetCurrentIngredient {
    readonly type: typeof GET_CURRENT_INGREDIENT
    readonly currentIngredient: null | IIngredient
}

export const getCurrentIngredientAction = (currentIngredient: null | IIngredient) => ({type: GET_CURRENT_INGREDIENT, currentIngredient});