import { HomePageState } from "./state";
import { Reducer } from "react";
import { Action } from "redux";
import Actions from "../actions";
import { HomePageLoaded, HomePageProductsLoaded, HomePageNoMoreProductsToLoad } from "./types";

const initialState: HomePageState = {
    highlightItems: [],
    homepageProducts: [],
    merchants: [],
    allProductsLoaded: false,
}

export const reducer: Reducer<HomePageState | undefined, Action<Actions>> = (state = initialState, action): HomePageState => {
    switch (action.type) {
        case Actions.HomePageProductsLoaded:
            return handleHomePageProductsLoaded(state, action as HomePageProductsLoaded);
        case Actions.HomePageLoaded:
            return handleHomePageLoaded(state, action as HomePageLoaded);
        case Actions.HomePageNoMoreProductsToLoad:
            return handleHomePageNoMoreProductsToLoad(state);
        default:
            return state;
    }
};

const handleHomePageLoaded = (state: HomePageState, action: HomePageLoaded): HomePageState => ({
    ...state,
    highlightItems: action.payload.highlightItems || [],
    homepageProducts: action.payload.homepageProducts || [],
    merchants: action.payload.merchants || [],
});

const handleHomePageProductsLoaded = (state: HomePageState, action: HomePageProductsLoaded): HomePageState => ({
    ...state,
    homepageProducts: [
        ...state.homepageProducts,
        ...action.payload,
    ],
});

const handleHomePageNoMoreProductsToLoad = (state: HomePageState): HomePageState => ({
    ...state,
    allProductsLoaded: true,
});
