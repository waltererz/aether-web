import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import { ReduxActionLayoutToggleDrawer } from '../../Redux/Actions/Layout';
import MobileNavigation from '../MobileNavigation';

class FullContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { tab, drawerOpen, toggleDrawer } = this.props;

        let { drawerBackground } = this.props;
        let drawer_class_options = '';
        if (drawerBackground) {
            drawer_class_options += ' is-b';
        }

        return (
            <React.Fragment>
                <Fab
                    color="primary"
                    className="mobileButton aether"
                    onClick={(event) => {
                        toggleDrawer(true);
                    }}
                >
                    <MenuIcon />
                </Fab>
                <Drawer
                    classes={{
                        root: `app-drawer current-tab-${tab}${drawer_class_options}`,
                        paper: 'drawer-paper',
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {this.props.left}
                </Drawer>
                <SwipeableDrawer
                    classes={{
                        root: 'app-swipeabledrawer',
                        paper: 'drawer-body',
                    }}
                    anchor="left"
                    open={drawerOpen}
                    onClose={(event) => {
                        toggleDrawer(false);
                    }}
                    onOpen={(event) => {
                        toggleDrawer(true);
                    }}
                >
                    <div className="drawer-header"></div>
                    {this.props.left}
                </SwipeableDrawer>
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
                            {this.props.content}
                        </Grid>
                        <Grid item classes={{ root: 'grid-item-2' }}>
                            {this.props.right}
                        </Grid>
                    </Grid>
                </Container>
                <MobileNavigation />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.layout.tab,
    drawerOpen: state.layout.drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: (open) => dispatch(ReduxActionLayoutToggleDrawer(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullContainer);
