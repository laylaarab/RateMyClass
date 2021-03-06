import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Aesthetic/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/AccountPage/LoginPage.js";
import CompanyPage from "views/CompanyPage/CompanyPage.js";
import SettingsPage from "views/SettingsPage/SettingsPage.js";
import ScrollToTop from "./views/Aesthetic/ScrollToTop";
import SignUpPage from "./views/AccountPage/SignUpPage";
import ClassPage from "./views/CoursePage/ClassPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <ScrollToTop />
        <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/class-page/:course_id" component={ClassPage} />
            <Route path="/sign-up-page" component={SignUpPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/company-page" component={CompanyPage} />
            <Route path="/settings-page" component={SettingsPage} />
            <Route path="/component" component={Components} />
            <Route path="/" component={LoginPage} />
        </Switch>
  </Router>,
  document.getElementById("root")
);
