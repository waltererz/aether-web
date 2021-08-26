import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import HeaderFixed from './header/HeaderFixed';
import HeaderNavigation from './header/HeaderNavigation';
import config from '../config';

export default function Header() {
    const refHeader = React.useRef(null);
    const scrollTrigger = useScrollTrigger();

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                refHeader.current.classList.add('shadow');
            } else {
                refHeader.current.classList.remove('shadow');
            }
        });
    }, []);

    return (
        <Box
            className={scrollTrigger ? 'invisible' : ''}
            ref={refHeader}
            sx={{
                position: 'fixed',
                width: '100%',
                top: 0,
                zIndex: config('templete.zIndex.header'),
                transition: 'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',

                '&.invisible': {
                    transform: {
                        xs: 'translateY(-' + config('templete.height.headerFixed.mobile') + ')',
                        md: 'translateY(-' + config('templete.height.headerFixed.desktop') + ')',
                    },
                },

                '&.shadow': {
                    boxShadow: config('templete.boxShadow.2'),
                },
            }}
        >
            <HeaderFixed />
            <HeaderNavigation />
        </Box>
    );
}
