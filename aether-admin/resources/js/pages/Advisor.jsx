import { Switch, Route } from 'react-router-dom';
import * as Page from './advisor';

const Home = () => {
    return <>투자 어드바이저 관리 페이지</>;
};

export default function Advisor() {
    return (
        <Switch>
            <Route exact path="/advisor" component={Home} />
            <Route path="/advisor/list" component={Page.List} />
            <Route path="/advisor/manage" component={Page.Manage} />
        </Switch>
    );
}
