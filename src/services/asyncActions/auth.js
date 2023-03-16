import { authAction, isErrorAction, getUserAction, getTokensAction } from "../actions/auth";
import { registerUser, login, getUser, refreshToken } from "../../utils/ingredientsApi";

export const registerUserAsync = (email, password, userName) => {
    return function (dispatch) {
        registerUser(email, password, userName)
            .then((res) => {
                dispatch(authAction(res));
            })
            .catch(err => dispatch(isErrorAction(err)))
    }
}

export const authUserAsync = (email, password) => {
    return function (dispatch) {
        login(email, password)
            .then((res) => {
                dispatch(authAction(res));
            })
            .catch(err => dispatch(isErrorAction(err)))
    }
}


export const getUserAsync = (accessToken, refreshUserToken) => {
    return function (dispatch) {
        getUser(accessToken)
            .then(res => dispatch(getUserAction(res.user)))
            .catch(err => {
                if (err === 403) {
                    refreshToken(accessToken, refreshUserToken)
                        .then((res) => {
                            document.cookie = `accessToken=${res.accessToken}`
                            document.cookie = `refreshToken=${res.refreshToken}`
                            getUser(res.accessToken)
                                .then(res => dispatch(getUserAction(res.user)))
                                .catch(err => dispatch(isErrorAction(err)))
                        })
                        .catch((err) => dispatch(isErrorAction(err)))
                }
            })
    }
}