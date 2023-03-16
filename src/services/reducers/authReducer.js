import { AUTH_USER, AUTH_ERROR, GET_USER, USER_TOKENS } from "../actions/auth";

const initialState = {
    user: null,
    isUserAuth: false,
    authError: null,
    accessToken: null,
    refreshToken: null
};

export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            const userPayload = action.payload;
            return {
                ...state,
                user: userPayload.user,
                accessToken: userPayload.accessToken,
                refreshToken: userPayload.refreshToken,
                isUserAuth: true
            } 
        }
        case AUTH_ERROR: {
            return {
                ...state,
                authError: action.payload,
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload,
                isUserAuth: true
            }
        }
        case USER_TOKENS: {
            const tokens = action.payload
            return {
                ...state,
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken
            }
        }
        default: {
            return state;
        }
    }
}