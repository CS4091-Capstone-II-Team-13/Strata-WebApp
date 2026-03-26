import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Auth from "../services/Auth";
import strataLogo from "../assets/STRATA_Logo.png";
import "./Login.css";
function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errorDisplay, setErrorDisplay] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      const data = await Auth.login(loginData.username, loginData.password);
      console.log(data);
      setErrorDisplay("");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setErrorDisplay(error.message);
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login">
          <div className="login-header">
            <img src={strataLogo} className="login-logo" alt="React logo" />
            <div>Sign in to STRATA</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-entries">
              <div className="login-email-container">
                <div>Username</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                />
              </div>
              <div className="login-password-container">
                <div>Password</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              <div className="error-display">{errorDisplay}</div>
            </div>
            <div className="login-button">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <div>
              New to STRATA?
              <Link to="/signup" className="create-account">
                {" "}
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
