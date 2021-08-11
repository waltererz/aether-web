import React from 'react';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import XMenu from '../../system/XMenu';

export default function LeftSide() {
    return (
        <XMenu
            items={[{ text: '개발자게시판', to: '/developer/forum', icon: <SpeakerNotesIcon /> }]}
        />
    );
}
