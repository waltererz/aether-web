import React from 'react';
import { connect } from 'react-redux';
import { setHeader, setTitle } from '../../../redux/Actions/App';
import { getDocumentTitle } from '../../../services/Data';

class Home extends React.Component {
    componentDidMount() {
        const { redux, location } = this.props;

        (async function () {
            const documentTitle = await getDocumentTitle(location.pathname);
            redux.setHeader(documentTitle);
            redux.setTitle(documentTitle);
        })();
    }

    render() {
        return (
            <React.Fragment>
                <div>자신의 투자성향과 비슷한 전문가와 함께 투자하기</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setHeader: (header) => dispatch(setHeader(header)),
        setTitle: (title) => dispatch(setTitle(title)),
    },
});

export default connect(null, mapDispatchToProps)(Home);
