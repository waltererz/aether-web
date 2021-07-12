import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../../Functions/Paper';

const styles = {
    title: {
        marginTop: 0,
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <h3 className={classes.title}>사용자 목록</h3>
                <div className="message">
                    지금까지 생성된 모든 사용자 목록을 이곳에서 확인할 수 있습니다.
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
