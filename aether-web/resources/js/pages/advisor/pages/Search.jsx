import React from 'react';
import { withStyles } from '@material-ui/styles';
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
import * as api from '../../../services/api';

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
                    color: '#46437a',
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
                        />
                    );
                });
            }
        }
    };

    const fetchAdvisorList = () => {
        return advisors.data.map((advisor, index) => {
            return (
                <div className="advisor-item" key={`advisor_${index}`}>
                    <div className="col fg-1">
                        <div className="row">
                            <div className="advisor-picture">
                                <img
                                    alt="Walter London City"
                                    src="https://secure.gravatar.com/avatar/ad6464c0b0336b626439748ce56f0f3d?s=109&amp;d=mm&amp;r=g"
                                    loading="lazy"
                                />
                            </div>
                            <div className="advisor-introduction">
                                <div className="personal-information">
                                    <div className="advisor-name">{`${advisor.user.lastname} ${advisor.user.firstname}`}</div>
                                    <div className="advisor-job">
                                        경제적 자유를 꿈꾸는 개미투자자
                                    </div>
                                    <div className="advisor-theme">
                                        <b>투자성향:</b> {advisor.theme.name}
                                    </div>
                                </div>
                                <div className="rating-information">
                                    <div className="advisor-rating">
                                        <Rating value={5.0} readOnly />
                                    </div>
                                    <div className="article-count">
                                        {advisor.articles} Article(s)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="advisor-description">투자어드바이저 설명글</div>
                        </div>
                    </div>
                    <div className="col fg-0">
                        <div className="advisor-subscription">
                            <Button variant="outlined" color="primary">
                                구독하기
                            </Button>
                            <div className="price">무료</div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const fetchSkeletonBox = () => {
        return [1, 2, 3, 4, 5].map((skeleton, index) => {
            return (
                <div className="advisor-item" key={`advisor-list-skeleton-${index}`}>
                    <div className="col fg-1">
                        <div className="row">
                            <div className="advisor-picture">
                                <Skeleton variant="circular" width={68} height={68} />
                            </div>
                            <div className="advisor-introduction">
                                <div className="personal-information">
                                    <div className="advisor-name">
                                        <Skeleton height={30} width="20%" />
                                    </div>
                                    <div className="advisor-job">
                                        <Skeleton height={20} width="50%" />
                                    </div>
                                    <div className="advisor-theme">
                                        <Skeleton height={15} width="50%" />
                                    </div>
                                </div>
                                <div className="rating-information">
                                    <div className="advisor-rating">
                                        <Skeleton height={20} width={94} />
                                    </div>
                                    <div className="article-count">
                                        <Skeleton height={20} width={94} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="advisor-description">
                                <Skeleton height={20} width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col fg-0">
                        <div className="advisor-subscription">
                            <Skeleton height={100} width={150} />
                        </div>
                    </div>
                </div>
            );
        });
    };

    React.useEffect(() => {
        getAdvisors(true);
    }, [currentFilters]);

    React.useEffect(() => {
        getThemes();
    }, []);

    return (
        <React.Fragment>
            <Accordion className="filter-box" id="search-filters">
                <AccordionSummary className="title" expandIcon={<ExpandMoreIcon />}>
                    검색필터
                </AccordionSummary>
                <AccordionDetails className="filters">
                    <div className="subject">투자성향</div>
                    <FormGroup row className="filter">
                        {fetchThemeFilters()}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <div className="advisor-list">
                {!complete ? fetchSkeletonBox() : advisors && fetchAdvisorList()}
            </div>
        </React.Fragment>
    );
}
