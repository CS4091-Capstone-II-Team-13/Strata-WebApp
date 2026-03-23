import { useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthService from "../services/AuthService";
import strataLogo from "../assets/STRATA_Logo.png";
import "./Signup.css";

function Signup() {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [errorDisplay, setErrorDisplay] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (signupData.password != signupData.confirmPassword) {
      setErrorDisplay("Password must match confirm password");
      return;
    }

    try {
      const data = await AuthService.signup(
        signupData.username,
        signupData.email,
        signupData.password,
      );

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
      <div className="signup-container">
        <div className="signup">
          <div className="signup-header">
            <img src={strataLogo} className="signup-logo" alt="Strata logo" />
            <div>Sign up for STRATA</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="signup-entries">
              <div className="signup-field-container">
                <div>Username</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      username: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="signup-field-container">
                <div>Email</div>
                <input
                  type="email"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="signup-field-container">
                <div>Password</div>
                <input
                  type="password"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="signup-field-container">
                <div>Confirm Password</div>
                <input
                  type="password"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="error-display">{errorDisplay}</div>
            </div>

            <div className="signup-button">
              <button type="submit">Sign up</button>
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
              Already have an account?
              <Link to="/login" className="create-account">
                {" "}
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
