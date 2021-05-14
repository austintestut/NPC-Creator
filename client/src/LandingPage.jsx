import React from "react";

const LandingPage = ({ authenticateUser }) => (
  <div id="landing">
    <span id="landing-title">NPC Creator</span>
    <a href="/google">
      <button type="button" id="login-button">
        Log in with Google
      </button>
    </a>
  </div>
);

export default LandingPage;
