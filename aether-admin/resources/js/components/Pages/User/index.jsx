import React from 'react';
import { connect } from 'react-redux';
import { ReduxActionLayoutCurrentTab } from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import CONSTANTS from '../../Constants';

class User extends React.Component {
    componentDidMount() {
        const { tab, changeTab } = this.props;
        if (tab != CONSTANTS.LAYOUT.TAB.USER) {
            changeTab(CONSTANTS.LAYOUT.TAB.USER);
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container content="사용자관리" right="" left="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
