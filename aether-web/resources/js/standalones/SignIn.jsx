import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import theme from '../theme';
import * as common from '../services/common';
import '../../sass/standalones/_signin.scss';

export default function SignIn() {
    common.init();

    return (
        <ThemeProvider theme={theme}>
            <div className="flex-container column align-center" style={{ padding: 10 }}>
                <div className="user-signin-container">
                    <div className="container-header">
                        <h4>SIGN IN</h4>
                        <p className="secondary">
                            회원으로 로그인하면 모든 기능을 이용할 수 있습니다.
                        </p>
                    </div>
                    <div className="container-body">
                        <div className="input-item">
                            <TextField
                                fullWidth
                                required
                                id="input-user-email"
                                label="이메일주소"
                                variant="standard"
                                color="secondary"
                            />
                        </div>
                        <div className="input-item">
                            <TextField
                                fullWidth
                                required
                                id="input-user-password"
                                label="패스워드"
                                variant="standard"
                                color="secondary"
                            />
                        </div>
                        <div className="input-item button-box">
                            <Button variant="contained" color="secondary">
                                로그인
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
