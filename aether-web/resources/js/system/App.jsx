import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { styled } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import MobileNavigation from './MobileNavigation';
import * as Page from '../pages';
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
    React.useEffect(() => {
        (function () {
            var w = window;
            if (w.ChannelIO) {
                return (window.console.error || window.console.log || function () {})(
                    'ChannelIO script included twice.',
                );
            }
            var ch = function () {
                ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args) {
                ch.q.push(args);
            };
            w.ChannelIO = ch;

            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') {
                l();
            } else if (window.attachEvent) {
                window.attachEvent('onload', l);
            } else {
                window.addEventListener('DOMContentLoaded', l, false);
                window.addEventListener('load', l, false);
            }
        })();

        ChannelIO('boot', {
            pluginKey: 'a2370838-95e6-43dd-9508-0cb10daa84ba',
        });
    }, []);

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
                    <Route exact path="/" component={Page.Home} />
                    <Route path="/user" component={Page.User} />
                    <Route path="/assets" component={Page.Asset} />
                    <Route path="/investment" component={Page.Investment} />
                    <Route path="/advisors" component={Page.Advisor} />
                    <Route path="/developer" component={Page.Developer} />
                </Switch>
            </Container>
            <MobileNavigation />
        </ThemeProvider>
    );
}
