import React from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SingleBox from '../components/SingleBox';
import { FloatingBox, GrowBox } from '../components/Elements';
import config from '../config';
import * as common from '../services/common';
import * as api from '../services/api';

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

export default function SignUp() {
    let history = useHistory();

    const ref = {
        email: React.useRef(null),
        password: React.useRef(null),
        password_confirmation: React.useRef(null),
        firstname: React.useRef(null),
        lastname: React.useRef(null),
    };

    const theme = createTheme({
        palette: config('templete.palette'),
        breakpoints: config('templete.breakpoints'),
    });

    const process = () => {
        const email = ref.email.current.querySelector('input');
        const password = ref.password.current.querySelector('input');
        const password_confirmation = ref.password_confirmation.current.querySelector('input');
        const firstname = ref.firstname.current.querySelector('input');
        const lastname = ref.lastname.current.querySelector('input');

        api.post('users', {
            email: email.value,
            password: password.value,
            firstname: firstname.value,
            lastname: lastname.value,
        })
            .then((response) => {
                if (response.status === 201) {
                    window.location.href = '/';
                } else {
                    alert('회원가입에 실패했습니다. 관리자에게 문의하세요.');
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    common.init();

    return (
        <ThemeProvider theme={theme}>
            <SingleBox>
                <FloatingBox.Container sx={{ width: '100%', maxWidth: '450px' }}>
                    <FloatingBox.Header.Container>
                        <FloatingBox.Header.Primary>SIGN UP</FloatingBox.Header.Primary>
                        <FloatingBox.Header.Secondary>
                            회원가입 후 투자자산을 효율적으로 관리해보세요.
                        </FloatingBox.Header.Secondary>
                    </FloatingBox.Header.Container>
                    <FloatingBox.Body>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                required
                                ref={ref.email}
                                label="이메일주소"
                                helperText="이메일 주소는 계정 아이디로 사용됩니다."
                                variant="outlined"
                                color="primary"
                            />
                        </InputItem>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                required
                                ref={ref.password}
                                type="password"
                                label="패스워드"
                                helperText="사용할 패스워드를 정확하게 입력하세요."
                                variant="outlined"
                                color="primary"
                            />
                        </InputItem>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                required
                                ref={ref.password_confirmation}
                                type="password"
                                label="패스워드 확인"
                                helperText="위에서 입력한 패스워드를 한 번 더 입력해주세요."
                                variant="outlined"
                                color="primary"
                            />
                        </InputItem>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputItem>
                                    <TextField
                                        fullWidth
                                        required
                                        ref={ref.lastname}
                                        label="성"
                                        variant="outlined"
                                        color="primary"
                                    />
                                </InputItem>
                            </Grid>
                            <Grid item xs={6}>
                                <InputItem>
                                    <TextField
                                        fullWidth
                                        required
                                        ref={ref.firstname}
                                        label="이름"
                                        variant="outlined"
                                        color="primary"
                                    />
                                </InputItem>
                            </Grid>
                        </Grid>
                        <InputItem
                            className="button-box"
                            sx={{ marginTop: '40px', marginBottom: '10px' }}
                        >
                            <Button
                                fullWidth
                                disableElevation
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={process}
                            >
                                회원가입
                            </Button>
                        </InputItem>
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
