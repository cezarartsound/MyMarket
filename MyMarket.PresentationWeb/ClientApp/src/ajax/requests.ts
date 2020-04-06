import axios from 'axios';
import { routes } from './routes';
import { HomePageModel } from '../models/HomePageModel';
import { Product } from '../models/Product';
import { SessionData } from '../models/SessionData';

export const authenticateAsync = (): Promise<SessionData> => {
    return axios.post(routes.authenticate(), {})
        .then(response => response.data);
}

export const getHomeDataAsync = (): Promise<HomePageModel> => {
    return axios.get(routes.getHomeData())
        .then(response => response.data);
}

export const getHomePageProductsAsync = (offset: number): Promise<Product[]> => {
    return axios.get(routes.getHomePageProducts(offset))
        .then(response => response.data);
}
