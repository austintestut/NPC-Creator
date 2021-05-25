import React from "react";
import Footer from "./Footer.jsx";
import Title from "../../public/images/npcc.png";

const LandingPage = ({ authenticateUser }) => (
  <div id="landing">
    <img id="landing-title-pic" src={Title} />
    <span id="landing-description">Create and save new Non-Player Characters on the fly!</span>
    <a href="/google">
      <button type="button" id="login-button">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <span className="login-text">Log in with Google</span>
      </button>
    </a>
    <Footer />
  </div>
);

export default LandingPage;
