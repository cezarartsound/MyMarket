import { Reducer } from "react";
import { Action } from "redux";
import Actions from "../actions";
import { NavigationState } from "./state";
import { GenericError } from "./types";

const initialState: NavigationState = {
    showError: false,
    error: '',
}

export const reducer: Reducer<NavigationState | undefined, Action<Actions>> = (state = initialState, action): NavigationState => {
    switch (action.type) {
        case Actions.HomePageLoadFailed:
            return handleGenericError(state, action as GenericError);
        case Actions.ClearGenericError:
            return handleClearError(state);
        default:
            return state;
    }
};

const handleGenericError = (state: NavigationState, action: GenericError): NavigationState => ({
    ...state,
    showError: true,
    error: action.error,
});

const handleClearError = (state: NavigationState): NavigationState => ({
    ...state,
    showError: false,
    error: '',
});