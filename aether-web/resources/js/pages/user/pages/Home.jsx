import React from 'react';
import { styled } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
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

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

const ProfileLeftBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        marginRight: '0px',
        marginBottom: '15px',
        flexGrow: 0,
    },

    [theme.breakpoints.up('md')]: {
        marginRight: '30px',
        flexGrow: 1,
    },
}));

const ProfileRightBox = styled('div')({
    flexGrow: 0,
    flexShrink: 1,
    width: '200px',
});

const ContentBox = styled('div')({
    marginBottom: '15px',
});

export default function Home() {
    const [userImage, setUserImage] = React.useState(config('app.user.image'));

    const ref = {
        imageFileInput: React.useRef(null),
    };

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

    const handleImageFileUploadButtonClick = (event) => {
        event.preventDefault();
        if (config('app.is_mobile')) {
            alert('현재 사용자 이미지 변경은 데스크탑에서만 가능합니다.');
        } else {
            ref.imageFileInput.current.click();
        }
    };

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
                    </ProfileLeftBox>
                    <ProfileRightBox>
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '0.8em',
                                    md: '0.9em',
                                },
                            }}
                        >
                            설명 2
                        </Box>
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
