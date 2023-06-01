import { ITokens, IUser, TAuthUser } from "../../utils/tsUtils";
export const AUTH_USER:'AUTH_USER' = 'AUTH_USER';
export const AUTH_ERROR:'AUTH_ERROR' = 'AUTH_ERROR';
export const GET_USER:'GET_USER' = 'GET_USER';
export const USER_TOKENS:'USER_TOKENS' = 'USER_TOKENS';
export const UPDATE_USER:'UPDATE_USER' = 'UPDATE_USER';
export const USER_LOGOUT:'USER_LOGOUT' = 'USER_LOGOUT';

export interface IUserAuth {
    readonly type: typeof AUTH_USER;
    data: TAuthUser
} 

export interface IGetUSer {
    readonly type: typeof GET_USER;
    user: IUser;
}

export interface IUserTokens {
    readonly type: typeof USER_TOKENS;
    tokens: ITokens
}

export interface IUserUpdate {
    readonly type: typeof UPDATE_USER;
}

export interface IAuthError {
    readonly type: typeof AUTH_ERROR;
    error: string;
}

export interface ILogout {
    readonly type: typeof USER_LOGOUT;
}

export type TAuthActionsUnion =
| IUserAuth
| IAuthError 
| IGetUSer
| IUserTokens
| IUserUpdate
| ILogout

export const authAction = (data:TAuthUser):IUserAuth => ({ type: AUTH_USER, data });
export const isErrorAction = (error:string):IAuthError => ({type: AUTH_ERROR, error});
export const getUserAction = (user: IUser):IGetUSer => ({type: GET_USER, user});
export const getTokensAction = (tokens:ITokens):IUserTokens => ({type: USER_TOKENS, tokens});
export const logoutAction = ():ILogout => ({type: USER_LOGOUT});
