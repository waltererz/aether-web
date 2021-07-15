import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Component from '../Component';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={this.Aether.Theme}>{this.props.children}</ThemeProvider>
            </React.Fragment>
        );
    }
}

export default Layout;
