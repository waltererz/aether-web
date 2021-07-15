import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import bootstrap from './bootstrap';
import Reducers from './components/Redux/Reducer';

const Aether = bootstrap();
const store = createStore(Reducers);

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <Router>
                <Aether.App instance={Aether} />
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById('app'),
);
