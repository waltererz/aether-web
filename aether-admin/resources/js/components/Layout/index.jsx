import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import Theme from './Theme';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={Theme}>
                    <Header />
                    {this.props.children}
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default Layout;
