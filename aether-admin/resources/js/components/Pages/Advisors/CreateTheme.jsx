import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Theme from '../../Layout/Theme';
import Paper from '../../Functions/Paper';
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

class CreateTheme extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const submit = () => {
            const name = document.querySelector('#input-theme-name').value;

            if (name.length < 2 || !/^([가-힣]+)$/g.test(name)) {
                alert('투자성향 이름은 한글로 작성해주세요.');
                return;
            }

            axios.get(CONSTANTS.URL.BACK + '/sanctum/csrf-cookie').then(() => {
                axios
                    .post(
                        CONSTANTS.URL.API + '/investment/theme',
                        {
                            name: name,
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
                <h3 className="mt-0">투자성향 만들기</h3>
                <div className="message">새로운 투자어드바이저 투자성향을 만듭니다.</div>
                <form id="form-create-theme" className="mt-20">
                    <Grid container direction="column" className={classes.grid}>
                        <Grid item className="mb-20">
                            <TextField
                                id="input-theme-name"
                                name="name"
                                label="투자성향 이름"
                                variant="outlined"
                                helperText="한글로 작성해주세요."
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

export default withStyles(styles)(CreateTheme);
