import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import XMenu from '../XMenu';
import config from '../../config';

export default function BasicContainer({ styles, pages, secondary, submenus }) {
    const [desktopDrawer, setDesktopDrawer] = React.useState(null);

    React.useEffect(() => {
        setDesktopDrawer(
            <Drawer
                classes={{
                    root: 'app-drawer',
                    paper: 'drawer-paper',
                }}
                variant="permanent"
                anchor="left"
                sx={{
                    display: {
                        xs: 'none',
                        md: 'inline-flex',
                    },

                    width: {
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
                            'px - 100vw) / 2))',
                        xl: config('templete.width.drawer.desktop'),
                    },

                    '& .MuiPaper-root': {
                        display: 'flex',
                        backgroundColor: config('templete.palette.bgColor'),
                        border: '0px',
                        zIndex: config('templete.zIndex.drawer'),
                        boxSizing: 'border-box',
                        transition:
                            'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, height 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',

                        width: {
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
                                'px - 100vw) / 2))',
                            xl: config('templete.width.drawer.desktop'),
                        },

                        height: {
                            md:
                                'calc(100vh - ' +
                                config('templete.height.headerFixed.desktop') +
                                ' - ' +
                                config('templete.height.headerNavigation.desktop') +
                                ')',
                        },

                        marginTop: {
                            md:
                                'calc(' +
                                config('templete.height.headerFixed.desktop') +
                                ' + ' +
                                config('templete.height.headerNavigation.desktop') +
                                ')',
                        },

                        '&.in': {
                            height: {
                                md:
                                    'calc(100vh - ' +
                                    config('templete.height.headerFixed.desktop') +
                                    ')',
                            },
                        },
                    },
                }}
            >
                {typeof submenus === 'object' && <XMenu items={submenus} />}
            </Drawer>,
        );
    }, []);

    return (
        <React.Fragment>
            <Container className="app-container aether" maxWidth={false} sx={styles.container}>
                <Grid
                    container
                    className="grid-container"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={styles.gridContainer}
                >
                    <Grid item className="grid-item-trickery trickery" sx={styles.gridItem}></Grid>
                    <Grid item className="grid-item-1 primary" sx={styles.gridItem}>
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
                    <Grid item className="grid-item-2 secondary" sx={styles.gridItem}>
                        {secondary}
                    </Grid>
                </Grid>
            </Container>
            {desktopDrawer}
        </React.Fragment>
    );
}
