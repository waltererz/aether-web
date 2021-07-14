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
    table: {
        minWidth: 300,
    },
    link: {
        cursor: 'pointer',
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            metadata: [],
            groups: [],
        };
    }

    componentDidMount() {
        const page = this._getPage();
        this._get(page);
    }

    componentDidUpdate() {
        const page = this._getPage();
        if (this.state.metadata.current_page != page) {
            this._get(page);
        }
    }

    fetchGroupList() {
        const { classes } = this.props;

        return this.state.groups.map((group, index) => {
            return (
                <TableRow key={`group_${index}`}>
                    <TableCell>{group.name}</TableCell>
                    <TableCell align="center">{group.permissions}</TableCell>
                    <TableCell align="center">
                        <span
                            className={`red ${classes.link}`}
                            onClick={this.delete}
                            data-name={group.name}
                            data-uuid={group.uuid}
                        >
                            삭제
                        </span>
                    </TableCell>
                </TableRow>
            );
        });
    }

    async delete(event) {
        const uuid = event.target.dataset.uuid;
        const name = event.target.dataset.name;
        if (confirm(name + '그룹을 영구히 삭제하시겠습니까? 한 번 삭제되면 복구는 불가능합니다.')) {
            await axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(async () => {
                await axios.delete(CONSTANTS.URL.API + '/groups/' + uuid).then((response) => {
                    if (response.data) {
                        const page = this._getPage();
                        this._get(page, true);
                    } else {
                        alert('서버통신 오류가 발생했습니다. 관리자에게 문의하세요.');
                    }
                });
            });
        }
    }

    async _get(page = 1, refresh = false) {
        if ((this.state.metadata.current_page != page && !refresh) || refresh) {
            await axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(async () => {
                await axios
                    .post(
                        CONSTANTS.URL.API + '/groups/index',
                        {
                            page: page,
                            pagination: true,
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
                            }
                        });
                    });
            });
        }
    }

    _getPage() {
        const page = Number(this.props.match.params.page);
        if (!page) {
            return 1;
        } else {
            return page;
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper>
                <h3 className="mt-0">사용자그룹 목록</h3>
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
