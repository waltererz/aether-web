import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';

export default function HideOnScroll(props) {
    const { children, window, breakpoint, timeout } = props;
    const mediaQueryForSlide = useMediaQuery(
        '(min-width: ' + (!breakpoint ? 0 : breakpoint) + 'px)',
    );

    let trigger = useScrollTrigger({ target: window ? window() : undefined });

    if (!mediaQueryForSlide) {
        trigger = false;
    }

    if (!timeout) {
        timeout = 500;
    }

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={timeout}>
            {children}
        </Slide>
    );
}
