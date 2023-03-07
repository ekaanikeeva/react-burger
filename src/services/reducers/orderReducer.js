import { GET_ORDER, GET_ORDER_ERROR } from "../actions/orderActions"

const initialState = {
    order: null,
    errorMessage: null,
    isOpen: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
                isOpen: true,
                order: action.payload,
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                isOpen: false,
                errorMessage: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}
