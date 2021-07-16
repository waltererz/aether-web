import React from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Component from '../../../component';

const styles = {};

class Home extends Component {
    render() {
        const Aether = this.Aether;
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`투자어드바이저 ${Aether.constants.title.base}`}</title>
                </Helmet>
                <Aether.Components.Paper>
                    <div>자신의 투자성향과 비슷한 전문가와 함께 투자하기</div>
                </Aether.Components.Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
