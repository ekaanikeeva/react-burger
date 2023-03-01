const GET_ORDER = 'GET_ORDER';
const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

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

export const getOrderNumberAction = (payload) => ({ type: GET_ORDER, payload });
export const orderErrorAction = (payload) => ({type: GET_ORDER_ERROR, payload})