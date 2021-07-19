import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PieChartIcon from '@material-ui/icons/PieChart';
import CreditCardIcon from '@material-ui/icons/CreditCard';

class LeftSide extends React.Component {
    render() {
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/asset">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <DashboardIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="자산관리 대시보드" />
                    </ListItem>
                </Link>
                <Link to="/asset">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <MonetizationOnIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="투자자산관리" />
                    </ListItem>
                </Link>
                <Link to="/asset/portfolio">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <PieChartIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="포트폴리오관리" />
                    </ListItem>
                </Link>
                <Link to="/asset/moneybook">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <CreditCardIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="가계부" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}

export default LeftSide;
