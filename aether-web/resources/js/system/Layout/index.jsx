import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme';

export default class Layout extends React.Component {
    render() {
        const { reduxState } = this.props;

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
            </React.Fragment>
        );
    }
}
