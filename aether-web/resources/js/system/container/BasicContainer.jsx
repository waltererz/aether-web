import React from 'react';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import MobileNavigation from '../MobileNavigation';
import HeaderNavigation from '../HeaderNavigation';

export default function BasicContainer(props) {
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
                    <Grid className="grid-item-trickery" item></Grid>
                    <Grid className="grid-item-1" item>
                        {props.children}
                    </Grid>
                    <Grid className="grid-item-2" item>
                        {props.right}
                    </Grid>
                </Grid>
            </Container>
            <Drawer
                classes={{
                    root: 'app-drawer',
                    paper: 'drawer-paper',
                }}
                variant="permanent"
                anchor="left"
            >
                {props.left}
            </Drawer>
            <MobileNavigation />
        </React.Fragment>
    );
}
