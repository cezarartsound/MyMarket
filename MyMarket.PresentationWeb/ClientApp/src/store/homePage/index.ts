import { reducer } from "./reducer";
import { HomePageState } from "./state";
import * as Actions from "./actions";
import * as Selectors from "./selectors";
import * as ActionTypes from "./types";

export {
    reducer,
    Actions,
    Selectors,
    ActionTypes,
}

export type State = HomePageState;