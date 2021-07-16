import axios from 'axios';

import App from './components/App';

import * as Layout from './components/Layout';
import * as Route from './routes';
import * as RouteService from './services/Route';
import * as ValidationService from './services/Validation';

import * as Components from './components/common';

import theme from './components/Theme';
import constants from './constants';

const Aether = Object.seal({
    App: null,
    Layout: null,
    ContainerStyles: null,
    Route: null,
    Components: null,
    Services: {
        Route: null,
        Validation: null,
    },
    theme: null,
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
    Aether.Layout = Layout.Layout;
    Aether.ContainerStyles = Layout.ContainerStyles;
    Aether.Route = Route;
    Aether.Components = Components;
    Aether.Services.Route = RouteService;
    Aether.Services.Validation = ValidationService;
    Aether.theme = theme;
    Aether.constants = constants;

    return Aether;
};

export default bootstrap;
