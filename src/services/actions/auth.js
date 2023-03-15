export const REGISTER_USER = 'REGISTER_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const registerAction = (payload) => ({ type: REGISTER_USER, payload });
export const isSuccessAction = (payload) => ({type: AUTH_SUCCESS, payload});
export const isErrorAction = (payload) => ({type: AUTH_ERROR, payload});


export const LOGIN_USER = "LOGIN_USER";

export const loginAction = (payload) => ({ type: LOGIN_USER, payload });