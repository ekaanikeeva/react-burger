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
    fat: number
}

export interface IMoveConstructorIngredient {
    dropitem: IIngredient, 
    dropindex: number, 
    moveditem: IIngredient
}

export interface IUser {
    name: string,
    email: string
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