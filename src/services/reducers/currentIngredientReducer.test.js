import { currentIngredientReducer } from "./currentIngredientReducer";
import { GET_CURRENT_INGREDIENT } from "../actions/currentIngredientActions";

describe('current ingredient reducer', () => {
    const initialState = {
        currentIngredient: {
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
        }
    }
    it('should GET_CURRENT_INGREDIENT', () => {
        const action = {
            type: GET_CURRENT_INGREDIENT
        }
        expect(currentIngredientReducer(initialState, action))
        .toEqual({...initialState, currentIngredient: action.currentIngredient})
    })
})