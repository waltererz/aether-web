import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from '@material-ui/core/Drawer';
import XMenu from './XMenu';
import config from '../../config';

export default function DesktopDrawer(props) {
    const scrollTrigger = useScrollTrigger();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className={scrollTrigger ? 'up' : ''}
            sx={{
                display: {
                    xs: 'none',
                    md: 'inline-flex',
                },

                width: {
                    md:
                        'calc(' +
                        config('templete.width.drawer.desktop') +
                        ' - ((' +
                        config('templete.breakpoints.values.xl') +
                        'px - ' +
                        config('templete.breakpoints.values.lg') +
                        'px)) / 2)',
                    lg:
                        'calc(' +
                        config('templete.width.drawer.desktop') +
                        ' - ((' +
                        config('templete.breakpoints.values.xl') +
                        'px - 100vw) / 2))',
                    xl: config('templete.width.drawer.desktop'),
                },

                '&.up': {
                    '& .MuiPaper-root': {
                        transform: {
                            xs: 'translateY(-' + config('templete.height.headerFixed.mobile') + ')',
                            md:
                                'translateY(-' +
                                config('templete.height.headerFixed.desktop') +
                                ')',
                        },
                    },
                },

                '& .MuiPaper-root': {
                    display: 'flex',
                    backgroundColor: config('templete.palette.bgColor.main'),
                    border: '0px',
                    zIndex: config('templete.zIndex.drawer'),
                    boxSizing: 'border-box',
                    transition:
                        'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, height 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',

                    width: {
                        md:
                            'calc(' +
                            config('templete.width.drawer.desktop') +
                            ' - ((' +
                            config('templete.breakpoints.values.xl') +
                            'px - ' +
                            config('templete.breakpoints.values.lg') +
                            'px)) / 2)',
                        lg:
                            'calc(' +
                            config('templete.width.drawer.desktop') +
                            ' - ((' +
                            config('templete.breakpoints.values.xl') +
                            'px - 100vw) / 2))',
                        xl: config('templete.width.drawer.desktop'),
                    },

                    height: {
                        md:
                            'calc(100vh - ' +
                            config('templete.height.headerFixed.desktop') +
                            ' - ' +
                            config('templete.height.headerNavigation.desktop') +
                            ')',
                    },

                    marginTop: {
                        md:
                            'calc(' +
                            config('templete.height.headerFixed.desktop') +
                            ' + ' +
                            config('templete.height.headerNavigation.desktop') +
                            ')',
                    },

                    marginLeft: {
                        md: config('templete.margin.default.desktop'),
                    },

                    paddingRight: {
                        md: config('templete.margin.default.desktop'),
                    },
                },
            }}
        >
            {'submenus' in props && typeof props.submenus === 'object' && (
                <XMenu items={props.submenus} />
            )}
        </Drawer>
    );
}
