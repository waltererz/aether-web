import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../../redux/actions/app';
import { styled } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Paper from '../../../components/Paper';
import * as api from '../../../services/api';
import config from '../../../config';

const ProfileContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '20px',
    boxSizing: 'border-box',
});

const UserImage = styled('div')(({ theme }) => ({
    flexGrow: 0,
    flexShrink: 1,
    marginRight: '30px',
    position: 'relative',

    [theme.breakpoints.up('xs')]: {
        width: '100px',
    },

    [theme.breakpoints.up('sm')]: {
        width: '150px',
    },
}));

const TransparentBox = styled('div')(({ theme }) => ({
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000000',
    opacity: 0,
    cursor: 'pointer',
    webkitTapHighlightColor: 'transparent',
    userSelect: 'none',

    '&:hover': {
        opacity: '0.25',
    },

    '&:active': {
        opacity: '0.4',
    },

    [theme.breakpoints.up('xs')]: {
        width: '100px',
        height: '100px',
    },

    [theme.breakpoints.up('sm')]: {
        width: '150px',
        height: '150px',
    },
}));

const ImageCircle = styled('div')(({ theme }) => ({
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#efefef',

    '& svg': {
        color: '#777777',
    },

    [theme.breakpoints.up('xs')]: {
        width: '100px',
        height: '100px',

        '& svg': {
            fontSize: '100px',
        },

        '& img': {
            width: '100px',
            height: '100px',
        },
    },

    [theme.breakpoints.up('sm')]: {
        width: '150px',
        height: '150px',

        '& svg': {
            fontSize: '150px',
        },

        '& img': {
            width: '150px',
            height: '150px',
        },
    },
}));

const UserInformation = styled('div')(({ theme }) => ({
    display: 'flex',
    flexGrow: 1,

    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
    },

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
}));

const ProfileLeftBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        marginRight: '0px',
        marginBottom: '15px',
        flexGrow: 0,
    },

    [theme.breakpoints.up('sm')]: {
        marginRight: '20px',
        flexGrow: 1,
    },
}));

const ProfileRightBox = styled('div')(({ theme }) => ({
    flexGrow: 0,
    flexShrink: 1,
    boxSizing: 'border-box',

    [theme.breakpoints.up('xs')]: {
        padding: '20px 0 0 0',
        borderTop: '1px solid #eeeeee',
    },

    [theme.breakpoints.up('sm')]: {
        padding: '0 0 0 20px',
        borderTop: 0,
        borderLeft: '1px solid #eeeeee',
        width: '300px',
    },
}));

const ContentBox = styled('div')({
    marginBottom: '15px',
});

export default function Profile({ match }) {
    const dispatch = useDispatch();

    /**
     * 다이얼로그(모달창) 출력 여부에 사용되는 상태(state)
     */
    const [open, setOpen] = React.useState({
        change_nickname: false,
    });

    /**
     * 사용자 이미지를 변경할 때 사용되는 상태(state)
     */
    const [userImage, setUserImage] = React.useState(config('app.user.image'));

    /**
     * 닉네임을 변경할 때 사용되는 상태(state)
     */
    const [nickname, setNickname] = React.useState({
        current: config('app.user.nickname'),
        new: '',
        duplicated: false,
    });

    /**
     * DOM 제어를 위한 ref
     */
    const ref = {
        imageFileInput: React.useRef(null),
        nicknameInput: React.useRef(null),
    };

    /**
     * 사용자 이미지를 선택한 경우 실행되는 함수
     *
     * @param {*} event
     */
    const handleImageFileChange = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const imageFile = event.target.files[0];

        formData.append('user_image', imageFile);
        formData.append('user_uuid', config('app.auth'));

        api.upload('user/image', formData).then((response) => {
            if (response.status === 201) {
                setUserImage(response.data + '?reload=' + Math.random().toString(36).substr(2, 30));
                alert('사용자 이미지가 변경되었습니다.');
            }
        });
    };

    /**
     * 사용자 이미지를 변경하기 위해 박스를 클릭하면 실행되는 함수
     *
     * @param {*} event
     */
    const handleImageFileUploadButtonClick = (event) => {
        event.preventDefault();
        if (config('app.is_mobile')) {
            alert('현재 사용자 이미지 변경은 데스크탑에서만 가능합니다.');
        } else {
            ref.imageFileInput.current.click();
        }
    };

    const handleDialogClickOpen = (event) => {
        setOpen({
            ...open,
            [event.target.dataset.modal]: true,
        });
    };

    const handleDialogClose = () => {
        for (let k in open) {
            if (open[k] === true) {
                setOpen({
                    ...open,
                    [k]: false,
                });

                break;
            }
        }
    };

    React.useEffect(() => {
        /**
         * 페이지 타이틀을 설정합니다.
         * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
         */
        dispatch(setTitle(config('app.user.name')));
    }, []);

    return (
        <>
            <ProfileContainer
                sx={{
                    marginBottom: '20px',
                }}
            >
                <UserImage>
                    <input
                        hidden
                        ref={ref.imageFileInput}
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageFileChange}
                    />
                    <Tooltip title={userImage ? '사진 바꾸기' : '사진 등록하기'}>
                        <TransparentBox onClick={handleImageFileUploadButtonClick} />
                    </Tooltip>
                    <ImageCircle>
                        {userImage ? <img src={userImage} /> : <PersonRoundedIcon />}
                    </ImageCircle>
                </UserImage>
                <UserInformation>
                    <ProfileLeftBox>
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '1.3em',
                                    md: '1.5em',
                                },
                                fontWeight: 'bold',
                            }}
                        >
                            {config('app.user.name')}
                        </Box>
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '0.9em',
                                    md: '1em',
                                },
                            }}
                        >
                            {config('app.user.email')}
                        </Box>
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '0.9em',
                                    md: '1em',
                                },
                            }}
                        >
                            @{config('app.user.nickname')}{' '}
                            <Link
                                data-modal="change_nickname"
                                onClick={handleDialogClickOpen}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '0.7em',
                                    textDecoration: 'none',
                                    color: config('templete.palette.secondary.main'),

                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                변경하기
                            </Link>
                            <Dialog
                                open={open.change_nickname}
                                onClose={handleDialogClose}
                                maxWidth="xs"
                            >
                                <DialogTitle>닉네임 변경하기</DialogTitle>
                                <DialogContent>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                        }}
                                    >
                                        닉네임은 다른 사용자와 중복될 수 없으며, Aether에서 사용자를
                                        식별하기 위해 사용됩니다. 사용자 프로필에 접근할 때 닉네임이
                                        사용되므로 신중히 결정해 변경하시기 바랍니다.
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        현재 닉네임: {nickname.current}
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                            color: config('templete.palette.secondary.main'),
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        회원가입 시 자동으로 설정된 닉네임은 변경을 권장합니다.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        ref={ref.nicknameInput}
                                        margin="dense"
                                        label="변경할 닉네임"
                                        variant="standard"
                                        onChange={(event) => {
                                            setNickname({
                                                ...nickname,
                                                new: event.target.value,
                                            });
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            marginTop: '5px',
                                            fontSize: '0.8em',
                                            fontWeight: 'bold',
                                            textAlign: 'right',
                                            color: '#cc0000',
                                            display:
                                                nickname.new.length > 0 && !nickname.duplicated
                                                    ? 'block'
                                                    : 'none',
                                        }}
                                    >
                                        이미 사용중인 닉네임입니다.
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleDialogClose}>변경하기</Button>
                                    <Button onClick={handleDialogClose}>취소</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </ProfileLeftBox>
                    <ProfileRightBox>
                        <Box>투자 어드바이저 지원하기</Box>
                        <Box>레밀(Revolutionize Military)</Box>
                    </ProfileRightBox>
                </UserInformation>
            </ProfileContainer>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <ContentBox>
                        <Paper>a</Paper>
                    </ContentBox>
                    <ContentBox>
                        <Paper>b</Paper>
                    </ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentBox>
                        <Paper>c</Paper>
                    </ContentBox>
                    <ContentBox>
                        <Paper>d</Paper>
                    </ContentBox>
                    <ContentBox>
                        <Paper>e</Paper>
                    </ContentBox>
                </Grid>
            </Grid>
        </>
    );
}
