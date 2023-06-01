import { IIngredient, IMoveConstructorIngredient } from "../../utils/tsUtils";
export const GET_CONSTRUCTOR_INGREDIENTS:'GET_CONSTRUCTOR_INGREDIENTS' = 'GET_CONSTRUCTOR_INGREDIENTS';
export const ADD_CONSTRUCTOR_INGREDIENTS:'ADD_CONSTRUCTOR_INGREDIENTS' = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const REMOVE_CONSTRUCTOR_INGREDIENT:'REMOVE_CONSTRUCTOR_INGREDIENTS' = 'REMOVE_CONSTRUCTOR_INGREDIENTS';
export const GET_MOVED_INGREDIENT:'GET_MOVED_INGREDIENT' = 'GET_MOVED_INGREDIENT';
export const MOVE_CONSTRUCTOR_INGREDIENT:'MOVE_CONSTRUCTOR_INGREDIENT' = 'MOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR_INGREDIENTS:'CLEAR_CONSTRUCTOR_INGREDIENTS' = 'CLEAR_CONSTRUCTOR_INGREDIENTS';

export interface IGetIngredients {
    readonly type: typeof GET_CONSTRUCTOR_INGREDIENTS;
    constructorIngredients: IIngredient[]
}

export interface IAddIngredient {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENTS;
    readonly ingredient: IIngredient;
}

export interface IRemoveIngredient {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly id: number;
}

export interface IMoveIngredient {
    readonly type: typeof MOVE_CONSTRUCTOR_INGREDIENT;
    readonly movedIngredient: IMoveConstructorIngredient;
}

export interface IGetMovedIngredient {
    readonly type: typeof GET_MOVED_INGREDIENT;
    movedIndex: number;
}

export interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR_INGREDIENTS;
}

export type TConstructorUnion =
| IGetIngredients
| IAddIngredient
| IRemoveIngredient
| IMoveIngredient
| IGetMovedIngredient
| IClearConstructor;

export const getConstructorIngredientsAction = (constructorIngredients: IIngredient[]):IGetIngredients => ({ type: GET_CONSTRUCTOR_INGREDIENTS, constructorIngredients });
export const addConstructorIngredientsAction = (ingredient:IIngredient):IAddIngredient => ({ type: ADD_CONSTRUCTOR_INGREDIENTS, ingredient });
export const removeConstructorIngredientAction = (id:number):IRemoveIngredient => ({ type: REMOVE_CONSTRUCTOR_INGREDIENT, id });
export const moveConstructorIngredientAction = (movedIngredient:IMoveConstructorIngredient):IMoveIngredient => ({ type: MOVE_CONSTRUCTOR_INGREDIENT, movedIngredient });
export const getMovedIngredientAction = (movedIndex: number):IGetMovedIngredient => ({ type: GET_MOVED_INGREDIENT, movedIndex });
export const clearConstructorAction = ():IClearConstructor => ({type: CLEAR_CONSTRUCTOR_INGREDIENTS})