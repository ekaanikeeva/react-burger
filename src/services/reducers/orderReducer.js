import { GET_ORDER, GET_ORDER_ERROR } from "../actions/orderActions"

const initialState = {
    order: null,
    errorMessage: null,
    isOpen: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER: {
            console.log(action)
            return {
                ...state,
                isOpen: true,
                order: action.order,
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                isOpen: false,
                errorMessage: action.error,
            }
        }
        default: {
            return state;
        }
    }
}
