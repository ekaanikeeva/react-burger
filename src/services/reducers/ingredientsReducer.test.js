import { ingredientsReducer } from "./ingredientsReducer";
import {
    GET_BURGER_INGREDIENTS,
    INCREASE_INGREDIENT_COUNT,
    DECREASE_INGREDIENT_COUNT,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_ERROR,
    CLEAR_ALL_INGREDIENTS_COUNT,
} from "../actions/ingredientsActions";

describe("ingredients reducer", () => {
    const initialState = {
        ingredients: [],
        isSuccess: false,
    }

    it("should GET_BURGER_INGREDIENTS ", () => {
        const action = {
            type: GET_BURGER_INGREDIENTS,
            ingredients: [{
                _id: 'string',
                type: 'string',
                price: 111,
                constructorId: 12345,
                name: 'string',
                image: 'string',
                count: 124,
                calories: 4,
                carbohydrates: 5,
                fat: 10,
                image_large: 'string',
                image_mobile: 'string',
                proteins: 10,
                __v: 1,
            }]
        };

        expect(ingredientsReducer(initialState, action))
            .toEqual({ ...initialState, ingredients: action.ingredients })
    })

    it("should GET_BURGER_INGREDIENTS_SUCCESS", () => {
        const action = { type: GET_BURGER_INGREDIENTS_SUCCESS }
        expect(ingredientsReducer(initialState, action))
            .toEqual({ ...initialState, isSuccess: true })
    })

    it("should GET_BURGER_INGREDIENTS_ERROR", () => {
        const action = { type: GET_BURGER_INGREDIENTS_ERROR }
        expect(ingredientsReducer(initialState, action))
            .toEqual({
                ...initialState,
                isSuccess: false,
                ingredients: []
            })
    })

    it("should INCREASE_INGREDIENT_COUNT", () => {
        const action = {
            type: INCREASE_INGREDIENT_COUNT,
            id: '65454dsdadsa'
        }
        expect(ingredientsReducer(initialState, action))
            .toEqual({
                ...initialState,
                ingredients: [...initialState.ingredients.map((item) => {
                    if (item._id === action.id) {
                        item.count += 1
                        return item;
                    } else return item;
                })]
            })
    })

    it("should DECREASE_INGREDIENT_COUNT", () => {
        const action = {
            type: DECREASE_INGREDIENT_COUNT,
            id: '65454dsdadsa'
        }
        expect(ingredientsReducer(initialState, action))
            .toEqual({
                ...initialState,
                ingredients: [...initialState.ingredients.map((item) => {
                    if (item._id === action.id) {
                      item.count > 0 ? item.count -= 1 : item.count = 0;
                      return item;
                    } else return item;
                  })]
            })
    })

    it("should CLEAR_ALL_INGREDIENTS_COUNT", () => {
        const action = {
            type: CLEAR_ALL_INGREDIENTS_COUNT,
        }

        expect(ingredientsReducer(initialState, action))
        .toEqual({
            ...initialState,
            ingredients: [...initialState.ingredients.map((item) => {
                item.count = 0;
                return item;
              } )]
        })
    })
})