import auth from './contollers/auth.controller'
import Cookie from 'js-cookie'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Redirect,
    useLocation
} from "react-router-dom";
import LoginPage from './components/LoginPage';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = (props) => {
    const { children, history, ...rest } = props;
    const [render, setRender] = React.useState([])
    const [authed, setAuth] = React.useState(false)

    const location = useLocation();

    React.useEffect(() => {
        let token = Cookie.get("id_token")
        auth.validate(token, (err, res) => {
            if (res) {
                setRender(children)
                setAuth(true)
            } else {
                setRender([<Redirect to={{ pathname: `/login`, state: { from: location } }} />])
            }
        });
    }, [authed])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                render
            }
        />
    );
}

export default withRouter(PrivateRoute)