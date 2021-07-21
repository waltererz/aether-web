import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class HeaderIcons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="icons-desktop">
                    <div className="icon">
                        <Link to="/advisors/search">
                            <SearchOutlinedIcon />
                        </Link>
                    </div>
                    <div className="icon">
                        <AccountCircleIcon />
                    </div>
                </div>
                <div className="icons-mobile">
                    <div className="icon">
                        <Link to="/advisors/search">
                            <SearchOutlinedIcon />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderIcons;
