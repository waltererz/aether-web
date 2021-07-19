import React from 'react';
import { connect } from 'react-redux';
import * as RouteService from '../../services/Route';
import * as ReduxApp from '../../redux/Actions/App';
import { FullContainer } from '../../system/Container';
import HeaderIcons from './components/HeaderIcons';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Contents from './components/Contents';

class Advisors extends React.Component {
    componentDidMount() {
        const { redux, reduxState } = this.props;
        const current_route = RouteService.getRouteCode();
        if (reduxState.route != current_route) {
            redux.changeRoute(current_route);
        }
        redux.changeTitle('투자어드바이저');
    }

    render() {
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
    reduxState: {
        route: state.app.route,
    },
});

const mapDispatchToProps = (dispatch) => ({
    redux: {
        changeTitle: (title) => dispatch(ReduxApp.changeTitle(title)),
        changeRoute: (route) => dispatch(ReduxApp.changeRoute(route)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Advisors);
