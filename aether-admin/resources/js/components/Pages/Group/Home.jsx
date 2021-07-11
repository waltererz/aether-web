import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '../../Functions/Paper';
import CONSTANTS from '../../Constants';

const styles = {
    title: {
        marginTop: 0,
    },
    table: {
        minWidth: 300,
    },
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        axios
            .post(
                CONSTANTS.URL.BASE + '/groups/index',
                {},
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
            });

        return (
            <Paper>
                <h3 className={classes.title}>사용자그룹 목록</h3>
                <div className="message">
                    지금까지 생성된 모든 사용자그룹 목록을 이곳에서 확인할 수 있습니다.
                </div>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>사용자그룹</TableCell>
                                <TableCell>권한</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id="groups"></TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
