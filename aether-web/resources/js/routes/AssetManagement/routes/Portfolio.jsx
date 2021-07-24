import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

class Portfolio extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('포트폴리오');
    }

    render() {
        return (
            <React.Fragment>
                <DocumentTitle>포트폴리오</DocumentTitle>
                <div>포트폴리오 첫 페이지</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setHeader: (header) => dispatch(setHeader(header)),
    },
});

export default connect(null, mapDispatchToProps)(Portfolio);
