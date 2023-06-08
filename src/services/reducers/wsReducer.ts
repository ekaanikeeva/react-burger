import { IIngredient } from "../../utils/tsUtils";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from "../actions/wsAction";

interface IState {
    wsConnected: boolean,
    orders: IIngredient[] | null,
    orederNumber: number | null
}

const initialState: IState = {
    wsConnected: false,
    orders: [],
    orederNumber: null
}

export const wsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_GET_MESSAGE:
            return {
                ...state,
                orders: action.payload?.orders
            };

        default:
            return state;
    }
}