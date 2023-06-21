import { orderReducer } from "./orderReducer";
import { GET_ORDER, GET_ORDER_ERROR } from "../actions/orderActions";

describe("order reducer", () => {
    const initialState = {
        order: 0,
        errorMessage: "",
        isOpen: false}

        it('should GET_ORDER', () => {
            const action = {
                type: GET_ORDER,
                order: 121212
            }

            expect(orderReducer(initialState,action))
            .toEqual({
                ...initialState,
                isOpen: true,
                order: action.order
            })
        })

        it('should GET_ORDER_ERROR', () => {
            const action = {
                type: GET_ORDER_ERROR,
                order: 121212,
                error: "error error"
            }

            expect(orderReducer(initialState,action))
            .toEqual({
                ...initialState,
                isOpen: true,
                errorMessage: action.error,
                isOpen: false,
            })
        })
})