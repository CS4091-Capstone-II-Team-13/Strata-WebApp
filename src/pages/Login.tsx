import strataLogo from "../assets/STRATA_Logo.png";
import "./Login.css";
function Login() {
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
                            <input type="text" />
                        </div>
                        <div className="login-password-container">
                            <div>Password</div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="login-button">
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
