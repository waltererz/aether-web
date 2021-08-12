import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './developer/LeftSide';
import RightSide from './developer/RightSide';
import * as Page from './developer/pages';
import * as common from '../services/common';

export default function Developer() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/developer/forum', icon: <SpeakerNotesIcon /> },
            ],
        },
    });

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />}>
                <Switch>
                    <Route exact path="/developer" component={Page.Home} />
                    <Route exact path="/developer/forum" component={Page.Forum} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
