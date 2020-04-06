import { reducer } from "./reducer";
import { NavigationState } from "./state";
import * as Actions from "./actions";
import * as ActionTypes from "./types";

export {
    reducer,
    Actions,
    ActionTypes,
}

export type State = NavigationState;