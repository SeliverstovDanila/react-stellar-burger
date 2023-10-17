import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { constructorIngredientsReducer } from './current-ingredients';
import { currentIngredientReducer } from './ingredient'
import { orderReducer } from './order'


export const rootReducer = combineReducers({
    ingredients: burgerIngredientsReducer,
    constructorIngredients: constructorIngredientsReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer
});