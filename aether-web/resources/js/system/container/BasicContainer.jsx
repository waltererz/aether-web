import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import XMenu from '../XMenu';

export default function BasicContainer({ pages, secondary, submenus }) {
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
            >
                {typeof submenus === 'object' && <XMenu items={submenus} />}
            </Drawer>,
        );
    }, []);

    return (
        <React.Fragment>
            <Container className="app-container aether" maxWidth={false}>
                <Grid
                    container
                    className="grid-container"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item className="grid-item-trickery"></Grid>
                    <Grid item className="grid-item-1">
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
                    <Grid item className="grid-item-2">
                        {secondary}
                    </Grid>
                </Grid>
            </Container>
            {desktopDrawer}
        </React.Fragment>
    );
}
