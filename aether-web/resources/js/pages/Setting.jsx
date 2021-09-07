import React from 'react';
import Container from '../system/Container';
import * as Page from './setting';
import * as common from '../services/common';

export default function User() {
    common.init({
        headerIcons: {
            desktop: [],
            mobile: [],
        },
    });

    return <Container pages={[{ path: '/app/setting', component: Page.Home, exact: true }]} />;
}
