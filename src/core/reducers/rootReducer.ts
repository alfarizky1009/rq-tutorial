import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import isLoadingReducer from './isLoadingReducer';
import pizzaReducer from './pizzaReducer';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;