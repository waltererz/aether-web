import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Container from '../system/Container';
import RightSide from './developer/RightSide';
import * as Page from './developer/pages';
import * as common from '../services/common';

export default function Developer() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/developer/forum', icon: <SpeakerNotesIcon /> },
            ],
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
                { path: '/developer/forum', text: '개발자게시판', icon: <SpeakerNotesIcon /> },
            ]}
        />
    );
}
