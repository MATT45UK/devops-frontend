import auth from './contollers/auth.controller'
import Cookie from 'js-cookie'
import React from "react";
import {
    Route,
    withRouter,
    Redirect,
    useLocation
} from "react-router-dom";


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = (props) => {
    const { children, history, ...rest } = props;
    const [render, setRender] = React.useState([])
    const [user, setUser] = React.useState({})
    const location = useLocation();

    React.useEffect(() => {
        let token = Cookie.get("id_token")
        auth.validate(token, (err, data) => {
            console.log(err, data)
            if (!err && Object.entries(user).length === 0) {
                setRender(Array.isArray(children) ? children : [children])
                setUser(data)
            } else if (render.length === 0) {
                setRender([<Redirect to={{ pathname: `/login`, state: { from: location } }} />])
            }
        });
    }, [render])

    if (Object.entries(user).length !== 0) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    render.map(child => {
                        let newChild = { ...child };
                        newChild.props = { user, ...child.props }
                        return newChild
                    })
                }
            />
        );
    } else if (render.length === 0) {
        return 'Loading...'
    }
    else {
        return render
    }

}

export default withRouter(PrivateRoute)