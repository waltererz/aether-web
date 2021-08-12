import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MobileNavigation from '../MobileNavigation';
import HeaderNavigation from '../HeaderNavigation';

export default function SimpleContainer(props) {
    return (
        <React.Fragment>
            <HeaderNavigation />
            <Container className="app-container aether half-container" maxWidth={false}>
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
            <MobileNavigation />
        </React.Fragment>
    );
}