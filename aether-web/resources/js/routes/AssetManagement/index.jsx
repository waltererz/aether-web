import React from 'react';
import { connect } from 'react-redux';
import { getRouteCode } from '../../services/Route';
import { setRoute } from '../../redux/Actions/App';
import { FullContainer } from '../../system/Container';
import { scrollTop } from '../../services/Browser';
import Contents from './components/Contents';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import HeaderIcons from './components/HeaderIcons';

class AssetManagement extends React.Component {
    componentDidMount() {
        const { redux, reduxState } = this.props;
        const current_route = getRouteCode();
        if (reduxState.route != current_route) {
            redux.setRoute(current_route);
        }
    }

    render() {
        scrollTop();

        return (
            <React.Fragment>
                <FullContainer
                    content={<Contents />}
                    left={<LeftSide />}
                    right={<RightSide />}
                    headerIcons={<HeaderIcons />}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: { route: state.app.route },
});

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setRoute: (route) => dispatch(setRoute(route)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetManagement);