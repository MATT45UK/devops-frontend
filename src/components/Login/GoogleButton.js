import { GoogleLogin } from 'react-google-login';
import {
    useLocation
} from "react-router-dom";
import auth from '../../contollers/auth.controller'
import Cookie from "js-cookie"
import { Redirect } from 'react-router-dom'
import React from 'react'

function GoogleButton(props) {
    const [authorized, setAuth] = React.useState(false);
    const location = useLocation();
    const from = location.state ? location.state.from.pathname : "/"

    const successGoogle = (response) => {
        auth.validate(response.tokenId, (err, res) => {
            if (res) {
                Cookie.set("id_token", response.tokenId);
                setAuth(true);
            }
        })
    }

    React.useEffect(() => {

    }, [authorized])

    const failGoogle = (response) => {
        Cookie.remove("id_token");
    }

    return (
        authorized ? <Redirect to={{ pathname: from, state: { from: location } }} /> : (<GoogleLogin
            clientId="497884849635-m0fc4bi0av5osun9h0d6154qofmr6d22.apps.googleusercontent.com"
            buttonText="Login Using Your Google Account"
            onSuccess={successGoogle}
            onFailure={failGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />)
    );
}


export default GoogleButton