import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DesktopDrawer from './DesktopDrawer';
import config from '../../config';

export default function ExtendedContainer({ pages, secondary, submenus }) {
    const currentTab = useSelector((state) => state.app.tab);
    const [desktopDrawer, setDesktopDrawer] = React.useState(null);

    React.useEffect(() => {
        setDesktopDrawer(<DesktopDrawer submenus={submenus} />);
    }, [currentTab]);

    return (
        <React.Fragment>
            <Container
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    padding: '0px',

                    height: {
                        xs:
                            'calc(100% - ' +
                            config('templete.height.bottomNavigation.mobile') +
                            ' + ' +
                            config('templete.margin.default.mobile') +
                            ')',
                        md: 'auto',
                    },

                    marginBottom: {
                        xs:
                            'calc(' +
                            config('templete.height.bottomNavigation.mobile') +
                            ' + 20px)',
                        md: '20px',
                    },

                    paddingTop: {
                        xs:
                            'calc(' +
                            config('templete.height.headerNavigation.mobile') +
                            ' + ' +
                            config('templete.margin.default.mobile') +
                            ')',
                        md:
                            'calc(' +
                            config('templete.height.headerNavigation.desktop') +
                            ' + ' +
                            config('templete.margin.default.desktop') +
                            ')',
                    },

                    paddingLeft: {
                        xs: '0px',
                        sm: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },

                    paddingRight: {
                        xs: '0px',
                        sm: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },
                }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',

                        justifyContent: {
                            xs: 'center',
                            sm: 'space-between',
                        },

                        '& .MuiGrid-item.system__layouts': {
                            flexGrow: 0,
                            flexShrink: 0,
                            boxSizing: 'border-box',

                            minHeight: {
                                xs:
                                    'calc(100vh - ' +
                                    config('templete.height.headerFixed.mobile') +
                                    ')',
                                md:
                                    'calc(100vh - ' +
                                    config('templete.height.headerFixed.desktop') +
                                    ')',
                            },

                            '&.primary': {
                                flexGrow: 1,

                                width: {
                                    xs: '100%',
                                    sm: config('templete.width.primary.desktop'),
                                },

                                maxWidth: {
                                    xs: config('templete.width.primary.mobile'),
                                    sm: 'none',
                                },

                                margin: {
                                    xs: '0px',
                                    sm: 'initial',
                                },

                                flexShrink: {
                                    sm: 1,
                                },
                            },

                            '&.trickery': {
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },

                                width: '100%',

                                maxWidth: {
                                    md:
                                        'calc(' +
                                        config('templete.width.drawer.desktop') +
                                        ' - ((' +
                                        config('templete.breakpoints.values.xl') +
                                        'px - ' +
                                        config('templete.breakpoints.values.lg') +
                                        'px)) / 2)',
                                    lg:
                                        'calc(' +
                                        config('templete.width.drawer.desktop') +
                                        ' - ((' +
                                        config('templete.breakpoints.values.xl') +
                                        'px - 100vw)) / 2)',
                                    xl: config('templete.width.drawer.desktop'),
                                },
                            },
                        },
                    }}
                >
                    <Grid item className="system__layouts trickery"></Grid>
                    <Grid item className="system__layouts primary">
                        <Switch>
                            {typeof pages === 'object' &&
                                pages.map(({ path, component, exact }) => {
                                    return (
                                        <Route
                                            path={path}
                                            component={component}
                                            exact={exact === true ? true : false}
                                            key={`react-router-dom-pages-${path}`}
                                        />
                                    );
                                })}
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
            {desktopDrawer}
        </React.Fragment>
    );
}
