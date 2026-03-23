import strataLogo from "../assets/STRATA_Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-container">
          <img src={strataLogo} className="logo" alt="React logo" />
        </div>
        <div className="navbar-login-container">
          <div>Login</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
