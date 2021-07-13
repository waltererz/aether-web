import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Theme from '../../Layout/Theme';
import Paper from '../../Functions/Paper';
import ValidateEmailAddress from '../../Functions/ValidateEmailAddress';
import ValidatePassword from '../../Functions/ValidatePassword';
import CONSTANTS from '../../Constants';

const styles = {
    grid: {
        [Theme.breakpoints.up('xs')]: {
            width: '100%',
        },
        [Theme.breakpoints.up('sm')]: {
            width: 500,
        },
    },
    alert: {
        fontSize: '0.8em',
        textAlign: 'right',
        fontWeight: 'bold',
    },
};

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.validation = {
            email: false,
            password: false,
            password_confirm: false,
        };
        this.state = {
            groups: [],
            selected_group: '',
        };
    }

    componentDidMount() {
        this._get();
    }

    fetchGroupList() {
        return this.state.groups.map((group, index) => {
            return (
                <option value={group.uuid} key={`group_${index}`}>
                    {group.name}
                </option>
            );
        });
    }

    async _get() {
        await axios
            .post(
                CONSTANTS.URL.BASE + '/groups/index',
                { pagination: false },
                { headers: { 'Content-type': 'application/json' } },
            )
            .then((response) => {
                this.setState(() => {
                    return {
                        groups: response.data,
                    };
                });
            });
    }

    render() {
        const { classes } = this.props;
        const changeAlertMessage = (target, type, message) => {
            if (type == 'clear') {
                target.innerHTML = '';
            } else if (type) {
                target.innerHTML = '<span class="success">' + message + '</span>';
            } else {
                target.innerHTML = '<span class="error">' + message + '</span>';
            }
        };
        const changeEmail = (event) => {
            const email = event.target.value;
            const alert = document.querySelector('#alert-email');
            if (email.length > 1) {
                if (ValidateEmailAddress(email)) {
                    axios
                        .post(
                            CONSTANTS.URL.BASE + '/users/check/email',
                            {
                                email: email,
                            },
                            {
                                headers: {
                                    'Content-type': 'application/json',
                                },
                            },
                        )
                        .then((response) => {
                            if (!response.data) {
                                changeAlertMessage(
                                    alert,
                                    false,
                                    '해당 이메일주소로 가입된 회원정보가 이미 존재합니다.',
                                );
                                this.validation.email = false;
                            } else {
                                changeAlertMessage(alert, true, '올바른 이메일주소입니다.');
                                this.validation.email = true;
                            }
                        });
                } else {
                    changeAlertMessage(alert, false, '이메일주소가 올바르지 않습니다.');
                    this.validation.email = false;
                }
            } else {
                changeAlertMessage(alert, 'clear');
                this.validation.email = false;
            }
        };
        const changePassword = (event) => {
            const password = event.target.value;
            const alert = document.querySelector('#alert-password');
            if (password.length > 1) {
                if (ValidatePassword(password)) {
                    changeAlertMessage(alert, true, '올바른 패스워드입니다.');
                    this.validation.password = true;
                } else {
                    changeAlertMessage(alert, false, '패스워드를 다시 확인해주세요.');
                    this.validation.password = false;
                }
            } else {
                changeAlertMessage(alert, 'clear');
                this.validation.password = false;
            }
        };
        const changePasswordConfirm = (event) => {
            const password = document.querySelector('#input-user-password').value;
            const password_confirm = event.target.value;
            const alert = document.querySelector('#alert-password-confirm');
            if (password_confirm.length > 1 && this.validation.password) {
                if (password == password_confirm) {
                    changeAlertMessage(alert, true, '입력하신 패스워드가 일치합니다.');
                    this.validation.password_confirm = true;
                } else {
                    changeAlertMessage(alert, false, '입력하신 패스워드가 일치하지 않습니다.');
                    this.validation.password_confirm = false;
                }
            } else {
                changeAlertMessage(alert, 'clear');
                this.validation.password_confirm = false;
            }
        };
        const changeGroup = (event) => {
            this.setState(() => {
                return {
                    selected_group: event.target.value,
                };
            });
        };
        const submit = () => {
            const email = document.querySelector('#input-user-email');
            const password = document.querySelector('#input-user-password');
            const password_confirm = document.querySelector('#input-user-password-confirm');
            const firstname = document.querySelector('#input-user-firstname');
            const lastname = document.querySelector('#input-user-lastname');
            const middlename = document.querySelector('#input-user-middlename');
            const group = document.querySelector('#input-user-group');

            if (!email.value || !this.validation.email) {
                alert('이메일주소를 확인해주세요.');
                email.focus();
                return null;
            }
            if (!password.value || !this.validation.password) {
                alert('패스워드를 확인해주세요.');
                password.value = '';
                password.focus();
                return null;
            }
            if (!password_confirm.value || !this.validation.password_confirm) {
                alert('입력하신 패스워드가 일치하지 않습니다.');
                password_confirm.value = '';
                password_confirm.focus();
                return null;
            }
            if (!firstname.value) {
                alert('사용자 이름을 입력해주세요.');
                firstname.focus();
                return null;
            }
            if (!lastname.value) {
                alert('사용자의 성을 입력해주세요.');
                lastname.focus();
                return null;
            }
            if (!group.value) {
                alert('사용자그룹을 선택해주세요.');
                group.focus();
                return null;
            }

            axios
                .post(
                    CONSTANTS.URL.BASE + '/users',
                    {
                        email: email.value,
                        password: password.value,
                        firstname: firstname.value,
                        lastname: lastname.value,
                        middlename: middlename.value,
                        group: group.value,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                        },
                    },
                )
                .then((response) => {
                    if (response.data) {
                        location.href = '/users';
                        return null;
                    } else {
                        alert('서버통신에 오류가 발생했습니다. 관리자에게 문의하세요.');
                        return null;
                    }
                });
            return null;
        };
        return (
            <Paper>
                <h3 className="mt-0">사용자 생성</h3>
                <div className="message">
                    개발 시 기능을 테스트하기 위해 필요한 사용자를 생성할 수 있습니다.
                </div>
                <form id="form-create-group" className="mt-20">
                    <Grid container direction="column" className={classes.grid}>
                        <Grid item>
                            <TextField
                                id="input-user-email"
                                name="email"
                                label="이메일 주소 *"
                                variant="outlined"
                                helperText="이메일 주소는 계정 아이디로 사용됩니다."
                                type="email"
                                onChange={changeEmail}
                                fullWidth
                            />
                        </Grid>
                        <div id="alert-email" className={`mt-5 mb-20 ${classes.alert}`}></div>
                        <Grid item>
                            <TextField
                                id="input-user-password"
                                name="password"
                                label="패스워드 *"
                                variant="outlined"
                                helperText="사용할 패스워드를 정확하게 입력하세요. (영문 대소문자, 숫자, 특수문자 포함 12자 이상)"
                                type="password"
                                onChange={changePassword}
                                fullWidth
                            />
                        </Grid>
                        <div id="alert-password" className={`mt-5 mb-20 ${classes.alert}`}></div>
                        <Grid item>
                            <TextField
                                id="input-user-password-confirm"
                                name="password-confirm"
                                label="패스워드 확인 *"
                                variant="outlined"
                                helperText="위에서 입력한 패스워드를 다시 한 번 입력해주세요."
                                type="password"
                                onChange={changePasswordConfirm}
                                fullWidth
                            />
                        </Grid>
                        <div
                            id="alert-password-confirm"
                            className={`mt-5 mb-20 ${classes.alert}`}
                        ></div>
                        <Grid container direction="row" className="mb-20">
                            <Grid item xs={6}>
                                <TextField
                                    id="input-user-firstname"
                                    name="firstname"
                                    label="이름 *"
                                    variant="outlined"
                                    helperText="본인의 이름을 입력하세요."
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="input-user-lastname"
                                    name="lastname"
                                    label="성 *"
                                    variant="outlined"
                                    helperText="본인의 성을 입력하세요."
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item className="mb-20">
                            <TextField
                                id="input-user-middlename"
                                name="middlename"
                                label="중간이름 (선택)"
                                variant="outlined"
                                helperText="중간이름이 있는 경우 입력하세요."
                                fullWidth
                            />
                        </Grid>
                        <Grid item className="mb-20">
                            <FormControl variant="outlined" className={classes.grid}>
                                <InputLabel htmlFor="input-user-group">사용자그룹 *</InputLabel>
                                <Select
                                    native
                                    fullWidth
                                    value={this.state.selected_group}
                                    onChange={changeGroup}
                                    label="사용자그룹 *"
                                    inputProps={{
                                        name: 'group',
                                        id: 'input-user-group',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {this.state.groups ? this.fetchGroupList() : ''}
                                </Select>
                                <FormHelperText>
                                    사용자가 소속될 그룹을 선택해주세요. (필수선택)
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item className="mb-20">
                            <Button variant="contained" color="primary" onClick={submit}>
                                계정생성
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(Create);
