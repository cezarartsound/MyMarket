import { Action } from "redux";
import Actions from "../actions";

export interface GenericError extends Action<Actions> {
    error: string;
}

export interface ClearGenericError extends Action<Actions> {
    type: Actions.ClearGenericError,
}