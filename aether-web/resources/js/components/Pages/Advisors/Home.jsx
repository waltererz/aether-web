import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../../Functions/Paper';

const styles = {};

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper>
                <div className="message">
                    투자어드바이저: 자신의 투자성향과 비슷한 전문가와 함께 투자하기
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
