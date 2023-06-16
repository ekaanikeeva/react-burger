import { IWsMessageData } from "../../utils/tsUtils";
export const WS_CONNECTION_USER_START: 'WS_CONNECTION_USER_START' = 'WS_CONNECTION_USER_START';
export const WS_CONNECTION_USER_SUCCESS: 'WS_CONNECTION_USER_SUCCESS' = 'WS_CONNECTION_USER_SUCCESS';
export const WS_CONNECTION_USER_ERROR: 'WS_CONNECTION_USER_ERROR' = 'WS_CONNECTION_USER_ERROR';
export const WS_CONNECTION_USER_CLOSED: 'WS_CONNECTION_USER_CLOSED' = 'WS_CONNECTION_USER_CLOSED';
export const WS_GET_USER_MESSAGE: 'WS_GET_USER_MESSAGE' = 'WS_GET_USER_MESSAGE';
export const WS_SEND_USER_MESSAGE: 'WS_SEND_USER_MESSAGE' = 'WS_SEND_USER_MESSAGE';

export interface IWsUserConnectionStart {
    readonly type: typeof WS_CONNECTION_USER_START
}

export interface IWsUserConnectionSuccess {
    readonly type: typeof WS_CONNECTION_USER_SUCCESS
}

export interface IWsUserConnectionError {
    readonly type: typeof WS_CONNECTION_USER_ERROR
    payload: {}
}

export interface IWsUserConnectionClosed {
    readonly type: typeof WS_CONNECTION_USER_CLOSED
}

export interface IWsUserGetMessage {
    readonly type: typeof WS_GET_USER_MESSAGE
    payload: IWsMessageData
}

export interface IWsUserSendMessage {
    readonly type: typeof WS_SEND_USER_MESSAGE
}

export type TWsUsersOrdersUnion = 
    | IWsUserConnectionStart
    | IWsUserConnectionSuccess
    | IWsUserConnectionError
    | IWsUserConnectionClosed
    | IWsUserGetMessage
    | IWsUserSendMessage;

