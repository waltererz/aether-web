import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const ContainerOnlyRight = (props) => {
    const { tab } = useSelector((state) => ({
        tab: state.layout.tab,
    }));

    return (
        <React.Fragment>
            <Container
                classes={{ root: 'app-container aether onlyRight current-tab-' + tab }}
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

export default ContainerOnlyRight;
