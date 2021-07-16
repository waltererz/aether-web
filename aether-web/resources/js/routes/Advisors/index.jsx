import React from 'react';
import { connect } from 'react-redux';
import * as ReduxApp from '../../redux/Actions/App';
import HeaderIcons from './Components/HeaderIcons';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import Contents from './Components/Contents';
import Component from '../../component';

class Advisors extends Component {
    componentDidMount() {
        const Aether = this.Aether;
        const { redux, reduxState } = this.props;
        const current_route = Aether.Services.Route.getRouteCode();
        redux.changeTitle('투자어드바이저');
        if (reduxState.route != current_route) {
            redux.changeRoute(current_route);
        }
    }

    render() {
        const Aether = this.Aether;
        return (
            <React.Fragment>
                <Aether.ContainerStyles.FullContainer
                    instance={Aether}
                    content={<Contents instance={Aether} />}
                    left={<LeftSide />}
                    right={<RightSide instance={Aether} />}
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
