import { ApplicationState } from "..";
import { Product } from "../../models/Product";
import { HighlightItem } from "../../models/HighlightItem";

export const getProductsOverview = (state: ApplicationState): Product[] => state.homePage.homepageProducts;
export const getHighlights = (state: ApplicationState): HighlightItem[] => state.homePage.highlightItems;
export const areAllProductsLoaded = (state: ApplicationState): boolean => state.homePage.allProductsLoaded;