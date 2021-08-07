import React from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HideOnScroll from '../../components/HideOnScroll';

export default class HeaderNavigation extends React.Component {
    render() {
        const { headerIcons } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className="aether-header">
                    <Toolbar className="header-toolbar" disableGutters={true}>
                        <div className="header-title">
                            <MuiLink href="/">Aether</MuiLink>
                        </div>
                        <div className="header-icon-container">{headerIcons}</div>
                    </Toolbar>
                </AppBar>
                <HideOnScroll timeout={500}>
                    <div className="header-navigation">
                        <div className="header-navigation-box">
                            <ul
                                onScroll={(event) => {
                                    const navBox = document.querySelector('.header-navigation-box');
                                    const containerBoxWidth = event.target.offsetWidth;
                                    const itemsWidth =
                                        event.target.querySelector('.items').clientWidth;
                                    const offsetScroll = event.target.scrollLeft;

                                    if (offsetScroll <= 0) {
                                        navBox.classList.add('start');
                                        navBox.classList.remove('end');
                                        navBox.classList.remove('scrolling');
                                    } else if (
                                        offsetScroll >=
                                        itemsWidth - containerBoxWidth - 10
                                    ) {
                                        navBox.classList.remove('start');
                                        navBox.classList.add('end');
                                        navBox.classList.remove('scrolling');
                                    } else {
                                        navBox.classList.remove('start');
                                        navBox.classList.remove('end');
                                        navBox.classList.add('scrolling');
                                    }
                                }}
                            >
                                <div className="items">
                                    <li>
                                        <Link to="/assets">종합자산관리</Link>
                                    </li>
                                    <li>
                                        <Link to="/advisors">투자어드바이저</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </HideOnScroll>
            </React.Fragment>
        );
    }
}
