import React from 'react';
import Helmet from 'react-helmet';
import Component from '../../../component';

class Home extends Component {
    render() {
        const Aether = this.Aether;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{`첫 페이지 ${Aether.constants.title.base}`}</title>
                </Helmet>
                투자정보를 얻는 가장 좋은 방법
            </React.Fragment>
        );
    }
}

export default Home;
