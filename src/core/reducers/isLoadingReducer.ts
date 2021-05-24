import { Action } from 'redux';

export interface isLoadingState {
    [key: string]: boolean;
}

const getLoadingMatches = (actionType: string) =>
    /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const isLoadingReducer = (state: isLoadingState = {}, action: Action) => {
    const matches = getLoadingMatches(action.type);

    if(!matches) {
        return state;
    }

    const [, requestName, requestStatus] = matches;
    return {
        ...state,
        [requestName]: requestStatus ==='REQUEST'
    };
};

export default isLoadingReducer;