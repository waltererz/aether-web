import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import XHeaderIcon from '../../system/XHeaderIcon';

export default function HeaderIcons() {
    return (
        <XHeaderIcon
            desktop={[
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ]}
            mobile={[
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/developer/forum', icon: <SpeakerNotesIcon /> },
            ]}
        />
    );
}
