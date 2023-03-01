import { postOrderApi } from "../../utils/ingredientsApi";
import { getOrderNumberAction, orderErrorAction } from "../reducers/orderReducer";

export const orderNumberAsync = (idArray) => {
    return function (dispatch) {
        postOrderApi(idArray)
            .then((res) => dispatch(getOrderNumberAction(res.order.number)))
            .catch(err => {
                dispatch(orderErrorAction(err.message))
                dispatch(getOrderNumberAction(null))
            }
            )
    }
}