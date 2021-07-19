import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

class Home extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('자산관리');
    }

    render() {
        return (
            <React.Fragment>
                <DocumentTitle>자산관리</DocumentTitle>
                <div>자산관리 첫 페이지</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setHeader: (header) => dispatch(setHeader(header)),
    },
});

export default connect(null, mapDispatchToProps)(Home);
