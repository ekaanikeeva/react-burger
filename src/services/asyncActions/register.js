import { registerAction } from "../actions/registerActions";
import { registerUser } from "../../utils/ingredientsApi";

export const registerUserAsync = (email, password, userName) => {
    return function (dispatch) {
        registerUser(email, password, userName)
            .then((res) => {
                dispatch(registerAction(res.user))
            } )
            .then(() => console.log('success'))
            .catch(err => console.log('error',err))
    }
}