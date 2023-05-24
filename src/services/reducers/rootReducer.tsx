import { combineReducers } from "redux"
import { ingredientsReducer } from "./ingredientsReducer"
import { burgerConstructorReducer } from "./burgerConstructorReducer"
import { currentIngredientReducer } from "./currentIngredientReducer"
import { orderReducer } from "./orderReducer";
import { authReducer } from "./authReducer";
export type IRootState = ReturnType<typeof rootReducer>; 

export const rootReducer = combineReducers({
    ingredientsReducer,
    burgerConstructorReducer,
    currentIngredientReducer,
    orderReducer,
    authReducer
})