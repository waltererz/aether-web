import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../../Functions/Paper';

const styles = {};

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper>
                <h3 className="mt-0">투자전문가 찾기</h3>
                <div className="message">
                    자신의 투자성향과 가장 유사한 투자전문가를 빠르게 찾아보세요.
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
