import { IIngredient } from "../../utils/tsUtils";
import {
    WS_CONNECTION_USER_SUCCESS,
    WS_CONNECTION_USER_ERROR,
    WS_CONNECTION_USER_CLOSED,
    WS_GET_USER_MESSAGE
} from "../actions/wsUserActions";

interface IState {
    wsConnected: boolean,
    orders: IIngredient[] | null,
    total: number,
    totalToday: number,
    error: Object | null
}

const initialState: IState = {
    wsConnected: false,
    orders: [],
    error: null,
    total: 0,
    totalToday: 0
}

export const wsUserOrdersReducer = (state = initialState, action: any) => {
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
                orders: action.payload?.orders,
                total: action.payload?.total,
                totalToday: action.payload?.totalToday
            };

        default:
            return state;
    }
}