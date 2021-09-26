import { Switch, Route } from 'react-router-dom';
import * as Page from './user';

const Home = () => {
    return <>사용자 관리 페이지</>;
};

export default function User() {
    return (
        <Switch>
            <Route exact path="/user" component={Home} />
            <Route path="/user/add" component={Page.Add} />
            <Route path="/user/list" component={Page.List} />
        </Switch>
    );
}
