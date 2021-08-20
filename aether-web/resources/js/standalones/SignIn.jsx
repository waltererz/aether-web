import React from 'react';
import Cookie from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import GoogleIcon from '@material-ui/icons/Google';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import config from '../config';
import * as common from '../services/common';
import * as api from '../services/api';

export default function SignIn() {
    let history = useHistory();

    const ref = {
        email: React.useRef(null),
        password: React.useRef(null),
        remember: React.useRef(null),
    };

    const theme = createTheme({
        palette: config('templete.palette'),
        breakpoints: config('templete.breakpoints'),
    });

    const Checkbox = withStyles({
        root: {
            color: config('templete.palette.secondary.main'),
        },
    })((props) => <MuiCheckbox color="default" {...props} />);

    const process = () => {
        const email = ref.email.current.querySelector('input').value;
        const password = ref.password.current.querySelector('input').value;
        const remember = ref.remember.current.querySelector('input').checked;

        api.post('auth/signin', {
            email: email,
            password: password,
            remember: remember,
        }).then((response) => {
            if (response.data) {
                if (response.data.auth) {
                    const cookie = new Cookie();

                    cookie.set('personal_access_token', response.data.access_token, {
                        path: '/',
                        domain: '.' + config('app.domain'),
                        expires: response.data.expire,
                    });
                    cookie.set('personal_unique_code', response.data.unique_code, {
                        path: '/',
                        domain: '.' + config('app.domain'),
                        expires: response.data.expire,
                    });

                    if (cookie.get('personal_access_token')) {
                        window.location.href = '/';
                    } else {
                        alert('로그인 장애가 발생했습니다. 잠시 후 다시 시도해주세요.');
                    }
                }
            } else {
                ref.email.current.querySelector('input').value = '';
                ref.password.current.querySelector('input').value = '';
                ref.email.current.querySelector('input').focus();
                alert('로그인 정보가 잘못되었습니다.');
            }
        });
    };

    React.useEffect(() => {
        const keyEvent = (event) => {
            if (event.keyCode == 13) {
                process();
            }
        };

        ref.email.current.querySelector('input').addEventListener('keyup', (event) => {
            keyEvent(event);
        });

        ref.password.current.querySelector('input').addEventListener('keyup', (event) => {
            keyEvent(event);
        });
    }, []);

    common.init();

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 10px',
                    height: '100vh',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '450px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        marginTop: '40px',
                        backgroundColor: '#ffffff',
                        boxShadow: config('templete.boxShadow.1'),
                        borderRadius: config('templete.borderRadius.2'),
                        border: '0px',
                    }}
                >
                    <Box
                        sx={{
                            background: config('templete.gradient.secondary'),
                            border: '0px',
                            borderRadius: config('templete.borderRadius.2'),
                            margin: '-20px 20px 10px 20px',
                            boxShadow: '0 1px 4px 0 rgba(73, 70, 128, 0.3)',
                            padding: '13px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Box
                            component="h4"
                            sx={{
                                margin: '0px',
                                padding: '0px 10px 5px 10px',
                                boxSizing: 'border-box',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '1.2em',
                            }}
                        >
                            SIGN IN
                        </Box>
                        <Box
                            sx={{
                                margin: '0px',
                                padding: '0px 10px',
                                boxSizing: 'border-box',
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '0.8em',
                            }}
                        >
                            회원으로 로그인하면 모든 기능을 이용할 수 있습니다.
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px',
                            boxSizing: 'border-box',
                            fontSize: '0.9em',

                            '& .input-item': {
                                width: '100%',

                                '&:last-of-type': {
                                    marginBottom: '0px',
                                },

                                '&.button-box button': {
                                    boxShadow: '0 7px 10px 0 rgba(73, 70, 128, 0.3)',
                                },

                                '& .MuiInputBase-formControl': {
                                    borderRadius: '6px',
                                },

                                '& .checkbox-container .MuiTypography-root': {
                                    fontSize: 'inherit',
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: '300px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',

                                '& .social-button': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '60px',
                                    height: '60px',
                                    marginRight: '20px',
                                    border: '3px solid rgba(73, 70, 128, 0.1)',
                                    borderRadius: '50%',
                                    boxSizing: 'border-box',
                                    cursor: 'pointer',
                                    color: 'rgba(0, 0, 0, 0.5)',
                                    transition:
                                        'color 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, border-color 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;',
                                    WebkitTapHighlightColor: 'transparent',
                                    userSelect: 'none',

                                    '&:last-of-type': {
                                        marginRight: '0px',
                                    },

                                    '&:hover': {
                                        '&.kakao': {
                                            color: config('templete.palette.kakao.main'),
                                            borderColor: config('templete.palette.kakao.main'),
                                        },

                                        '&.naver': {
                                            color: config('templete.palette.naver.main'),
                                            borderColor: config('templete.palette.naver.main'),
                                        },

                                        '&.google': {
                                            color: config('templete.palette.google.main'),
                                            borderColor: config('templete.palette.google.main'),
                                        },

                                        '&.facebook': {
                                            color: config('templete.palette.facebook.main'),
                                            borderColor: config('templete.palette.facebook.main'),
                                        },
                                    },
                                },
                            }}
                        >
                            <Box className="social-button kakao">K</Box>
                            <Box className="social-button naver">N</Box>
                            <Box className="social-button google">
                                <GoogleIcon />
                            </Box>
                            <Box className="social-button facebook">
                                <FacebookIcon />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                margin: '20px 10px',
                                boxSizing: 'border-box',

                                '&:before, &:after': {
                                    content: '""',
                                    width: '100%',
                                    borderTop: '1px solid #efefef',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'rgba(73, 70, 128, 0.3)',
                                }}
                            >
                                OR
                            </Box>
                        </Box>
                        <Box className="input-item" sx={{ marginBottom: '25px' }}>
                            <TextField
                                fullWidth
                                ref={ref.email}
                                label="이메일주소"
                                variant="outlined"
                                color="secondary"
                            />
                        </Box>
                        <Box className="input-item" sx={{ marginBottom: '10px' }}>
                            <TextField
                                fullWidth
                                ref={ref.password}
                                type="password"
                                label="패스워드"
                                variant="outlined"
                                color="secondary"
                            />
                        </Box>
                        <Box
                            className="input-item"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                <FormControlLabel
                                    className="checkbox-container"
                                    control={<Checkbox name="remember" />}
                                    label="로그인 상태 유지하기"
                                    ref={ref.remember}
                                />
                            </Box>
                            <a href="#">패스워드 초기화</a>
                        </Box>
                        <Box className="input-item button-box" sx={{ marginBottom: '10px' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size="large"
                                disableElevation
                                onClick={process}
                            >
                                로그인
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                margin: '20px 10px',
                                boxSizing: 'border-box',

                                '&:before, &:after': {
                                    content: '""',
                                    width: '100%',
                                    borderTop: '1px solid #efefef',
                                },
                            }}
                        />
                        <Box sx={{ textAlign: 'center' }}>
                            아직 회원이 아니신가요? <a href="#">회원가입</a>
                        </Box>
                    </Box>
                </Box>
                <Box
                    className="back-button"
                    onClick={() => {
                        history.goBack();
                    }}
                    sx={{
                        margin: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        WebkitTapHighlightColor: 'transparent',
                        userSelect: 'none',
                    }}
                >
                    <ArrowBackIcon sx={{ marginRight: '10px' }} />
                    돌아가기
                </Box>
            </Box>
        </ThemeProvider>
    );
}
