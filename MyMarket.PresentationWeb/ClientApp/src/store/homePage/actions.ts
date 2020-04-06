import { AppThunkAction } from "..";
import Actions from "../actions";
import { HomePageLoaded, HomePageLoadFailed, HomePageProductsLoaded, HomePageNoMoreProductsToLoad } from "./types";
import { HomePageModel } from "../../models/HomePageModel";
import { getHomeDataAsync, getHomePageProductsAsync } from "../../ajax/requests";
import { Product } from "../../models/Product";

const homePageLoaded = (model: HomePageModel): HomePageLoaded => ({
    type: Actions.HomePageLoaded,
    payload: model,
});

const homePageDataLoadFailed = (error: string): HomePageLoadFailed => ({
    type: Actions.HomePageLoadFailed,
    error: error,
});

const homePageProductsLoaded = (products: Product[]): HomePageProductsLoaded => ({
    type: Actions.HomePageProductsLoaded,
    payload: products,
});

const homePageNoMoreProductsLoaded = (): HomePageNoMoreProductsToLoad => ({
    type: Actions.HomePageNoMoreProductsToLoad,
});


export const loadHomePageData = (): AppThunkAction<Promise<HomePageLoadFailed | HomePageLoaded>> => async (dispatch) => {
    try {
        return dispatch(homePageLoaded(await getHomeDataAsync()));
    }
    catch(e) {
        return dispatch(homePageDataLoadFailed(e.toString()));
    }
}

export const loadProducts = (offset: number): AppThunkAction<Promise<HomePageLoadFailed | HomePageProductsLoaded | HomePageNoMoreProductsToLoad>> => async (dispatch) => {
    try {
        var res = await getHomePageProductsAsync(offset);
        return dispatch(res.length ? homePageProductsLoaded(res) : homePageNoMoreProductsLoaded());
    }
    catch(e) {
        return dispatch(homePageDataLoadFailed(e.toString()));
    }
}