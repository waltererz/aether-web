import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

const FullContainer = (props) => {
    const { tab } = useSelector((state) => ({
        tab: state.layout.tab,
    }));

    return (
        <React.Fragment>
            <Drawer
                classes={{
                    root: 'app-drawer current-tab-' + tab,
                    paper: 'drawer-paper',
                }}
                variant="permanent"
                anchor="left"
            >
                {props.left}
            </Drawer>
            <Container
                classes={{ root: 'app-container aether current-tab-' + tab }}
                maxWidth={false}
            >
                <Grid
                    container
                    classes={{ root: 'grid-container' }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item classes={{ root: 'grid-item-trickery' }}></Grid>
                    <Grid item classes={{ root: 'grid-item-1' }}>
                        {props.content}
                    </Grid>
                    <Grid item classes={{ root: 'grid-item-2' }}>
                        {props.right}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default FullContainer;
