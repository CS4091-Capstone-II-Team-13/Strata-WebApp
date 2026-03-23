import { useState } from "react"
import { Link } from 'react-router';

import strataLogo from "../assets/STRATA_Logo.png";
import "./Login.css";
function Login() {
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""
    })
    return (
        <>
            <div className="login-container">
                <div className="login">
                    <div className="login-header">
                        <img
                            src={strataLogo}
                            className="login-logo"
                            alt="React logo"
                        />
                        <div>Sign in to STRATA</div>
                    </div>
                    <div className="login-entries">
                        <div className="login-email-container">
                            <div>Email</div>
                            <input type="text" onChange={(e) => setLoginData({...loginData, "email": e.target.value})}/>
                        </div>
                        <div className="login-password-container">
                            <div>Password</div>
                            <input type="text" onChange={(e) => setLoginData({...loginData, "password": e.target.value})}/>
                        </div>
                    </div>
                    <div className="login-button">
                        <button onClick={() => alert("Email: " +  loginData["email"] + " Password: " + loginData["password"])}>Sign in</button>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", paddingTop: "1rem"}}>
                        <div>
                        New to strata?
                        <Link to="/signup" className="create-account"> Create an account</Link>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Login;
