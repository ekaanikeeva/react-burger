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
            .then(() => dispatch(getTokensAction({"accessToken": accessToken, "refreshToken": refreshUserToken})))
            .catch(err => {
                if (err === 403) {
                    refreshToken(accessToken, refreshUserToken)
                    .then(res => getUser(res.accessToken))
                    .catch(err => dispatch(isErrorAction(err)))
                } else dispatch(isErrorAction(err))
            })
    }
}