import { Action } from "redux";
import Actions from "../actions";
import { SessionData } from "../../models/SessionData";

export interface UserAuthorized extends Action<Actions> {
    type: Actions.Authorized,
    payload: SessionData,
}