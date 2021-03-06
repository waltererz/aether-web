import React from 'react';
import { useDispatch } from 'react-redux';
import Cookie from 'universal-cookie';
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
import { setTitle } from '../../redux/actions/app';
import Paper from '../../components/Paper';
import * as api from '../../services/api';
import config from '../../config';

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

export default function Profile({ history }) {
    const cookie = new Cookie();
    const dispatch = useDispatch();

    /**
     * ???????????????(?????????) ?????? ????????? ???????????? ??????(state)
     */
    const [open, setOpen] = React.useState({
        change_nickname: false,
    });

    /**
     * ????????? ???????????? ????????? ??? ???????????? ??????(state)
     */
    const [userImage, setUserImage] = React.useState(config('app.user.image'));

    /**
     * ???????????? ????????? ??? ???????????? ??????(state)
     */
    const [nickname, setNickname] = React.useState({
        new: '',
        duplicated: false,
    });

    /**
     * DOM ????????? ?????? ref
     */
    const ref = {
        imageFileInput: React.useRef(null),
        nicknameInput: React.useRef(null),
    };

    /**
     * ????????? ???????????? ????????? ?????? ???????????? ??????
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
                alert('????????? ???????????? ?????????????????????.');
            }
        });
    };

    /**
     * ????????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ??????
     *
     * @param {*} event
     */
    const handleImageFileUploadButtonClick = (event) => {
        event.preventDefault();
        if (config('app.is_mobile')) {
            alert('?????? ????????? ????????? ????????? ????????????????????? ???????????????.');
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

    const handleDialogClose = (t) => {
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

    const changeNickname = () => {
        /**
         * ???????????? ?????????????????? ???????????????.
         */
        if (nickname.new.length < 1) {
            alert('???????????? ?????????????????????.');
            return;
        }

        /**
         * ?????? ???????????? ??????????????? ???????????????.
         */
        if (nickname.new == config('app.user.nickname')) {
            alert('?????? ???????????? ???????????????.');
            return;
        }

        /**
         * ???????????? ?????? ???????????? ???????????? ???????????? ???????????? ???????????????.
         */
        if (!nickname.duplicated) {
            alert('?????? ???????????? ??????????????????.');
            return;
        }

        api.patch(
            'users/nickname/' + config('app.auth'),
            {
                nickname: nickname.new,
            },
            cookie.get('personal_access_token'),
        ).then((response) => {
            alert('???????????? ?????????????????????.');
            history.replace('/@' + response.data);
            location.reload();
        });
    };

    React.useEffect(() => {
        /**
         * ????????? ???????????? ???????????????.
         * (??????) ??????????????? ???????????? ???????????? ????????? ???????????? ?????????.
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
                    <Tooltip title={userImage ? '?????? ?????????' : '?????? ????????????'}>
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
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'baseline',
                            }}
                        >
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
                                    marginLeft: '10px',

                                    fontSize: {
                                        xs: '0.9em',
                                        md: '1em',
                                    },
                                }}
                            >
                                {config('app.user.group')}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '0.9em',
                                    md: '1em',
                                },
                            }}
                        >
                            @{config('app.user.nickname')}
                            <Link
                                data-modal="change_nickname"
                                onClick={handleDialogClickOpen}
                                sx={{
                                    display: 'inline-flex',
                                    marginLeft: '10px',
                                    cursor: 'pointer',
                                    fontSize: '0.8em',
                                    textDecoration: 'none',
                                    color: config('templete.palette.secondary.main'),

                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                ????????????
                            </Link>
                            <Dialog
                                open={open.change_nickname}
                                onClose={handleDialogClose}
                                maxWidth="xs"
                            >
                                <DialogTitle>????????? ????????????</DialogTitle>
                                <DialogContent>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                        }}
                                    >
                                        ???????????? ?????? ???????????? ????????? ??? ?????????, Aether?????? ????????????
                                        ???????????? ?????? ???????????????. ????????? ???????????? ????????? ??? ????????????
                                        ???????????????.
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        ?????? ?????????: {config('app.user.nickname')}
                                    </DialogContentText>
                                    <DialogContentText
                                        sx={{
                                            marginBottom: '10px',
                                            color: config('templete.palette.secondary.main'),
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        ???????????? ??? ???????????? ????????? ???????????? ????????? ???????????????.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        ref={ref.nicknameInput}
                                        margin="dense"
                                        label="????????? ?????????"
                                        variant="standard"
                                        defaultValue={nickname.new}
                                        onChange={(event) => {
                                            if (event.target.value.length > 0) {
                                                api.post(
                                                    'users/nickname',
                                                    {
                                                        nickname: event.target.value,
                                                    },
                                                    cookie.get('personal_access_token'),
                                                ).then((response) => {
                                                    if (response.status === 200) {
                                                        if (response.data === true) {
                                                            setNickname({
                                                                ...nickname,
                                                                new: event.target.value,
                                                                duplicated: true,
                                                            });
                                                        } else {
                                                            setNickname({
                                                                ...nickname,
                                                                new: event.target.value,
                                                                duplicated: false,
                                                            });
                                                        }
                                                    }
                                                });
                                            }
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
                                        ?????? ???????????? ??????????????????.
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={changeNickname}>????????????</Button>
                                    <Button onClick={handleDialogClose}>??????</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </ProfileLeftBox>
                    <ProfileRightBox>
                        <Box>?????? ??????????????? ????????????</Box>
                        <Box>??????(Revolutionize Military)</Box>
                    </ProfileRightBox>
                </UserInformation>
            </ProfileContainer>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <ContentBox>
                        <Paper>??????</Paper>
                    </ContentBox>
                    <ContentBox>
                        <Paper>????????????</Paper>
                    </ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentBox>
                        <Paper>????????????</Paper>
                    </ContentBox>
                    <ContentBox>
                        <Paper>??????????????? ????????????</Paper>
                    </ContentBox>
                </Grid>
            </Grid>
        </>
    );
}
