import { Switch, Route } from 'react-router-dom';
import Component from '../../component';

class App extends Component {
    render() {
        const Aether = this.Aether;
        return (
            <Aether.Layout instance={Aether}>
                <Switch>
                    <Route exact path="/" render={() => <Aether.Route.Home instance={Aether} />} />
                    <Route
                        path="/advisors"
                        render={() => <Aether.Route.Advisors instance={Aether} />}
                    />
                </Switch>
            </Aether.Layout>
        );
    }
}

export default App;
