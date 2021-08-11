import React from 'react';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import XMenu from '../../system/XMenu';

export default function LeftSide() {
    return (
        <XMenu
            items={[
                { text: '즐겨찾기', to: '/', icon: <FolderSpecialIcon /> },
                { text: '저장됨', to: '/', icon: <LocalActivityIcon /> },
                { text: '다이렉트메시지', to: '/', icon: <QuestionAnswerIcon /> },
            ]}
        />
    );
}
