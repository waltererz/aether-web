import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { styled } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container, Body, Footer, Primary, Secondary, FooterContent } from './landing/Layouts';
import config from '../config';

const Divider = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    margin: '30px 0px',
    boxSizing: 'border-box',

    '&:before, &:after': {
        content: '""',
        width: '100%',
        borderTop: '1px solid #efefef',
    },
});

export default function LandingPage() {
    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <Container>
                <Body>
                    <Primary>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                width: '100%',
                                alignItems: 'baseline',
                                marginBottom: '40px',

                                lineHeight: {
                                    md: 1,
                                },

                                flexDirection: {
                                    xs: 'column',
                                    md: 'row',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: '2.4em',
                                    fontWeight: 'bold',
                                }}
                            >
                                Aether
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '1.3em',
                                    marginLeft: {
                                        xs: '0px',
                                        md: '20px',
                                    },
                                }}
                            >
                                ????????? ???????????? ?????????
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                marginBottom: '10px',
                                fontSize: '1.4em',
                                fontWeight: 'bold',
                                color: config('templete.palette.primary.main'),
                            }}
                        >
                            ?????? ????????? ???????????? ????????? ???
                        </Box>
                        <Box
                            sx={{
                                fontSize: '1.1em',
                                fontWeight: 'bold',
                                color: config('templete.palette.secondary.main'),
                            }}
                        >
                            ????????? ????????? ?????? ?????? ????????? ????????? ???????????????.
                        </Box>
                    </Primary>
                    <Secondary>
                        <Box
                            sx={{
                                fontSize: '1.2em',
                                marginBottom: '20px',
                            }}
                        >
                            ?????? ?????? ???????????? ???????????????.
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                disableElevation
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: '100%',
                                    height: '45px',
                                    fontSize: '1.1em',
                                }}
                                onClick={() => {
                                    window.location.href = '/user/signin';
                                }}
                            >
                                ?????????
                            </Button>
                            <Divider />
                            <Button
                                disableElevation
                                variant="contained"
                                color="secondary"
                                sx={{
                                    width: '100%',
                                    maxWidth: '250px',
                                    height: '60px',
                                    fontSize: '1.3em',
                                }}
                                onClick={() => {
                                    window.location.href = '/user/signup';
                                }}
                            >
                                ??? ?????? ?????????
                            </Button>
                        </Box>
                    </Secondary>
                </Body>
                <Footer>
                    <FooterContent>
                        <Box
                            sx={{
                                fontSize: '0.8em',
                                color: '#555555',
                                '& a': {
                                    display: 'inline-flex',
                                    margin: '0px 10px',
                                    color: config('templete.palette.primary.main'),
                                    textDecoration: 'none',
                                    webkitTapHighlightColor: 'transparent',
                                    userSelect: 'none',

                                    '&:first-of-type': {
                                        margin: '0px 10px 0px 0px',
                                    },

                                    '&:last-of-type': {
                                        margin: '0px 0px 0px 10px',
                                    },
                                },
                            }}
                        >
                            <Link href="https://notion.flintspark.kr" target="_blank">
                                ??????????????? ??????
                            </Link>
                            /
                            <Link href="https://blog.naver.com/erzsamatory" target="_blank">
                                ????????? ????????? ???????????? ?????????
                            </Link>
                            /
                            <Link href="https://www.walterz.net" target="_blank">
                                ???????????? ???????????????
                            </Link>
                        </Box>
                        <Divider />
                        <Box sx={{ fontSize: '0.8em', color: '#555555' }}>
                            Flintspark Group ?? 2021
                        </Box>
                    </FooterContent>
                </Footer>
            </Container>
        </ThemeProvider>
    );
}
