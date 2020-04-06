import { ApplicationState } from "..";

export const getToken = (state: ApplicationState): string => state.session.token;