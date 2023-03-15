export const AUTH_USER = "AUTH_USER";
export const AUTH_ERROR = 'AUTH_ERROR';

export const authAction = (payload) => ({ type: AUTH_USER, payload });
export const isErrorAction = (payload) => ({type: AUTH_ERROR, payload});