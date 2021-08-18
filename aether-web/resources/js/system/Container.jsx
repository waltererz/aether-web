import config from '../config';
import BasicContainer from './container/BasicContainer';
import SimpleContainer from './container/SimpleContainer';

export default function Container({ pages, secondary, submenus }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            padding: '0px',

            height: {
                xs:
                    'calc(100% - ' +
                    config('templete.height.bottomNavigation.mobile') +
                    ' + ' +
                    config('templete.margin.default.mobile') +
                    ')',
                md: 'auto',
            },

            marginBottom: {
                xs: 'calc(' + config('templete.height.bottomNavigation.mobile') + ' + 20px)',
                md: '20px',
            },

            paddingTop: {
                xs:
                    'calc(' +
                    config('templete.height.headerNavigation.mobile') +
                    ' + ' +
                    config('templete.margin.default.mobile') +
                    ')',
                md:
                    'calc(' +
                    config('templete.height.headerNavigation.desktop') +
                    ' + ' +
                    config('templete.margin.default.desktop') +
                    ')',
            },

            paddingLeft: {
                xs: config('templete.margin.default.mobile'),
                md: config('templete.margin.default.desktop'),
            },

            paddingRight: {
                xs: config('templete.margin.default.mobile'),
                md: config('templete.margin.default.desktop'),
            },
        },

        gridContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: {
                xs: 'center',
                sm: 'space-between',
            },
        },

        gridItem: {
            flexGrow: 0,
            flexShrink: 0,
            boxSizing: 'border-box',
            height: '3000px',

            minHeight: {
                xs: 'calc(100vh - ' + config('templete.height.headerFixed.mobile') + ')',
                md: 'calc(100vh - ' + config('templete.height.headerFixed.desktop') + ')',
            },

            '&.primary': {
                width: {
                    xs: '100%',
                    sm: config('templete.width.primary.desktop'),
                },

                maxWidth: {
                    xs: config('templete.width.primary.mobile'),
                },

                margin: {
                    sm: 'initial',
                },

                flexShrink: {
                    sm: 1,
                },

                maxWidth: {
                    sm: 'none',
                },
            },

            '&.secondary': {
                display: {
                    xs: 'none',
                    sm: 'block',
                },

                flexShrink: {
                    sm: 1,
                },

                marginLeft: {
                    sm: config('templete.margin.default.mobile'),
                    md: config('templete.margin.default.desktop'),
                },

                width: {
                    sm: config('templete.width.secondary.desktop'),
                },
            },

            '&.trickery': {
                display: {
                    xs: 'none',
                    md: 'block',
                },

                width: '100%',

                maxWidth: {
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
                        'px - 100vw)) / 2)',
                    xl: config('templete.width.drawer.desktop'),
                },
            },
        },
    };

    if (submenus) {
        return (
            <BasicContainer
                styles={styles}
                pages={pages}
                secondary={secondary}
                submenus={submenus}
            />
        );
    } else {
        return <SimpleContainer styles={styles} pages={pages} secondary={secondary} />;
    }
}
