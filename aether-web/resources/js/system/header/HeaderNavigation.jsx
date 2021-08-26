import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import menuLinks from '../menuLinks';
import config from '../../config';

export default function HeaderNavigation() {
    const [subLinkBoxAnchor, setSubLinkBoxAnchor] = React.useState({});
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const currentURI = useSelector((state) => state.app.uri);
    const ref = {
        container: React.useRef(null),
        subContainer: React.useRef(null),
        listBox: React.useRef(null),
        items: React.useRef(null),
    };

    const toggleHeaderNavigationShadow = () => {
        const subContainer = ref.subContainer.current;
        const listBox = ref.listBox.current;
        const items = ref.items.current;

        const listBoxWidth = listBox.offsetWidth;
        const offsetScroll = listBox.scrollLeft;
        const itemsWidth = items.clientWidth;

        if (offsetScroll <= 0) {
            if (itemsWidth > listBoxWidth) {
                subContainer.classList.add('start');
                subContainer.classList.remove('end', 'scrolling');
            }
        } else if (offsetScroll >= itemsWidth - listBoxWidth - 10) {
            subContainer.classList.add('end');
            subContainer.classList.remove('start', 'scrolling');
        } else {
            subContainer.classList.add('scrolling');
            subContainer.classList.remove('start', 'end');
        }
    };

    const toggleHeaderNavigationLink = (event, itemArray) => {
        if (event.type === 'mouseenter') {
            itemArray.map((itemBox) => {
                const item = itemBox.querySelector('.item');

                if (item.dataset['key'] === event.target.dataset['key']) {
                    item.classList.add('highlight');
                } else {
                    item.classList.add('externel');
                }
            });
        } else if (event.type === 'mouseleave') {
            itemArray.map((itemBox) => {
                const item = itemBox.querySelector('.item');

                item.classList.remove('highlight', 'externel');
            });
        }
    };

    const initHeaderNavigationLinks = () => {
        setSubLinkBoxAnchor({});
        Array.from(ref.items.current.children).map((item) => {
            item.querySelector('.item').classList.remove('highlight', 'externel');
        });
    };

    const fetchHeaderNavigationSubLinks = (links, slug) => {
        if (typeof links == 'object') {
            return links.map((link, index) => {
                return (
                    <Box
                        component="li"
                        key={`headerNavigationLink-${slug}-sub-${index}`}
                        sx={{
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',

                            '& a': {
                                display: 'block',
                                padding: '8px 20px',
                                fontSize: '1em',
                                backgroundColor: '#ffffff',
                                color: '#000000',
                                transition: 'none',
                                opacity: '1',

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
        return menuLinks.map((link, index) => {
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
                            ? () => {
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
                        className="item"
                        data-key={index}
                        sx={{
                            '& a': {
                                display: 'block',
                                color: '#ffffff',
                                opacity: '0.6',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s linear',
                                fontFamily: config('templete.fontFamily.1'),
                                webkitTapHighlightColor: 'transparent',
                                userSelect: 'none',
                                fontSize: {
                                    xs: '0.9em',
                                    md: '1em',
                                },
                            },

                            '&.selected > a': {
                                opacity: '0.9',
                            },

                            '&.highlight > a': {
                                opacity: '1',
                            },

                            '&.externel > a': {
                                opacity: '0.4',
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
                                            sx={{
                                                position: 'absolute',
                                            }}
                                        >
                                            <Box
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
        const listBox = ref.listBox.current;
        const itemArray = Array.from(ref.items.current.children);

        itemArray.map((itemBox) => {
            itemBox.querySelector('.item').addEventListener('mouseenter', (event) => {
                toggleHeaderNavigationLink(event, itemArray);
            });

            itemBox.querySelector('.item').addEventListener('mouseleave', (event) => {
                toggleHeaderNavigationLink(event, itemArray);
            });
        });

        listBox.addEventListener('scroll', () => {
            toggleHeaderNavigationShadow();
        });

        toggleHeaderNavigationShadow();
    }, []);

    React.useEffect(() => {
        const currentPathArray = currentURI.split('/');
        const links = Array.from(ref.items.current.children);

        links.map((link) => {
            const linkPathArray = link.dataset['path'].split('/');

            for (let i = 1; i < linkPathArray.length; i++) {
                if (i in currentPathArray) {
                    if (linkPathArray[i] == currentPathArray[i]) {
                        link.querySelector('.item').classList.add('selected');
                    } else {
                        link.querySelector('.item').classList.remove('selected');
                    }
                } else {
                    break;
                }
            }
        });
    }, [currentURI]);

    return (
        <Box
            ref={ref.container}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
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
                background: config('templete.gradient.primary'),
                zIndex: config('templete.zIndex.headerNavigation'),
                height: {
                    xs: config('templete.height.headerNavigation.mobile'),
                    md: config('templete.height.headerNavigation.desktop'),
                },
            }}
        >
            <Box
                ref={ref.subContainer}
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
                    ref={ref.listBox}
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
                        ref={ref.items}
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
    );
}
