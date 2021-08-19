import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function SingleContainer(props) {
    return (
        <React.Fragment>
            <Container className="app-container aether simple-container" maxWidth={false}>
                <Grid
                    container
                    className="grid-container"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid className="grid-item-1" item>
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
