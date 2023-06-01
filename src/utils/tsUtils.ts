import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


export type TState = { a: string };
export type TAppDispatch = ThunkDispatch<TState, any, AnyAction>;

export interface IIngredient {
    _id: string,
    type: string,
    price: number,
    constructorId: number,
    name: string,
    image: string,
    count: number,
    calories: number,
    carbohydrates: number,
    fat: number,
    image_large?: string,
    image_mobile?: string,
    proteins: number,
    __v: number
}

export type TMovedItem = {
    index: number;
    item: IIngredient;
}

export interface IMoveConstructorIngredient {
    dropitem: IIngredient, 
    dropindex: number, 
    moveditem: TMovedItem
}

export interface IUser {
    name: string,
    email: string,
    password?: any
}

export type TAuthUser = {
    accessToken: string;
    refreshToken: string;
    success: boolean;
    user: IUser;
}

export interface ITokens {
    accessToken: string;
    refreshToken: string;
}