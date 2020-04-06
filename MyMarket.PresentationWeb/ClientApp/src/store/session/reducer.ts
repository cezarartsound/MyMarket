import { Reducer } from "react";
import { Action } from "redux";
import Actions from "../actions";
import { SessionState } from "./state";
import { UserAuthorized } from "./types";

const initialState: SessionState = {
    isGuest: true,
    name: '',
    username: '',
    token: '',
}

export const reducer: Reducer<SessionState | undefined, Action<Actions>> = (state = initialState, action): SessionState => {
    switch (action.type) {
        case Actions.Authorized:
            return handleAuthorized(state, action as UserAuthorized);
        default:
            return state;
    }
};

const handleAuthorized = (state: SessionState, action: UserAuthorized): SessionState => ({
    ...state,
    ...action.payload,
});