import { IUser } from "../../utils/tsUtils";
import { AUTH_USER, AUTH_ERROR, GET_USER, USER_TOKENS, USER_LOGOUT, TAuthActionsUnion } from "../actions/auth";

type TAuthState = {
    user: null | IUser;
    isUserAuth: boolean;
    authError: null | string;
    accessToken?: null | string;
    refreshToken: null | string;
    isLoading: boolean;
}

const initialState:TAuthState = {
    user: null,
    isUserAuth: false,
    authError: null,
    accessToken: null,
    refreshToken: null,
    isLoading: false
};

export const authReducer = (state= initialState, action:TAuthActionsUnion) => {
    switch (action.type) {
        case AUTH_USER: {
            const userPayload = action.data;
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
                authError: action.error,
                isLoading: true
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.user,
                isUserAuth: true,
                isLoading: true
            }
        }
        case USER_TOKENS: {
            const tokens = action.tokens
            return {
                ...state,
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken
            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                accessToken: null, 
                refreshToken: null,
                user: null,
                isUserAuth: false
            }
        }
        default: {
            return state;
        }
    }
}