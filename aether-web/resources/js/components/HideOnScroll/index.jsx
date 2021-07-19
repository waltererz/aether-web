import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';

const HideOnScroll = (props) => {
    const { children, window, breakpoint } = props;
    const mediaQueryForSlide = useMediaQuery('(max-width: ' + breakpoint + 'px)');

    let trigger = useScrollTrigger({ target: window ? window() : undefined });

    if (!mediaQueryForSlide) {
        trigger = false;
    }

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default HideOnScroll;
