import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

const Layout = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>레이아웃: {props.children}</ThemeProvider>
        </React.Fragment>
    );
};

export default Layout;
