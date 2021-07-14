import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

class HeaderIcons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleDrawer } = this.props;
        return (
            <React.Fragment>
                <div className="icons-desktop">
                    <div className="icon">
                        <AccountCircleIcon />
                    </div>
                </div>
                <div
                    className="icons-mobile"
                    onClick={(event) => {
                        toggleDrawer(true);
                    }}
                >
                    <div className="icon">{toggleDrawer ? <MenuIcon /> : <MenuIcon />}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderIcons;
