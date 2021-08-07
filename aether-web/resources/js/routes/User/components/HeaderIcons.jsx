import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import XHeaderIcon from '../../../system/XHeaderIcon';

export default class HeaderIcons extends React.Component {
    render() {
        return (
            <XHeaderIcon
                desktop={[
                    { to: '/user', icon: <AccountCircleIcon /> },
                    { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                ]}
                mobile={[{ to: '/advisors/search', icon: <SearchOutlinedIcon /> }]}
            />
        );
    }
}
