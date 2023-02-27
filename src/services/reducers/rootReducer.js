import { combineReducers } from "redux"
import { ingredientsReducer } from "./ingredientsReducer"
// import { burgerConstructor } from "./burgerConstructor"
// import { order } from "./order"
// import { currentIngredient } from "./currentIngredient"

export const rootReducer = combineReducers({
    ingredientsReducer
    // burgerConstructor,
    // currentIngredient,
    // order,
})