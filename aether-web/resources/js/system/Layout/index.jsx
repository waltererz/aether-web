import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme';
import constants from '../../constants';

class Layout extends React.Component {
    render() {
        const { reduxState } = this.props;

        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        {typeof reduxState.title == 'string' && reduxState.title.length > 0
                            ? reduxState.title + ' :: ' + constants.app.name
                            : constants.app.name}
                    </title>
                </Helmet>
                <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: {
        title: state.app.title,
    },
});

export default connect(mapStateToProps)(Layout);
