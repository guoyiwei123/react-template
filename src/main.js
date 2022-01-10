import React from "react";
import { render } from "react-dom";
import "@assets/styles/index.scss";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import routes from "@config/router";
import ErrorCatch  from "./components/hoc/ErrorCatch";
window.React = React;
const App = ErrorCatch(() => 
    <Router>
        <Switch>
            {routes.map((item, index) => 
                <Route key={ index } exact={ true } path={ item.path } component={ item.component }/>
            )}
        </Switch>
    </Router>
);
render(<App />, document.getElementById("app"));