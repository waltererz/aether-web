import { Switch, Route } from 'react-router-dom';
import Component from './Component';

class App extends Component {
    render() {
        return (
            <this.Aether.Layout instance={this.Aether}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <this.Aether.Page.Home instance={this.Aether} />}
                    />
                    <Route
                        path="/advisors"
                        render={() => <this.Aether.Page.Advisors instance={this.Aether} />}
                    />
                </Switch>
            </this.Aether.Layout>
        );
    }
}

export default App;
