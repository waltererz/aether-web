import React from 'react';
import { styled } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HeaderFixed from './header/HeaderFixed';
import HeaderNavigation from './header/HeaderNavigation';
import config from '../config';

const Container = styled('div')(({ theme }) => ({
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: config('templete.zIndex.header'),
    transition:
        'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, box-shadow 600ms cubic-bezier(0, 0, 0.2, 1) 0ms',

    '&.invisible': {
        [theme.breakpoints.up('xs')]: {
            transform: 'translateY(-' + config('templete.height.headerFixed.mobile') + ')',
        },

        [theme.breakpoints.up('md')]: {
            transform: 'translateY(-' + config('templete.height.headerFixed.desktop') + ')',
        },
    },

    '&.shadow': {
        boxShadow: config('templete.boxShadow.2'),
    },
}));

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
        <Container ref={refHeader} className={scrollTrigger ? 'invisible' : ''}>
            <HeaderFixed />
            <HeaderNavigation />
        </Container>
    );
}
