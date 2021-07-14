import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class HeaderIcons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="icons-desktop">
                    <div className="icon">
                        <SearchOutlinedIcon />
                    </div>
                    <div className="icon">
                        <AccountCircleIcon />
                    </div>
                </div>
                <div className="icons-mobile">
                    <div className="icon">
                        <SearchOutlinedIcon />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderIcons;
