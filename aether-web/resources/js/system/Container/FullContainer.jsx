import React from 'react';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import ScrollTrigger from '@terwanerik/scrolltrigger';
import MobileNavigation from '../MobileNavigation';
import HeaderNavigation from '../HeaderNavigation';

export default class FullContainer extends React.Component {
    componentDidMount() {
        const scrollTrigger = new ScrollTrigger({
            trigger: {
                toggle: {
                    class: {
                        in: 'in',
                        out: 'out',
                    },
                },
            },
            scroll: {
                callback: () => {
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
                },
            },
        });
    }

    render() {
        const { headerIcons } = this.props;

        return (
            <React.Fragment>
                <HeaderNavigation headerIcons={headerIcons} />
                <Container className="app-container aether" maxWidth={false}>
                    <Grid
                        container
                        className="grid-container"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Grid className="grid-item-trickery" item></Grid>
                        <Grid className="grid-item-1" item>
                            {this.props.content}
                        </Grid>
                        <Grid className="grid-item-2" item>
                            {this.props.right}
                        </Grid>
                    </Grid>
                </Container>
                <Drawer
                    classes={{
                        root: 'app-drawer',
                        paper: 'drawer-paper',
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {this.props.left}
                </Drawer>
                <MobileNavigation />
            </React.Fragment>
        );
    }
}
