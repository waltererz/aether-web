import MuiPaper from '@material-ui/core/Paper';

export default function Paper({ children }) {
    return (
        <MuiPaper
            elevation={0}
            sx={{
                padding: '15px',
                backgroundColor: '#ffffff',
            }}
        >
            {children}
        </MuiPaper>
    );
}
