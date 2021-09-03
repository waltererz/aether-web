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
import { FloatingBox } from '../components/Elements';
import config from '../config';
import * as common from '../services/common';
import * as api from '../services/api';
import * as validation from '../services/validation';

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

const Alert = styled('div')({
    color: '#aa0000',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: '5px',

    fontSize: {
        xs: '0.8em',
        md: '0.9em',
    },
});

export default function SignUp() {
    let history = useHistory();

    const [value, setValue] = React.useState({
        email: '',
        password: '',
        password_confirmation: '',
        firstname: '',
        lastname: '',
    });

    const [duplicatedCheck, setDuplicatedCheck] = React.useState(false);
    const [passwordCheck, setPasswordCheck] = React.useState(false);

    const ref = {
        email: React.useRef(null),
        password: React.useRef(null),
        password_confirmation: React.useRef(null),
    };

    const theme = createTheme({
        palette: config('templete.palette'),
        breakpoints: config('templete.breakpoints'),
    });

    const changeValues = (event) => {
        const field_name = event.target.name;

        setValue({
            ...value,
            [field_name]: event.target.value,
        });
    };

    const process = () => {
        const input_password = ref.password.current.querySelector('input');
        const input_password_confirmation =
            ref.password_confirmation.current.querySelector('input');
        const input_email = ref.email.current.querySelector('input');

        /**
         * 필수 입력 항목이 공백인 경우에는 오류 메시지를 출력 후 메소드를 종료합니다.
         */
        if (
            !value.email ||
            !value.password ||
            !value.password_confirmation ||
            !value.firstname ||
            !value.lastname
        ) {
            alert('모든 필수정보를 입력해주십시오.');
            return;
        }

        /**
         * 이메일 주소가 정상적인 형태인지 확인합니다.
         */
        if (!validation.validateEmail(value.email)) {
            alert('이메일주소가 정확한지 확인해주세요.');
            input_email.focus();
            return;
        }

        /**
         * 이메일 주소가 기존의 회원과 중복되는지 확인합니다.
         */
        if (!duplicatedCheck) {
            alert('이메일 주소가 기존 회원과 중복됩니다. 다른 이메일 주소를 입력해주세요.');
            input_email.focus();
            return;
        }

        /**
         * 패스워드 유효성을 검사합니다.
         */
        if (!validation.validatePassword(value.password)) {
            alert(
                '패스워드는 영문 소문자, 대문자 및 특수문자를 포함하여 12자 이상으로 만들어주시기 바랍니다.',
            );

            input_password.focus();

            return;
        }

        /**
         * 입력된 패스워드와 패드워드 확인 값이 일치하는지 확인합니다.
         */
        if (!passwordCheck) {
            alert('입력된 패스워드와 패스워드 확인 값이 일치하지 않습니다.');

            input_password.value = '';
            input_password_confirmation.value = '';

            setValue({
                ...value,
                password: '',
                password_confirmation: '',
            });

            input_password.focus();

            return;
        }

        /**
         * 이름이 정상적으로 입력되었는지 확인합니다.
         */
        if (
            !validation.validatePersonName(value.firstname) ||
            !validation.validatePersonName(value.lastname)
        ) {
            alert('입력된 이름(또는 성)을 확인해주세요.');
            return;
        }

        /**
         * 백엔드 서버에 회원가입에 필요한 정보를 보내 사용자 등록 절차를 진행합니다.
         * 201 상태가 아닌 경우에는 경고 메시지를 출력합니다.
         * 결과가 어떻든 홈페이지로 페이지를 이동합니다.
         */
        api.post('users', {
            email: value.email,
            password: value.password,
            firstname: value.firstname,
            lastname: value.lastname,
        })
            .then((response) => {
                if (response.status !== 201) {
                    alert('회원가입에 실패했습니다. 관리자에게 문의하세요.');
                }

                window.location.href = '/';
            })
            .catch((error) => {
                alert('회원가입에 실패했습니다. 관리자에게 문의하세요.');
                console.log(error.response);
            });
    };

    React.useEffect(() => {
        const value_email = ref.email.current.querySelector('input').value;

        if (value_email.length > 0) {
            api.post('users/check/email', { email: value_email })
                .then((response) => {
                    if (response.status === 200) {
                        const check = response.data === 'duplicated' ? false : true;
                        setDuplicatedCheck(check);
                    } else {
                        console.log('error ' + response.status);
                        console.log(response);
                    }
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    }, [value.email]);

    React.useEffect(() => {
        const value_password = ref.password.current.querySelector('input').value;
        const value_password_confirmation =
            ref.password_confirmation.current.querySelector('input').value;
        const check = value_password !== value_password_confirmation ? false : true;
        setPasswordCheck(check);
    }, [value.password_confirmation]);

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
                                name="email"
                                label="이메일주소"
                                helperText="이메일 주소는 계정 아이디로 사용됩니다."
                                variant="outlined"
                                color="primary"
                                onChange={changeValues}
                            />
                            <Alert
                                sx={{
                                    display:
                                        value.email.length > 1 && !duplicatedCheck
                                            ? 'block'
                                            : 'none',
                                }}
                            >
                                이미 사용중인 이메일 주소입니다.
                            </Alert>
                        </InputItem>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                required
                                ref={ref.password}
                                name="password"
                                type="password"
                                label="패스워드"
                                helperText="사용할 패스워드를 정확하게 입력하세요."
                                variant="outlined"
                                color="primary"
                                onChange={changeValues}
                            />
                        </InputItem>
                        <InputItem sx={{ marginBottom: '20px' }}>
                            <TextField
                                fullWidth
                                required
                                ref={ref.password_confirmation}
                                name="password_confirmation"
                                type="password"
                                label="패스워드 확인"
                                helperText="위에서 입력한 패스워드를 한 번 더 입력해주세요."
                                variant="outlined"
                                color="primary"
                                onChange={changeValues}
                            />
                            <Alert
                                sx={{
                                    display:
                                        value.password_confirmation.length > 1 && !passwordCheck
                                            ? 'block'
                                            : 'none',
                                }}
                            >
                                위에서 입력한 패스워드가 일치하지 않습니다.
                            </Alert>
                        </InputItem>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputItem>
                                    <TextField
                                        fullWidth
                                        required
                                        name="lastname"
                                        label="성"
                                        variant="outlined"
                                        color="primary"
                                        onChange={changeValues}
                                    />
                                </InputItem>
                            </Grid>
                            <Grid item xs={6}>
                                <InputItem>
                                    <TextField
                                        fullWidth
                                        required
                                        name="firstname"
                                        label="이름"
                                        variant="outlined"
                                        color="primary"
                                        onChange={changeValues}
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
