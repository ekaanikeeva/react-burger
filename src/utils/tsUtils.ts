import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE} from '../services/actions/wsAction';
import { WS_CONNECTION_USER_CLOSED, WS_CONNECTION_USER_ERROR, WS_CONNECTION_USER_START, WS_CONNECTION_USER_SUCCESS, WS_GET_USER_MESSAGE, WS_SEND_USER_MESSAGE } from '../services/actions/wsUserActions';

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

export type TOrdersItem = {
    _id:string;
    ingredients:string[];
    status:string;
    name:string;
    number:number;
    createdAt:string;
    updatedAt:string;
}


export type TWSFeedActions = {
    wsInit: typeof  WS_CONNECTION_START,
    wsSendMessage: typeof  WS_SEND_MESSAGE,
    onOpen: typeof  WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof  WS_CONNECTION_ERROR,
    onMessage: typeof  WS_GET_MESSAGE,
  };

  export type TWSUsersActions = {
    wsInit: typeof WS_CONNECTION_USER_START,
    wsSendMessage: typeof WS_SEND_USER_MESSAGE,
    onOpen: typeof WS_CONNECTION_USER_SUCCESS,
    onClose: typeof WS_CONNECTION_USER_CLOSED,
    onError: typeof WS_CONNECTION_USER_ERROR,
    onMessage: typeof WS_GET_USER_MESSAGE,
  };