import {
    ADD_CURRENT_INGREDIENT,
    DELETE_CURRENT_INGREDIENT,
} from '../actions/ingredient';


const initialState = {
    ingredient: {}
};

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: action.ingredient
            }
        }
        case DELETE_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: {}
            }
        }
        default: {
            return state;
        }
    }
};