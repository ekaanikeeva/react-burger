import { GET_ORDER, GET_ORDER_ERROR, TOrderUnion } from "../actions/orderActions"

interface IState {
    order: null | number,
    errorMessage: null | string,
    isOpen: boolean
}
const initialState:IState = {
    order: null,
    errorMessage: null,
    isOpen: false
}

export const orderReducer = (state = initialState, action:TOrderUnion) => {
    switch (action.type) {
        case GET_ORDER: {
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
