import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import HeaderFixed from './HeaderFixed';
import MobileDrawer from './MobileDrawer';
import HeaderNavigation from './HeaderNavigation';
import MobileNavigation from './MobileNavigation';
import * as Page from '../pages';
import config from '../config';

export default function App() {
    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <MobileDrawer />
            <HeaderFixed />
            <HeaderNavigation />
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/user" component={Page.User} />
                <Route path="/assets" component={Page.Asset} />
                <Route path="/investment" component={Page.Investment} />
                <Route path="/advisors" component={Page.Advisor} />
                <Route path="/developer" component={Page.Developer} />
            </Switch>
            <MobileNavigation />
        </ThemeProvider>
    );
}
