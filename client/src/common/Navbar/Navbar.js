import React from "react";
import "./style.css";
import { useAuth0 } from "../../utils/auth0Provider";

// import PopButt from "./popup"
// import PopButt2 from "./popup2";

// import Profile from "../src/views/Profile/Profile";

function Navbar() {
  const { isAuthenticated, loading, loginWithPopup, logout } = useAuth0();
  // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div id="navDisplay">
        <ul className="navbar-nav">
          <div>

          <h1>Strategy Scope</h1>
          </div>
          <li id="signInOut" className="nav-item" >
            {!isAuthenticated && !loading ? (
              <button onClick={() => loginWithPopup()} class="btn-liquid">
                <span class="inner">Liquid button ?</span>>Sign In
              </button>
            ) : (
              
              <button id="signOut" style={{position:"absolute", right: "1%", marginTop: ".5%"}} onClick={() => logout()}>
                Sign Out
              </button>
            )}{" "}
          </li>

          {/* <li id="popButt">
            <PopButt />
          </li> */}

            
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
