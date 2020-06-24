import React from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";
import logo from "../../components/images/logo6.png";

const Splash = () => {
  const { isAuthenticated, loading, loginWithRedirect,  user } = useAuth0();
  if (loading || !user) {
    return (
      <div id="main">
        {/* <Link onClick={() => loginWithPopup()} to={"/login"}> */}
        <button
          onClick={() => loginWithRedirect()}
          className="glow-on-hover"
          type="button"
        >
          <img id="logo" src={logo} alt="logo" />
        </button>
        {/* </Link> */}
      </div>
    );
  }

  if (isAuthenticated === true) {
    alert("nice");
  }

  return <div id="nothing"></div>;
};

export default Splash;
