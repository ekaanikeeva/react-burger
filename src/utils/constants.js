export const one = 'one';
export const two = 'two';
export const three = 'three';
export const bun = 'bun';
export const mainIngredient = 'main';
export const sauce = 'sauce';

export type TState = { a: string };
export type TAppDispatch = ThunkDispatch<State, any, AnyAction>;
export interface IIngredient {
    _id: number,
    type: string,
    price: number,
    constructorId: number,
    name: string,
    image: string,
    count: number,
    calories: number,
    carbohydrates: number,
}