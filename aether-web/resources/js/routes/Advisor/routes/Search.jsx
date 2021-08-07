import React from 'react';
import { withStyles } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/core/Rating';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as API from '../../../services/API';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complate: false,
            filters: {},
            filtering: {},
            themes: null,
            advisors: null,
            page: 1,
        };
    }

    componentDidUpdate() {
        this._getAdvisors(true);
    }

    componentDidMount() {
        this._getThemes();
        this._getAdvisors();
    }

    async _getAdvisors(updated = false) {
        if (
            (updated && !this.state.complete) ||
            (!updated &&
                this.state.advisors &&
                this.state.advisors.current_page != this.state.page) ||
            !this.state.advisors
        ) {
            await API.post('advisors/index', {
                page: this.state.page,
                pagination: true,
                filtering: this.state.filtering,
                filters: this.state.filters,
            }).then((response) => {
                if (response.data) {
                    this.setState((state) => {
                        return {
                            ...state,
                            complete: true,
                            advisors: response.data,
                        };
                    });
                } else {
                    alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                }
            });
        }
    }

    async _getThemes() {
        await API.post('investment/themes/index').then((response) => {
            if (response.data) {
                this.setState((state) => {
                    const theme_filters = {};
                    response.data.map((theme) => {
                        theme_filters[theme.slug] = false;
                    });
                    return {
                        ...state,
                        themes: response.data,
                        filters: {
                            ...state.filters,
                            theme: theme_filters,
                        },
                    };
                });
            } else {
                alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            }
        });
    }

    render() {
        const { classes } = this.props;

        const Checkbox = withStyles({
            root: {
                color: '#3f51b5',
                '&$checked': {
                    color: '#212f80',
                },
            },
            checked: {},
        })((props) => <MuiCheckbox color="default" {...props} />);

        const changeTheme = (event) => {
            let filtering = false;
            if (this.state.filters.theme) {
                for (const [key, value] of Object.entries(this.state.filters.theme)) {
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
            this.setState((state) => {
                return {
                    ...state,
                    complete: false,
                    filtering: {
                        ...state.filtering,
                        theme: filtering,
                    },
                    filters: {
                        ...state.filters,
                        theme: {
                            ...state.filters.theme,
                            [event.target.name]: event.target.checked,
                        },
                    },
                };
            });
        };

        const fetchThemeFilters = () => {
            if (this.state.themes) {
                return this.state.themes.map((theme, index) => {
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.filters.theme[theme.slug]}
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
        };

        const fetchAdvisorList = () => {
            return this.state.advisors.data.map((advisor, index) => {
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
                <div className="advisor-list">{this.state.advisors ? fetchAdvisorList() : ''}</div>
            </React.Fragment>
        );
    }
}
