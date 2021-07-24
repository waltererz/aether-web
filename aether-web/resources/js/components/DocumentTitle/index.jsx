import React from 'react';
import Helmet from 'react-helmet';
import constants from '../../constants';

class DocumentTitle extends React.Component {
    render() {
        const title = this.props.children;
        return (
            <Helmet>
                <title>
                    {!title || typeof title != 'string' || title.length < 1
                        ? constants.app.name
                        : title + ' :: ' + constants.app.name}
                </title>
            </Helmet>
        );
    }
}

export default DocumentTitle;
