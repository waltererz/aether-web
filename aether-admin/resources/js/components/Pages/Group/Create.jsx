import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '../../Functions/Paper';
import Theme from '../../Layout/Theme';
import CONSTANTS from '../../Constants';

const styles = {
    grid: {
        [Theme.breakpoints.up('xs')]: {
            width: '100%',
        },
        [Theme.breakpoints.up('sm')]: {
            width: 400,
        },
    },
};

class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        const submit = () => {
            const name = document.querySelector('#input-group-name').value;
            const permissions = document.querySelector('#input-group-permissions').value;

            if (name.length < 2 || !/^([a-zA-Z가-힣]+)$/g.test(name)) {
                alert('그룹이름 또는 그룹 권한스트링이 잘못되었습니다.');
                return;
            }

            axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(() => {
                axios
                    .post(
                        CONSTANTS.URL.API + '/groups',
                        {
                            name: name,
                            permissions: permissions,
                        },
                        {
                            headers: {
                                'Content-type': 'application/json',
                            },
                        },
                    )
                    .then((response) => {
                        if (response.data) {
                            location.href = '/groups';
                        } else {
                            alert('서버통신에 오류가 발생했습니다. 관리자에게 문의하세요.');
                        }
                    });
            });
        };

        return (
            <Paper>
                <h3 className="mt-0">사용자그룹 만들기</h3>
                <div className="message">
                    새로운 그룹을 생성합니다. 모든 사용자는 그룹에 소속되어 있어야 하며, 관리자도
                    마찬가지로 그룹에 속하게 됩니다. 그룹마다 부여되는 권한이 다르니 권한부여 방법에
                    대해서는 최고관리자에게 문의바랍니다. 추후 그룹권한 표준화 예정.
                </div>
                <form id="form-create-group" className="mt-20">
                    <Grid container direction="column" className={classes.grid}>
                        <Grid item className="mb-20">
                            <TextField
                                id="input-group-name"
                                name="name"
                                label="사용자그룹 이름"
                                variant="outlined"
                                helperText="영어 소문자, 대문자, 한글을 포함해 작성해주세요."
                                fullWidth
                            />
                        </Grid>
                        <Grid item className="mb-20">
                            <TextField
                                id="input-group-permissions"
                                name="permissions"
                                label="사용자그룹 권한"
                                variant="outlined"
                                helperText="권한부여 스트링을 활용해 작성하세요. (관리자 문의)"
                                fullWidth
                            />
                        </Grid>
                        <Grid item className="mb-20">
                            <Button variant="contained" color="primary" onClick={submit}>
                                만들기
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(Create);
