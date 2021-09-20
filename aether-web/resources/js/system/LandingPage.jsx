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
                                개인형 투자정보 플랫폼
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
                            돈은 세상의 근본이자 처음과 끝
                        </Box>
                        <Box
                            sx={{
                                fontSize: '1.1em',
                                fontWeight: 'bold',
                                color: config('templete.palette.secondary.main'),
                            }}
                        >
                            성공의 열쇠를 찾기 위한 여정을 우리가 함께합니다.
                        </Box>
                    </Primary>
                    <Secondary>
                        <Box
                            sx={{
                                fontSize: '1.2em',
                                marginBottom: '20px',
                            }}
                        >
                            지금 바로 회원으로 시작하세요.
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
                                로그인
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
                                새 계정 만들기
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
                                플린츠파크 그룹
                            </Link>
                            /
                            <Link href="https://blog.naver.com/erzsamatory" target="_blank">
                                창조적 노마드 런던시티 블로그
                            </Link>
                            /
                            <Link href="https://www.walterz.net" target="_blank">
                                런던시티 워드프레스
                            </Link>
                        </Box>
                        <Divider />
                        <Box sx={{ fontSize: '0.8em', color: '#555555' }}>
                            Flintspark Group © 2021
                        </Box>
                    </FooterContent>
                </Footer>
            </Container>
        </ThemeProvider>
    );
}
