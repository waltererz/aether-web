import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: '#ffffff',
        padding: '10px',
    },
}));

const AetherPaper = (props) => {
    const classes = useStyles();

    return <div className={classes.paper}>{props.children}</div>;
};

export default AetherPaper;
