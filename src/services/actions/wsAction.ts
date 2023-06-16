import { IWsMessageData, TOrdersItem } from "../../utils/tsUtils";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START
}

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR
    payload: {}
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE
    payload: IWsMessageData
}

export interface IWsSendMessage {
    readonly type: typeof WS_SEND_MESSAGE
}

export type TWsFeedUnion = 
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetMessage
    | IWsSendMessage;

