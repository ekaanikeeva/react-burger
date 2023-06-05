export const GET_ORDER:'GET_ORDER' = 'GET_ORDER';
export const GET_ORDER_ERROR:'GET_ORDER_ERROR' = 'GET_ORDER_ERROR';

export interface IGetOrder {
    readonly type: typeof GET_ORDER;
    order: number | null;
}

export interface IOrderError {
    readonly type: typeof GET_ORDER_ERROR;
    error: string;
}

export type TOrderUnion =
| IGetOrder
| IOrderError;

export const getOrderNumberAction = (order:number | null):IGetOrder => ({ type: GET_ORDER, order });
export const orderErrorAction = (error:string):IOrderError => ({type: GET_ORDER_ERROR, error});