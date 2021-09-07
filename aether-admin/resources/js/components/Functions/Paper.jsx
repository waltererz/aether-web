import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '10px',
    },
}));

const AetherPaper = (props) => {
    const classes = useStyles();

    return <Paper className={classes.paper}>{props.children}</Paper>;
};

export default AetherPaper;
