import React from 'react';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import XMenu from '../../../system/XMenu';

class LeftSide extends React.Component {
    render() {
        const items = [
            { text: '개발자게시판', to: '/developer/forum', icon: <SpeakerNotesIcon /> },
        ];

        return <XMenu items={items} />;
    }
}

export default LeftSide;
