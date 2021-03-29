import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import routes from "@config/router";
function App(props) {
    return (
        <Router>
            <Switch>
                {routes.map((item, index) => 
                    <Route key={ index } exact={ true } path={ item.path } component={ item.component }/>
                )}
            </Switch>
        </Router>
    );
}
export default App;