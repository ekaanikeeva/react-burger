export const REGISTER_USER = 'REGISTER_USER';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';

export const registerAction = (payload) => ({ type: REGISTER_USER, payload });
export const isSuccessAction = (payload) => ({type: GET_TOKEN_SUCCESS, payload});
export const isErrorAction = (payload) => ({type: GET_TOKEN_ERROR, payload});