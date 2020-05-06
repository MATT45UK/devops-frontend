import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from './components/LoginPage'
import PrivateRoute from './PrivateRoute'

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
            </Switch>
        </Router>
    );
}

export default App




