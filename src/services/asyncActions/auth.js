import { registerAction, loginAction, isSuccessAction, isErrorAction } from "../actions/auth";
import { registerUser, login } from "../../utils/ingredientsApi";

export const registerUserAsync = (email, password, userName) => {
    return function (dispatch) {
        registerUser(email, password, userName)
            .then((res) => {
                dispatch(registerAction(res.user))
                console.log(res)
            })
            .then(()=> dispatch(isSuccessAction(true)))
            .catch(err => dispatch(isErrorAction(err)))
    }
}

export const loginUserAsync = (email, password) => {
    return function (dispatch) {
        login(email, password)
            .then((res) => {
                dispatch(loginAction(res.user));
                console.log(res)
            })
            .then(()=> dispatch(isSuccessAction(true)))
            .catch(err => dispatch(isErrorAction(err)))
    }
}