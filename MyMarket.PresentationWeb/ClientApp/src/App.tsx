import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import './custom.scss'
import { FC } from 'react';
import ErrorModal from './components/ErrorModal';

const App: FC = () => {
    return(
        <Layout>
            <ErrorModal/>
            <Route exact path='/' component={Home} />
            {/* <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
        </Layout>
    );
}

export default App;