import { authReducer } from "./authReducer";
import { AUTH_USER, AUTH_ERROR, GET_USER, USER_TOKENS, USER_LOGOUT, TAuthActionsUnion } from "../actions/auth";



describe('auth_reduser', () => {
    const initialState = {
        user: null,
        isUserAuth: false,
        authError: null,
        accessToken: null,
        refreshToken: null,
        isLoading: false
    };

    it("Should create auth initial state", () => {
        expect(authReducer(undefined, {})).toEqual(initialState)
    })

    it("should handle AUTH_USER", () => {
        const action = {
            type: AUTH_USER,
            data: {
                user: {
                    email: "email",
                    name: "name"
                },
                accessToken: "access",
                refreshToken: "refreshToken",
                isUserAuth: true
            }
        }

        expect(authReducer(initialState, action))
            .toEqual({
                ...initialState,
                user: action.data.user,
                accessToken: action.data.accessToken,
                refreshToken: action.data.refreshToken,
                isUserAuth: true
            })

    })

    it("should handle AUTH_ERROR", () => {
        const action = {
            type: AUTH_ERROR,
            error: '500'
        }

        expect(authReducer(initialState, action))
            .toEqual({
                ...initialState,
                authError: action.error,
                isLoading: true
            })
    })

    it("should handle GET_USER", () => {
        const action = {
            type: GET_USER,
            user: {
                email: "email",
                name: "name"
            }
        }

        expect(authReducer(initialState, action))
            .toEqual({
                ...initialState,
                user: action.user,
                isUserAuth: true,
                isLoading: true
            })
    })


    it("should handle USER_TOKENS", () => {
        const action = {
            type: USER_TOKENS,
            tokens: {
                accessToken: "access",
                refreshToken: "refresh"
            }
        }

        expect(authReducer(initialState, action))
            .toEqual({
                ...initialState,
                accessToken: action.tokens.accessToken,
                refreshToken: action.tokens.refreshToken
            })
    })

    it("should handle USER_LOGOUT", () => {
        const action = {
            type: USER_LOGOUT
        }

        expect(authReducer(initialState, action))
            .toEqual({
                ...initialState,
                accessToken: null,
                refreshToken: null,
                user: null,
                isUserAuth: false
            })
    })
})