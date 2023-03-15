import { REGISTER_USER, LOGIN_USER, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth";

const initialState = {
    user: null,
    isUserAuth: false,
    authError: null
};

export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: {
            return {
                ...state,
                user: action.payload
            } 
        }
        case LOGIN_USER: {
            return {
                ...state,
                user: action.payload
            } 
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                isUserAuth: true
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                authError: action.payload,
                user: null
            }
        }
        default: {
            return state;
        }
    }
}