import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import MobileNavigation from '../Components/MobileNavigation';
import Header from '../Components/Header';
import Component from '../../../component';

class FullContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    render() {
        const Aether = this.Aether;
        const { reduxState, headerIcons } = this.props;
        let { drawerBackground } = this.props;
        let drawer_class_options = '';
        if (drawerBackground) {
            drawer_class_options += ' is-b';
        }

        return (
            <React.Fragment>
                <Header instance={Aether} headerIcons={headerIcons} />
                <Container
                    classes={{ root: 'app-container aether current-tab-' + reduxState.route }}
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
                <Drawer
                    classes={{
                        root: `app-drawer current-tab-${reduxState.route}${drawer_class_options}`,
                        paper: 'drawer-paper',
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {this.props.left}
                </Drawer>
                <MobileNavigation instance={Aether} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: { route: state.app.route },
});

export default connect(mapStateToProps)(FullContainer);
