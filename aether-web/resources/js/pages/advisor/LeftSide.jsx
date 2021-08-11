import React from 'react';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import XMenu from '../../system/XMenu';

export default function LeftSide() {
    return (
        <XMenu
            items={[
                { text: '투자어드바이저 검색', to: '/advisors/search', icon: <FindInPageIcon /> },
            ]}
        />
    );
}
