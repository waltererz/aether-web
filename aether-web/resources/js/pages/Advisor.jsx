import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonSearchRoundedIcon from '@material-ui/icons/PersonSearchRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Container from '../system/Container';
import * as common from '../services/common';
import * as Page from './advisor';
import config from '../config';

export default function Advisor() {
    /**
     * 기본적인 사항들을 초기화합니다.
     */
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
            mobile: [{ path: '/advisors/search', icon: <PersonSearchRoundedIcon /> }],
        },
    });

    return (
        <Container
            pages={[
                { path: '/advisors', component: Page.Home, exact: true },
                { path: '/advisors/search', component: Page.Search, exact: true },
            ]}
            submenus={[
                {
                    path: '/advisors/search',
                    text: '투자어드바이저 검색',
                    icon: <PersonSearchRoundedIcon />,
                },
            ]}
        />
    );
}
