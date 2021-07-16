import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Component from '../../component';
import * as ContainerStyles from './ContainerStyles';

class Layout extends Component {
    render() {
        const Aether = this.Aether;
        return (
            <React.Fragment>
                <ThemeProvider theme={Aether.theme}>{this.props.children}</ThemeProvider>
            </React.Fragment>
        );
    }
}

export { Layout, ContainerStyles };
