import { REGISTER_USER } from "../actions/registerActions";

const initialState = {
    user: null
};

export const registerReducer = (state= initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: {
            return {
                ...state,
                user: action.payload
            } 
        }
        default: {
            return state;
        }
    }
}