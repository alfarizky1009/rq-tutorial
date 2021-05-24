import * as actions from '../actionTypes/pizzaActionTypes'

export interface PizzaState {
    pizza: string;
}

const initialState: PizzaState = {
    pizza: ""
};

export default function pizzaReducer(
    state: PizzaState = initialState,
    action: actions.PizzaAction
): PizzaState {
    switch (action.type) {
        case actions.SET_PIZZA:
        case actions.GET_PIZZA_SUCCESS:
            return{
                pizza: action.pizza
            };
        default:
            return state;
    }
}