import React from "react";
import Login from "../login/Login";

function WithLoading(Login) {
    return function WithLoadingLogin({ isLoading, ...props }) {
        if (!isLoading) return (<Login {...props} />);
        return (<p>Be Hold, fetching books takes some time :)</p>);
    }
}

export default WithLoading;