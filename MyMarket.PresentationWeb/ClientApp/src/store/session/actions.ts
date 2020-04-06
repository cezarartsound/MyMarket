import Actions from "../actions";
import { UserAuthorized } from "./types";
import { SessionData } from "../../models/SessionData";

export const authorized = (data: SessionData): UserAuthorized => ({
    type: Actions.Authorized,
    payload: data,
});