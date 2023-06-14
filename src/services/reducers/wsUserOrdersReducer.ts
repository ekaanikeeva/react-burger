import { TOrdersItem } from "../../utils/tsUtils";
import {
    WS_CONNECTION_USER_SUCCESS,
    WS_CONNECTION_USER_ERROR,
    WS_CONNECTION_USER_CLOSED,
    WS_GET_USER_MESSAGE,
    TWsUsersOrdersUnion
} from "../actions/wsUserActions";

interface IWsState {
    wsConnected: boolean,
    orders: TOrdersItem[],
    error: {} | null,
    total: number,
    totalToday: number,
}

const initialState:IWsState = {
    wsConnected: false,
    orders: [],
    error: null,
    total: 0,
    totalToday: 0
}


export const wsUserOrdersReducer = (state = initialState, action: TWsUsersOrdersUnion) => {
    switch (action.type) {
        case WS_CONNECTION_USER_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_CONNECTION_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };

        case WS_CONNECTION_USER_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_GET_USER_MESSAGE:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            };

        default:
            return state;
    }
}