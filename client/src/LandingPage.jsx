import React from "react";
import Footer from "./Footer.jsx";
import Title from "../../public/images/npcc.png";

const LandingPage = ({ authenticateUser, makeSessionless }) => (
  <div data-testid="landing-page" id="landing">
    <img id="landing-title-pic" src={Title} />
    <span id="landing-description">
      Create and save new Non-Player Characters on the fly!
    </span>
    <div className="login-button-container">
        <a href="/google" className="login-anchor">
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
      <span id="login-separator">- or -</span>
      <button id="sessionless-login" onClick={makeSessionless}>
        Continue without an account
      </button>
    </div>
    <Footer />
  </div>
);

export default LandingPage;
