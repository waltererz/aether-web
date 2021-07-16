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
                    <title>{`투자어드바이저 검색 ${Aether.constants.title.base}`}</title>
                </Helmet>
                <Aether.Components.Paper>
                    <h3 className="mt-0">투자전문가 찾기</h3>
                    <div className="message">
                        자신의 투자성향과 가장 유사한 투자전문가를 빠르게 찾아보세요.
                    </div>
                </Aether.Components.Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
