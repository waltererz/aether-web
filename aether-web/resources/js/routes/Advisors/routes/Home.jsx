import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { setHeader } from '../../../redux/Actions/App';
import DocumentTitle from '../../../components/DocumentTitle';

const styles = {};

class Home extends React.Component {
    componentDidMount() {
        const { redux } = this.props;
        redux.setHeader('투자어드바이저');
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <DocumentTitle>투자어드바이저</DocumentTitle>
                <div>자신의 투자성향과 비슷한 전문가와 함께 투자하기</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    redux: {
        setHeader: (header) => dispatch(setHeader(header)),
    },
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Home));
