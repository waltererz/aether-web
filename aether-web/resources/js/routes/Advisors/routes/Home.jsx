import React from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';

import constants from '../../../constants';

const styles = {};

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`투자어드바이저 ${constants.title.base}`}</title>
                </Helmet>
                <div>자신의 투자성향과 비슷한 전문가와 함께 투자하기</div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
