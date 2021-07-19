import React from 'react';
import Helmet from 'react-helmet';
import constants from '../../constants';

class DocumentTitle extends React.Component {
    render() {
        return (
            <Helmet>
                <title>
                    {this.props.children} :: {constants.title}
                </title>
            </Helmet>
        );
    }
}

export default DocumentTitle;
