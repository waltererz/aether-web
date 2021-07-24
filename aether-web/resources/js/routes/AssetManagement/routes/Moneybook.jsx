import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

class Moneybook extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('가계부');
    }

    render() {
        return (
            <React.Fragment>
                <DocumentTitle>가계부</DocumentTitle>
                <div>가계부 첫 페이지</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setHeader: (header) => dispatch(setHeader(header)),
    },
});

export default connect(null, mapDispatchToProps)(Moneybook);
