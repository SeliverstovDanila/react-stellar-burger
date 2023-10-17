import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
} from '../actions/current-ingredients';
import update from 'immutability-helper'


const initialState = {
    bun: {},
    ingredient: []
};
function removeFirstOccurrence(arr, item) {
    const index = arr.indexOf(item);
    const newArr = [...arr]
    if (index !== -1) {
        newArr.splice(index, 1);
    }
    return newArr
}

const moveCard = (dragIndex, hoverIndex, prevState) => {
    return update(prevState, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevState[dragIndex]],
        ],
    })
}

export const constructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return action.ingredient.type === 'bun' ? {
                ...state,
                bun: action.ingredient
            } : {
                ...state,
                ingredient: [...state.ingredient, action.ingredient]
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredient: removeFirstOccurrence(state.ingredient, action.ingredient)
            };
        }
        case MOVE_INGREDIENT: {
            return {
                ...state,
                ingredient: moveCard(action.payload.dragIndex, action.payload.hoverIndex, state.ingredient)
            };
        }
        default: {
            return state;
        }
    }
};