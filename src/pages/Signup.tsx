import { useState } from "react";
import { Link } from "react-router";

import strataLogo from "../assets/STRATA_Logo.png";
import "./Signup.css";

function Signup() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="signup-container">
        <div className="signup">
          <div className="signup-header">
            <img src={strataLogo} className="signup-logo" alt="Strata logo" />
            <div>Sign up for STRATA</div>
          </div>

          <div className="signup-entries">
            <div className="signup-email-container">
              <div>Email</div>
              <input
                type="text"
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="signup-password-container">
              <div>Password</div>
              <input
                type="password"
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="signup-password-container">
              <div>Confirm Password</div>
              <input
                type="password"
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="signup-button">
            <button
              onClick={() =>
                alert(
                  "Email: " +
                    signupData.email +
                    " Password: " +
                    signupData.password,
                )
              }
            >
              Sign up
            </button>
          </div>

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
