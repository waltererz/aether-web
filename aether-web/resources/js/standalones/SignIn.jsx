import React from 'react';
import Cookie from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/core';
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
import SingleBox from '../components/SingleBox';
import { FloatingBox, GrowBox } from '../components/Elements';
import config from '../config';
import * as common from '../services/common';
import * as api from '../services/api';

const SocialContainer = styled('div')({
    width: '300px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
});

const SocialServiceButton = styled('div')({
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
});

const InputItem = styled('div')({
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
});

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
            color: config('templete.palette.primary.main'),
        },
    })((props) => <MuiCheckbox color="default" {...props} />);

    const process = () => {
        const email = ref.email.current.querySelector('input');
        const password = ref.password.current.querySelector('input');
        const remember_me = ref.remember.current.querySelector('input').checked;
        const user_agent = config('app.agent');

        api.post('auth/signin', {
            email: email.value,
            password: password.value,
            remember_me: remember_me,
            ip_address: config('app.client'),
            user_agent: {
                device: user_agent.device,
                platform: user_agent.platform,
                platform_version: user_agent.platform_version,
                browser: user_agent.browser,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    const cookie = new Cookie();
                    cookie.set('personal_access_token', response.headers['aether-access-token'], {
                        path: '/',
                        domain: '.' + config('app.domain'),
                    });

                    cookie.set(
                        'personal_unique_code',
                        response.headers['aether-user-unique-code'],
                        {
                            path: '/',
                            domain: '.' + config('app.domain'),
                        },
                    );

                    if (cookie.get('personal_access_token')) {
                        window.location.href = '/';
                    } else {
                        console.log('cookie: ' + cookie.get('personal_access_token'));
                    }
                }
            })
            .catch((error) => {
                console.log(error.response);
                alert('사용자 정보가 잘못되었습니다.');
                password.value = '';
                password.focus();
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
            <SingleBox>
                <FloatingBox.Container sx={{ width: '100%', maxWidth: '450px' }}>
                    <FloatingBox.Header.Container>
                        <FloatingBox.Header.Primary>SIGN IN</FloatingBox.Header.Primary>
                        <FloatingBox.Header.Secondary>
                            회원으로 로그인하면 모든 기능을 이용할 수 있습니다.
                        </FloatingBox.Header.Secondary>
                    </FloatingBox.Header.Container>
                    <FloatingBox.Body>
                        <SocialContainer>
                            <SocialServiceButton className="kakao">K</SocialServiceButton>
                            <SocialServiceButton className="naver">N</SocialServiceButton>
                            <SocialServiceButton className="google">
                                <GoogleIcon />
                            </SocialServiceButton>
                            <SocialServiceButton className="facebook">
                                <FacebookIcon />
                            </SocialServiceButton>
                        </SocialContainer>
                        <FloatingBox.Divider>
                            <FloatingBox.DividerText>OR</FloatingBox.DividerText>
                        </FloatingBox.Divider>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                ref={ref.email}
                                label="이메일주소"
                                variant="outlined"
                                color="primary"
                            />
                        </InputItem>
                        <InputItem sx={{ marginBottom: '10px' }}>
                            <TextField
                                fullWidth
                                ref={ref.password}
                                type="password"
                                label="패스워드"
                                variant="outlined"
                                color="primary"
                            />
                        </InputItem>
                        <InputItem
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <GrowBox>
                                <FormControlLabel
                                    className="checkbox-container"
                                    control={<Checkbox name="remember" />}
                                    label="로그인 상태 유지하기"
                                    ref={ref.remember}
                                />
                            </GrowBox>
                            <a href="#">패스워드 초기화</a>
                        </InputItem>
                        <InputItem className="button-box" sx={{ marginBottom: '10px' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                disableElevation
                                onClick={process}
                            >
                                로그인
                            </Button>
                        </InputItem>
                        <FloatingBox.Divider />
                        <Box sx={{ textAlign: 'center' }}>
                            아직 회원이 아니신가요?
                            <Box
                                onClick={() => {
                                    window.location.href = '/user/signup';
                                }}
                                sx={{
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    color: config('templete.palette.primary.main'),
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                회원가입
                            </Box>
                        </Box>
                    </FloatingBox.Body>
                </FloatingBox.Container>
                <Box
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
            </SingleBox>
        </ThemeProvider>
    );
}
