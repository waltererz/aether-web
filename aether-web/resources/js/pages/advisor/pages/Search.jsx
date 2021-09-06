import React from 'react';
import { useDispatch } from 'react-redux';
import Cookie from 'universal-cookie';
import { withStyles } from '@material-ui/styles';
import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/core/Rating';
import Skeleton from '@material-ui/core/Skeleton';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '../../../components/Paper';
import { setTitle } from '../../../redux/actions/app';
import * as api from '../../../services/api';
import config from '../../../config';

const ItemContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    marginTop: '10px',
    boxSizing: 'border-box',
    border: config('templete.border.1'),
    borderRadius: config('templete.borderRadius.1'),
    backgroundColor: '#ffffff',

    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
        padding: '10px',
        fontSize: '0.8rem',
    },

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '20px',
        fontSize: '0.9rem',
    },
}));

const AdvisorImage = styled('div')(({ theme }) => ({
    flexGrow: 0,

    '& img': {
        borderRadius: '50%',

        [theme.breakpoints.up('xs')]: {
            width: '60px',
            height: '60px',
        },

        [theme.breakpoints.up('md')]: {
            width: '68px',
            height: '68px',
        },
    },
}));

const AdvisorInformation = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,

    [theme.breakpoints.up('xs')]: {
        paddingLeft: '10px',
    },

    [theme.breakpoints.up('md')]: {
        paddingLeft: '15px',
    },
}));

const AdvisorName = styled('div')({
    fontSize: '1.3em',
    fontWeight: 'bold',
});

const AdvisorJob = styled('div')(({ theme }) => ({
    fontSize: '0.8em',
    color: '#888888',

    [theme.breakpoints.up('xs')]: {
        paddingBottom: '3px',
    },

    [theme.breakpoints.up('md')]: {
        paddingBottom: '5px',
    },
}));

const AdvisorTheme = styled('div')({
    fontSize: '0.75em',
});

const AdvisorActivity = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
});

const AdvisorRating = styled('div')(({ theme }) => ({
    '& > span': {
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.1em',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '1.3em',
        },
    },
}));

const AdvisorArticleCount = styled('div')(({ theme }) => ({
    textAlign: 'right',
    color: '#aaaaaa',

    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8em',
    },

    [theme.breakpoints.up('md')]: {
        fontSize: '0.9em',
    },
}));

const AdvisorDescription = styled('div')({
    width: '100%',
    marginTop: '10px',
    fontSize: '0.9em',
});

const FlexRowBox = styled('div')({
    display: 'flex',
    flexDirection: 'row',
});

const GrowBox = styled('div')({
    flexGrow: 1,
});

const NotGrowBox = styled('div')({
    flexGrow: 0,
});

const SubscriptionContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: '#eeeeee',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
        width: '100%',
        margin: '20px 0px 0px 0px',
        padding: '20px 0px 0px 0px',
        borderWidth: '1px 0px 0px 0px',
    },

    [theme.breakpoints.up('md')]: {
        width: '170px',
        height: '100%',
        margin: '0px 0px 0px 20px',
        padding: '0px 0px 0px 20px',
        borderWidth: '0px 0px 0px 1px',
    },
}));

const SubscriptionPrice = styled('div')(({ theme }) => ({
    fontFamily: config('templete.fontFamily.1'),
    color: config('templete.palette.secondary.main'),
    fontWeight: 'bold',

    [theme.breakpoints.up('xs')]: {
        fontSize: '1.2em',
        marginBottom: '15px',
    },

    [theme.breakpoints.up('md')]: {
        marginBottom: '0px',
    },
}));

export default function Search() {
    const [complete, setComplete] = React.useState(false);
    const [filters, setFilters] = React.useState({});
    const [currentFilters, setCurrentFilters] = React.useState({});
    const [themes, setThemes] = React.useState(null);
    const [advisors, setAdvisors] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();

    const getAdvisors = async (updated = false) => {
        if (
            (updated && !complete) ||
            (!updated && advisors && advisors.current_page != page) ||
            !advisors
        ) {
            const cookie = new Cookie();
            const access_token = cookie.get('personal_access_token');

            await api
                .post(
                    'advisors/index',
                    {
                        page: page,
                        pagination: true,
                        filtering: currentFilters,
                        filters: filters,
                    },
                    access_token,
                )
                .then((response) => {
                    if (response.data) {
                        setComplete(true);
                        setAdvisors(response.data);
                    } else {
                        alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                    }
                });
        }
    };

    const getThemes = async () => {
        const cookie = new Cookie();
        const access_token = cookie.get('personal_access_token');

        await api.post('investment/themes/index', {}, access_token).then((response) => {
            if (response.data) {
                const theme_filters = {};
                response.data.map((theme) => {
                    theme_filters[theme.slug] = false;
                });

                setThemes(response.data);
                setFilters({
                    ...filters,
                    theme: theme_filters,
                });
            } else {
                alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            }
        });
    };

    const changeTheme = (event) => {
        let filtering = false;

        if ('theme' in filters) {
            for (const [key, value] of Object.entries(filters.theme)) {
                if (event.target.checked) {
                    filtering = true;
                    break;
                } else {
                    if (key != event.target.name && value) {
                        filtering = true;
                    }
                }
            }
        }

        setComplete(false);

        setCurrentFilters({
            ...currentFilters,
            theme: filtering,
        });

        setFilters({
            ...filters,
            theme: {
                ...filters.theme,
                [event.target.name]: event.target.checked,
            },
        });
    };

    const fetchThemeFilters = () => {
        if ('theme' in filters) {
            const Checkbox = withStyles({
                root: {
                    color: config('templete.palette.secondary.main'),
                },
            })((props) => <MuiCheckbox color="default" {...props} />);

            if (themes) {
                return themes.map((theme, index) => {
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={filters.theme[theme.slug]}
                                    onChange={changeTheme}
                                    name={theme.slug}
                                    id={`theme_filter_${theme.slug}`}
                                />
                            }
                            label={theme.name}
                            key={`theme_filter_${index}`}
                            className="checkbox-item"
                            sx={{
                                flexShrink: 0,
                                '& span': {
                                    fontSize: '0.9em',
                                },
                            }}
                        />
                    );
                });
            }
        }
    };

    const Item = ({ skeleton, advisor }) => {
        return (
            <ItemContainer>
                <GrowBox>
                    <FlexRowBox>
                        <AdvisorImage>
                            {skeleton ? (
                                <Skeleton variant="circular" width={68} height={68} />
                            ) : (
                                <img
                                    alt="Walter London City"
                                    src="https://secure.gravatar.com/avatar/ad6464c0b0336b626439748ce56f0f3d?s=109&amp;d=mm&amp;r=g"
                                    loading="lazy"
                                />
                            )}
                        </AdvisorImage>
                        <AdvisorInformation>
                            <GrowBox>
                                <AdvisorName>
                                    {skeleton ? (
                                        <Skeleton height={30} width="20%" />
                                    ) : (
                                        `${advisor.user.lastname} ${advisor.user.firstname}`
                                    )}
                                </AdvisorName>
                                <AdvisorJob sx={{}}>
                                    {skeleton ? (
                                        <Skeleton height={20} width="50%" />
                                    ) : (
                                        '경제적자유를 꿈꾸는 개미투자자'
                                    )}
                                </AdvisorJob>
                                <AdvisorTheme>
                                    {skeleton ? (
                                        <Skeleton height={15} width="50%" />
                                    ) : (
                                        <>
                                            <b>투자성향:</b> {advisor.theme.name}
                                        </>
                                    )}
                                </AdvisorTheme>
                            </GrowBox>
                            <AdvisorActivity>
                                <AdvisorRating>
                                    {skeleton ? (
                                        <Skeleton height={20} width={94} />
                                    ) : (
                                        <Rating value={5.0} readOnly />
                                    )}
                                </AdvisorRating>
                                <AdvisorArticleCount>
                                    {skeleton ? (
                                        <Skeleton height={20} width={94} />
                                    ) : (
                                        <React.Fragment>
                                            {advisor.articles} Article(s)
                                        </React.Fragment>
                                    )}
                                </AdvisorArticleCount>
                            </AdvisorActivity>
                        </AdvisorInformation>
                    </FlexRowBox>
                    <FlexRowBox>
                        <AdvisorDescription>
                            {skeleton ? (
                                <Skeleton height={20} width="100%" />
                            ) : (
                                '투자어드바이저 설명글'
                            )}
                        </AdvisorDescription>
                    </FlexRowBox>
                </GrowBox>
                <NotGrowBox>
                    <SubscriptionContainer>
                        {skeleton ? (
                            <Skeleton height={100} width={150} />
                        ) : (
                            <>
                                <Button
                                    disableElevation
                                    variant="contained"
                                    color="secondary"
                                    sx={{
                                        marginBottom: '15px',

                                        width: {
                                            md: '100%',
                                        },

                                        minWidth: {
                                            xs: '150px',
                                        },
                                    }}
                                >
                                    구독하기
                                </Button>
                                <SubscriptionPrice>무료</SubscriptionPrice>
                            </>
                        )}
                    </SubscriptionContainer>
                </NotGrowBox>
            </ItemContainer>
        );
    };

    const fetchAdvisorList = () => {
        return advisors.data.map((advisor, index) => {
            return <Item advisor={advisor} key={`advisor-${advisor.user.firstname}-${index}`} />;
        });
    };

    /**
     * 첫 번째 페이지의 투자 어드바이저 목록을 가져올 때 출력할 5개의 스켈레톤을 생성합니다.
     *
     * @returns JSX.Element
     */
    const fetchSkeletonBox = () => {
        return [1, 2, 3, 4, 5].map((skeleton, index) => {
            return <Item skeleton={true} key={`advisor-item-skeleton-${index}`} />;
        });
    };

    React.useEffect(() => {
        /**
         * 선택된 필터가 변경되는 경우 투자 어드바이저 목록을 서버에서 다시 가져옵니다.
         * 해당 함수 첫 번째 파라미터에 true 값을 넣어줌으로써 리프레시의 여무를 설정합니다.
         */
        getAdvisors(true);
    }, [currentFilters]);

    React.useEffect(() => {
        /**
         * 투자 어드바이저 페이지를 처음 로드한 경우 테마필터를 새롭게 가져옵니다.
         * 이후 컴포넌트 리렌더링이 발생하더라도 테마필터를 다시 가져오지 않아도 됩니다.
         */
        getThemes();

        /**
         * 페이지 타이틀을 설정합니다.
         * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
         */
        dispatch(setTitle('투자 어드바이저'));
    }, []);

    return (
        <Paper>
            <Accordion
                className="filter-box"
                id="search-filters"
                sx={{
                    boxShadow: 'none',
                    borderRadius: config('templete.borderRadius.1'),
                    border: config('templete.border.1'),
                    backgroundColor: '#ffffff',
                }}
            >
                <AccordionSummary
                    className="title"
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: config('templete.fontFamily.1'),
                    }}
                >
                    검색필터
                </AccordionSummary>
                <AccordionDetails
                    className="filters"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        className="subject"
                        sx={{
                            display: 'block',
                            paddingBottom: '5px',
                            width: '100%',
                            fontWeight: 'bold',
                            fontSize: '0.9em',
                        }}
                    >
                        투자성향
                    </Box>
                    <FormGroup
                        row
                        className="filter"
                        sx={{
                            display: 'flex',
                            flexWrap: {
                                xs: 'nowrap',
                                md: 'wrap',
                            },
                            overflowX: {
                                xs: 'scroll',
                                md: 'unset',
                            },
                        }}
                    >
                        {fetchThemeFilters()}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Box>{!complete ? fetchSkeletonBox() : advisors && fetchAdvisorList()}</Box>
        </Paper>
    );
}
