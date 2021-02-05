import React from "react";
import { CardTitle } from "react-mdl";
import "./index.css";

function LoginHeader() {
    return (
        <div className="login-header" >
            <CardTitle className="header-title" expand style={{ color: '#fff', background: 'transparent', textAlign: "center" }}>
                <div className="h2"><h2 className='logingit'>.GIT </h2>
                <h2 className='loginmatched'>MATCHED</h2></div>
            </CardTitle>
            
        </div>
    );
}

export default LoginHeader;