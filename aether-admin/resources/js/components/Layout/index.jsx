import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import Theme from './Theme';

const Layout = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <Header />
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Layout;
