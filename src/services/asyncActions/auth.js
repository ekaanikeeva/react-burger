import { authAction, isErrorAction } from "../actions/auth";
import { registerUser, login } from "../../utils/ingredientsApi";

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