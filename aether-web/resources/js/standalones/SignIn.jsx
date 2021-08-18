import React from 'react';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import GoogleIcon from '@material-ui/icons/Google';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import config from '../config';
import * as common from '../services/common';
import '../../sass/standalones/_signin.scss';

export default function SignIn() {
    const theme = createTheme({
        palette: config('templete.palette'),
        breakpoints: config('templete.breakpoints'),
    });

    let history = useHistory();

    const Checkbox = withStyles({
        root: {
            color: config('templete.palette.secondary.main'),
        },
    })((props) => <MuiCheckbox color="default" {...props} />);

    common.init();

    return (
        <ThemeProvider theme={theme}>
            <div
                className="flex-container column align-center justify-center"
                style={{ padding: '0 10px', height: '100vh' }}
            >
                <div className="user-signin-container">
                    <div className="container-header">
                        <h4>SIGN IN</h4>
                        <p className="secondary">
                            회원으로 로그인하면 모든 기능을 이용할 수 있습니다.
                        </p>
                    </div>
                    <div className="container-body">
                        <div className="social-button-container">
                            <div className="social-button kakao">K</div>
                            <div className="social-button naver">N</div>
                            <div className="social-button google">
                                <GoogleIcon />
                            </div>
                            <div className="social-button facebook">
                                <FacebookIcon />
                            </div>
                        </div>
                        <div className="signin-container-divider">
                            <div className="floating-string" style={{ width: 100 }}>
                                OR
                            </div>
                        </div>
                        <div className="input-item" style={{ marginBottom: 25 }}>
                            <TextField
                                fullWidth
                                label="이메일주소"
                                id="input-user-email"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>
                        <div className="input-item" style={{ marginBottom: 10 }}>
                            <TextField
                                fullWidth
                                type="password"
                                label="패스워드"
                                id="input-user-password"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>
                        <div
                            className="input-item flex-container row align-center"
                            style={{ marginBottom: 10 }}
                        >
                            <div className="grow">
                                <FormControlLabel
                                    className="checkbox-container"
                                    control={<Checkbox name="remember" id="input-remember" />}
                                    label="로그인 상태 유지하기"
                                />
                            </div>
                            <a href="#">패스워드 초기화</a>
                        </div>
                        <div className="input-item button-box" style={{ marginBottom: 10 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size="large"
                                disableElevation
                            >
                                로그인
                            </Button>
                        </div>
                        <div className="signin-container-divider"></div>
                        <div style={{ textAlign: 'center' }}>
                            <a href="#">아직 회원이 아니신가요?</a>
                        </div>
                    </div>
                </div>
                <div
                    className="back-button"
                    style={{ margin: 30, cursor: 'pointer' }}
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <ArrowBackIcon style={{ marginRight: 10 }} />
                    돌아가기
                </div>
            </div>
        </ThemeProvider>
    );
}
