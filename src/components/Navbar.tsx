import { useNavigate } from "react-router";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import strataLogo from "../assets/STRATA_Logo.png";
import "./Navbar.css";

function Navbar() {
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-container">
          <img src={strataLogo} className="logo" alt="React logo" />
        </div>
        <div className="navbar-login-container">
          {!isLoggedIn && (
            <div
              className="navbar-login-button"
              onClick={() => navigate("/login")}
            >
              Login
            </div>
          )}

          {isLoggedIn && (
            <div
              className="navbar-login-button"
              onClick={() => navigate("/profile")}
            >
              Profile
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
