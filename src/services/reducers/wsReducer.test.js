import { wsReducer } from "./wsReducer";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from "../actions/wsAction";

describe("ws feed reducer", () => {
    const initialState = {
        wsConnected: false,
        orders: [],
        error: {},
        total: 10,
        totalToday: 5,
    }

    it('should WS_CONNECTION_SUCCESS', () => {
        const action = {
            type: WS_CONNECTION_SUCCESS,
        }

        expect(wsReducer(initialState, action))
            .toEqual({
                ...initialState,
                wsConnected: true
            })
    })

    it('should WS_CONNECTION_ERROR', () => {
        const action = {
            type: WS_CONNECTION_ERROR,
            payload: "error message",
        }

        expect(wsReducer(initialState, action))
            .toEqual({
                ...initialState,
                wsConnected: false,
                error: action.payload
            })
    })

    it('should WS_CONNECTION_CLOSED', () => {
        const action = {
            type: WS_CONNECTION_CLOSED,
        }

        expect(wsReducer(initialState, action))
            .toEqual({
                ...initialState,
                wsConnected: false,
            })
    })

    it('should WS_GET_MESSAGE', () => {
        const action = {
            type: WS_GET_MESSAGE,
            payload: {
                orders: [{
                    _id: 'string',
                    ingredients: ['ddss11, 1212dd'],
                    status: 'string',
                    name: 'string',
                    number: 151,
                    createdAt: '4654646jljblkl',
                    updatedAt: 'string24646'
                }],
                total: 1001,
                totalToday: 100,
            }
        }

        expect(wsReducer(initialState, action))
            .toEqual({
                ...initialState,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            })
    })

})

