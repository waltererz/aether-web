import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import HideOnScroll from '../components/HideOnScroll';
import headerNavigationLinks from './headerNavigation/headerNavigationLinks';
import config from '../config';

export default function HeaderNavigation() {
    const [subLinkBoxAnchor, setSubLinkBoxAnchor] = React.useState({});
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const currentURI = useSelector((state) => state.app.uri);
    const headerNavigationBoxRef = React.useRef(null);

    const toggleHeaderNavigationShadow = (navBox, containerBox) => {
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
    };

    const toggleHeaderNavigationLink = (event, headerNavigationLinks) => {
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
    };

    const initHeaderNavigationLinks = () => {
        setSubLinkBoxAnchor({});
        Array.from(headerNavigationBoxRef.current.children).map((link) => {
            link.querySelector('.linkItem').classList.remove('highlight');
            link.querySelector('.linkItem').classList.remove('externel');
        });
    };

    const fetchHeaderNavigationSubLinks = (links, slug) => {
        if (typeof links == 'object') {
            return links.map((link, index) => {
                return (
                    <Box
                        component="li"
                        className="sublinkItem"
                        key={`headerNavigationLink-${slug}-sub-${index}`}
                        sx={{
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',

                            '& a': {
                                display: 'block',
                                padding: '8px 20px',
                                fontSize: '0.9em',
                                backgroundColor: '#ffffff',
                                color: '#000000',
                                transition: 'none',

                                '&:hover': {
                                    backgroundColor: config('templete.palette.secondary.main'),
                                    color: '#ffffff',
                                },
                            },
                        }}
                    >
                        <Link to={link.to} onClick={initHeaderNavigationLinks}>
                            {link.name}
                        </Link>
                    </Box>
                );
            });
        }
    };

    const fetchHeaderNavigationLinks = () => {
        return headerNavigationLinks.map((link, index) => {
            return (
                <Box
                    component="li"
                    key={`headerNavigationLink-${index}`}
                    data-path={link.to}
                    onMouseOver={
                        'children' in link && isDesktop
                            ? (event) => {
                                  const currentTarget = event.currentTarget;
                                  setSubLinkBoxAnchor({
                                      ...subLinkBoxAnchor,
                                      [link.slug]: currentTarget,
                                  });
                              }
                            : null
                    }
                    onMouseOut={
                        'children' in link && isDesktop
                            ? (event) => {
                                  setSubLinkBoxAnchor({
                                      ...subLinkBoxAnchor,
                                      [link.slug]: false,
                                  });
                              }
                            : null
                    }
                    sx={{
                        display: 'inline-flex',

                        '& > .MuiBox-root > a': {
                            padding: {
                                xs: '0px 10px',
                                md: '0px 15px',
                            },
                        },

                        '&:first-of-type': {
                            '& > .MuiBox-root > a': {
                                paddingLeft: '0px',
                            },
                        },

                        '&:last-of-type': {
                            '& > .MuiBox-root > a': {
                                paddingRight: '0px',
                            },
                        },
                    }}
                >
                    <Box
                        className="linkItem"
                        data-key={index}
                        sx={{
                            '& a': {
                                display: 'block',
                                color: '#bbbbbb',
                                textDecoration: 'none',
                                transition: 'color 0.2s linear',
                                webkitTapHighlightColor: 'transparent',
                                userSelect: 'none',
                                fontSize: {
                                    xs: '0.8em',
                                    md: '0.85em',
                                },
                            },

                            '&.selected > a': {
                                color: '#ffffff',
                            },

                            '&.highlight > a': {
                                color: '#ffffff',
                            },

                            '&.externel > a': {
                                color: '#777777',
                            },
                        }}
                    >
                        <Link
                            id={`header-navigation-link-${link.slug}`}
                            to={link.to}
                            onClick={initHeaderNavigationLinks}
                            data-slug={link.slug}
                            data-key={index}
                        >
                            {link.name}
                        </Link>
                        {'children' in link ? (
                            <Popper
                                anchorEl={subLinkBoxAnchor[link.slug]}
                                open={Boolean(subLinkBoxAnchor[link.slug])}
                                role={undefined}
                                placement="bottom-start"
                                transition={true}
                                disablePortal
                            >
                                {({ TransitionProps }) => (
                                    <Grow timeout={0} {...TransitionProps}>
                                        <Box
                                            className="sublinksParent"
                                            sx={{
                                                position: 'absolute',
                                            }}
                                        >
                                            <Box
                                                className={`sublinksBox parent${index}`}
                                                sx={{
                                                    marginTop: '7px',
                                                    backgroundColor: '#ffffff',
                                                    width: '250px',
                                                    overflowX: 'hidden',
                                                    boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.2)',
                                                    borderRadius: '2px',
                                                }}
                                            >
                                                <Box
                                                    component="ol"
                                                    className="sublinks"
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        flexWrap: 'nowrap',
                                                        listStyle: 'none',
                                                        margin: '0px',
                                                        padding: '10px 0px',
                                                    }}
                                                >
                                                    {fetchHeaderNavigationSubLinks(
                                                        link.children,
                                                        link.slug,
                                                    )}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grow>
                                )}
                            </Popper>
                        ) : null}
                    </Box>
                </Box>
            );
        });
    };

    React.useEffect(() => {
        const navBox = document.querySelector('.header-navigation-box');
        const containerBox = navBox.querySelector('ul');
        const headerNavigationLinks = Array.from(headerNavigationBoxRef.current.children);

        headerNavigationLinks.map((link) => {
            link.querySelector('.linkItem').addEventListener('mouseenter', (event) => {
                toggleHeaderNavigationLink(event, headerNavigationLinks);
            });

            link.querySelector('.linkItem').addEventListener('mouseleave', (event) => {
                toggleHeaderNavigationLink(event, headerNavigationLinks);
            });
        });

        window.addEventListener('scroll', (event) => {
            const headerNavigationDOM = document.querySelector('.header-navigation');
            const appDrawerPaperDOM = document.querySelector('.app-drawer .drawer-paper');

            if (
                headerNavigationDOM.style.transform &&
                headerNavigationDOM.style.transform !== 'none'
            ) {
                appDrawerPaperDOM.style.transform = 'translateY(-40px)';
                appDrawerPaperDOM.classList.add('in');
            } else {
                appDrawerPaperDOM.style.transform = 'none';
                appDrawerPaperDOM.classList.remove('in');
            }
        });

        containerBox.addEventListener('scroll', (event) => {
            toggleHeaderNavigationShadow(navBox, containerBox);
        });

        toggleHeaderNavigationShadow(navBox, containerBox);
    }, []);

    React.useEffect(() => {
        const currentPathArray = window.location.pathname.split('/');
        const headerNavigationLinks = Array.from(headerNavigationBoxRef.current.children);

        headerNavigationLinks.map((link) => {
            const linkPathArray = link.dataset['path'].split('/');

            for (let i = 1; i < linkPathArray.length; i++) {
                if (i in currentPathArray) {
                    if (linkPathArray[i] == currentPathArray[i]) {
                        link.querySelector('.linkItem').classList.add('selected');
                    } else {
                        link.querySelector('.linkItem').classList.remove('selected');
                    }
                } else {
                    break;
                }
            }
        });
    }, [currentURI]);

    return (
        <HideOnScroll timeout={500}>
            <Box
                className="header-navigation"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'fixed',
                    width: '100%',
                    paddingLeft: {
                        xs: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },
                    paddingRight: {
                        xs: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },
                    boxSizing: 'border-box',
                    backgroundColor: config('templete.palette.primary.main'),
                    zIndex: config('templete.zIndex.headerNavigation'),
                    height: {
                        xs: config('templete.height.headerNavigation.mobile'),
                        md: config('templete.height.headerNavigation.desktop'),
                    },
                }}
            >
                <Box
                    className="header-navigation-box"
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',

                        '&::before, &::after': {
                            content: '""',
                            display: 'block',
                            visibility: 'hidden',
                            position: 'absolute',
                            width: '50px',
                            height: '100%',
                            opacity: 0,
                            transition: 'opacity 0.4s linear, visibility 0.4s linear',
                        },

                        '&::before': {
                            background:
                                'linear-gradient(90deg, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 0.5) 50%, rgba(40, 40, 40, 0) 100%)',
                            left: '0px',
                        },

                        '&::after': {
                            background:
                                'linear-gradient(90deg, rgba(40, 40, 40, 0) 0%, rgba(40, 40, 40, 0.5) 50%, rgba(40, 40, 40, 1) 100%)',
                            right: '0px',
                        },

                        '&.start': {
                            '&::after': {
                                visibility: 'visible',
                                opacity: 1,
                            },

                            '&::before': {
                                visibility: 'hidden',
                                opacity: 0,
                            },
                        },

                        '&.scrolling': {
                            '&::before, &::after': {
                                visibility: 'visible',
                                opacity: 1,
                            },
                        },

                        '&.end': {
                            '&::after': {
                                visibility: 'hidden',
                                opacity: 0,
                            },

                            '&::before': {
                                visibility: 'visible',
                                opacity: 1,
                            },
                        },
                    }}
                >
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            listStyle: 'none',
                            width: '100%',
                            height: '100%',
                            padding: '0px',
                            margin: '0px',
                            overflowX: 'auto',
                            overflowY: 'hidden',
                            whiteSpace: 'nowrap',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',

                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                    >
                        <Box
                            className="items"
                            ref={headerNavigationBoxRef}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {fetchHeaderNavigationLinks()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </HideOnScroll>
    );
}
