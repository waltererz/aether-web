import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const theme = createTheme({
    overrides: {
        MuiSnackbarContent: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            },
        },
    },
});

const WarningSnackbar = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={props.open}
                autoHideDuration={2000}
                message={props.message}
                onClose={props.onClose}
            />
        </ThemeProvider>
    );
};

export { WarningSnackbar };
