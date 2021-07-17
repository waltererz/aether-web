import React from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Component from '../../../component';

const styles = {};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                growth: true,
                dividend: true,
                value: true,
                technology: true,
            },
            advisors: null,
            page: 1,
        };
    }

    componentDidUpdate() {
        //
    }

    componentDidMount() {
        this._get();
    }

    async _get(updated = false) {
        if (
            updated ||
            (!updated &&
                this.state.advisors &&
                this.state.advisors.current_page != this.state.page) ||
            !this.state.advisors
        ) {
            const constants = this.Aether.constants;
            await axios.get(constants.url.backend + '/sanctum/csrf-cookie').then(async () => {
                await axios
                    .post(
                        constants.url.api + '/advisors/index',
                        {
                            page: this.state.page,
                            pagination: true,
                        },
                        {
                            headers: {
                                'Content-type': 'application/json',
                            },
                        },
                    )
                    .then((response) => {
                        if (response.data) {
                            this.setState((state) => {
                                return {
                                    ...state,
                                    advisors: response.data,
                                };
                            });
                        } else {
                            alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                        }
                    });
            });
        }
    }

    render() {
        const Aether = this.Aether;
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
            this.setState((state) => {
                return {
                    ...state,
                    theme: {
                        ...state.theme,
                        [event.target.name]: event.target.checked,
                    },
                };
            });
        };

        const fetchAdvisorList = () => {
            return this.state.advisors.data.map((advisor, index) => {
                return (
                    <div className="advisor-item" key={`advisor_${index}`}>
                        <div className="advisor-name">{`${advisor.user.lastname}${advisor.user.firstname}`}</div>
                        <div className="advisor-theme">{advisor.theme.name}</div>
                        <div className="advisor-introduction">
                            이곳에 투자어드바이저 설명이 위치함
                        </div>
                    </div>
                );
            });
        };

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`투자어드바이저 검색 ${Aether.constants.title.base}`}</title>
                </Helmet>
                <Accordion className="accordion-container" id="search-filters">
                    <AccordionSummary className="accordion-title" expandIcon={<ExpandMoreIcon />}>
                        검색필터
                    </AccordionSummary>
                    <AccordionDetails className="accordion-contents">
                        <div className="subject">투자성향</div>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.theme.growth}
                                        onChange={changeTheme}
                                        data-item="theme"
                                        name="growth"
                                        id="checkbox_growth"
                                    />
                                }
                                label="성장주"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.theme.dividend}
                                        onChange={changeTheme}
                                        data-item="theme"
                                        name="dividend"
                                        id="checkbox_dividend"
                                    />
                                }
                                label="배당주"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.theme.value}
                                        onChange={changeTheme}
                                        data-item="theme"
                                        name="value"
                                        id="checkbox_value"
                                    />
                                }
                                label="가치주"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.theme.technology}
                                        onChange={changeTheme}
                                        data-item="theme"
                                        name="technology"
                                        id="checkbox_technology"
                                    />
                                }
                                label="기술주"
                            />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <div className="advisor-list">{this.state.advisors ? fetchAdvisorList() : ''}</div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
