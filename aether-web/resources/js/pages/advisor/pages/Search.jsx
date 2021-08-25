import React from 'react';
import { withStyles } from '@material-ui/styles';
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
import * as api from '../../../services/api';
import config from '../../../config';

export default function Search() {
    const [complete, setComplete] = React.useState(false);
    const [filters, setFilters] = React.useState({});
    const [currentFilters, setCurrentFilters] = React.useState({});
    const [themes, setThemes] = React.useState(null);
    const [advisors, setAdvisors] = React.useState(null);
    const [page, setPage] = React.useState(1);

    const getAdvisors = async (updated = false) => {
        if (
            (updated && !complete) ||
            (!updated && advisors && advisors.current_page != page) ||
            !advisors
        ) {
            await api
                .post('advisors/index', {
                    page: page,
                    pagination: true,
                    filtering: currentFilters,
                    filters: filters,
                })
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
        await api.post('investment/themes/index').then((response) => {
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
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '10px',
                    boxSizing: 'border-box',
                    border: config('templete.border.1'),
                    borderRadius: config('templete.borderRadius.1'),
                    backgroundColor: '#ffffff',

                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },

                    padding: {
                        xs: '10px',
                        md: '20px',
                    },

                    fontSize: {
                        xs: '0.8rem',
                        md: '0.9rem',
                    },
                }}
            >
                <Box
                    className="col fg-1"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Box
                        className="row"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Box
                            className="advisor-picture"
                            sx={{
                                flexGrow: 0,
                                '& img': {
                                    borderRadius: '50%',

                                    width: {
                                        xs: '60px',
                                        md: '68px',
                                    },

                                    height: {
                                        xs: '60px',
                                        md: '68px',
                                    },
                                },
                            }}
                        >
                            {skeleton ? (
                                <Skeleton variant="circular" width={68} height={68} />
                            ) : (
                                <img
                                    alt="Walter London City"
                                    src="https://secure.gravatar.com/avatar/ad6464c0b0336b626439748ce56f0f3d?s=109&amp;d=mm&amp;r=g"
                                    loading="lazy"
                                />
                            )}
                        </Box>
                        <Box
                            className="advisor-introduction"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                flexGrow: 1,

                                paddingLeft: {
                                    xs: '10px',
                                    md: '15px',
                                },
                            }}
                        >
                            <Box
                                className="personal-information"
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                <Box
                                    className="advisor-name"
                                    sx={{
                                        fontSize: '1.3em',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {skeleton ? (
                                        <Skeleton height={30} width="20%" />
                                    ) : (
                                        `${advisor.user.lastname} ${advisor.user.firstname}`
                                    )}
                                </Box>
                                <Box
                                    className="advisor-job"
                                    sx={{
                                        fontSize: '0.8em',
                                        color: '#888888',

                                        paddingBottom: {
                                            xs: '3px',
                                            md: '5px',
                                        },
                                    }}
                                >
                                    {skeleton ? (
                                        <Skeleton height={20} width="50%" />
                                    ) : (
                                        '경제적자유를 꿈꾸는 개미투자자'
                                    )}
                                </Box>
                                <Box
                                    className="advisor-theme"
                                    sx={{
                                        fontSize: '0.75em',
                                    }}
                                >
                                    {skeleton ? (
                                        <Skeleton height={15} width="50%" />
                                    ) : (
                                        <React.Fragment>
                                            <b>투자성향:</b> {advisor.theme.name}
                                        </React.Fragment>
                                    )}
                                </Box>
                            </Box>
                            <Box
                                className="rating-information"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 0,
                                }}
                            >
                                <Box
                                    className="advisor-rating"
                                    sx={{
                                        '& > span': {
                                            fontSize: {
                                                xs: '1.1em',
                                                md: '1.3em',
                                            },
                                        },
                                    }}
                                >
                                    {skeleton ? (
                                        <Skeleton height={20} width={94} />
                                    ) : (
                                        <Rating value={5.0} readOnly />
                                    )}
                                </Box>
                                <Box
                                    className="article-count"
                                    sx={{
                                        textAlign: 'right',
                                        color: '#aaaaaa',
                                        fontSize: {
                                            xs: '0.8em',
                                            md: '0.9em',
                                        },
                                    }}
                                >
                                    {skeleton ? (
                                        <Skeleton height={20} width={94} />
                                    ) : (
                                        <React.Fragment>
                                            {advisor.articles} Article(s)
                                        </React.Fragment>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="row">
                        <Box
                            className="advisor-description"
                            sx={{
                                width: '100%',
                                marginTop: '10px',
                                fontSize: '0.9em',
                            }}
                        >
                            {skeleton ? (
                                <Skeleton height={20} width="100%" />
                            ) : (
                                '투자어드바이저 설명글'
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box
                    className="col fg-0"
                    sx={{
                        flexGrow: 0,
                    }}
                >
                    <Box
                        className="advisor-subscription"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            boxSizing: 'border-box',
                            borderStyle: 'solid',
                            borderColor: '#eeeeee',
                            textAlign: 'center',

                            width: {
                                xs: '100%',
                                md: '170px',
                            },

                            height: {
                                md: '100%',
                            },

                            margin: {
                                xs: '20px 0px 0px 0px',
                                md: '0px 0px 0px 20px',
                            },

                            padding: {
                                xs: '20px 0px 0px 0px',
                                md: '0px 0px 0px 20px',
                            },

                            borderWidth: {
                                xs: '1px 0px 0px 0px',
                                md: '0px 0px 0px 1px',
                            },
                        }}
                    >
                        {skeleton ? (
                            <Skeleton height={100} width={150} />
                        ) : (
                            <React.Fragment>
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
                                <Box
                                    className="price"
                                    sx={{
                                        fontFamily: config('templete.fontFamily.1'),
                                        color: config('templete.palette.primary.main'),
                                        fontWeight: 'bold',

                                        fontSize: {
                                            xs: '1.2em',
                                        },

                                        marginBottom: {
                                            xs: '15px',
                                            md: '0px',
                                        },
                                    }}
                                >
                                    무료
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
            </Box>
        );
    };

    const fetchAdvisorList = () => {
        return advisors.data.map((advisor, index) => {
            return <Item advisor={advisor} key={`advisor-${advisor.user.firstname}-${index}`} />;
        });
    };

    const fetchSkeletonBox = () => {
        return [1, 2, 3, 4, 5].map((skeleton, index) => {
            return <Item skeleton={true} key={`advisor-item-skeleton-${index}`} />;
        });
    };

    React.useEffect(() => {
        getAdvisors(true);
    }, [currentFilters]);

    React.useEffect(() => {
        getThemes();
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
            <Box className="advisor-list">
                {!complete ? fetchSkeletonBox() : advisors && fetchAdvisorList()}
            </Box>
        </Paper>
    );
}
