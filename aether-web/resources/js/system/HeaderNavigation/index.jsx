import React from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
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
        };
    }

    componentDidMount() {
        const navBox = document.querySelector('.header-navigation-box');
        const containerBox = navBox.querySelector('ul');
        const headerNavigationLinks = Array.from(containerBox.querySelectorAll('li a'));
        const currentPathArray = window.location.pathname.split('/');

        headerNavigationLinks.map((link) => {
            const linkPathArray = link.dataset['path'].split('/');
            for (let i = 1; i < linkPathArray.length; i++) {
                if (i in currentPathArray) {
                    if (linkPathArray[i] == currentPathArray[i]) {
                        link.classList.add('selected');
                        break;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }

            link.addEventListener('mouseover', (event) => {
                this.toggleHeaderNavigationLink(event, headerNavigationLinks);
            });

            link.addEventListener('mouseout', (event) => {
                this.toggleHeaderNavigationLink(event, headerNavigationLinks);
            });
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
        if (event.type === 'mouseover') {
            headerNavigationLinks.map((link) => {
                if (link.dataset['key'] === event.target.dataset['key']) {
                    event.target.classList.add('highlight');
                } else {
                    link.classList.add('externel');
                }
            });
        } else if (event.type === 'mouseout') {
            headerNavigationLinks.map((link) => {
                link.classList.remove('highlight');
                link.classList.remove('externel');
            });
        }
    }

    render() {
        const { headerIcons } = this.props;

        const fetchHeaderNavigationLinks = (links) => {
            if (typeof links == 'object') {
                return links.map((link, index) => {
                    return (
                        <li
                            key={index}
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
                            <div className="linkItem">
                                <Link
                                    id={`header-navigation-link-${link.slug}`}
                                    to={link.to}
                                    data-slug={link.slug}
                                    data-key={index}
                                    data-path={link.to}
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
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin: 'left bottom',
                                                }}
                                            >
                                                <div className="sublinksBox">
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
                            <ul onScroll={(event) => this.toggleHeaderNavigationShadow()}>
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
