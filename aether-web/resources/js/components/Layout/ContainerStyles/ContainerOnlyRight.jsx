import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MobileNavigation from '../MobileNavigation';
import Header from '../Header';
import Component from '../../Component';

class ContainerOnlyRight extends Component {
    render() {
        const { route } = this.props;

        return (
            <React.Fragment>
                <Header instance={this.Aether} />
                <Container
                    classes={{ root: 'app-container aether onlyRight current-tab-' + route }}
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
                <MobileNavigation instance={this.Aether} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.layout.route,
});

export default connect(mapStateToProps)(ContainerOnlyRight);
