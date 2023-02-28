import { postOrderApi } from "../../utils/ingredientsApi";
import { getOrderNumber } from "../reducers/orderReducer";

export const orderNumberAsync = (idArray) => {
    return function (dispatch) {
        postOrderApi(idArray)
        .then(res => dispatch(getOrderNumber(res.order.number)))
    }
}