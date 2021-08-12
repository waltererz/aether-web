import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HeaderNavigation from './HeaderNavigation';
import * as Page from '../pages';
import theme from '../theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <HeaderNavigation />
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/user" component={Page.User} />
                <Route path="/assets" component={Page.Asset} />
                <Route path="/investment" component={Page.Investment} />
                <Route path="/advisors" component={Page.Advisor} />
                <Route path="/developer" component={Page.Developer} />
            </Switch>
        </ThemeProvider>
    );
}
