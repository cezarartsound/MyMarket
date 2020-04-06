
import { Category } from './Category';

export interface Merchant { 
    id: number;
    name: string;
    logoImageUrl: string;
    sector: string;
    categories: Category[];
}