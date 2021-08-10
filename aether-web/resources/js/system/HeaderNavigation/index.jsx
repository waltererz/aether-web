import React from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import HideOnScroll from '../../components/HideOnScroll';

export default class HeaderNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerNavigationSubLinksAnchor: {
                asset: null,
                advisor: null,
                developer: null,
            },
            mobileDrawer: false,
            drawerSubMenus: {
                test1: false,
            },
        };
        this.toggleMobileDrawer = this.toggleMobileDrawer.bind(this);
    }

    componentDidMount() {
        const navBox = document.querySelector('.header-navigation-box');
        const containerBox = navBox.querySelector('ul');
        const headerNavigationLinks = Array.from(containerBox.querySelectorAll('.items li'));
        const currentPathArray = window.location.pathname.split('/');

        headerNavigationLinks.map((link) => {
            const linkPathArray = link.dataset['path'].split('/');

            for (let i = 1; i < linkPathArray.length; i++) {
                if (i in currentPathArray) {
                    if (linkPathArray[i] == currentPathArray[i]) {
                        link.querySelector('.linkItem').classList.add('selected');
                        break;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }

            link.querySelector('.linkItem').addEventListener('mouseenter', (event) => {
                this.toggleHeaderNavigationLink(event, headerNavigationLinks);
            });

            link.querySelector('.linkItem').addEventListener('mouseleave', (event) => {
                this.toggleHeaderNavigationLink(event, headerNavigationLinks);
            });
        });

        containerBox.addEventListener('scroll', (event) => {
            this.toggleHeaderNavigationShadow(navBox, containerBox);
        });

        this.toggleHeaderNavigationShadow(navBox, containerBox);
    }

    toggleHeaderNavigationShadow(navBox, containerBox) {
        const containerBoxWidth = containerBox.offsetWidth;
        const itemsWidth = containerBox.querySelector('.items').clientWidth;
        const offsetScroll = containerBox.scrollLeft;

        if (offsetScroll <= 0) {
            if (itemsWidth > containerBoxWidth) {
                navBox.classList.add('start');
                navBox.classList.remove('end');
                navBox.classList.remove('scrolling');
            }
        } else if (offsetScroll >= itemsWidth - containerBoxWidth - 10) {
            navBox.classList.remove('start');
            navBox.classList.add('end');
            navBox.classList.remove('scrolling');
        } else {
            navBox.classList.remove('start');
            navBox.classList.remove('end');
            navBox.classList.add('scrolling');
        }
    }

    toggleHeaderNavigationLink(event, headerNavigationLinks) {
        if (event.type === 'mouseenter') {
            headerNavigationLinks.map((link) => {
                const linkItem = link.querySelector('.linkItem');
                if (linkItem.dataset['key'] === event.target.dataset['key']) {
                    linkItem.classList.add('highlight');
                } else {
                    linkItem.classList.add('externel');
                }
            });
        } else if (event.type === 'mouseleave') {
            headerNavigationLinks.map((link) => {
                const linkItem = link.querySelector('.linkItem');
                linkItem.classList.remove('highlight');
                linkItem.classList.remove('externel');
            });
        }
    }

    toggleMobileDrawer() {
        this.setState((state) => {
            return {
                ...state,
                mobileDrawer: !this.state.mobileDrawer,
            };
        });
    }

    render() {
        const { headerIcons } = this.props;

        const fetchHeaderNavigationLinks = (links) => {
            if (typeof links == 'object') {
                return links.map((link, index) => {
                    return (
                        <li
                            key={index}
                            data-path={link.to}
                            onMouseOver={
                                'children' in link
                                    ? (event) => {
                                          const currentTarget = event.currentTarget;
                                          this.setState((state) => {
                                              return {
                                                  ...state,
                                                  headerNavigationSubLinksAnchor: {
                                                      ...state.headerNavigationSubLinksAnchor,
                                                      [link.slug]: currentTarget,
                                                  },
                                              };
                                          });
                                      }
                                    : null
                            }
                            onMouseOut={
                                'children' in link
                                    ? (event) => {
                                          this.setState((state) => {
                                              return {
                                                  ...state,
                                                  headerNavigationSubLinksAnchor: {
                                                      ...state.headerNavigationSubLinksAnchor,
                                                      [link.slug]: null,
                                                  },
                                              };
                                          });
                                      }
                                    : null
                            }
                        >
                            <div className="linkItem" data-key={index}>
                                <Link
                                    id={`header-navigation-link-${link.slug}`}
                                    to={link.to}
                                    data-slug={link.slug}
                                    data-key={index}
                                >
                                    {link.name}
                                </Link>
                                {'children' in link ? (
                                    <Popper
                                        anchorEl={
                                            this.state.headerNavigationSubLinksAnchor[link.slug]
                                        }
                                        open={Boolean(
                                            this.state.headerNavigationSubLinksAnchor[link.slug],
                                        )}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition={true}
                                        disablePortal
                                    >
                                        {({ TransitionProps }) => (
                                            <Grow timeout={0} {...TransitionProps}>
                                                <div className={`sublinksBox parent${index}`}>
                                                    <h5 className="sublinksTitle">{link.name}</h5>
                                                    <ol className="sublinks">
                                                        {fetchHeaderNavigationSubLinks(
                                                            link.children,
                                                            link.slug,
                                                        )}
                                                    </ol>
                                                </div>
                                            </Grow>
                                        )}
                                    </Popper>
                                ) : null}
                            </div>
                        </li>
                    );
                });
            }
        };

        const fetchHeaderNavigationSubLinks = (links, slug) => {
            if (typeof links == 'object') {
                return links.map((link, index) => {
                    return (
                        <li className="sublinkItem" key={index}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    );
                });
            }
        };

        return (
            <React.Fragment>
                <Drawer
                    id="mobile-drawer"
                    anchor="left"
                    open={this.state.mobileDrawer}
                    onClose={this.toggleMobileDrawer}
                    transitionDuration={300}
                >
                    <div className="userInformation">
                        <div className="avatar">
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </div>
                        <div className="content">로그인을 해주세요.</div>
                    </div>
                    <div className="drawer-menus">
                        <List>
                            <ListItem dense={true} disablePadding={true}>
                                <ListItemButton disableGutters={true} disableTouchRipple={true}>
                                    <KeyboardArrowDown
                                        sx={{
                                            marginRight: '10px',
                                            transition: '0.2s',
                                            transform: this.state.drawerSubMenus.test1
                                                ? 'rotate(-180deg)'
                                                : 'rotate(0)',
                                        }}
                                        onClick={(event) => {
                                            this.setState((state) => {
                                                return {
                                                    ...state,
                                                    drawerSubMenus: {
                                                        ...state.drawerSubMenus,
                                                        test1: !this.state.drawerSubMenus.test1,
                                                    },
                                                };
                                            });
                                        }}
                                    />
                                    <ListItemText primary="메뉴1" />
                                </ListItemButton>
                                {this.state.drawerSubMenus.test1 && (
                                    <div className="submenus">
                                        <ListItemButton
                                            disableGutters={true}
                                            disableTouchRipple={true}
                                        >
                                            <ListItemText primary="서브메뉴1" />
                                        </ListItemButton>
                                        <ListItemButton
                                            disableGutters={true}
                                            disableTouchRipple={true}
                                        >
                                            <ListItemText primary="서브메뉴2" />
                                        </ListItemButton>
                                    </div>
                                )}
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <AppBar position="fixed" className="aether-header">
                    <Toolbar className="header-toolbar" disableGutters={true}>
                        <div className="header-title">
                            <div className="mobile-menuButton" onClick={this.toggleMobileDrawer}>
                                <MenuIcon />
                            </div>
                            <MuiLink href="/">Aether</MuiLink>
                        </div>
                        <div className="header-icon-container">{headerIcons}</div>
                    </Toolbar>
                </AppBar>
                <HideOnScroll timeout={500}>
                    <div className="header-navigation">
                        <div className="header-navigation-box">
                            <ul>
                                <div className="items">
                                    {fetchHeaderNavigationLinks([
                                        {
                                            name: '종합자산관리',
                                            slug: 'asset',
                                            to: '/assets',
                                            children: [
                                                { name: '가계부', to: '/assets/moneybook' },
                                                { name: '투자자산관리', to: '/assets/investment' },
                                                {
                                                    name: '포트폴리오',
                                                    to: '/assets/investment/portfolio',
                                                },
                                            ],
                                        },
                                        {
                                            name: '투자어드바이저',
                                            slug: 'advisor',
                                            to: '/advisors',
                                            children: [
                                                { name: '전문가 검색', to: '/advisors/search' },
                                            ],
                                        },
                                        {
                                            name: '개발자페이지',
                                            slug: 'developer',
                                            to: '/developer',
                                            children: [
                                                { name: '개발자게시판', to: '/developer/forum' },
                                            ],
                                        },
                                    ])}
                                </div>
                            </ul>
                        </div>
                    </div>
                </HideOnScroll>
            </React.Fragment>
        );
    }
}
