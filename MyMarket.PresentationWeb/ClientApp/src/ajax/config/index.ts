
import { configureAjax as configureDev } from './requests.dev';
import { configureAjax as configureProd } from './requests.prod';
import { ApplicationState } from '../../store';
import { Store } from 'redux';


const configureAjax = (store: Store<ApplicationState>) => {
    console.log(`Env: ${process?.env?.NODE_ENV}`)
    if (process.env.NODE_ENV === 'development') {
        configureDev();
    } else {
        configureProd(store);
    }
}

export default configureAjax;