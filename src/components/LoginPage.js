import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {
    useLocation
} from "react-router-dom";
import auth from '../contollers/auth.controller'
import Cookie from "js-cookie"


function LoginPage(props) {
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const successGoogle = (response) => {
        auth.validate(response.tokenId, (err, res) => {
            if (res) {
                Cookie.set("id_token", response.tokenId);
            }
        })
    }

    const failGoogle = (response) => {
        props.setAuth(false)
        console.log(response)
    }

    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight }}>
            <GoogleLogin
                clientId="497884849635-m0fc4bi0av5osun9h0d6154qofmr6d22.apps.googleusercontent.com"
                buttonText="Login Using Your Google Account"
                onSuccess={successGoogle}
                onFailure={failGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default LoginPage;
