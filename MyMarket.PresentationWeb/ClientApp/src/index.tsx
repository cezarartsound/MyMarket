import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureAjax from './ajax/config';
import { authorized } from './store/session/actions';
import { authenticateAsync } from './ajax/requests';


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history /* TODO - initialState */);

configureAjax(store);

authenticateAsync().then(session => {
    store.dispatch(authorized(session));

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root'));
    
    registerServiceWorker();
});

