import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { HTTP_FORBIDDEN, HTTP_OK, HTTP_UNAUTHORIZED } from '../statusCodes';
import { ApplicationState } from '../../store';
import { Store } from 'redux';
import * as Session from '../../store/session';

export const configureAjax = (store: Store<ApplicationState>) => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const token = Session.Selectors.getToken(store.getState());

            if(token) config.headers.Authorization = token;
             
            return config;
        }
    );
    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            if (response.status !== HTTP_OK){
                throw `Result code is not OK, received ${response.status}`;
            }
            return response;
        },
        (error: AxiosError) => {
            console.log("Request error", error);

            // eslint-disable-next-line no-restricted-globals
            if (error.response?.status === HTTP_FORBIDDEN){// || error.response?.status === HTTP_UNAUTHORIZED) {
                window.location.href = '/login';
            }
            return Promise.reject(error);
        },
    );
}

export default configureAjax;