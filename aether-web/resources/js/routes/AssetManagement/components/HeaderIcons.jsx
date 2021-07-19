import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

class HeaderIcons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="icons-desktop">
                    <div className="icon">
                        <AccountCircleIcon />
                    </div>
                </div>
                <div className="icons-mobile">
                    <div className="icon">
                        <Link to="/asset/portfolio">
                            <PieChartOutlinedIcon />
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/asset/moneybook">
                            <CreditCardOutlinedIcon />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderIcons;
