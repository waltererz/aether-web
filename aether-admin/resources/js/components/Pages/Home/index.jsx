import React from 'react';
import { connect } from 'react-redux';
import { ReduxActionLayoutCurrentTab } from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/ContainerOnlyRight';
import CONSTANTS from '../../Constants';

class Content extends React.Component {
    render() {
        return (
            <div>
                이곳은 관리자를 위한 사이트입니다. 서비스 개발에 필요한 몇 가지 기능을 제공합니다.
            </div>
        );
    }
}

class Home extends React.Component {
    componentDidMount() {
        const { tab, changeTab } = this.props;
        if (tab != CONSTANTS.LAYOUT.TAB.HOME) {
            changeTab(CONSTANTS.LAYOUT.TAB.HOME);
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container content={<Content />} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.layout.tab,
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (tab) => dispatch(ReduxActionLayoutCurrentTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
