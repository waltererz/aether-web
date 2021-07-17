import React from 'react';
import Helmet from 'react-helmet';
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
        };
    }

    render() {
        const Aether = this.Aether;
        const { classes } = this.props;

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

        const Checkbox = withStyles({
            root: {
                color: '#3f51b5',
                '&$checked': {
                    color: '#212f80',
                },
            },
            checked: {},
        })((props) => <MuiCheckbox color="default" {...props} />);

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
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
