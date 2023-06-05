import { postOrderApi } from "../../utils/ingredientsApi";
import { getOrderNumberAction, orderErrorAction } from "../actions/orderActions";
import { clearConstructorAction } from "../actions/burgerConstructorActions";
import { clearIngredientsCount } from "../actions/ingredientsActions";
import { TAppDispatch } from "../../utils/tsUtils";

export const orderNumberAsync = (idArray:string[], token:any) => {
    return function (dispatch:TAppDispatch) {
        postOrderApi(idArray, token)
            .then((res) => dispatch(getOrderNumberAction(res.order.number)))
            .then(() => {
                dispatch(clearConstructorAction())
                dispatch(clearIngredientsCount())
            })
            .catch(err => {
                dispatch(orderErrorAction(err.message))
                dispatch(getOrderNumberAction(null))
            }
            )
    }
}