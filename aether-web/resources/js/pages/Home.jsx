import React from 'react';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Container from '../system/Container';
import RightSide from './home/RightSide';
import * as Page from './home/pages';
import * as common from '../services/common';
import config from '../config';

export default function Home() {
    common.init({
        headerIcons: {
            desktop: [
                {
                    path: '/@' + config('app.user.nickname'),
                    icon: <AccountCircleRoundedIcon />,
                    auth: true,
                },
                { path: '/app/setting', icon: <SettingsRoundedIcon /> },
            ],
            mobile: [],
        },
    });

    return (
        <Container
            pages={[{ path: '/', component: Page.Home, exact: true }]}
            secondary={<RightSide />}
            submenus={[
                { path: '#', text: '즐겨찾기', icon: <FolderSpecialIcon /> },
                { path: '#', text: '저장됨', icon: <LocalActivityIcon /> },
                { path: '#', text: '다이렉트메시지', icon: <QuestionAnswerIcon /> },
            ]}
        />
    );
}
