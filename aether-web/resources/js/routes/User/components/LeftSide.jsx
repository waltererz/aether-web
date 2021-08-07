import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import XMenu from '../../../system/XMenu';

class LeftSide extends React.Component {
    render() {
        const items = [
            { text: '회원가입', to: '/user/signup', icon: <AssignmentIcon /> },
            { text: '로그인', to: '/user/signin', icon: <VpnKeyIcon /> },
        ];

        return <XMenu items={items} />;
    }
}

export default LeftSide;
