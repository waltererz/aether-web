import axios from 'axios';

import App from './components/App';

import Layout from './components/Layout';
import Theme from './components/Layout/Theme';

import Home from './components/Pages/Home';
import Advisors from './components/Pages/Advisors';

import * as Route from './services/Route';
import * as Validation from './services/Validation';

import constants from './constants';

const Aether = Object.seal({
    App: null,
    Layout: null,
    Theme: null,
    Page: {
        Home: null,
        Advisors: null,
    },
    Services: {
        Route: null,
        Validation: null,
    },
    constants: null,
});

const bootstrap = () => {
    try {
        window._ = require('lodash');
        window.$ = window.jQuery = require('jquery');
    } catch (e) {
        console.log('Bootstrap Error!');
        return false;
    }

    axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
    axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
    axios.defaults.withCredentials = true;

    Aether.App = App;
    Aether.Layout = Layout;
    Aether.Theme = Theme;
    Aether.Page.Home = Home;
    Aether.Page.Advisors = Advisors;
    Aether.Services.Route = Route;
    Aether.Services.Validation = Validation;
    Aether.constants = constants;

    return Aether;
};

export default bootstrap;
