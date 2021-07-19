import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Home extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('');
    }

    render() {
        return (
            <React.Fragment>
                <DocumentTitle>첫 페이지</DocumentTitle>
                <div>
                    <CKEditor editor={ClassicEditor} />
                </div>
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
