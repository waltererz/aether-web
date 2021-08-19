import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Container from '../system/Container';
import RightSide from './home/RightSide';
import * as Page from './home/pages';
import * as common from '../services/common';

export default function Home() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
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
