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
        this.validation = {};
        this.state = {
            themes: [],
            selected_theme: '',
            users: [],
            selected_user: '',
        };
    }

    componentDidMount() {
        this._get();
    }

    fetchUserList() {
        return this.state.users.map((user, index) => {
            return (
                <option value={user.uuid} key={`user_${index}`}>
                    {user.firstname} {user.lastname} ({user.email})
                </option>
            );
        });
    }

    fetchThemeList() {
        return this.state.themes.map((theme, index) => {
            return (
                <option value={theme.uuid} key={`theme_${index}`}>
                    {theme.name}
                </option>
            );
        });
    }

    async _get() {
        await axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(async () => {
            await axios
                .post(
                    CONSTANTS.URL.API + '/users/index',
                    { pagination: false },
                    { headers: { 'Content-type': 'application/json' } },
                )
                .then((response) => {
                    this.setState(() => {
                        return {
                            users: response.data,
                        };
                    });
                });
            await axios
                .post(
                    CONSTANTS.URL.API + '/investment/theme/index',
                    { pagination: false },
                    { headers: { 'Content-type': 'application/json' } },
                )
                .then((response) => {
                    this.setState(() => {
                        return {
                            themes: response.data,
                        };
                    });
                });
        });
    }

    render() {
        const { classes } = this.props;
        const changeUser = (event) => {
            this.setState((state) => {
                return {
                    ...state,
                    selected_user: event.target.value,
                };
            });
        };
        const changeTheme = (event) => {
            this.setState((state) => {
                return {
                    ...state,
                    selected_theme: event.target.value,
                };
            });
        };
        const submit = () => {
            const user = document.querySelector('#input-user');
            const theme = document.querySelector('#input-theme');

            if (!user.value) {
                alert('투자어드바이저로 사용될 사용자계정을 선택해주세요.');
                user.focus();
                return;
            }
            if (!theme.value) {
                alert('생성되는 투자어드바이저의 투자성향을 선택해주세요.');
                theme.focus();
                return;
            }

            axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(() => {
                axios
                    .post(
                        CONSTANTS.URL.API + '/advisors',
                        {
                            user: user.value,
                            theme: theme.value,
                        },
                        {
                            headers: {
                                'Content-type': 'application/json',
                            },
                        },
                    )
                    .then((response) => {
                        if (response.data) {
                            location.href = '/advisors';
                        } else {
                            alert('서버통신에 오류가 발생했습니다. 관리자에게 문의하세요.');
                        }
                    });
            });
        };
        return (
            <Paper>
                <h3 className="mt-0">투자어드바이저 생성</h3>
                <div className="message">
                    개발 시 기능을 테스트하기 위해 필요한 투자어드바이저를 생성할 수 있습니다.
                </div>
                <form id="form-create-advisor" className="mt-20">
                    <Grid container direction="column" className={classes.grid}>
                        <Grid item className="mb-20">
                            <FormControl variant="outlined" className={classes.grid}>
                                <InputLabel htmlFor="input-user">사용자 *</InputLabel>
                                <Select
                                    native
                                    fullWidth
                                    value={this.state.selected_user}
                                    onChange={changeUser}
                                    label="사용자 *"
                                    inputProps={{
                                        name: 'user',
                                        id: 'input-user',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {this.state.users ? this.fetchUserList() : ''}
                                </Select>
                                <FormHelperText>
                                    투자어드바이저로 사용될 사용자 계정을 선택하세요.
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item className="mb-20">
                            <FormControl variant="outlined" className={classes.grid}>
                                <InputLabel htmlFor="input-theme">투자성향 *</InputLabel>
                                <Select
                                    native
                                    fullWidth
                                    value={this.state.selected_theme}
                                    onChange={changeTheme}
                                    label="투자성향 *"
                                    inputProps={{
                                        name: 'theme',
                                        id: 'input-theme',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {this.state.themes ? this.fetchThemeList() : ''}
                                </Select>
                                <FormHelperText>
                                    생성되는 투자어드바이저의 투자성향을 선택하세요.
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
