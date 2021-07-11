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
    pagination: {
        marginTop: 20,
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.page = Number(props.match.params.page);
        this.changePage = this.changePage.bind(this);
        this.state = {
            metadata: [],
            groups: [],
        };
    }

    componentDidMount() {
        this._get(this.page);
    }

    changePage(event, new_page) {
        this.props.history.push('/groups/page/' + new_page);
        this._get(new_page);
    }

    fetchGroupList() {
        return this.state.groups.map((group, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{group.name}</TableCell>
                </TableRow>
            );
        });
    }

    async _get(page) {
        return await axios
            .post(
                CONSTANTS.URL.BASE + '/groups/index',
                {
                    page: page,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                },
            )
            .then((response) => {
                this.setState((state) => {
                    if (state.groups != response.data) {
                        console.log(response.data);
                        return {
                            metadata: response.data,
                            groups: response.data.data,
                        };
                    } else {
                        return null;
                    }
                });
            });
    }

    render() {
        const { classes } = this.props;

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
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.state.groups ? this.fetchGroupList() : ''}</TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
