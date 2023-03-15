import { REGISTER_USER, AUTH_USER, AUTH_ERROR } from "../actions/auth";

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
            console.log('user', userPayload)
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
                user: null,
                accessToken: null,
                refreshToken: null,
                isUserAuth: false
            }
        }
        default: {
            return state;
        }
    }
}