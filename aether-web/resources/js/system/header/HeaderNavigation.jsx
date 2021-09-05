import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import menuLinks from '../menuLinks';
import config from '../../config';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    background: config('templete.gradient.primary'),
    zIndex: config('templete.zIndex.headerNavigation'),

    [theme.breakpoints.up('xs')]: {
        paddingLeft: config('templete.margin.default.mobile'),
        paddingRight: config('templete.margin.default.mobile'),
        height: config('templete.height.headerNavigation.mobile'),
    },

    [theme.breakpoints.up('md')]: {
        paddingLeft: config('templete.margin.default.desktop'),
        paddingRight: config('templete.margin.default.desktop'),
        height: config('templete.height.headerNavigation.desktop'),
    },
}));

const SubContainer = styled('div')({
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
});

const HeaderNavListContainer = styled('ul')({
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
});

const HeaderNavItemContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const HeaderNavItem = styled('li')(({ theme }) => ({
    display: 'inline-flex',

    '& > div > a': {
        [theme.breakpoints.up('xs')]: {
            padding: '0px 10px',
        },

        [theme.breakpoints.up('md')]: {
            padding: '0px 15px',
        },
    },

    '&:first-of-type': {
        '& > div > a': {
            paddingLeft: '0px',
        },
    },

    '&:last-of-type': {
        '& > div > a': {
            paddingRight: '0px',
        },
    },
}));

const HeaderNavItemText = styled('div')(({ theme }) => ({
    '& a': {
        display: 'block',
        color: '#ffffff',
        opacity: '0.6',
        textDecoration: 'none',
        transition: 'opacity 0.2s linear',
        fontFamily: config('templete.fontFamily.1'),
        webkitTapHighlightColor: 'transparent',
        userSelect: 'none',

        [theme.breakpoints.up('xs')]: {
            fontSize: '0.9em',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '1em',
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
}));

const SubNavigationContainer = styled('div')({
    position: 'absolute',
});

const SubNavigationSubContainer = styled('div')({
    marginTop: '7px',
    backgroundColor: '#ffffff',
    width: '250px',
    overflowX: 'hidden',
    boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.2)',
    borderRadius: '2px',
});

const SubNavigationListContainer = styled('ol')({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    listStyle: 'none',
    margin: '0px',
    padding: '10px 0px',
});

const SubNavigationItem = styled('li')({
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
            backgroundColor: config('templete.palette.primary.main'),
            color: '#ffffff',
        },
    },
});

export default function HeaderNavigation() {
    const [subLinkBoxAnchor, setSubLinkBoxAnchor] = React.useState({});
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
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
                    <SubNavigationItem
                        component="li"
                        key={`headerNavigationLink-${slug}-sub-${index}`}
                    >
                        <Link to={link.to} onClick={initHeaderNavigationLinks}>
                            {link.name}
                        </Link>
                    </SubNavigationItem>
                );
            });
        }
    };

    const fetchHeaderNavigationLinks = () => {
        return menuLinks.map((link, index) => {
            return (
                <HeaderNavItem
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
                >
                    <HeaderNavItemText className="item" data-key={index}>
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
                                        <SubNavigationContainer>
                                            <SubNavigationSubContainer>
                                                <SubNavigationListContainer>
                                                    {fetchHeaderNavigationSubLinks(
                                                        link.children,
                                                        link.slug,
                                                    )}
                                                </SubNavigationListContainer>
                                            </SubNavigationSubContainer>
                                        </SubNavigationContainer>
                                    </Grow>
                                )}
                            </Popper>
                        ) : null}
                    </HeaderNavItemText>
                </HeaderNavItem>
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
        const currentPathArray = window.location.pathname.split('/');
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
    }, [window.location.pathname]);

    return (
        <Container ref={ref.container}>
            <SubContainer ref={ref.subContainer}>
                <HeaderNavListContainer ref={ref.listBox}>
                    <HeaderNavItemContainer ref={ref.items}>
                        {fetchHeaderNavigationLinks()}
                    </HeaderNavItemContainer>
                </HeaderNavListContainer>
            </SubContainer>
        </Container>
    );
}
