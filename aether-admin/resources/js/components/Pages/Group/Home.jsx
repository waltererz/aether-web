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
import Pagination from '../../Functions/Pagination';
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
    link: {
        cursor: 'pointer',
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.page = Number(props.match.params.page);
        this.state = {
            metadata: [],
            groups: [],
        };
    }

    componentDidMount() {
        this._get(this.page);
    }

    componentDidUpdate() {
        this._get(this.props.match.params.page);
    }

    fetchGroupList() {
        const { classes } = this.props;

        return this.state.groups.map((group, index) => {
            return (
                <TableRow key={`group_${index}`}>
                    <TableCell>{group.name}</TableCell>
                    <TableCell align="center">{group.permissions}</TableCell>
                    <TableCell align="center">
                        <span className={classes.link} onClick={this.delete} data-uuid={group.uuid}>
                            삭제
                        </span>
                    </TableCell>
                </TableRow>
            );
        });
    }

    async delete(event) {
        const uuid = event.target.dataset.uuid;
        await axios.delete(CONSTANTS.URL.BASE + '/groups/' + uuid).then((response) => {
            if (response.data) {
                this._get(this.page);
            } else {
                alert('서버통신 오류가 발생했습니다. 관리자에게 문의하세요.');
            }
        });
    }

    async _get(page = 1) {
        page = Number(page);
        if (this.state.metadata.current_page != page) {
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
                        if (state.groups != response.data.data) {
                            return {
                                metadata: response.data,
                                groups: response.data.data,
                            };
                        } else {
                            return null;
                        }
                    });
                });
        } else {
            return null;
        }
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
                                <TableCell>
                                    <b>사용자그룹</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>권한</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>관리</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.state.groups ? this.fetchGroupList() : ''}</TableBody>
                    </Table>
                </TableContainer>
                {this.state.groups ? (
                    <Pagination metadata={this.state.metadata} baseUrl="/groups" />
                ) : (
                    ''
                )}
            </Paper>
        );
    }
}

export default withStyles(styles)(Home);
