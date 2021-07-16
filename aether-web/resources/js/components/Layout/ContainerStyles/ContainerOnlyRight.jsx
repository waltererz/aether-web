import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MobileNavigation from '../Components/MobileNavigation';
import Header from '../Components/Header';
import Component from '../../../component';

class ContainerOnlyRight extends Component {
    render() {
        const Aether = this.Aether;
        const { reduxState } = this.props;
        return (
            <React.Fragment>
                <Header instance={Aether} />
                <Container
                    classes={{
                        root: 'app-container aether onlyRight current-tab-' + reduxState.route,
                    }}
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
                <MobileNavigation instance={Aether} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: { route: state.app.route },
});

export default connect(mapStateToProps)(ContainerOnlyRight);
