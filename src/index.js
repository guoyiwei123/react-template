import React from "react";
import { render } from "react-dom";
import "@styles/index.scss";
import App from "./App";
window.React = React;
function Root(){
    return (
        <App />
    );
}
render(<Root />, document.getElementById("app"));