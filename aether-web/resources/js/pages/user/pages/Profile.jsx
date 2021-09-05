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
    /**
     * 사용자 이미지를 변경할 때 사용되는 상태(state)
     */
    const [userImage, setUserImage] = React.useState(config('app.user.image'));

    /**
     * 사용자 이미지를 업로드할 때 사용되는 ref
     */
    const ref = {
        imageFileInput: React.useRef(null),
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
                    <ProfileRightBox></ProfileRightBox>
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
