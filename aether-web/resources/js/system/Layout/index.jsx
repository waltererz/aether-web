import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../Theme';

class Layout extends React.Component {
    render() {
        return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
    }
}

export default Layout;
