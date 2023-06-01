import { 
    GET_CONSTRUCTOR_INGREDIENTS, 
    ADD_CONSTRUCTOR_INGREDIENTS, 
    REMOVE_CONSTRUCTOR_INGREDIENT, 
    GET_MOVED_INGREDIENT, 
    MOVE_CONSTRUCTOR_INGREDIENT,
    CLEAR_CONSTRUCTOR_INGREDIENTS
 } from "../actions/burgerConstructorActions";

const initialState = {
    constructorIngredients: [],
    movedIngredient: null,
};

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONSTRUCTOR_INGREDIENTS: {
            return { ...state, constructorIngredients: action.constructorIngredients }
        }

        case ADD_CONSTRUCTOR_INGREDIENTS: {
            const newIngredient = action.ingredient;
            newIngredient.constructorId = Math.floor(Math.random() * new Date());
            return { ...state, constructorIngredients: [...state.constructorIngredients, action.ingredient] }
        }

        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            return { ...state, constructorIngredients: [...state.constructorIngredients.filter(item => item.constructorId !== action.id)] }
        }

        case GET_MOVED_INGREDIENT: {
            return { ...state, movedIndex: action.movedIndex }
        }

        case MOVE_CONSTRUCTOR_INGREDIENT: {
            const dropIndex = action.movedIngredient.dropindex;
            const movedItem = action.movedIngredient.moveditem?.item;
            const movedIndex = action.movedIngredient.moveditem?.index;
            const bun = state.constructorIngredients.find(item => item.type === 'bun')

            const newConstructorList = state.constructorIngredients.filter(item => item.type !== 'bun')
            newConstructorList.splice(movedIndex, 1)
            newConstructorList.splice(dropIndex, 0, movedItem)

            if (bun) {
                newConstructorList.push(bun)
            }

            return { ...state, constructorIngredients: newConstructorList }
        }

        case CLEAR_CONSTRUCTOR_INGREDIENTS: {
            return { ...state, constructorIngredients: []}
        }

        default: {
            return state;
        }
    }
}

