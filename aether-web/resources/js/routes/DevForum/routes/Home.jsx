import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

class Home extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('개발자게시판');
    }

    render() {
        return (
            <React.Fragment>
                <DocumentTitle>개발자게시판</DocumentTitle>
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
