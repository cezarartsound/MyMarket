
import { HighlightItem } from './HighlightItem';
import { Product } from './Product';
import { Merchant } from './Merchant';

export interface HomePageModel { 
    highlightItems: HighlightItem[];
    homepageProducts: Product[];
    merchants: Merchant[];
}