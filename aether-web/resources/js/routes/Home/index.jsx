import React from 'react';
import { connect } from 'react-redux';
import * as ReduxApp from '../../redux/Actions/App';
import Contents from './Components/Contents';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import HeaderIcons from './Components/HeaderIcons';
import Component from '../../component';

class Home extends Component {
    componentDidMount() {
        const Aether = this.Aether;
        const { redux, reduxState } = this.props;
        const current_route = Aether.Services.Route.getRouteCode();
        if (reduxState.route != current_route) {
            redux.changeRoute(current_route);
        }
        redux.changeTitle('');
    }
    render() {
        const Aether = this.Aether;
        return (
            <React.Fragment>
                <Aether.ContainerStyles.FullContainer
                    content={<Contents instance={Aether} />}
                    left={<LeftSide />}
                    right={<RightSide instance={Aether} />}
                    headerIcons={<HeaderIcons />}
                    instance={Aether}
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
        changeTitle: (title) => dispatch(ReduxApp.changeTitle(title)),
        changeRoute: (route) => dispatch(ReduxApp.changeRoute(route)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
