
import { Category } from './Category';

export interface Product { 
    id: number;
    merchantId: number;
    name: string;
    description: string;
    category: Category;
    imageUrl: string;
    price: number;
    priceFormatted: string;
}