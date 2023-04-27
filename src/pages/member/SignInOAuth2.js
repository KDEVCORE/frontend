import React from "react";
import { Navigate } from "react-router-dom";

const SignInOAuth2 = (props) => {
    const token = new URLSearchParams(window.location.search).get("token");

    if(token) localStorage.setItem("ACCESS_TOKEN", token);
    return (
        <Navigate to={{ pathname: (token ? "/todo" : "/signin"), state: { from: props.location }, }} />
    );
};

export default SignInOAuth2