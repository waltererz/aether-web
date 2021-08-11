import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import HideOnScroll from '../components/HideOnScroll';
import headerNavigationLinks from './headerNavigation/headerNavigationLinks';

export default function HeaderNavigation(props) {
    const [subLinkBoxAnchor, setSubLinkBoxAnchor] = React.useState({});
    const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
    const [mobileDrawerSubMenuOpen, setMobileDrawerSubMenuOpen] = React.useState({});
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

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

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const fetchHeaderNavigationSubLinks = (links, slug) => {
        if (typeof links == 'object') {
            return links.map((link, index) => {
                return (
                    <li className="sublinkItem" key={`headerNavigationLink-${slug}-sub-${index}`}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                );
            });
        }
    };

    const fetchHeaderNavigationLinks = () => {
        return headerNavigationLinks.map((link, index) => {
            return (
                <li
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
                                      [link.slug]: null,
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
                                anchorEl={subLinkBoxAnchor[link.slug]}
                                open={Boolean(subLinkBoxAnchor[link.slug])}
                                role={undefined}
                                placement="bottom-start"
                                transition={true}
                                disablePortal
                            >
                                {({ TransitionProps }) => (
                                    <Grow timeout={0} {...TransitionProps}>
                                        <div className={`sublinksBox parent${index}`}>
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
    };

    const fetchDrawerMenuLinks = () => {
        return headerNavigationLinks.map((link) => {
            if (!(link.slug in mobileDrawerSubMenuOpen)) {
                setMobileDrawerSubMenuOpen({
                    ...mobileDrawerSubMenuOpen,
                    [link.slug]: false,
                });
            }

            return (
                <ListItem
                    dense={true}
                    disablePadding={true}
                    className={
                        'children' in link && mobileDrawerSubMenuOpen[link.slug]
                            ? 'has-children'
                            : ''
                    }
                    key={`mobileDrawerLink-${link.slug}`}
                >
                    <ListItemButton disableGutters={true} disableTouchRipple={true}>
                        {'children' in link && (
                            <KeyboardArrowDown
                                sx={{
                                    marginRight: '10px',
                                    transition: '0.2s',
                                    transform: mobileDrawerSubMenuOpen[link.slug]
                                        ? 'rotate(-180deg)'
                                        : 'rotate(0)',
                                }}
                                onClick={() => {
                                    setMobileDrawerSubMenuOpen({
                                        ...mobileDrawerSubMenuOpen,
                                        [link.slug]: !mobileDrawerSubMenuOpen[link.slug],
                                    });
                                }}
                            />
                        )}
                        <Link to={link.to} onClick={toggleMobileDrawer}>
                            <ListItemText className="text" primary={link.name} />
                        </Link>
                    </ListItemButton>
                    {mobileDrawerSubMenuOpen[link.slug] && (
                        <div className="submenus">
                            {link.children.map((sublink) => {
                                return (
                                    <ListItemButton
                                        disableGutters={true}
                                        disableTouchRipple={true}
                                        key={`mobileDrawerSubLink-${sublink.slug}`}
                                    >
                                        <Link to={sublink.to} onClick={toggleMobileDrawer}>
                                            <ListItemText className="text" primary={sublink.name} />
                                        </Link>
                                    </ListItemButton>
                                );
                            })}
                        </div>
                    )}
                </ListItem>
            );
        });
    };

    React.useEffect(() => {
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
                toggleHeaderNavigationLink(event, headerNavigationLinks);
            });

            link.querySelector('.linkItem').addEventListener('mouseleave', (event) => {
                toggleHeaderNavigationLink(event, headerNavigationLinks);
            });
        });

        containerBox.addEventListener('scroll', (event) => {
            toggleHeaderNavigationShadow(navBox, containerBox);
        });

        toggleHeaderNavigationShadow(navBox, containerBox);
    }, []);

    return (
        <React.Fragment>
            <Drawer
                id="mobile-drawer"
                anchor="left"
                open={mobileDrawerOpen}
                onClose={toggleMobileDrawer}
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
                    <List>{fetchDrawerMenuLinks()}</List>
                </div>
            </Drawer>
            <AppBar position="fixed" className="aether-header">
                <Toolbar className="header-toolbar" disableGutters={true}>
                    <div className="header-title">
                        <div className="mobile-menuButton" onClick={toggleMobileDrawer}>
                            <MenuIcon />
                        </div>
                        <MuiLink href="/">Aether</MuiLink>
                    </div>
                    <div className="header-icon-container">{props.headerIcons}</div>
                </Toolbar>
            </AppBar>
            <HideOnScroll timeout={500}>
                <div className="header-navigation">
                    <div className="header-navigation-box">
                        <ul>
                            <div className="items">{fetchHeaderNavigationLinks()}</div>
                        </ul>
                    </div>
                </div>
            </HideOnScroll>
        </React.Fragment>
    );
}
