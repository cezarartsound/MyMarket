import Actions from "../actions";
import { ClearGenericError } from "./types";

export const clearGenericError = (): ClearGenericError => ({
    type: Actions.ClearGenericError,
});