import auth from './contollers/auth.controller'
import Cookie from 'js-cookie'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Redirect
} from "react-router-dom";
import LoginPage from './components/LoginPage';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = (props) => {
    const { children, history, ...rest } = props;
    const [authorized, setAuth] = React.useState(false)

    React.useEffect(() => {

    }, [authorized])

    let token = Cookie.get("id_token")
    auth.validate(token, (err, res) => {
        if (res) {
            setAuth(true)
        }
    });

    return (
        <Route
            {...rest}
            render={({ location }) =>
                authorized ? (
                    children
                ) : (
                        <LoginPage />
                    )
            }
        />
    );
}

export default withRouter(PrivateRoute)