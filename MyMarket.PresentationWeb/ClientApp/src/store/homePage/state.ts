import { HighlightItem } from "../../models/HighlightItem";
import { Product } from "../../models/Product";
import { Merchant } from "../../models/Merchant";

export interface HomePageState {
    highlightItems: HighlightItem[];
    homepageProducts: Product[];
    merchants: Merchant[];
    allProductsLoaded: boolean;
}
