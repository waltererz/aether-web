import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../../Functions/Paper';

const styles = {
    title: {
        marginTop: 0,
    },
};

class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <h3 className={classes.title}>사용자 생성</h3>
                <div className="message">
                    개발 시 기능을 테스트하기 위해 필요한 사용자를 생성할 수 있습니다.
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Create);
