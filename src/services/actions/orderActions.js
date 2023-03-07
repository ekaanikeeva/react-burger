export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const getOrderNumberAction = (payload) => ({ type: GET_ORDER, payload });
export const orderErrorAction = (payload) => ({type: GET_ORDER_ERROR, payload});