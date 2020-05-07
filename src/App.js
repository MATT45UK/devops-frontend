import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from './components/Login/LoginPage'
import PrivateRoute from './PrivateRoute'
import HomePage from "./components/Home/HomePage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>PUBLIC</div>
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/protected">
                    <div>SAFE</div>
                </PrivateRoute>
                <PrivateRoute path="/home">
                    <HomePage />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App




