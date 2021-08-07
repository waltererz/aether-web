import React from 'react';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import XMenu from '../../../system/XMenu';

class LeftSide extends React.Component {
    render() {
        const items = [
            { text: '투자어드바이저 검색', to: '/advisors/search', icon: <FindInPageIcon /> },
        ];

        return <XMenu items={items} />;
    }
}

export default LeftSide;
