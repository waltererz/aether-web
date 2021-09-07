import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { styled } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import MobileNavigation from './MobileNavigation';
import Admin from '../pages/Admin';
import config from '../config';

const Container = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: config('templete.height.headerFixed.mobile'),
    },

    [theme.breakpoints.up('md')]: {
        marginTop: config('templete.height.headerFixed.desktop'),
    },
}));

export default function App() {
    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <MobileDrawer />
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/__admin" component={Admin} />
                    <Route
                        path="*"
                        render={({ match }) => {
                            window.location.href = match.url;
                        }}
                    />
                </Switch>
            </Container>
            <MobileNavigation />
        </ThemeProvider>
    );
}
