import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../App';
import MainPg from "../MainPg";
import LandingPg from "./LandingPg";
import * as serviceWorker from '../serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


ReactDOM.render(
     <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
        <Switch>
          <Route path="/" exact component={LandingPg} />
          <Route path="/main" component={MainPg} />
        </Switch>
      </Router>
     </React.StrictMode>,
     document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
