import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

class HeaderIcons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="icons-desktop">
                    <div className="icon">
                        <IconButton>
                            <Link to="/user">
                                <AccountCircleIcon />
                            </Link>
                        </IconButton>
                    </div>
                </div>
                <div className="icons-mobile">
                    <div className="icon">
                        <IconButton>
                            <Link to="/assets/portfolio">
                                <PieChartOutlinedIcon />
                            </Link>
                        </IconButton>
                    </div>
                    <div className="icon">
                        <IconButton>
                            <Link to="/assets/moneybook">
                                <CreditCardOutlinedIcon />
                            </Link>
                        </IconButton>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderIcons;
