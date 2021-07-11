import React from 'react';
import Container from '../../Layout/ContainerStyles/ContainerOnlyRight';

class Content extends React.Component {
    render() {
        return (
            <div>
                이곳은 관리자를 위한 사이트입니다. 서비스 개발에 필요한 몇 가지 기능을 제공합니다.
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container content={<Content />} />
            </React.Fragment>
        );
    }
}

export default Home;
