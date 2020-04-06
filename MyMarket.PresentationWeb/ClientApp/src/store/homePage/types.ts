import { Action } from "redux";
import Actions from "../actions";
import { HomePageModel } from "../../models/HomePageModel";
import { Product } from "../../models/Product";
import { GenericError } from "../navigation/types";

export interface HomePageLoaded extends Action<Actions> {
    type: Actions.HomePageLoaded,
    payload: HomePageModel,
}

export interface HomePageLoadFailed extends GenericError {
    type: Actions.HomePageLoadFailed,
}

export interface HomePageProductsLoaded extends Action<Actions> {
    type: Actions.HomePageProductsLoaded,
    payload: Product[],
}

export interface HomePageNoMoreProductsToLoad extends Action<Actions> {
    type: Actions.HomePageNoMoreProductsToLoad,
}