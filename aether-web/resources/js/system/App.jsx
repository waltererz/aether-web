import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import HeaderFixed from './HeaderFixed';
import MobileDrawer from './MobileDrawer';
import HeaderNavigation from './HeaderNavigation';
import MobileNavigation from './MobileNavigation';
import * as Page from '../pages';
import config from '../config';

export default function App() {
    const scrollTrigger = useScrollTrigger();

    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <MobileDrawer />
            <Box
                className={scrollTrigger ? 'invisible' : ''}
                sx={{
                    position: 'fixed',
                    width: '100%',
                    top: 0,
                    zIndex: config('templete.zIndex.header'),
                    transition: 'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;',

                    '&.invisible': {
                        transform: {
                            xs: 'translateY(-' + config('templete.height.headerFixed.mobile') + ')',
                            md:
                                'translateY(-' +
                                config('templete.height.headerFixed.desktop') +
                                ')',
                        },
                    },
                }}
            >
                <HeaderFixed />
                <HeaderNavigation />
            </Box>
            <Box
                sx={{
                    marginTop: {
                        xs: config('templete.height.headerFixed.mobile'),
                        md: config('templete.height.headerFixed.desktop'),
                    },
                }}
            >
                <Switch>
                    <Route exact path="/" component={Page.Home} />
                    <Route path="/user" component={Page.User} />
                    <Route path="/assets" component={Page.Asset} />
                    <Route path="/investment" component={Page.Investment} />
                    <Route path="/advisors" component={Page.Advisor} />
                    <Route path="/developer" component={Page.Developer} />
                </Switch>
            </Box>
            <MobileNavigation />
        </ThemeProvider>
    );
}
