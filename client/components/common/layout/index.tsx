import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "../../../routes";
import Header from "../header";
import Footer from "../footer";
import "./index.scss";

export default function() {
    return (
        <Router>
            <Header />
            <div className="m-main">
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}
