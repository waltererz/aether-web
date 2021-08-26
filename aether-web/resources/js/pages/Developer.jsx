import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import Container from '../system/Container';
import RightSide from './developer/RightSide';
import * as Page from './developer/pages';
import * as common from '../services/common';

export default function Developer() {
    common.init({
        headerIcons: {
            desktop: [{ path: '/user', icon: <AccountCircleRoundedIcon />, auth: true }],
            mobile: [{ path: '/developer/forum', icon: <ForumRoundedIcon /> }],
        },
    });

    return (
        <Container
            pages={[
                { path: '/developer', component: Page.Home, exact: true },
                { path: '/developer/forum', component: Page.Forum, exact: true },
            ]}
            secondary={<RightSide />}
            submenus={[
                { path: '/developer/forum', text: '개발자게시판', icon: <ForumRoundedIcon /> },
            ]}
        />
    );
}
