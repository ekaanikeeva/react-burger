import { burgerConstructorReducer } from "./burgerConstructorReducer";

import {
    GET_CONSTRUCTOR_INGREDIENTS,
    ADD_CONSTRUCTOR_INGREDIENTS,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    GET_MOVED_INGREDIENT,
    MOVE_CONSTRUCTOR_INGREDIENT,
    CLEAR_CONSTRUCTOR_INGREDIENTS,
    TConstructorUnion
} from "../actions/burgerConstructorActions";


describe('burger constructor reducer', () => {
    const initialState = {
        constructorIngredients: [{
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
        }],
        movedIngredient: null,
    };

    it('should GET_CONSTRUCTOR_INGREDIENTS', () => {
        const action = {
            type: GET_CONSTRUCTOR_INGREDIENTS,
            constructorIngredients: [
                {
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
                },
            ]
        }

        expect(burgerConstructorReducer(initialState, action))
            .toEqual({
                ...initialState,
                constructorIngredients: action.constructorIngredients
            })
    })

    it('should ADD_CONSTRUCTOR_INGREDIENTS', () => {
        const action = {
            type: ADD_CONSTRUCTOR_INGREDIENTS,
            ingredient: {
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

        expect(burgerConstructorReducer(initialState, action))
            .toEqual({
                ...initialState,
                constructorIngredients: [...initialState.constructorIngredients, action.ingredient]
            })
    })

    it('should REMOVE_CONSTRUCTOR_INGREDIENT', () => {
        const action = {
            type: REMOVE_CONSTRUCTOR_INGREDIENT,
            id: 12345
        }

        expect(burgerConstructorReducer(initialState, action))
            .toEqual({
                ...initialState,
                constructorIngredients: [...initialState.constructorIngredients.filter((item) => item.constructorId !== action.id)]
            })
    })

    it('should GET_MOVED_INGREDIENT', () => {
        const action = {
            type: GET_MOVED_INGREDIENT,
            movedIndex: 1
        }

        expect(burgerConstructorReducer(initialState, action))
        .toEqual({
            ...initialState,
            ...initialState, movedIndex: action.movedIndex
        })
    })

    it('should MOVE_CONSTRUCTOR_INGREDIENT', () => {
        const action = {
            type: MOVE_CONSTRUCTOR_INGREDIENT,
            movedIngredient: {
                dropIndex: 1,
                item: {
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
                },
                index: 1
            }
        }

        const dropIndex = action.movedIngredient.dropindex;
            const movedItem = action.movedIngredient.moveditem?.item;
            const movedIndex = action.movedIngredient.moveditem?.index;
            const bun = initialState.constructorIngredients.find((item) => item.type === 'bun')

            const newConstructorList = initialState.constructorIngredients.filter((item) => item.type !== 'bun')
            newConstructorList.splice(movedIndex, 1)
            newConstructorList.splice(dropIndex, 0, movedItem)

            if (bun) {
                newConstructorList.push(bun)
            }
        expect(burgerConstructorReducer(initialState, action))
        .toEqual({
            ...initialState,
            ...initialState, constructorIngredients: newConstructorList
        })
    })

    it('should CLEAR_CONSTRUCTOR_INGREDIENTS', () => {
        const action = {
            type: CLEAR_CONSTRUCTOR_INGREDIENTS
        }
        expect(burgerConstructorReducer(initialState, action))
            .toEqual({
                ...initialState,
                constructorIngredients: []
            })
    })
})