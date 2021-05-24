export const SET_PIZZA = "pizzaActionTypes/SET_PIZZA";
export interface SetPizzaAction {
    type: typeof SET_PIZZA;
    pizza: string;
}

export const GET_PIZZA = "pizzaActionTypes/GET_PIZZA";
export interface GetPizzaAction {
    type: typeof GET_PIZZA;
    Table_No: BigInteger;
}

export const GET_PIZZA_REQUEST = "pizzaActionTypes/GET_PIZZA_REQUEST";
export interface GetPizzaRequestAction {
    type: typeof GET_PIZZA_REQUEST;
}

export const GET_PIZZA_SUCCESS = "pizzaActionTypes/GET_PIZZA_SUCCESS";
export interface GetPizzaSuccessAction {
    type: typeof GET_PIZZA_SUCCESS;
    pizza: string;
}

export const GET_PIZZA_FAILURE = "pizzaActionTypes/GET_PIZZA_FAILURE";
export interface GetPizzaFailureAction {
    type: typeof GET_PIZZA_FAILURE;
    error: Error | string;
}

export type PizzaAction = 
    | SetPizzaAction
    | GetPizzaAction
    | GetPizzaRequestAction
    | GetPizzaSuccessAction
    | GetPizzaFailureAction;