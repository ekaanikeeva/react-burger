export const AUTH_USER:'AUTH_USER' = 'AUTH_USER';
export const AUTH_ERROR:'AUTH_ERROR' = 'AUTH_ERROR';
export const GET_USER:'GET_USER' = 'GET_USER';
export const USER_TOKENS:'USER_TOKENS' = 'USER_TOKENS';
export const UPDATE_USER:'UPDATE_USER' = 'UPDATE_USER';
export const USER_LOGOUT:'USER_LOGOUT' = 'USER_LOGOUT';

export interface IAuthUser {
    readonly type: typeof AUTH_USER;
} 

export interface IGetUSer {
    readonly type: typeof GET_USER;
}

export interface IUserTokens {
    readonly type: typeof USER_TOKENS;
}

export interface IUserUpdate {
    readonly type: typeof UPDATE_USER;
}

export interface IAuthError {
    readonly type: typeof AUTH_ERROR;
}

export type TAuthActionsUnion =
| IAuthUser
| IAuthError 
| IGetUSer
| IUserTokens
| IUserUpdate

export const authAction = (payload:IAuthUser) => ({ type: AUTH_USER, payload });
export const isErrorAction = (payload:string): IAuthError => ({type: AUTH_ERROR});
export const getUserAction = (payload:IGetUSer) => ({type: GET_USER, payload});
export const getTokensAction = (payload:IUserTokens) => ({type: USER_TOKENS, payload});
export const logoutAction = () => ({type: USER_LOGOUT});
