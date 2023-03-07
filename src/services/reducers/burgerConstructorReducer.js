const GET_CONSTRUCTOR_INGREDIENTS = 'GET_CONSTRUCTOR_INGREDIENTS';
const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENTS';
const GET_MOVED_INGREDIENT = 'GET_MOVED_INGREDIENT';
const MOVE_CONSTRUCTOR_INGREDIENT = 'MOVE_CONSTRUCTOR_INGREDIENT';

const initialState = {
    constructorIngredients: [],
    movedIngredient: null,
};

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONSTRUCTOR_INGREDIENTS: {
            return { ...state, constructorIngredients: action.payload }
        }

        case ADD_CONSTRUCTOR_INGREDIENTS: {
            const newIngredient = action.payload;
            newIngredient.constructorId = Math.random();
            return { ...state, constructorIngredients: [...state.constructorIngredients, action.payload] }
        }

        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            return {...state, constructorIngredients: [...state.constructorIngredients.filter(item => item.constructorId !== action.payload)]}
        }

        case GET_MOVED_INGREDIENT: {
            return { ...state, movedIndex: action.payload }
        }

        case MOVE_CONSTRUCTOR_INGREDIENT: {
            const dropIndex = action.payload.dropindex;
            const movedItem = action.payload.moveditem?.item;
            const movedIndex = action.payload.moveditem?.index;
            const bun = state.constructorIngredients.find(item => item.type === 'bun')

            const newConstructorList = state.constructorIngredients.filter(item => item.type !== 'bun')
            newConstructorList.splice(movedIndex, 1)
            newConstructorList.splice(dropIndex, 0, movedItem)

            if (bun) {
                newConstructorList.push(bun)
            } 

            return { ...state, constructorIngredients: newConstructorList }
        }

        default: {
            return state;
        }
    }
}

export const getConstructorIngredientsAction = (payload) => ({ type: GET_CONSTRUCTOR_INGREDIENTS, payload });
export const addConstructorIngredientsAction = (payload) => ({ type: ADD_CONSTRUCTOR_INGREDIENTS, payload });
export const removeConstructorIngredientAction = (payload) => ({ type: REMOVE_CONSTRUCTOR_INGREDIENT, payload });
export const moveConstructorIngredientAction = (payload) => ({ type: MOVE_CONSTRUCTOR_INGREDIENT, payload })
export const getMovedIngredientAction = (payload) => ({ type: GET_MOVED_INGREDIENT, payload })