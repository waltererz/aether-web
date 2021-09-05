import React from 'react';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Container from '../system/Container';
import * as Page from './user/pages';
import * as common from '../services/common';

export default function User() {
    common.init({
        headerIcons: {
            desktop: [{ path: '/app/setting', icon: <SettingsRoundedIcon /> }],
            mobile: [{ path: '/app/setting', icon: <SettingsRoundedIcon /> }],
        },
    });

    return <Container pages={[{ path: '/user', component: Page.Home, exact: true }]} />;
}
