import { authAction, isErrorAction, getUserAction, getTokensAction, logoutAction } from "../actions/auth";
import { registerUser, login, getUser, refreshToken, updateUserApi, logout } from "../../utils/ingredientsApi";
import { IUser, TAppDispatch } from "../../utils/tsUtils";

export const registerUserAsync = (email:string, password:string, userName:string) => {
    return function (dispatch:TAppDispatch) {
        registerUser(email, password, userName)
            .then((res) => {
                dispatch(authAction(res));
            })
            .catch(err => dispatch(isErrorAction(err)))
    }
}

export const authUserAsync = (email:string, password:string) => {
    return function (dispatch:TAppDispatch) {
        login(email, password)
            .then((res) => {
                dispatch(authAction(res));
            })
            .catch(err => dispatch(isErrorAction(err)))
    }
}


export const getUserAsync = (accessToken:string, refreshUserToken:string) => {
    return function (dispatch:TAppDispatch) {
        getUser(accessToken)
            .then((res) => {
                dispatch(getUserAction(res.user))
                dispatch(getTokensAction({accessToken:accessToken, refreshToken: refreshUserToken}))
            })
            .catch(err => {
                if (err === 403) {
                    refreshToken(accessToken, refreshUserToken)
                        .then((res) => {
                            const access = res.accessToken;
                            const refresh = res.refreshToken
                            document.cookie = `accessToken=${access}`
                            if (res.refreshToken) {
                                document.cookie = `refreshToken=${refresh}`
                            }
                            
                            getUser(res.accessToken)
                                .then((res) => {
                                    dispatch(getUserAction(res.user))
                                    dispatch(getTokensAction({accessToken:access, refreshToken:refresh}))
                                } )
                                .catch(err => dispatch(isErrorAction(err)))
                        })
                        .catch((err) => dispatch(isErrorAction(err)))
                } else dispatch(isErrorAction(err))
            })
    }
}

export const updateUserAsync = (accessToken:string | null, changesInfo:Record<string, string> | null) => {
    return function (dispatch:TAppDispatch) {
        updateUserApi(accessToken === null ? '' : accessToken, changesInfo)
        .then(res => dispatch(getUserAction(res.user)))
        .catch(err => console.log(err))
    }
}

export const logoutUserAsync = (token:string | null) => {
    return function (dispatch:TAppDispatch) {
        logout(token)
        .then(res => dispatch(logoutAction()))
    }
}