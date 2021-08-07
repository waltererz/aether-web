import React from 'react';
import { connect } from 'react-redux';
import { setTab } from '../../redux/Actions/App';
import { FullContainer } from '../../system/Container';
import { getMetaData } from '../../services/Document';
import { scrollTop, changeTitle } from '../../services/Browser';
import Contents from './components/Contents';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import HeaderIcons from './components/HeaderIcons';
import constants from '../../variables/constants';

class Home extends React.Component {
    componentDidMount() {
        this.setMetaData();
    }

    componentDidUpdate() {
        this.setMetaData();
    }

    setMetaData() {
        const { redux, reduxState } = this.props;

        // 현재 페이지의 메타데이터를 가져옴
        const metaData = getMetaData();

        // 페이지 제목 변경
        changeTitle(metaData['title']);

        // 리덕스 컨테이너에 저장된 값과 현재 페이지의 메타데이터가 다른 경우 리덕스 컨테이너 및 웹브라우저 타이틀 업데이트
        if (constants.route[metaData['tabName']] != reduxState.tab) {
            // 메타데이터에 저장된 탭정보를 리덕스에 전달
            redux.setTab(constants.route[metaData['tabName']]);
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
    reduxState: {
        tab: state.app.tab,
    },
});

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setTab: (tab) => dispatch(setTab(tab)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
