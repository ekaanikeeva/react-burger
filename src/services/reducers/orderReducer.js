const GET_ORDER = 'GET_ORDER';

const initialState = {
    order: null,
    isOpen: false,
}

export const orderReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ORDER: {
            return { 
                ...state, 
                order: action.payload,
                isOpen: true,
             }
        }

        default: {
            return state;
        }
    }
}

export const getOrderNumber = (payload) => ({type:GET_ORDER, payload});