import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={Theme}>{this.props.children}</ThemeProvider>
            </React.Fragment>
        );
    }
}

export default Layout;
