import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import { ReduxActionLayoutToggleDrawer } from '../../Redux/Actions/Layout';
import MobileNavigation from '../MobileNavigation';
import Header from '../Header';

class FullContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    render() {
        const { route, drawerOpen, toggleDrawer } = this.props;

        let { drawerBackground } = this.props;
        let drawer_class_options = '';
        if (drawerBackground) {
            drawer_class_options += ' is-b';
        }

        return (
            <React.Fragment>
                <Header toggleDrawer={toggleDrawer} />
                <Drawer
                    classes={{
                        root: `app-drawer current-tab-${route}${drawer_class_options}`,
                        paper: 'drawer-paper',
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {this.props.left}
                </Drawer>
                <Drawer
                    classes={{
                        root: 'app-mobile-drawer',
                        paper: 'drawer-body',
                    }}
                    anchor="right"
                    open={drawerOpen}
                    onClose={(event) => {
                        toggleDrawer(false);
                    }}
                >
                    <div className="drawer-header"></div>
                    {this.props.left}
                </Drawer>
                <Container
                    classes={{ root: 'app-container aether current-tab-' + route }}
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
    route: state.layout.route,
    drawerOpen: state.layout.drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: (open) => dispatch(ReduxActionLayoutToggleDrawer(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullContainer);
