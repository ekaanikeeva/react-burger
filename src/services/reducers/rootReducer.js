import { combineReducers } from "redux"
import { ingredientsReducer } from "./ingredientsReducer"
import { burgerConstructorReducer } from "./burgerConstructorReducer"
// import { order } from "./order"
// import { currentIngredient } from "./currentIngredient"

export const rootReducer = combineReducers({
    ingredientsReducer,
    burgerConstructorReducer
    // currentIngredient,
    // order,
})